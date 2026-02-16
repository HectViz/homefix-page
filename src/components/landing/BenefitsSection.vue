<script setup lang="ts">
const clientBenefits = [
  'Respuesta inmediata 24/7',
  'Precios justos y transparentes',
  'Técnicos verificados y calificados',
  'Pago protegido hasta confirmar servicio',
  'Historial completo de tu hogar',
  'Soporte con IA en tiempo real'
]

const technicianBenefits = [
  'Acceso a miles de clientes',
  'Gestión automática de agenda',
  'Pagos seguros y rápidos',
  'Perfil profesional con IA',
  'Sin comisiones abusivas',
  'Herramientas de crecimiento'
]
</script>

<template>
  <section id="benefits" class="benefits-section py-16">
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">
          Beneficios para Todos
        </h2>
        <p class="text-h6 text-medium-emphasis">
          Una plataforma diseñada pensando en clientes y técnicos
        </p>
      </div>

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="benefit-card h-100" elevation="4">
            <v-card-title class="text-h4 font-weight-bold text-center py-6 bg-primary">
              <v-icon icon="mdi-account" size="40" class="mr-2" />
              Para Clientes
            </v-card-title>
            
            <v-card-text class="pa-8">
              <v-list lines="two">
                <v-list-item
                  v-for="(benefit, index) in clientBenefits"
                  :key="index"
                  class="px-0"
                >
                  <template #prepend>
                    <v-icon icon="mdi-check-circle" color="success" size="28" />
                  </template>
                  <v-list-item-title class="text-h6">
                    {{ benefit }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>

              <v-btn
                color="primary"
                size="large"
                block
                class="mt-6"
                prepend-icon="mdi-account-plus"
              >
                Registrarme como Cliente
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="benefit-card h-100" elevation="4">
            <v-card-title class="text-h4 font-weight-bold text-center py-6 bg-secondary">
              <v-icon icon="mdi-toolbox" size="40" class="mr-2" />
              Para Técnicos
            </v-card-title>
            
            <v-card-text class="pa-8">
              <v-list lines="two">
                <v-list-item
                  v-for="(benefit, index) in technicianBenefits"
                  :key="index"
                  class="px-0"
                >
                  <template #prepend>
                    <v-icon icon="mdi-check-circle" color="success" size="28" />
                  </template>
                  <v-list-item-title class="text-h6">
                    {{ benefit }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>

              <v-btn
                color="secondary"
                size="large"
                block
                class="mt-6"
                prepend-icon="mdi-briefcase-plus"
              >
                Registrarme como Técnico
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.benefits-section {
  background-color: #f5f7fa;
}

.benefit-card {
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: scale(1.02);
}
</style>
