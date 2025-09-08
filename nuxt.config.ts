// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Use pages directory for routing
  pages: true,
  
  // Enable SSR
  ssr: true,
  
  // Global CSS
  css: [
    '@/assets/css/global.css'
  ],
  
  // Route rules for language handling
  routeRules: {
    '/': { redirect: '/en' },
    '/en/**': { ssr: true },
    '/tr/**': { ssr: true }
  },
  
  // Build configuration
  build: {
    transpile: []
  },
  
  // Runtime configuration
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000'
    }
  }
})
