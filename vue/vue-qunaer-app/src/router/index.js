import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import './assets/styles/reset.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/page/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/page/city/City')
    }
  ]
})
