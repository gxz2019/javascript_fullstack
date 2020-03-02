// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe,SwipeItem,Calendar, Toast,Cell,Popup} from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import store from './store'
Vue.prototype.$http= axios
Vue.config.productionTip = false
Vue.use(Swipe).use(SwipeItem).use(Calendar).use(Cell).use(Popup)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
