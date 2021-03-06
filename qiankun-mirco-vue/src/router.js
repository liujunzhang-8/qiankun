import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("./views/Home.vue")
    },
    {
        path: '/about',
        name: 'About',
        component: () => import("./views/About.vue")
    },
];

const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/app-vue/" : "/",
    mode: "history",
    routes,
})

export default router;