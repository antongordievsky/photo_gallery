<script>
    import Vue from "vue";
    import {IMAGES_ROUTE} from '@/router/route_names';

    export default Vue.extend({
        name: 'Navbar',
        data() {
            return {
                IMAGES_ROUTE,
            }
        },
    });
</script>

<template>
  <nav class="navbar nav is-fixed-top is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
              data-target="navbarBasicExample"
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{name: IMAGES_ROUTE}" active-class="is-active" class="navbar-item">
          {{ $t('navbar.images') }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style>
  .navbar {
    box-shadow: 0 2px 0 0 #e8e8e8;
  }
</style>
