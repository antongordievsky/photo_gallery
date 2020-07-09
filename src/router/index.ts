import Vue from 'vue';
import VueRouter from 'vue-router';
import {IMAGES_ROUTE} from "@/router/route_names";
import Images from '@/domains/image/pages/ImageList.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/', redirect: {name: IMAGES_ROUTE},
}, {
    path: '/images',
    name: IMAGES_ROUTE,
    component: Images,
}];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
