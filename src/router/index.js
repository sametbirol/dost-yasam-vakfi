import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cities from '../pages/TypeAhead/Cities.vue'
import ErrorPage from '../pages/Error.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView
   },
   {
      path: '/typeahead',
      name: 'cities',
      component: Cities
   },
   {
      path: '/:catchALl(.*)',
      name: 'ErrorPage',
      component: HomeView
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router