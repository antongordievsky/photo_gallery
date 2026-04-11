<script lang="ts">
    import Vue from "vue";
    import Navbar from "@/layouts/Navbar.vue";
    import MainContent from "@/layouts/MainContent.vue";

    export default Vue.extend({
        name: 'App',
        components: {
            Navbar,
            MainContent,
        },
    })
</script>

<template>
  <div id="app">
    <navbar></navbar>
    <div class="section main-container is-white">
      <div class="tile is-ancestor">
        <div class="tile is-12">
          <main-content></main-content>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .main-container {
    margin-top: 53px;
    height: calc(100vh - 54px);
  }
</style>
