import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import PathNotFound from '../views/PathNotFound.vue'


const routes = [{
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/works',
    name: 'Works',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "works" */ '../views/Works.vue')
  }, {
    path: '/works/:slug',
    name: 'Work',
    component: () => import( /* webpackChunkName: "work" */ '../views/Work.vue'),
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  { path: '/:pathMatch(.*)*', component: PathNotFound },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  },
  routes
})

export default router