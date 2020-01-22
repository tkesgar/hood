import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./views/Main";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/:comicId",
    component: Main,
    props(route) {
      return {
        initialId: Number(route.params.comicId) || null
      };
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
