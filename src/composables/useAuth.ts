import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

export function useAuth() {
  const authStore = useAuthStore()
  const router = useRouter()
  const { user, isAuthenticated, isTechnician, isClient, loading } = storeToRefs(authStore)

  const loginAndRedirect = async (email: string, password: string) => {
    try {
      await authStore.login({ email, password })
      
      if (authStore.isTechnician) {
        router.push('/dashboard/technician')
      } else if (authStore.isClient) {
        router.push('/dashboard/client')
      } else {
        router.push('/')
      }
    } catch (error) {
      throw error
    }
  }

  const logoutAndRedirect = () => {
    authStore.logout()
    router.push('/login')
  }

  return {
    user,
    isAuthenticated,
    isTechnician,
    isClient,
    loading,
    login: loginAndRedirect,
    logout: logoutAndRedirect,
    checkAuth: authStore.checkAuth
  }
}
