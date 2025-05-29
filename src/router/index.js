import { createRouter, createWebHistory } from 'vue-router'
import EntryAdoc from '@/components/EntryAdoc.vue'
import ContentPages from '@/static/pages.json'

const pagesRoutes = () => {
  return ContentPages.map((section) => ({
    path: `/tema/${section.path}`,
    component: EntryAdoc,
    props: () => ({
      adocName: section.path,
      title: section.title,
      extra: section.extra || false,
      need_detail: section.need_detail || false,
      description: section.description,
    }),
    meta: {
      title: section.title,
      layout: 'AppLayoutEntry',
    },
  }))
}

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'AppLayoutHome',
    },
  },
  ...pagesRoutes(),
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // or 'auto' if you prefer instant jump
      }
    }
    return { top: 0 }
  },
})

export default router
