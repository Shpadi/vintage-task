import Vue from 'vue'
import Vuex from 'vuex'
import locations from './modules/locations'
import formdata from './modules/formdata'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    locations,
    formdata
  },

})
