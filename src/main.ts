import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require("halfmoon/css/halfmoon-variables.min.css");

export const halfmoon = require("halfmoon");

createApp(App).use(router).mount('#app')

if (halfmoon.getPreferredMode() === "dark-mode") {
    halfmoon.toggleDarkMode();
}
else if (halfmoon.getPreferredMode() === "not-set") {
    document.body.classList.add("dark-mode");
    halfmoon.darkModeOn = !0;
}

