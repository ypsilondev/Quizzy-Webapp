import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NavBar from "@/components/NavBar";

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      NavBar
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
