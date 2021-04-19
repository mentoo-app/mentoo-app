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
    path: '/main/police/steps',
    name: 'Police_steps',
    component: () => import('../views/Police_steps.vue')
  },
  {
    path: '/main/lawyer',
    name: 'Lawyer',
    component: () => import('../views/Lawyer.vue')
  },
  {
    path: '/main/lawyer/list',
    name: 'Lawyer',
    component: () => import('../views/Lawyer_list.vue')
  },
  {
    path: '/main/hospital',
    name: 'Hospital',
    component: () => import('../views/Hospital.vue')
  },
  {
    path: '/main/psy',
    name: 'Psy',
    component: () => import('../views/Psy.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
