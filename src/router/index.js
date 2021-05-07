import Vue from "vue";
import VueRouter from "vue-router";
import { publicPath } from '@/../vue.config'

Vue.use(VueRouter);

const clearHistory = (_to, _from, next) => {
  if (sessionStorage.getItem('redirect') !== null) {
    const redirect = sessionStorage.redirect
    delete sessionStorage.redirect
    next(redirect)
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/content/main.md'),
    meta: {
      layout: 'AppLayoutHome'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/introduccion',
    name: 'Introduccion',
    component: () => import('@/content/introduccion.md'),
    meta: {
      title: 'Introducción',
      description: '¿De qué se trata Arquitecturas Concurrentes?',
      layout: 'AppLayoutEntry'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/concurrencia_paralelismo',
    name: 'Concurrencia y Paralelismo',
    component: () => import('@/content/concurrencia_paralelismo.md'),
    meta: {
      title: 'Concurrencia y Paralelismo',
      description: 'En busca de un vocabulario común',
      layout: 'AppLayoutEntry'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/cps',
    name: 'CPS',
    component: () => import('@/content/cps.md'),
    meta: {
      title: 'CPS',
      description: 'Introduccion a CPS',
      layout: 'AppLayoutEntry'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/promises',
    name: 'Promises',
    component: () => import('@/content/promises.md'),
    meta: {
      title: 'Promises',
      description: 'Modelando computaciones asincrónicas',
      layout: 'AppLayoutEntry'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/corutinas',
    name: 'Corrutinas (coroutines)',
    component: () => import('@/content/coroutines.md'),
    meta: {
      title: 'Corutinas',
      description: 'Introduccion a las corrutinas',
      layout: 'AppLayoutEntry'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/fibers',
    name: 'Fibers',
    component: () => import('@/content/fibers.md'),
    meta: {
      title: 'Fibers',
      description: 'Fibers en Ruby',
      layout: 'AppLayoutEntry'
    },
    beforeEnter: clearHistory
  },
  {
    path:"*",
    component: () => import('./../views/errors/404.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: publicPath,
  routes
});

export default router;
