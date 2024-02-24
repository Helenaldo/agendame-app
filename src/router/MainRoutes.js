import { auth } from '@/router/guard';

export default {
    path: '/',

    component: () => import('@/layouts/full/FullLayout.vue'),

    beforeEnter: auth,

    children: [
        {
            name: 'dashboard',
            path: '/',
            component: () => import('@/views/dashboard/index.vue')
        },
    ]
};

