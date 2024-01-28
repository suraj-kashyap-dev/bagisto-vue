import axios from "axios";

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_PATH,
});

export default {
  install(app) {
    app.config.globalProperties.$axios = axiosConfig;

    window.axios = axiosConfig;
  },
};
