import {createRouter, createWebHistory} from "vue-router";

const routerHistory = createWebHistory();

import HomePage from './pages/home-page.vue';
import AboutPage from './pages/about-page.vue';
import notFoundPage from './pages/404-page';

const routers = createRouter({
    history: routerHistory,
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/:CatchAll(.*)',
            name: 'error',
            component: notFoundPage
        },
    ],
});
export default routers