import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/images',
      name: 'Images',
      component: () => import('../views/ImagesView.vue')
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import('../views/MessageView.vue')
    }
  ]
})

export default router
