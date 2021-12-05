import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/Todo.vue')
  },
  {
    path: '/done',
    name: 'done',
    component: () => import('../views/Done.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
