import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Notifications from 'vue-notification'
import VeeValidate from 'vee-validate';
import * as VueGoogleMaps from 'vue2-google-maps'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(VeeValidate)
Vue.use(Notifications)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCBIiPSXFx8S0KOXxBKvfNE6uy55rHRYSg',
    v: '3.26',
    libraries: 'places'
  },
})
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://httpbin.org';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
