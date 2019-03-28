import axios from 'axios';

export default {
  sendData: data => axios.post('/post', data),
}
