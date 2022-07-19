import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home-view.vue')
    },
    {
        path: '/uikit',
        name: 'uikit',
        component: () => import('@/views/uikit-view.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
