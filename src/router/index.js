import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '@/views/HomePage.vue';
import LoyaltyPage from '@/views/LoyaltyPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import OrderPage from '@/views/OrderPage.vue';
import OrderInfo from '@/components/OrderInfo.vue';
import Checkout from '@/components/Checkout.vue';
const routes = [
  {
    path: '',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/loyalty-points',
    name: 'Loyalty',
    component: LoyaltyPage,
  },
  {
    path: '/order',
    name: 'Our Foods',
    component: OrderPage,
  },
  {
    path: '/order/my-order',
    name: 'Order Info',
    component: OrderInfo,
  },
  {
    path: '/order/my-order/:id',
    name: 'Order Info',
    component: OrderInfo,
  },
  {
    path: '/checkout/:id',
    name: 'Checkout',
    component: Checkout,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/:id',
    component: () => import('../views/UnderDevelopment.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
