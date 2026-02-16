<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  icon: string
  color?: string
  subtitle?: string
  trend?: {
    value: number
    isPositive: boolean
  }
}>()
</script>

<template>
  <v-card elevation="2" class="stats-card">
    <v-card-text>
      <div class="d-flex justify-space-between align-start mb-2">
        <div>
          <p class="text-caption text-medium-emphasis mb-1">{{ title }}</p>
          <h2 class="text-h4 font-weight-bold">{{ value }}</h2>
          <p v-if="subtitle" class="text-caption text-medium-emphasis mt-1">
            {{ subtitle }}
          </p>
        </div>
        <v-avatar :color="color || 'primary'" size="48">
          <v-icon :icon="icon" color="white" />
        </v-avatar>
      </div>

      <div v-if="trend" class="d-flex align-center mt-2">
        <v-icon
          :icon="trend.isPositive ? 'mdi-trending-up' : 'mdi-trending-down'"
          :color="trend.isPositive ? 'success' : 'error'"
          size="small"
          class="mr-1"
        />
        <span
          :class="trend.isPositive ? 'text-success' : 'text-error'"
          class="text-caption font-weight-medium"
        >
          {{ Math.abs(trend.value) }}%
        </span>
        <span class="text-caption text-medium-emphasis ml-1">
          vs mes anterior
        </span>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.stats-card {
  height: 100%;
  transition: transform 0.2s;
}

.stats-card:hover {
  transform: translateY(-4px);
}
</style>
