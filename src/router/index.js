import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import InformationView from '../views/InformationView.vue'
// import DonationView from '../views/DonationView.vue'
// import EventsView from '../views/EventsView.vue'
import ErrorPage from '../pages/Error.vue'
// import TabWrapper from '../components/Information/TabWrapper.vue'
const HomeView = () => import('../views/HomeView.vue')
const AboutView = () => import('../views/AboutView.vue')
const InformationView = () => import('../views/InformationView.vue')
const EventsView = () => import('../views/EventsView.vue')
const DonationView = () => import('../views/DonationView.vue')
const TabWrapper = () => import('../components/Information/TabWrapper.vue')
const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
         title: "Anasayfa"
      }
   },
   {
      path: '/hakkimizda',
      name: 'About',
      component: AboutView,
      meta: {
         title: "Hakkımızda"
      }
   },
   {
      path: '/bilgi-kosesi/',
      component: InformationView,
      meta: {
         title: "Bilgi Köşesi"
      },
      children : [
         {
            path : ':title',
            name : 'content',
            component : TabWrapper,
            props : true
         }
      ]
   },
   {
      path: '/bagis-yap',
      name: 'Donation',
      component: DonationView,
      meta: {
         title: "Bağış ve Destek"
      }
   },
   {
      path: '/etkinlikler',
      name: 'Events',
      component: EventsView,
      meta: {
         title: "Etkinlikler"
      }
   },
]

const router = createRouter({
   history: createWebHashHistory('/dost-yasam-vakfi/'),
   routes
})
router.beforeEach((to, from, next) => {
   document.title = `${to.meta.title} - Dost Yaşam Vakfı`;
   next();
})
export default router