import Vue from 'vue'
import Router from 'vue-router'
import Cover from '../pages/Cover/Cover'
import Index from '@/pages/index/Index'
import Register from '@/pages/register/register'
import User from '@/pages/User/user'
import Hotel from '@/pages/Hotel/Hotel'
import City from '@/pages/City/city'
import HotelPages from '@/pages/Hotelpages/hotelpages'

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
    },
    {
      path: '/User',
      name: 'User',
      component: User,
      meta:{
        title:'用户'
      }
    },
    {
      path: '/Hotel',
      name: 'Hotel',
      component: Hotel,
      meta:{
        title:'酒店'
      }
    },
    {
      path: '/city',
      name: 'City',
      component: City,
      meta:{
        title:'城市选择'
      }
    },
    {
      path: '/hotelpages',
      name: 'HotelPages',
      component: HotelPages,
      meta:{
        title:'酒店页面'
      }
    }
  ]
})
