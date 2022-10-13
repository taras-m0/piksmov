import Vue from "vue";
import Router from "vue-router";

import UseVuex from "../pages/UseVuex";
import NoVuex from "../pages/NoVuex";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "vuex",
      alias: "",
      name: "vuex",
      component: UseVuex,
    },
    {
      path: "no_vuex",
      name: "no_vuex",
      component: NoVuex,
    },
  ],
});

export default router;
