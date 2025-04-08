import { createMemoryHistory, createRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AdminPage from '../pages/AdminPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminPage,
    }
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })