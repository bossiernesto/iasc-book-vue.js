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
    component: () => import('@/content/introduccion.md'),
    meta: {
      title: 'Introducción',
      description: '¿De qué se trata Arquitecturas Concurrentes?'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/concurrencia_paralelismo',
    component: () => import('@/content/concurrencia_paralelismo.md'),
    meta: {
      title: 'Concurrencia y Paralelismo',
      description: 'En busca de un vocabulario común'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/cps',
    component: () => import('@/content/cps.md'),
    meta: {
      title: 'CPS',
      description: 'Introduccion a CPS'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/promises',
    component: () => import('@/content/promises.md'),
    meta: {
      title: 'Promises',
      description: 'Modelando computaciones asincrónicas'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/corutinas',
    component: () => import('@/content/coroutines.md'),
    meta: {
      title: 'Corutinas',
      description: 'Introduccion a las corrutinas'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/fibers',
    component: () => import('@/content/fibers.md'),
    meta: {
      title: 'Fibers',
      description: 'Fibers en Ruby'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/actores_intro',
    component: () => import('@/content/actores_intro.md'),
    meta: {
      title: 'Introduccion a Actores',
      description: 'Actores y Elixir'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/otp',
    name: 'Elixir/Erlang OTP',
    component: () => import('@/content/otp.md'),
    meta: {
      title: 'Elixir y OTP',
      description: 'OTP Elxir'
    },
    beforeEnter: clearHistory
  },
  {
    path: '/distribucion',
    component: () => import('@/content/distribucion.md'),
    meta: {
      title: 'Distribucion',
      description: 'Introduccion y nociones de distribucion'
    },
  },
  {
    path: '/interleaving',
    component: () => import('@/content/interleaving.md'),
    meta: {
      title: 'Intearleaving Y Netsplits ',
      description: '...'
    },
  },
  {
    path: '/cap',
    component: () => import('@/content/cap.md'),
    meta: {
      title: 'CAP',
      description: 'Notas sobre CAP'
    },
  },
  {
    path: '/mitos_distribucion',
    component: () => import('@/content/mitos.md'),
    meta: {
      title: 'Distribucion Bonus',
      description: 'Mitos de la distribucion'
    },
  },
  {
    path: '/intro_contenedores',
    component: () => import('@/content/contenedores.md'),
    meta: {
      title: 'Contenedores',
      description: 'Contenedores con Docker'
    },
  },
  {
    path: '/service_mesh',
    component: () => import('@/content/service_mesh.md'),
    meta: {
      title: 'Service Mesh',
      description: 'Introduccion conceptual de Service Mesh'
    },
  },
  {
    path: '/stm',
    component: () => import('@/views/STM.vue'),
    meta: {
      title: 'STM',
      description: 'Memoria Transaccional'
    },
  },
  {
    path: '/efecto_lado_haskell',
    component: () => import('@/views/EfectoLadoHaskell.vue'),
    meta: {
      title: 'Efectos de Lado en Haskell',
      description: 'Una intro a memoria transaccional en Haskell'
    },
  },
  {
    path:"*",
    component: () => import('../views/errors/NotFound.vue'),
    meta: {
      layout: 'AppLayoutError'
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: publicPath,
  routes
});

export default router;
