import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test'),
  },
  {
    path: '/test2',
    component: () => import('../views/test2')
  },
  {
    path: '/tool',
    component: () => import('../views/tool')
  },

]

const router = new VueRouter({
  routes
})

export default router
