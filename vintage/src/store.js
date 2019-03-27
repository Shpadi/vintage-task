import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    sendFormData({}, payload) {
      const {data, onSuccess} = payload;
      console.log(data);
      axios.post('/post', data)
        .then(()=> {
          onSuccess();
        })
    }
  }
})
