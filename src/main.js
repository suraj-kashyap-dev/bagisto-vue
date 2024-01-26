import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)


/**
 * Global plugins registration.
 */
import Axios from "./plugins/axios";
import VeeValidate from "./plugins/vee-validate";
import Controls from "./plugins/controls";

[
    Axios,
    Controls,
    VeeValidate,
].forEach((plugin) => app.use(plugin));


app.mount('#app')
