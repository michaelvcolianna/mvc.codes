import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.MODE === 'production' ? 'https://mvc.codes' : 'http://localhost:4321',
})
