<script setup lang="ts">
const features = [
  {
    icon: 'mdi-robot',
    title: 'IA Inteligente',
    description: 'Nuestro asistente de IA analiza tu problema y te conecta con el técnico ideal en segundos.',
    color: 'primary'
  },
  {
    icon: 'mdi-shield-check',
    title: 'Técnicos Verificados',
    description: 'Todos los profesionales pasan por verificación de identidad y certificaciones.',
    color: 'success'
  },
  {
    icon: 'mdi-map-marker-radius',
    title: 'Seguimiento en Tiempo Real',
    description: 'Ve la ubicación del técnico en tiempo real, como Uber pero para servicios del hogar.',
    color: 'info'
  },
  {
    icon: 'mdi-cash-lock',
    title: 'Pago Seguro',
    description: 'El dinero se retiene hasta que confirmes que el servicio fue completado satisfactoriamente.',
    color: 'warning'
  },
  {
    icon: 'mdi-message-text',
    title: 'Chat Inteligente',
    description: 'Comunícate con el técnico con traducción automática y asistencia de IA.',
    color: 'secondary'
  },
  {
    icon: 'mdi-history',
    title: 'Historial del Hogar',
    description: 'Mantén un registro completo de todos los servicios realizados en tu propiedad.',
    color: 'error'
  }
]
</script>

<template>
  <section id="features" class="features-section py-16">
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">
          Características que nos Diferencian
        </h2>
        <p class="text-h6 text-medium-emphasis">
          Tecnología de punta para conectar clientes y técnicos de manera eficiente
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(feature, index) in features"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            class="feature-card h-100"
            elevation="2"
            hover
          >
            <v-card-text class="text-center pa-6">
              <v-avatar
                :color="feature.color"
                size="80"
                class="mb-4"
              >
                <v-icon :icon="feature.icon" size="40" color="white" />
              </v-avatar>
              
              <h3 class="text-h5 font-weight-bold mb-3">
                {{ feature.title }}
              </h3>
              
              <p class="text-body-1 text-medium-emphasis">
                {{ feature.description }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.features-section {
  background-color: #ffffff;
}

.feature-card {
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
}
</style>
