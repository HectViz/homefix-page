import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, Technician, LoginCredentials } from '@/types'

const MOCK_USERS = {
  technician: {
    id: '1',
    email: 'tecnico@homefix.com',
    name: 'Roberto Martínez',
    role: 'technician' as const,
    avatar: 'https://i.pravatar.cc/150?img=12',
    phone: '+1 234 567 8900',
    specialties: ['Plomería', 'Electricidad', 'Aire Acondicionado'],
    rating: 4.8,
    completedJobs: 156,
    verified: true,
    availability: true
  },
  client: {
    id: '2',
    email: 'cliente@homefix.com',
    name: 'María González',
    role: 'client' as const,
    avatar: 'https://i.pravatar.cc/150?img=5',
    phone: '+1 234 567 8901'
  }
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | Technician | null>(null)
  const token = ref<string | null>(null)
  const loading = ref(false)

  const isAuthenticated = computed(() => !!user.value && !!token.value)
  const isTechnician = computed(() => user.value?.role === 'technician')
  const isClient = computed(() => user.value?.role === 'client')

  const login = async (credentials: LoginCredentials): Promise<void> => {
    loading.value = true
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email === 'tecnico@homefix.com' && credentials.password === 'tecnico123') {
          user.value = MOCK_USERS.technician
          token.value = 'mock-token-technician-' + Date.now()
          localStorage.setItem('auth_token', token.value)
          localStorage.setItem('user', JSON.stringify(user.value))
          loading.value = false
          resolve()
        } else if (credentials.email === 'cliente@homefix.com' && credentials.password === 'cliente123') {
          user.value = MOCK_USERS.client
          token.value = 'mock-token-client-' + Date.now()
          localStorage.setItem('auth_token', token.value)
          localStorage.setItem('user', JSON.stringify(user.value))
          loading.value = false
          resolve()
        } else {
          loading.value = false
          reject(new Error('Credenciales inválidas'))
        }
      }, 1000)
    })
  }

  const logout = () => {
    user.value = null
    token.value = null
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user')
  }

  const checkAuth = () => {
    const savedToken = localStorage.getItem('auth_token')
    const savedUser = localStorage.getItem('user')
    
    if (savedToken && savedUser) {
      token.value = savedToken
      user.value = JSON.parse(savedUser)
      return true
    }
    return false
  }

  return {
    user,
    token,
    loading,
    isAuthenticated,
    isTechnician,
    isClient,
    login,
    logout,
    checkAuth
  }
})
