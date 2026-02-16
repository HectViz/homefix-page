<script setup lang="ts">
//
</script>

<template>
  <section class="cta-section py-16">
    <v-container>
      <v-card
        class="cta-card pa-8 pa-md-12"
        elevation="8"
      >
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="text-h3 text-md-h2 font-weight-bold mb-4">
              ¿Listo para Comenzar?
            </h2>
            <p class="text-h6 text-medium-emphasis mb-8">
              Únete a miles de usuarios que ya confían en HomeFix para resolver sus problemas del hogar
            </p>
            
            <div class="d-flex flex-column flex-sm-row justify-center ga-4">
              <v-btn
                color="primary"
                size="x-large"
                variant="flat"
                prepend-icon="mdi-account-plus"
              >
                Crear Cuenta Gratis
              </v-btn>
              <v-btn
                color="white"
                size="x-large"
                variant="outlined"
                prepend-icon="mdi-phone"
              >
                Contactar Ventas
              </v-btn>
            </div>

            <v-row class="mt-8 text-center">
              <v-col cols="12" sm="4">
                <v-icon icon="mdi-shield-check" size="32" color="success" class="mb-2" />
                <div class="text-body-1 font-weight-bold">100% Seguro</div>
              </v-col>
              <v-col cols="12" sm="4">
                <v-icon icon="mdi-credit-card-off" size="32" color="info" class="mb-2" />
                <div class="text-body-1 font-weight-bold">Sin Tarjeta</div>
              </v-col>
              <v-col cols="12" sm="4">
                <v-icon icon="mdi-clock-fast" size="32" color="warning" class="mb-2" />
                <div class="text-body-1 font-weight-bold">Registro en 30s</div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </section>
</template>

<style scoped>
.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.cta-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
}
</style>
