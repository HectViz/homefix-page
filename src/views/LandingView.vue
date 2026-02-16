<script setup lang="ts">
import AppNavbar from '@/components/layout/AppNavbar.vue'
import HeroSection from '@/components/landing/HeroSection.vue'
import FeaturesSection from '@/components/landing/FeaturesSection.vue'
import HowItWorksSection from '@/components/landing/HowItWorksSection.vue'
import BenefitsSection from '@/components/landing/BenefitsSection.vue'
import CTASection from '@/components/landing/CTASection.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div>
    <AppNavbar />
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <BenefitsSection />
    <CTASection />
    <AppFooter />
  </div>
</template>
