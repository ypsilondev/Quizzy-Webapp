import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require("halfmoon/css/halfmoon-variables.min.css");

export const halfmoon = require("halfmoon");

createApp(App).use(router).mount('#app')
