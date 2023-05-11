import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '@/views/HomePage.vue';
import LoyaltyPage from '@/views/LoyaltyPage.vue';
import LoginPage from '@/views/LoginPage.vue';
const routes = [
  {
    path: '',
    redirect: '/login',
  },
  {
    path: '/user/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/user/loyalty-points',
    name: 'Loyalty',
    component: LoyaltyPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/user/:id',
    component: () => import('../views/UnderDevelopment.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
