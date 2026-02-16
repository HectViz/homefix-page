import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
  const scrollY = ref(0)
  const isScrolled = ref(false)

  const handleScroll = () => {
    scrollY.value = window.scrollY
    isScrolled.value = window.scrollY > 50
  }

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollY,
    isScrolled,
    scrollToElement,
    scrollToTop
  }
}
