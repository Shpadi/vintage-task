import api from "../api/api";

const actions = {
  sendFormData({}, payload) {
    const {data, onSuccess} = payload;
    api.sendData(data)
      .then(()=> {
        onSuccess();
      })
  }
}

export default {
  namespaced: true,
  actions
};
