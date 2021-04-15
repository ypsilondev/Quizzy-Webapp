import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import NavBar from "@/components/NavBar";
import Register from "@/views/Register";
import Logout from "@/views/Logout";

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
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
