import { createPinia } from 'pinia'
import router from '../router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import type { App } from 'vue'

const vuetify = createVuetify({
    components,
    directives,
})

export default function registerPlugins(app: App<Element>): void {
    app.use(router).use(createPinia()).use(vuetify)
}
