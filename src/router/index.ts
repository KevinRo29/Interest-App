import { createRouter, createWebHistory } from '@ionic/vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HomePage',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/present_value',
      name: 'PresentValue',
      component: () => import('@/views/PresentValue.vue')
    },
    {
      path: '/anualities',
      name: 'Anualities',
      component: () => import('@/views/Anualities.vue')
    },
  ]
})

export default router
