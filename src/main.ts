import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/sass/main.scss';
import './assets/js/bulma.js';
import i18n from './lang';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');