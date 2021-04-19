import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/main/police',
    name: 'Police',
    component: () => import('../views/Police.vue')
  },
  {
    path: '/main/lawyer',
    name: 'Lawyer',
    component: () => import('../views/Lawyer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
