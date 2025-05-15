import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router';
import Dashboard from '@/pages/Dashboard.vue';
import NotFound from '@/pages/NotFound.vue';

const routes: RouteRecordRaw[] = [
  {path: '/', component: Dashboard},
  {path: '/:pathMatch(.*)*', component: NotFound},
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})