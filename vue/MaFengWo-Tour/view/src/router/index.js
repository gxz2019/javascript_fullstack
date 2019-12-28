import Vue from 'vue'
import Router from 'vue-router'
import Cover from '../components/Cover/Cover'
import Index from '@/components/Index'
import Register from '@/components/register/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cover',
      component: Cover
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      meta:{
        title:'主页'
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta:{
        title:'注册登录'
      }
    }
  ]
})
