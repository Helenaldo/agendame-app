import { redirectIfAuthenticated, checkIfTokenExists } from '@/router/guard';

export default [
  {
    path: '/login',

    component: () => import('@/layouts/blank/BlankLayout.vue'),

    beforeEnter: redirectIfAuthenticated,

    children: [
        {
            name: 'login',
            path: '',
            component: () => import('@/views/auth/Login.vue')
        }

    ]
  },
  {
    path: '/esqueci-senha',

    component: () => import('@/layouts/blank/BlankLayout.vue'),

    children: [
        {
            name: 'forgotPassword',
            path: '',
            component: () => import('@/views/auth/ForgotPassword.vue')
        }

    ]
  },
  {
    path: '/cadastrar',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    children: [
        {
            name: 'register',
            path: '',
            component: () => import('@/views/auth/Register.vue')
        }

    ]
  },
  {
    path: '/verificar-email',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    beforeEnter: checkIfTokenExists,
    children: [
        {
            name: 'verifyEmail',
            path: '',
            component: () => import('@/views/auth/VerifyEmail.vue')
        }

    ]
  }
];


