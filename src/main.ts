import { createApp } from 'vue'
import { router } from './router'
import './style.css'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'

createApp(App)
  .use(router)
  .use(VueQueryPlugin)
  .use(createPinia())
  .mount('#app')

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser')
  worker.start()
}