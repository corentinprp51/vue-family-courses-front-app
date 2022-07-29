import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/store/user';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home-view.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/uikit',
        name: 'uikit',
        component: () => import('@/views/uikit-view.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login-view.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register-view.vue')
    },
    {
        path: '/create',
        name: 'create_list',
        component: () => import('@/views/create-list-view.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const userStore = useUserStore();
    //  Redirection si l'utilisateur est déjà connecté
    if (userStore.user && (to.name === 'login' || to.name === 'register')) {
        next('/');
    }
    if (requiresAuth && !userStore.user) {
        next({ name: 'login' });
    } else {
        next();
    }

});

export default router
