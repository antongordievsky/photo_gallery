<script>
    import Vue from "vue";

    export default Vue.extend({
        name: 'MainContent',
    });
</script>

<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

