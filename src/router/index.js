import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import NavBar from "@/components/NavBar";

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      NavBar
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
