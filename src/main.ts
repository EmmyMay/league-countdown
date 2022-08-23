import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:windi.css'
import TwicPics from '@twicpics/components/vue3'
import '@twicpics/components/style.css'

const app = createApp(App)
app.use(router, TwicPics, {
  domain: 'https://sidepro.twic.pics',
})
app.mount('#app')
