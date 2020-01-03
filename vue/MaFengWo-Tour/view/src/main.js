// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe,SwipeItem,Icon,Field,ActionSheet,Toast,Panel,Uploader} from 'vant'
import 'vant/lib/index.css'
// import './assets/iconfont/iconfont.css'
import axios from 'axios'
// import Vueaxios from 'vue-axios'
Vue.prototype.$http= axios
Vue.config.productionTip = false
Vue.use(Swipe).use(SwipeItem).use(Icon).use(Field).use(ActionSheet).use(Toast).use(Panel).use(Uploader).use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
