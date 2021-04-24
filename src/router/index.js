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
    path: '/main/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/main/menu/detail',
    name: 'Menu_detail',
    component: () => import('../views/Menu_detail.vue')
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
    name: 'Lawyer_list',
    component: () => import('../views/Lawyer_list.vue')
  },
  {
    path: '/main/lawyer/list/detail',
    name: 'Lawyer_list_detail',
    component: () => import('../views/Lawyer_list_detail.vue')
  },
  {
    path: '/main/lawyer/list/rate',
    name: 'Lawyer_list_rate',
    component: () => import('../views/Lawyer_list_rate.vue')
  },
  {
    path: '/main/hospital',
    name: 'Hospital',
    component: () => import('../views/Hospital.vue')
  },
  {
    path: '/main/hospital/list',
    name: 'Hospital_list',
    component: () => import('../views/Hospital_list.vue')
  },
  {
    path: '/main/hospital/list/detail',
    name: 'Hospital_list_detail',
    component: () => import('../views/Hospital_list_detail.vue')
  },
  {
    path: '/main/hospital/list/rate',
    name: 'Hospital_list_rate',
    component: () => import('../views/Hospital_list_rate.vue')
  },
  {
    path: '/main/psy',
    name: 'Psy',
    component: () => import('../views/Psy.vue')
  },
  {
    path: '/main/psy/list',
    name: 'Psy_list',
    component: () => import('../views/Psy_list.vue')
  },
  {
    path: '/main/psy/list/single',
    name: 'Psy_list_single',
    component: () => import('../views/Psy_list_single.vue')
  },
  {
    path: '/main/psy/list/group',
    name: 'Psy_list_group',
    component: () => import('../views/Psy_list_group.vue')
  },
  {
    path: '/main/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/main/news/list',
    name: 'News_list',
    component: () => import('../views/News_list.vue')
  },
  {
    path: '/main/news/list_detail',
    name: 'News_list_detail',
    component: () => import('../views/News_list_detail.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
