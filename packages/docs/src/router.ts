import { createRouter, createWebHashHistory } from 'vue-router'
import Pages from './pages/index'

const routes = [
  {
    path: '/',
    component: Pages.Home,
    children: [
      {
        path: '',
        component: Pages.Landing,
      },
      {
        path: 'intro',
        component: Pages.Introduction,
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory('flyui'),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
})
