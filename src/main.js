import './assets/main.css'
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { useAuthStore } from '@/stores/modules/auth';
import AxiosPlugin from './plugins/axios';
import VeeValidatePlugin from './plugins/vee-validate';
import ControlsPlugin from './plugins/controls';

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
app.use(router);
app.use(AxiosPlugin);
app.use(VeeValidatePlugin);
app.use(ControlsPlugin);

// Set the app instance globally
app.config.globalProperties.$app = app;

// Mount the app to the DOM
app.mount('#app');
