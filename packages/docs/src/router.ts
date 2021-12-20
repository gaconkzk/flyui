import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Pages from './pages/index'

const routes: RouteRecordRaw[] = [
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
      {
        path: 'components/button',
        component: Pages.Components.Button,
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory('/flyui/'),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
})
