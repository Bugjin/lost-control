import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home ,//导入后直接使用
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user',
    name: 'User',
    
    component: () => import( '../views/User.vue')//直接导入组件
  },
  {
    path: '/about',
    name: 'About',
   
    component: () => import('../views/About.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
   
    component: () => import('../views/Layout.vue')
  },
  {
    path: '/canvas',
    name: 'Canvas',
   
    component: () => import('../views/Canvas.vue')
  },
  {
    path: '/login',
    name: 'Login',
   
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    redirect: '/user/cloud',
    children:[
      {
        path: 'cloud',
        name: 'Cloud',
        component: ()=>import('../components/Cloud.vue')
        
      },
      {
        path: 'test2',
        name: 'Test2',
        component: ()=>import('../components/Test2.vue')
      }
      // {
      //   path: 'test3',
      //   name: 'Test3',
      //   component: ()=>import('../components/Test3.vue')
      // },
      // {
      //   path: 'test4',
      //   name: 'Test4',
      //   component: ()=>import('../components/Test4.vue')
      // }
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
