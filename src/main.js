import { createApp } from 'vue'
import App from './App.vue'
import router from '@/route'
let vue=createApp(App);
// createApp(App).mount('#app')

vue.use(router)
vue.mount('#app')