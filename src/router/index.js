import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import InformationView from '../views/InformationView.vue'
import DonationView from '../views/DonationView.vue'
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
      component: AboutView
   },
   {
      path: '/bilgi-kösesi',
      name: 'Information',
      component: InformationView
   },
   {
      path: '/bagis-yap',
      name: 'Donation',
      component: DonationView
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router