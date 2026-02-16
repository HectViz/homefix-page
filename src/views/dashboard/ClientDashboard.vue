<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import DashboardLayout from '@/components/dashboard/DashboardLayout.vue'

const authStore = useAuthStore()
const user = computed(() => authStore.user)
</script>

<template>
  <DashboardLayout>
    <v-container fluid class="pa-6">
      <div class="mb-6">
        <h1 class="text-h4 font-weight-bold mb-2">
          ¡Bienvenido, {{ user?.name }}! 👋
        </h1>
        <p class="text-body-1 text-medium-emphasis">
          Dashboard de Cliente (Próximamente)
        </p>
      </div>

      <v-card elevation="2" class="text-center pa-12">
        <v-icon icon="mdi-tools" size="96" color="primary" class="mb-6" />
        <h2 class="text-h4 font-weight-bold mb-4">
          Dashboard en Construcción
        </h2>
        <p class="text-h6 text-medium-emphasis mb-6">
          El dashboard de cliente estará disponible próximamente
        </p>
        <v-btn color="primary" size="large" to="/">
          Volver al Inicio
        </v-btn>
      </v-card>
    </v-container>
  </DashboardLayout>
</template>
