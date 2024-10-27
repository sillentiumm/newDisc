import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main_page',
      component: () => import('../views/MainPage.vue')
    },
    {
      path: '/tasklist',
      name: 'tasklist',
      component: () => import('../views/Tasklist.vue')
    },
  ]
})

export default router
