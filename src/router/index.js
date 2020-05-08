import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "Login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/index.vue")
  },
  {
    path: "/console",
    name: "Console",
    component: () => import("../views/Layout/index.vue"),
    children:[
      {
        path: "/console",
        name: "Console",
        component: () => import("../views/Console/index.vue"),
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
