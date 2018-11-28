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
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/publish',
    name: '图文发布',
    hidden: true,
    children: [
      {
        path: 'publish',
        name: '发布文章',
        component: () => import('@/views/article/publish'),
        meta: {title: '发布文章', icon: ''}
      },
      {
        path: 'message',
        name: '文章留言',
        component: () => import('@/views/article/message'),
        meta: {title: '文章留言', icon: ''}
      }
    ]
  },
  {
    path: '/tmpInfo',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tmpInfo/index'),
        meta: {title: '模板消息', icon: ''}
      }
    ]
  },
  {
    path: '/customMenu',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/customMenu/index'),
        meta: {title: '自定义菜单', icon: ''}
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterGroup
})
