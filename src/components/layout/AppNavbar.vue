<script setup lang="ts">
import { useScroll } from '@/composables/useScroll'
import { useResponsive } from '@/composables/useResponsive'

const { isScrolled, scrollToElement } = useScroll()
const { isMobile } = useResponsive()

const navItems = [
  { title: 'Inicio', id: 'hero' },
  { title: 'Características', id: 'features' },
  { title: 'Cómo Funciona', id: 'how-it-works' },
  { title: 'Beneficios', id: 'benefits' }
]

const handleNavClick = (id: string) => {
  scrollToElement(id)
}
</script>

<template>
  <v-app-bar
    :elevation="isScrolled ? 4 : 0"
    :color="isScrolled ? 'white' : 'transparent'"
    app
    fixed
    height="70"
  >
    <v-container class="d-flex align-center">
      <v-app-bar-title class="d-flex align-center">
        <v-icon icon="mdi-home-city" size="32" color="primary" class="mr-2" />
        <span class="text-h5 font-weight-bold text-primary">HomeFix</span>
      </v-app-bar-title>

      <v-spacer />

      <template v-if="!isMobile">
        <v-btn
          v-for="item in navItems"
          :key="item.id"
          variant="text"
          @click="handleNavClick(item.id)"
        >
          {{ item.title }}
        </v-btn>
        
        <v-btn
          color="primary"
          variant="outlined"
          size="large"
          class="ml-4"
          to="/login"
        >
          Iniciar Sesión
        </v-btn>
        
        <v-btn
          color="primary"
          variant="flat"
          size="large"
          class="ml-2"
          to="/login"
        >
          Comenzar
        </v-btn>
      </template>

      <v-app-bar-nav-icon v-else />
    </v-container>
  </v-app-bar>
</template>
