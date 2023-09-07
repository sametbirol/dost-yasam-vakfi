import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import InformationView from '../views/InformationView.vue'
import DonationView from '../views/DonationView.vue'
import EventsView from '../views/EventsView.vue'
import ErrorPage from '../pages/Error.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
      meta : {
         title : "Anasayfa"
      }
   },
   {
      path: '/:catchALl(.*)',
      name: 'ErrorPage',
      component: HomeView,
      meta : {
         title : "Hata 404 *"
      }
   },
   {
      path: '/hakkimizda',
      name: 'About',
      component: AboutView,
      meta : {
         title : "Hakkımızda"
      }
   },
   {
      path: '/bilgi-kösesi',
      name: 'Information',
      component: InformationView,
      meta : {
         title : "Bilgi Köşesi"
      }
   },
   {
      path: '/bagis-yap',
      name: 'Donation',
      component: DonationView,
      meta : {
         title : "Bağış ve Destek"
      }
   },
   {
      path: '/etkinliklerimiz',
      name: 'Events',
      component: EventsView,
      meta : {
         title : "Etkinlikler"
      }
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
router.beforeEach((to,from,next) => {
   document.title = to.meta.title;
   next();
})
export default router