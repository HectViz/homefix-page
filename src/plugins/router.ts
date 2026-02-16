import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { authGuard } from '@/router/guards'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/LandingView.vue'),
    meta: {
      title: 'HomeFix - Servicios Técnicos Inteligentes'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: {
      title: 'Iniciar Sesión - HomeFix',
      requiresGuest: true
    }
  },
  {
    path: '/dashboard/technician',
    name: 'TechnicianDashboard',
    component: () => import('@/views/dashboard/TechnicianDashboard.vue'),
    meta: {
      title: 'Dashboard Técnico - HomeFix',
      requiresAuth: true,
      role: 'technician'
    }
  },
  {
    path: '/dashboard/client',
    name: 'ClientDashboard',
    component: () => import('@/views/dashboard/ClientDashboard.vue'),
    meta: {
      title: 'Dashboard Cliente - HomeFix',
      requiresAuth: true,
      role: 'client'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(authGuard)

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'HomeFix'
  next()
})

export default router
