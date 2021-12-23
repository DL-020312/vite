import { createApp } from 'vue'
import store from "./store/index"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "./router/index.js"


const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
.mount('#app')
