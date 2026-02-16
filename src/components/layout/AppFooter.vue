<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  product: [
    { title: 'Características', href: '#features' },
    { title: 'Cómo Funciona', href: '#how-it-works' },
    { title: 'Precios', href: '#' },
    { title: 'FAQ', href: '#' }
  ],
  company: [
    { title: 'Sobre Nosotros', href: '#' },
    { title: 'Blog', href: '#' },
    { title: 'Carreras', href: '#' },
    { title: 'Contacto', href: '#' }
  ],
  legal: [
    { title: 'Términos de Servicio', href: '#' },
    { title: 'Política de Privacidad', href: '#' },
    { title: 'Cookies', href: '#' },
    { title: 'Licencias', href: '#' }
  ],
  social: [
    { icon: 'mdi-facebook', href: '#', color: '#1877F2' },
    { icon: 'mdi-twitter', href: '#', color: '#1DA1F2' },
    { icon: 'mdi-instagram', href: '#', color: '#E4405F' },
    { icon: 'mdi-linkedin', href: '#', color: '#0A66C2' }
  ]
}
</script>

<template>
  <v-footer class="footer bg-grey-darken-4 text-white">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="mb-4 mb-md-0">
          <div class="d-flex align-center mb-4">
            <v-icon icon="mdi-home-city" size="40" color="primary" class="mr-2" />
            <span class="text-h4 font-weight-bold">HomeFix</span>
          </div>
          <p class="text-body-1 mb-4">
            La plataforma inteligente que conecta clientes con técnicos profesionales verificados.
          </p>
          <div class="d-flex ga-2">
            <v-btn
              v-for="social in footerLinks.social"
              :key="social.icon"
              :icon="social.icon"
              :color="social.color"
              variant="flat"
              size="small"
            />
          </div>
        </v-col>

        <v-col cols="12" sm="4" md="2">
          <h3 class="text-h6 font-weight-bold mb-4">Producto</h3>
          <v-list density="compact" bg-color="transparent">
            <v-list-item
              v-for="link in footerLinks.product"
              :key="link.title"
              :href="link.href"
              class="px-0"
            >
              <v-list-item-title class="text-grey-lighten-1">
                {{ link.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" sm="4" md="2">
          <h3 class="text-h6 font-weight-bold mb-4">Compañía</h3>
          <v-list density="compact" bg-color="transparent">
            <v-list-item
              v-for="link in footerLinks.company"
              :key="link.title"
              :href="link.href"
              class="px-0"
            >
              <v-list-item-title class="text-grey-lighten-1">
                {{ link.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" sm="4" md="2">
          <h3 class="text-h6 font-weight-bold mb-4">Legal</h3>
          <v-list density="compact" bg-color="transparent">
            <v-list-item
              v-for="link in footerLinks.legal"
              :key="link.title"
              :href="link.href"
              class="px-0"
            >
              <v-list-item-title class="text-grey-lighten-1">
                {{ link.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="2">
          <h3 class="text-h6 font-weight-bold mb-4">Descargar App</h3>
          <v-btn
            block
            color="white"
            variant="outlined"
            prepend-icon="mdi-apple"
            class="mb-2"
          >
            App Store
          </v-btn>
          <v-btn
            block
            color="white"
            variant="outlined"
            prepend-icon="mdi-google-play"
          >
            Google Play
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-6 border-opacity-25" />

      <v-row>
        <v-col cols="12" class="text-center">
          <p class="text-body-2 text-grey-lighten-1">
            © {{ currentYear }} HomeFix. Todos los derechos reservados.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer {
  padding: 48px 0 24px;
}
</style>
