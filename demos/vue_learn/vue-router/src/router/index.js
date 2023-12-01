import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


import dataEggs from '../data.json'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: ()=>import('../views/Home.vue'),
        }, {
            path: '/eggs/:eggType',
            name: 'eggs',
            component: () => import('../views/Eggs.vue'),
        }
    ],
    linkActiveClass: 'egg-active',
})

export default router;