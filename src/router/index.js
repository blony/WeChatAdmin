import Vue from 'vue'
import Router from 'vue-router'

// Layout
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const constantRouterGroup = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index')
      }
    ]
  }

]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterGroup
})
