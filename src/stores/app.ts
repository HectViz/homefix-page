import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  const drawer = ref(false)
  const loading = ref(false)
  const snackbar = ref({
    show: false,
    message: '',
    color: 'success'
  })

  const toggleDrawer = () => {
    drawer.value = !drawer.value
  }

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  const showSnackbar = (message: string, color: string = 'success') => {
    snackbar.value = {
      show: true,
      message,
      color
    }
  }

  const hideSnackbar = () => {
    snackbar.value.show = false
  }

  return {
    drawer,
    loading,
    snackbar,
    toggleDrawer,
    setLoading,
    showSnackbar,
    hideSnackbar
  }
})
