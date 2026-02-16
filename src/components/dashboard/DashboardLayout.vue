<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useResponsive } from '@/composables/useResponsive'

const { user, logout } = useAuth()
const { isMobile } = useResponsive()

const drawer = ref(!isMobile.value)
const rail = ref(false)

const menuItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard/technician' },
  { title: 'Trabajos Pendientes', icon: 'mdi-clipboard-list', to: '/dashboard/technician/jobs' },
  { title: 'Trabajos Activos', icon: 'mdi-briefcase', to: '/dashboard/technician/active' },
  { title: 'Historial', icon: 'mdi-history', to: '/dashboard/technician/history' },
  { title: 'Perfil', icon: 'mdi-account', to: '/dashboard/technician/profile' },
  { title: 'Configuración', icon: 'mdi-cog', to: '/dashboard/technician/settings' }
]
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <v-list-item
        :prepend-avatar="user?.avatar"
        :title="user?.name"
        :subtitle="user?.email"
        nav
      >
        <template #append>
          <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
          />
        </template>
      </v-list-item>

      <v-divider />

      <v-list density="compact" nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :prepend-icon="item.icon"
          :title="item.title"
          :to="item.to"
          :value="item.title"
        />
      </v-list>

      <template #append>
        <v-divider />
        <v-list density="compact">
          <v-list-item
            prepend-icon="mdi-logout"
            title="Cerrar Sesión"
            @click="logout"
          />
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      
      <v-toolbar-title>
        <v-icon icon="mdi-home-city" color="primary" class="mr-2" />
        HomeFix
      </v-toolbar-title>

      <v-spacer />

      <v-btn icon="mdi-bell">
        <v-badge content="3" color="error">
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>

      <v-menu>
        <template #activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar size="36">
              <v-img :src="user?.avatar" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/dashboard/technician/profile">
            <template #prepend>
              <v-icon icon="mdi-account" />
            </template>
            <v-list-item-title>Mi Perfil</v-list-item-title>
          </v-list-item>
          <v-list-item to="/dashboard/technician/settings">
            <template #prepend>
              <v-icon icon="mdi-cog" />
            </template>
            <v-list-item-title>Configuración</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item @click="logout">
            <template #prepend>
              <v-icon icon="mdi-logout" />
            </template>
            <v-list-item-title>Cerrar Sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
