import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        meta: { requiresAuth: true },
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'add-note',
        name: 'AddNote',
        meta: { requiresAuth: true },
        component: () => import('pages/EditNote.vue'),
      },
      {
        path: 'edit-note/:id',
        name: 'EditNote',
        meta: { requiresAuth: true },
        component: () => import('pages/EditNote.vue'),
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: () => import('pages/SignUpPage.vue'),
      },
      {
        path: 'log-in',
        name: 'LogIn',
        component: () => import('pages/LogInPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
