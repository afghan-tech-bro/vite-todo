import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    redirect: { name: 'todo' }
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
