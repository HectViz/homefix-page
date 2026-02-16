import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Job, Stats } from '@/types'

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    clientName: 'María González',
    clientAvatar: 'https://i.pravatar.cc/150?img=5',
    title: 'Reparación de aire acondicionado',
    description: 'El aire acondicionado gotea y hace ruido. Necesito revisión urgente.',
    category: 'Aire Acondicionado',
    urgency: 'high',
    status: 'pending',
    location: 'Av. Principal 123, Caracas',
    distance: '2.5 km',
    estimatedPrice: 80,
    createdAt: '2024-02-15T10:30:00'
  },
  {
    id: '2',
    clientName: 'Carlos Rodríguez',
    clientAvatar: 'https://i.pravatar.cc/150?img=8',
    title: 'Instalación de lámpara',
    description: 'Necesito instalar una lámpara de techo en la sala.',
    category: 'Electricidad',
    urgency: 'low',
    status: 'pending',
    location: 'Calle 45 #12-34, Caracas',
    distance: '5.1 km',
    estimatedPrice: 35,
    createdAt: '2024-02-15T09:15:00'
  },
  {
    id: '3',
    clientName: 'Ana Martínez',
    clientAvatar: 'https://i.pravatar.cc/150?img=9',
    title: 'Fuga de agua en cocina',
    description: 'Hay una fuga debajo del fregadero que no para.',
    category: 'Plomería',
    urgency: 'emergency',
    status: 'accepted',
    location: 'Urbanización Los Pinos, Casa 56',
    distance: '1.2 km',
    estimatedPrice: 120,
    createdAt: '2024-02-15T14:00:00',
    scheduledAt: '2024-02-15T15:30:00'
  },
  {
    id: '4',
    clientName: 'Pedro Sánchez',
    clientAvatar: 'https://i.pravatar.cc/150?img=11',
    title: 'Mantenimiento de bomba de agua',
    description: 'La bomba hace ruido extraño y pierde presión.',
    category: 'Plomería',
    urgency: 'medium',
    status: 'in_progress',
    location: 'Edificio Torre Norte, Piso 8',
    distance: '3.8 km',
    estimatedPrice: 95,
    createdAt: '2024-02-14T16:20:00',
    scheduledAt: '2024-02-15T10:00:00'
  }
]

const MOCK_STATS: Stats = {
  totalJobs: 156,
  completedJobs: 148,
  rating: 4.8,
  earnings: 12450,
  activeJobs: 2
}

export const useTechnicianStore = defineStore('technician', () => {
  const jobs = ref<Job[]>(MOCK_JOBS)
  const stats = ref<Stats>(MOCK_STATS)
  const loading = ref(false)

  const pendingJobs = ref(jobs.value.filter(j => j.status === 'pending'))
  const activeJobs = ref(jobs.value.filter(j => ['accepted', 'in_progress'].includes(j.status)))
  const completedJobs = ref(jobs.value.filter(j => j.status === 'completed'))

  const acceptJob = (jobId: string) => {
    const job = jobs.value.find(j => j.id === jobId)
    if (job) {
      job.status = 'accepted'
      job.scheduledAt = new Date(Date.now() + 3600000).toISOString()
      updateJobLists()
    }
  }

  const startJob = (jobId: string) => {
    const job = jobs.value.find(j => j.id === jobId)
    if (job) {
      job.status = 'in_progress'
      updateJobLists()
    }
  }

  const completeJob = (jobId: string) => {
    const job = jobs.value.find(j => j.id === jobId)
    if (job) {
      job.status = 'completed'
      stats.value.completedJobs++
      stats.value.earnings += job.estimatedPrice
      updateJobLists()
    }
  }

  const rejectJob = (jobId: string) => {
    const job = jobs.value.find(j => j.id === jobId)
    if (job) {
      job.status = 'cancelled'
      updateJobLists()
    }
  }

  const updateJobLists = () => {
    pendingJobs.value = jobs.value.filter(j => j.status === 'pending')
    activeJobs.value = jobs.value.filter(j => ['accepted', 'in_progress'].includes(j.status))
    completedJobs.value = jobs.value.filter(j => j.status === 'completed')
  }

  return {
    jobs,
    stats,
    loading,
    pendingJobs,
    activeJobs,
    completedJobs,
    acceptJob,
    startJob,
    completeJob,
    rejectJob
  }
})
