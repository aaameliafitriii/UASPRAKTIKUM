import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass'

const app = createApp(App)
app.use(Quasar, {
  plugins: {},
})
app.mount('#app')


