import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Criar a instância do Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

// Criar a aplicação e usar Vuetify e Vue Router
const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')