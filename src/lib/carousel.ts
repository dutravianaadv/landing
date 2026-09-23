const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Autoplay dos carrosséis de departamentos; desligado para quem pede menos movimento
export const DEPARTMENTS_AUTOPLAY = prefersReducedMotion
  ? false
  : { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }
