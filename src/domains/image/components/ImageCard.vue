<script lang="ts">
    import Vue, {PropOptions} from "vue";
    import {ImageProfile} from "@/domains/image/types";

    export default Vue.extend({
        name: 'ImageCard',
        props: {
            image: {
                type: Object,
                required: true,
            } as PropOptions<ImageProfile>,
        },
    })
</script>

<template>
  <div @click="$emit('click', $event)" class="card image-card">
    <div class="card-image">
      <img :src="image.cropped_picture" class="image-card-image" alt="image Poster">
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p>{{ image.id }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .image-card {
    max-width: 300px;
    margin: 10px;
  }

  .image-card-image {
    object-fit: contain;
    width: 300px;
    height: 300px;
    cursor: pointer;
  }
</style>
