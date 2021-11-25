import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './Routing'

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
