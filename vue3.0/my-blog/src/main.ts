import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import service from './utils/http'
import urls from './utils/urls'

Vue.config.productionTip = false;
Vue.use(ElementUi)
Vue.prototype.$https = service 
Vue.prototype.$urls = urls
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
