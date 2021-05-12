import Vue from "vue";
import VueRouter from "vue-router";
import { publicPath } from '@/../vue.config'
import ContentPages from '@/static/pages.json'

Vue.use(VueRouter);

const pagesRoutes = () => {
  return ContentPages.map(section => (
    {
      path: `/${section.path}`,
      component: () => import(`@/content/${section.page}.md`),
      meta: {
        title: section.title,
        description: section.description
      }
    }
  ))
}

console.log(pagesRoutes())

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/content/main.md'),
    meta: {
      layout: 'AppLayoutHome'
    }
  },
  ...pagesRoutes(),
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
      title: 'Intearleaving Y Netsplits',
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log(from)
    if (to.hash) {
        return { selector: to.hash }
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { x: 0, y: 0 }
    }
  }
});

export default router;
