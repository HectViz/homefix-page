<script setup lang="ts">
import { useResponsive } from '@/composables/useResponsive'

const { isMobile } = useResponsive()
</script>

<template>
  <section id="hero" class="hero-section">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" class="text-center text-md-left">
          <h1 class="text-h2 text-md-h1 font-weight-bold mb-4">
            Servicios Técnicos
            <span class="text-primary">Inteligentes</span>
          </h1>
          <p class="text-h6 text-medium-emphasis mb-8">
            Conectamos clientes con técnicos profesionales verificados usando inteligencia artificial. 
            Rápido, seguro y transparente.
          </p>
          
          <div class="d-flex flex-column flex-sm-row ga-4">
            <v-btn
              color="primary"
              size="x-large"
              variant="flat"
              prepend-icon="mdi-account-plus"
            >
              Registrarme
            </v-btn>
            <v-btn
              color="primary"
              size="x-large"
              variant="outlined"
              prepend-icon="mdi-play-circle"
            >
              Ver Demo
            </v-btn>
          </div>

          <v-row class="mt-8">
            <v-col cols="4">
              <div class="text-h4 font-weight-bold text-primary">500+</div>
              <div class="text-body-2">Técnicos Verificados</div>
            </v-col>
            <v-col cols="4">
              <div class="text-h4 font-weight-bold text-primary">10K+</div>
              <div class="text-body-2">Servicios Completados</div>
            </v-col>
            <v-col cols="4">
              <div class="text-h4 font-weight-bold text-primary">4.8★</div>
              <div class="text-body-2">Calificación Promedio</div>
            </v-col>
          </v-row>
        </v-col>

        <v-col v-if="!isMobile" cols="12" md="6">
          <v-img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800"
            alt="Técnico profesional"
            class="rounded-lg elevation-8"
            cover
            height="500"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding-top: 70px;
}
</style>
