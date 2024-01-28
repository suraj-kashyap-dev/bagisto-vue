import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Customer/Register.vue";
import Login from "../views/Customer/Login.vue";
import CategoryView from "../views/Category/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
        progress: {
          func: [
            { call: "color", modifier: "temp", argument: "#ffb000" },
            { call: "fail", modifier: "temp", argument: "#6e0000" },
            { call: "location", modifier: "temp", argument: "top" },
            {
              call: "transition",
              modifier: "temp",
              argument: { speed: "1.5s", opacity: "0.6s", termination: 400 },
            },
          ],
        },
      },
    },
    {
      path: "/customer/register",
      name: "register",
      component: Register,
      meta: {
        title: "Register",
        progress: {
          func: [
            { call: "color", modifier: "temp", argument: "#ffb000" },
            { call: "fail", modifier: "temp", argument: "#6e0000" },
            { call: "location", modifier: "temp", argument: "top" },
            {
              call: "transition",
              modifier: "temp",
              argument: { speed: "1.5s", opacity: "0.6s", termination: 400 },
            },
          ],
        },
      },
    },
    {
      path: "/customer/login",
      name: "login",
      component: Login,
      meta: {
        title: "Login",
        progress: {
          func: [
            { call: "color", modifier: "temp", argument: "#ffb000" },
            { call: "fail", modifier: "temp", argument: "#6e0000" },
            { call: "location", modifier: "temp", argument: "top" },
            {
              call: "transition",
              modifier: "temp",
              argument: { speed: "1.5s", opacity: "0.6s", termination: 400 },
            },
          ],
        },
      },
    },
    {
      path: "/:slug",
      name: "category.details",
      component: CategoryView,
      meta: {
        title: "Category Details",
        progress: {
          func: [
            { call: "color", modifier: "temp", argument: "#ffb000" },
            { call: "fail", modifier: "temp", argument: "#6e0000" },
            { call: "location", modifier: "temp", argument: "top" },
            {
              call: "transition",
              modifier: "temp",
              argument: { speed: "1.5s", opacity: "0.6s", termination: 400 },
            },
          ],
        },
      },
    },
  ],
});

export default router;
