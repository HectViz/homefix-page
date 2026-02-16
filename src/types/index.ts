export interface User {
  id: string
  email: string
  name: string
  role: 'client' | 'technician' | 'admin'
  avatar?: string
  phone?: string
}

export interface Technician extends User {
  role: 'technician'
  specialties: string[]
  rating: number
  completedJobs: number
  verified: boolean
  availability: boolean
}

export interface Job {
  id: string
  clientName: string
  clientAvatar?: string
  title: string
  description: string
  category: string
  urgency: 'low' | 'medium' | 'high' | 'emergency'
  status: 'pending' | 'accepted' | 'in_progress' | 'completed' | 'cancelled'
  location: string
  distance: string
  estimatedPrice: number
  createdAt: string
  scheduledAt?: string
}

export interface Stats {
  totalJobs: number
  completedJobs: number
  rating: number
  earnings: number
  activeJobs: number
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  user: User
  token: string
}
