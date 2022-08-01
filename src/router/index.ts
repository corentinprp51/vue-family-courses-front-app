import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/store/user';
import { useListStore } from '@/store/list';
import { UserFromList } from '@/types/users/UserFromList';
import { User } from '@/types/users/User';
import { fetchList } from '@/api/lists/useGetOne';

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
        component: () => import('@/views/create-list-view.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/create',
        name: 'create_list',
        component: () => import('@/views/create-list-view.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/:id/edit',
        name: 'edit_list',
        component: () => import('@/views/edit-list-view.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/:id',
        name: 'get_list',
        component: () => import('@/views/get-list-view.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/join',
        name: 'join_list',
        component: () => import('@/views/join-list-view.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/:id/add',
        name: 'add_product_to_list',
        component: () => import('@/views/add-product-view.vue'),
        meta: {
            requiresAuth: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const userIsOwner = (userId: number, users: Array<UserFromList>): boolean => {
    const user = users.find((u) => u.id === userId)
    if (user) {
        return user.role === 'owner';
    }
    return false

}

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const userStore = useUserStore()
    const listStore = useListStore()
    //  Redirection si l'utilisateur est déjà connecté
    if (userStore.user && (to.name === 'login' || to.name === 'register')) {
        next('/');
    }
    if (requiresAuth && !userStore.user) {
        next({ name: 'login' });
        return
    }
    if(to.name === 'edit_list') {
        if(listStore.list && listStore.list.id.toString() === to.params.id) {
            if(userIsOwner((userStore.user as User).id, listStore.list.users)) {
                next()
            } else {
                next(from.path || '/')
            }
        } else {
            // fetch list et faire la même chose qu'au dessus
            const data = await fetchList(to.params.id.toString())
            if (data.id && userIsOwner((userStore.user as User).id, data.users)) {
                listStore.setList(data)
                next()
            } else {
                next(from.path || '/')
            }
        }
        return
    }
    next()

});

export default router
