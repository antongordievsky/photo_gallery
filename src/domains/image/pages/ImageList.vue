<script lang="ts">
    import ImageService from '@/domains/image/services/ImageService';
    import ImageCard from '@/domains/image/components/ImageCard.vue';
    import ImageDetailModal from '@/domains/image/components/ImageDetailModal.vue';
    import {ImageProfile} from '@/domains/image/types';
    import PaginationMixin from "@/assets/mixins/PaginationMixin";
    import EventBus from "@/assets/support/EventBus";

    export default PaginationMixin.extend({
        name: 'imageList',
        components: {
            ImageCard,
            ImageDetailModal,
        },
        data() {
            return {
                images: [] as ImageProfile[],
            };
        },
        mounted(): void {
            EventBus.$on('authorization-successful', () => {
                this.loadImages();
            });

            this.setOnScrollCallback(this.loadImages);
        },
        methods: {
            loadImages() {
                this.pagination.loading = true;

                ImageService
                    .getImages(this.$store.state.user.token, this.pagination.page)
                    .then(result => {
                        if (this.pagination.page === 1) {
                            this.images = result.pictures;
                        } else {
                            this.images = this.images.concat(result.pictures);
                        }

                        this.pagination.finished = !result.hasMore;
                    })
                    .finally(() => {
                        this.pagination.loading = false;
                    });
            },
            openDetailsModal(imageId: string): void {
                EventBus.$emit('open-details-modal', imageId);
            },
        },
    });
</script>

<template>
  <div>
    <image-detail-modal></image-detail-modal>
    <div v-if="!images.length && !pagination.loading && pagination.finished">
      <h2 class="h2 is-size-2" style="display: flex; justify-content: center; width: 100vw;">
      <span>
        {{ $t('common.images_not_found') }}
      </span>
      </h2>
    </div>
    <div v-else class="images-container">
      <image-card
              v-for="image in images"
              @click="openDetailsModal(image.id)"
              :image="image"
              :key="image.imdbID"
      ></image-card>
    </div>
  </div>
</template>

<style>
  .images-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
</style>
