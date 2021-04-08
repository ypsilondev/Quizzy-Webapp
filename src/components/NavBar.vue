<template>
  <div class="page-wrapper with-navbar">
    <!-- Navbar (immediate child of the page wrapper) -->
    <nav class="navbar">
      <!-- Navbar brand -->
      <a href="#" class="navbar-brand">
        <img src="../assets/logo.png" alt="">
        {{ appName }}
      </a>
      <!-- Navbar nav -->
      <ul class="navbar-nav d-none d-md-flex"> <!-- d-none = display: none, d-md-flex = display: flex on medium screens and up (width > 768px) -->
        <li class="nav-item active">
          <a href="#" class="nav-link">Docs</a>
        </li>
      </ul>

      <button class="btn btn-action ml-auto" @click="halfmoon.toggleDarkMode()">
        <span class="material-icons-outlined">dark_mode</span>
      </button>

      <!-- Navbar content (with the dropdown menu) -->
      <div class="navbar-content d-md-none ml-auto"> <!-- d-md-none = display: none on medium screens and up (width > 768px), ml-auto = margin-left: auto -->
        <div class="dropdown with-arrow">
          <button class="btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1">
            Menu
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right w-200" aria-labelledby="navbar-dropdown-toggle-btn-1"> <!-- w-200 = width: 20rem (200px) -->
            <a href="#" class="dropdown-item">Docs</a>
            <a href="#" class="dropdown-item">Products</a>
            <div class="dropdown-divider"></div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { halfmoon } from "@/main";
import Util from "@/Util.ts";

export default {
  setup() {
    return {
      halfmoon,
    }
  },

  data() {
    return {
      appName: Util.dercooleAppName
    }
  }
}
</script>
