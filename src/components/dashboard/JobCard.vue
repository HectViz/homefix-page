<script setup lang="ts">
import type { Job } from '@/types'

defineProps<{
  job: Job
}>()

const emit = defineEmits<{
  accept: [jobId: string]
  reject: [jobId: string]
  start: [jobId: string]
  complete: [jobId: string]
}>()

const urgencyColors = {
  low: 'success',
  medium: 'warning',
  high: 'error',
  emergency: 'error'
}

const urgencyLabels = {
  low: 'Baja',
  medium: 'Media',
  high: 'Alta',
  emergency: 'Emergencia'
}

const statusColors = {
  pending: 'grey',
  accepted: 'info',
  in_progress: 'warning',
  completed: 'success',
  cancelled: 'error'
}

const statusLabels = {
  pending: 'Pendiente',
  accepted: 'Aceptado',
  in_progress: 'En Progreso',
  completed: 'Completado',
  cancelled: 'Cancelado'
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleString('es-ES', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<template>
  <v-card elevation="2" class="job-card">
    <v-card-title class="d-flex justify-space-between align-start">
      <div class="flex-grow-1">
        <div class="d-flex align-center mb-2">
          <v-avatar size="40" class="mr-3">
            <v-img :src="job.clientAvatar" />
          </v-avatar>
          <div>
            <h3 class="text-h6">{{ job.title }}</h3>
            <p class="text-caption text-medium-emphasis">{{ job.clientName }}</p>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column align-end">
        <v-chip
          :color="urgencyColors[job.urgency]"
          size="small"
          class="mb-1"
        >
          {{ urgencyLabels[job.urgency] }}
        </v-chip>
        <v-chip
          :color="statusColors[job.status]"
          size="small"
          variant="outlined"
        >
          {{ statusLabels[job.status] }}
        </v-chip>
      </div>
    </v-card-title>

    <v-card-text>
      <p class="text-body-2 mb-3">{{ job.description }}</p>

      <v-divider class="my-3" />

      <div class="d-flex flex-wrap ga-4">
        <div class="d-flex align-center">
          <v-icon icon="mdi-tag" size="small" class="mr-1" />
          <span class="text-caption">{{ job.category }}</span>
        </div>
        <div class="d-flex align-center">
          <v-icon icon="mdi-map-marker" size="small" class="mr-1" />
          <span class="text-caption">{{ job.distance }}</span>
        </div>
        <div class="d-flex align-center">
          <v-icon icon="mdi-cash" size="small" class="mr-1" />
          <span class="text-caption font-weight-bold">${{ job.estimatedPrice }}</span>
        </div>
        <div class="d-flex align-center">
          <v-icon icon="mdi-clock" size="small" class="mr-1" />
          <span class="text-caption">{{ formatDate(job.createdAt) }}</span>
        </div>
      </div>

      <div v-if="job.scheduledAt" class="mt-3">
        <v-alert
          type="info"
          density="compact"
          variant="tonal"
        >
          <template #prepend>
            <v-icon icon="mdi-calendar-clock" />
          </template>
          Programado: {{ formatDate(job.scheduledAt) }}
        </v-alert>
      </div>

      <p class="text-caption text-medium-emphasis mt-2">
        <v-icon icon="mdi-map-marker" size="small" />
        {{ job.location }}
      </p>
    </v-card-text>

    <v-card-actions>
      <template v-if="job.status === 'pending'">
        <v-btn
          color="error"
          variant="outlined"
          @click="emit('reject', job.id)"
        >
          Rechazar
        </v-btn>
        <v-spacer />
        <v-btn
          color="primary"
          variant="flat"
          @click="emit('accept', job.id)"
        >
          Aceptar Trabajo
        </v-btn>
      </template>

      <template v-else-if="job.status === 'accepted'">
        <v-btn
          color="primary"
          variant="flat"
          block
          @click="emit('start', job.id)"
        >
          Iniciar Trabajo
        </v-btn>
      </template>

      <template v-else-if="job.status === 'in_progress'">
        <v-btn
          color="success"
          variant="flat"
          block
          @click="emit('complete', job.id)"
        >
          Marcar como Completado
        </v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.job-card {
  height: 100%;
  transition: transform 0.2s, box-shadow 0.2s;
}

.job-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
</style>
