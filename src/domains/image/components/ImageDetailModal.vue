<script lang="ts">
    import {ImageDetail} from '@/domains/image/types';
    import ImageService from "@/domains/image/services/ImageService";
    import Vue from "vue";
    import BaseModal from "@/assets/components/BaseModal.vue";
    import EventBus from "@/assets/support/EventBus";

    export default Vue.extend({
        name: 'ImageDetailModal',
        components: {
            BaseModal,
        },
        data() {
            return {
                image: {} as ImageDetail,
                loading: false as boolean,
            };
        },
        created(): void {
            EventBus.$on('open-details-modal', (imageId: string) => {
                this.open(imageId);
            });
        },
        methods: {
            open(imageId: string): void {
                EventBus.$emit('open-base-modal');
                this.loadImageDetail(imageId);
            },
            hide() {
                EventBus.$emit('hide-base-modal');
            },
            loadImageDetail(imageId: string) {
                this.loading = true;

                ImageService
                    .getImage(this.$store.state.user.token, imageId)
                    .then(image => {
                        this.image = image;
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            },
        },
    });
</script>

<template>
  <base-modal>
    <p class="image">
      <img :src="image.full_picture" alt="">
    </p>
    <div class="image-details">
      <table>
        <thead>
        <tr>
          <th style="width: 80px;"></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <span class="has-text-light">{{ $t('image.author') }}</span>
          </td>
          <td>
            <span class="has-text-light">{{ image.author }}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="has-text-light">{{ $t('image.camera') }}</span>
          </td>
          <td>
            <span class="has-text-light">{{ image.camera }}</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <span class="has-text-light is-size-7">{{ image.tags }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </base-modal>
</template>

<style>
  .image-details {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.5rem;
  }

  .image-details .has-text-light {
    background-color: transparent;
  }
</style>
