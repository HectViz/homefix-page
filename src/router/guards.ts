import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

export function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore()
  authStore.checkAuth()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    if (authStore.isTechnician) {
      next('/dashboard/technician')
    } else if (authStore.isClient) {
      next('/dashboard/client')
    } else {
      next('/')
    }
  } else if (to.meta.role && authStore.user?.role !== to.meta.role) {
    next('/')
  } else {
    next()
  }
}
