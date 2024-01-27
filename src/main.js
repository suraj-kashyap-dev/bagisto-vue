import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { RouterLink } from "vue-router";
import App from "./App.vue";
import router from "./router";
import Shimmer from "vue3-shimmer";
import VueProgressBar from "@aacassandra/vue3-progressbar";

const options = {
  color: "#bffaf3",
  failedColor: "#874b4b",
  thickness: "3px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "left",
  inverse: false,
};

// Create the Vue app
const app = createApp(App);

// Create Pinia instance
const pinia = createPinia();
app.use(pinia);

// Inject $axios into Pinia store
pinia.use(({ store }) => {
  store.$axios = app.config.globalProperties.$axios;
});

// Use the router and other global plugins
import AxiosPlugin from "./plugins/axios";
import VeeValidatePlugin from "./plugins/vee-validate";
import ControlsPlugin from "./plugins/controls";

app.use(router);
app.use(AxiosPlugin);
app.use(VeeValidatePlugin);
app.use(Shimmer);

app.use(ControlsPlugin);

app.use(VueProgressBar, options);

// Register global router link
app.component("v-router-link", RouterLink);

// Mount the app to the DOM
app.mount("#app");
