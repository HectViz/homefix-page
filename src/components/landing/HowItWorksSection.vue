<script setup lang="ts">
const steps = [
  {
    number: 1,
    title: 'Describe tu Problema',
    description: 'Escribe con tus propias palabras qué está fallando. Nuestra IA lo analizará y categorizará automáticamente.',
    icon: 'mdi-message-text-outline'
  },
  {
    number: 2,
    title: 'Recibe Sugerencias',
    description: 'La IA te muestra los 3 mejores técnicos según cercanía, calificación y experiencia en problemas similares.',
    icon: 'mdi-account-multiple'
  },
  {
    number: 3,
    title: 'Seguimiento en Vivo',
    description: 'Ve la ubicación del técnico en tiempo real y comunícate por chat con asistencia de IA.',
    icon: 'mdi-map-marker-path'
  },
  {
    number: 4,
    title: 'Pago y Calificación',
    description: 'Confirma el servicio y califica al técnico. El pago se libera solo cuando estés satisfecho.',
    icon: 'mdi-star-check'
  }
]
</script>

<template>
  <section id="how-it-works" class="how-it-works-section py-16">
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">
          ¿Cómo Funciona?
        </h2>
        <p class="text-h6 text-medium-emphasis">
          Cuatro simples pasos para resolver cualquier problema en tu hogar
        </p>
      </div>

      <v-row>
        <v-col
          v-for="(step, index) in steps"
          :key="index"
          cols="12"
          md="6"
          lg="3"
        >
          <div class="step-card text-center">
            <div class="step-number-wrapper mb-4">
              <div class="step-number">
                {{ step.number }}
              </div>
              <v-icon
                :icon="step.icon"
                size="40"
                color="primary"
                class="step-icon"
              />
            </div>
            
            <h3 class="text-h5 font-weight-bold mb-3">
              {{ step.title }}
            </h3>
            
            <p class="text-body-1 text-medium-emphasis">
              {{ step.description }}
            </p>

            <v-icon
              v-if="index < steps.length - 1"
              icon="mdi-arrow-right"
              size="32"
              color="primary"
              class="arrow-icon d-none d-lg-block"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.how-it-works-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.step-card {
  position: relative;
  padding: 2rem;
}

.step-number-wrapper {
  position: relative;
  display: inline-block;
}

.step-number {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  color: #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.step-icon {
  position: absolute;
  bottom: -10px;
  right: -10px;
  background: white;
  border-radius: 50%;
  padding: 8px;
}

.arrow-icon {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
}

h3, p {
  color: white;
}
</style>
