import { createApp } from 'vue'

import App from './App.vue'

import BaseInput from './components/UIs/BaseInput.vue'
import BaseButton from './components/UIs/BaseButton.vue'
import registerPlugin from './plugin/index'
import 'vuetify/styles'
import './assets/styles/base.css'
import './assets/styles/main.css'

const app = createApp(App)
registerPlugin(app)
app.component('BaseInput', BaseInput)
app.component('BaseButton', BaseButton)

app.mount('#app')
