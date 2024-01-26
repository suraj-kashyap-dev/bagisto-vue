import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Customer/Register.vue";
import Login from "../views/Customer/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "rome",
      component: Home,
    },
    {
      path: "/customer/register",
      name: "register",
      component: Register,
    },
    {
      path: "/customer/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
