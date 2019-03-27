import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Notifications from 'vue-notification'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate)
Vue.use(Notifications)
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://httpbin.org';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
