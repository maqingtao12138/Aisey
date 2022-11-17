import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/images',
      name: 'Images',
      component: () => import('../views/ImagesView.vue')
    }
  ]
})

export default router
