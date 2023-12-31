import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components'
import router from "@/router/router"
import store from '@/store'

const app = createApp(App)

components.forEach(element => {
    app.component(element.name, element)
});

app
.use(router)
.use(store)
.mount('#app')
