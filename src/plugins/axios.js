import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost/bagisto/public/api/v1/",
});

export default {
  install(app) {
    app.config.globalProperties.$axios = axiosConfig

    window.axios = axiosConfig;
  },
};
