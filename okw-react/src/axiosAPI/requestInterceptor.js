import axios from 'axios'
import getCookie from '../utils/getCookie';

const csrfToken = getCookie('csrftoken');

const requestInteceptor = () => {axios.interceptors.request.use(
    config => {
      config.headers['Content-Type'] = 'application/json';
      if (csrfToken)
      {
        config.headers['X-CSRFToken'] = csrfToken;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
}
export default requestInteceptor;