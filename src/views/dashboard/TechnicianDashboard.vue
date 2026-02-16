<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useTechnicianStore } from '@/stores/technician'
import DashboardLayout from '@/components/dashboard/DashboardLayout.vue'
import StatsCard from '@/components/dashboard/StatsCard.vue'
import JobCard from '@/components/dashboard/JobCard.vue'

const authStore = useAuthStore()
const technicianStore = useTechnicianStore()

const user = computed(() => authStore.user)
const stats = computed(() => technicianStore.stats)
const pendingJobs = computed(() => technicianStore.pendingJobs)
const activeJobs = computed(() => technicianStore.activeJobs)

const handleAcceptJob = (jobId: string) => {
  technicianStore.acceptJob(jobId)
}

const handleRejectJob = (jobId: string) => {
  technicianStore.rejectJob(jobId)
}

const handleStartJob = (jobId: string) => {
  technicianStore.startJob(jobId)
}

const handleCompleteJob = (jobId: string) => {
  technicianStore.completeJob(jobId)
}

const statsCards = computed(() => [
  {
    title: 'Trabajos Completados',
    value: stats.value.completedJobs,
    icon: 'mdi-check-circle',
    color: 'success',
    subtitle: `de ${stats.value.totalJobs} totales`,
    trend: { value: 12, isPositive: true }
  },
  {
    title: 'Calificación',
    value: stats.value.rating,
    icon: 'mdi-star',
    color: 'warning',
    subtitle: 'promedio',
    trend: { value: 5, isPositive: true }
  },
  {
    title: 'Ganancias',
    value: `$${stats.value.earnings.toLocaleString()}`,
    icon: 'mdi-cash',
    color: 'primary',
    subtitle: 'este mes',
    trend: { value: 18, isPositive: true }
  },
  {
    title: 'Trabajos Activos',
    value: stats.value.activeJobs,
    icon: 'mdi-briefcase',
    color: 'info',
    subtitle: 'en progreso'
  }
])
</script>

<template>
  <DashboardLayout>
    <v-container fluid class="pa-6">
      <div class="mb-6">
        <h1 class="text-h4 font-weight-bold mb-2">
          ¡Bienvenido, {{ user?.name }}! 👋
        </h1>
        <p class="text-body-1 text-medium-emphasis">
          Aquí está tu resumen de hoy
        </p>
      </div>

      <v-row class="mb-6">
        <v-col
          v-for="(stat, index) in statsCards"
          :key="index"
          cols="12"
          sm="6"
          lg="3"
        >
          <StatsCard v-bind="stat" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" lg="6">
          <div class="d-flex justify-space-between align-center mb-4">
            <h2 class="text-h5 font-weight-bold">
              Trabajos Pendientes
            </h2>
            <v-chip color="primary" variant="outlined">
              {{ pendingJobs.length }}
            </v-chip>
          </div>

          <v-row v-if="pendingJobs.length > 0">
            <v-col
              v-for="job in pendingJobs"
              :key="job.id"
              cols="12"
            >
              <JobCard
                :job="job"
                @accept="handleAcceptJob"
                @reject="handleRejectJob"
              />
            </v-col>
          </v-row>

          <v-card v-else elevation="0" class="text-center pa-8">
            <v-icon icon="mdi-clipboard-check" size="64" color="grey" class="mb-4" />
            <p class="text-h6 text-medium-emphasis">
              No hay trabajos pendientes
            </p>
            <p class="text-body-2 text-medium-emphasis">
              Los nuevos trabajos aparecerán aquí
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" lg="6">
          <div class="d-flex justify-space-between align-center mb-4">
            <h2 class="text-h5 font-weight-bold">
              Trabajos Activos
            </h2>
            <v-chip color="warning" variant="outlined">
              {{ activeJobs.length }}
            </v-chip>
          </div>

          <v-row v-if="activeJobs.length > 0">
            <v-col
              v-for="job in activeJobs"
              :key="job.id"
              cols="12"
            >
              <JobCard
                :job="job"
                @start="handleStartJob"
                @complete="handleCompleteJob"
              />
            </v-col>
          </v-row>

          <v-card v-else elevation="0" class="text-center pa-8">
            <v-icon icon="mdi-briefcase-outline" size="64" color="grey" class="mb-4" />
            <p class="text-h6 text-medium-emphasis">
              No tienes trabajos activos
            </p>
            <p class="text-body-2 text-medium-emphasis">
              Acepta trabajos pendientes para comenzar
            </p>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-6">
        <v-col cols="12">
          <v-card elevation="2">
            <v-card-title class="bg-primary">
              <v-icon icon="mdi-chart-line" class="mr-2" />
              Rendimiento Semanal
            </v-card-title>
            <v-card-text class="pa-6">
              <div class="text-center pa-8">
                <v-icon icon="mdi-chart-bar" size="64" color="grey-lighten-1" class="mb-4" />
                <p class="text-h6 text-medium-emphasis">
                  Gráfico de rendimiento próximamente
                </p>
                <p class="text-body-2 text-medium-emphasis">
                  Aquí verás tus estadísticas semanales
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </DashboardLayout>
</template>
