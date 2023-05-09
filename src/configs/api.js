/* eslint-disable no-param-reassign */
import axios from "axios";

// eslint-disable-next-line no-undef

axios.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("token");

    config.headers.Authorization = `Bearer ${authToken}`;
    // console.log(config)
    return config;
  },
  (error) => Promise.reject(error)
);

export default axios;
