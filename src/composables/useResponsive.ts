import { computed } from 'vue'
import { useDisplay } from 'vuetify'

export function useResponsive() {
  const { xs, sm, md, lg, xl, mobile, name } = useDisplay()

  const isMobile = computed(() => mobile.value)
  const isTablet = computed(() => sm.value || md.value)
  const isDesktop = computed(() => lg.value || xl.value)
  const breakpoint = computed(() => name.value)

  return {
    xs,
    sm,
    md,
    lg,
    xl,
    mobile,
    isMobile,
    isTablet,
    isDesktop,
    breakpoint
  }
}
