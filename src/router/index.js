import Vue from "vue";
import VueRouter from "vue-router";
import { publicPath } from '@/../vue.config'

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    component: () => import('@/views/Home.vue')
  },
  {
    path:"*",
    component: () => import('./../views/errors/404.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: publicPath,
  routes
});

export default router;
