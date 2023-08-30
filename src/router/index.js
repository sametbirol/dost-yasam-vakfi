import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import ErrorPage from '../pages/Error.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView
   },
   {
      path: '/:catchALl(.*)',
      name: 'ErrorPage',
      component: HomeView
   },
   {
      path: '/hakkımızda',
      name: 'About',
      component: AboutUs
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router