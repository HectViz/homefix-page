<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useAppStore } from '@/stores/app'

const { login, loading } = useAuth()
const appStore = useAppStore()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)

const emailRules = [
  (v: string) => !!v || 'El email es requerido',
  (v: string) => /.+@.+\..+/.test(v) || 'El email debe ser válido'
]

const passwordRules = [
  (v: string) => !!v || 'La contraseña es requerida',
  (v: string) => v.length >= 6 || 'La contraseña debe tener al menos 6 caracteres'
]

const handleLogin = async () => {
  try {
    await login(email.value, password.value)
    appStore.showSnackbar('¡Bienvenido!', 'success')
  } catch (error) {
    appStore.showSnackbar('Credenciales inválidas', 'error')
  }
}

const demoCredentials = [
  { role: 'Técnico', email: 'tecnico@homefix.com', password: 'tecnico123' },
  { role: 'Cliente', email: 'cliente@homefix.com', password: 'cliente123' }
]

const fillDemo = (demo: typeof demoCredentials[0]) => {
  email.value = demo.email
  password.value = demo.password
}
</script>

<template>
  <v-container fluid class="login-container fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card elevation="8" class="login-card">
          <v-card-text class="pa-8">
            <div class="text-center mb-6">
              <v-icon icon="mdi-home-city" size="64" color="primary" />
              <h1 class="text-h4 font-weight-bold mt-4">HomeFix</h1>
              <p class="text-body-1 text-medium-emphasis">
                Inicia sesión para continuar
              </p>
            </div>

            <v-form @submit.prevent="handleLogin">
              <v-text-field
                v-model="email"
                label="Correo electrónico"
                type="email"
                prepend-inner-icon="mdi-email"
                variant="outlined"
                :rules="emailRules"
                :disabled="loading"
                class="mb-2"
              />

              <v-text-field
                v-model="password"
                label="Contraseña"
                :type="showPassword ? 'text' : 'password'"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                variant="outlined"
                :rules="passwordRules"
                :disabled="loading"
                @click:append-inner="showPassword = !showPassword"
                class="mb-2"
              />

              <div class="d-flex justify-space-between align-center mb-4">
                <v-checkbox
                  v-model="rememberMe"
                  label="Recordarme"
                  density="compact"
                  hide-details
                />
                <v-btn
                  variant="text"
                  size="small"
                  color="primary"
                >
                  ¿Olvidaste tu contraseña?
                </v-btn>
              </div>

              <v-btn
                type="submit"
                color="primary"
                size="large"
                block
                :loading="loading"
                class="mb-4"
              >
                Iniciar Sesión
              </v-btn>

              <v-divider class="my-4" />

              <div class="text-center">
                <p class="text-body-2 text-medium-emphasis mb-2">
                  ¿No tienes cuenta?
                </p>
                <v-btn
                  variant="outlined"
                  color="primary"
                  block
                  to="/"
                >
                  Registrarse
                </v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>

        <v-card elevation="4" class="mt-4 demo-card">
          <v-card-title class="text-center bg-grey-lighten-4">
            <v-icon icon="mdi-test-tube" class="mr-2" />
            Credenciales de Prueba
          </v-card-title>
          <v-card-text class="pa-4">
            <v-list density="compact">
              <v-list-item
                v-for="(demo, index) in demoCredentials"
                :key="index"
                @click="fillDemo(demo)"
                class="demo-item"
              >
                <template #prepend>
                  <v-icon 
                    :icon="demo.role === 'Técnico' ? 'mdi-toolbox' : 'mdi-account'" 
                    color="primary"
                  />
                </template>
                <v-list-item-title class="font-weight-bold">
                  {{ demo.role }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ demo.email }}
                </v-list-item-subtitle>
                <template #append>
                  <v-icon icon="mdi-chevron-right" size="small" />
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.login-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.login-card {
  border-radius: 16px;
}

.demo-card {
  border-radius: 12px;
}

.demo-item {
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.demo-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
