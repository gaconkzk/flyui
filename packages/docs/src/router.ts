import { createRouter, createWebHistory } from 'vue-router'
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
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
})
