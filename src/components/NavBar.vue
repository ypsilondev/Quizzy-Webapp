<template>
  <!-- Navbar (immediate child of the page wrapper) -->
  <nav class="navbar">
    <!-- Navbar brand -->
    <router-link to="/" class="navbar-brand">
      <img src="../assets/logo.png" alt="Quizzy Brand">
      {{ appName }}
    </router-link>
    <!-- Navbar nav -->
    <ul class="navbar-nav d-none d-md-flex"> <!-- d-none = display: none, d-md-flex = display: flex on medium screens and up (width > 768px) -->
      <li class="nav-item active">
        <a href="/" class="nav-link">Home</a>
      </li>
    </ul>

    <div class="navbar-content ml-auto d-none d-md-flex" style="height: 100%">
      <div class="dropdown" style="height: 100%">
        <a href="#" data-toggle="dropdown" id="avatar-popover-toggle" aria-haspopup="true" aria-expanded="false"
           style="height: 100%; display: flex; align-items: center">
          <img src="../assets/person.jpg" class="img-fluid rounded-circle" style="height: 66%;" alt="Your profil">
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="avatar-popover-toggle">
          <h6 class="dropdown-header">{{ user.displayName }}</h6>
          <div class="dropdown-divider"></div>
          <router-link class="dropdown-item" to="/profile">Profil</router-link>
          <router-link class="dropdown-item" to="/logout">Logout</router-link>
          <div class="dropdown-divider"></div>
          <div class="dropdown-content">
            <button class="btn btn-block" @click="halfmoon.toggleDarkMode()">Dunkelmodus umschalten</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Navbar content (with the dropdown menu) -->
    <div class="navbar-content d-md-none ml-auto"> <!-- d-md-none = display: none on medium screens and up (width > 768px), ml-auto = margin-left: auto -->
      <div class="dropdown with-arrow">
        <button class="btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1">
          Menu
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-right w-200" aria-labelledby="navbar-dropdown-toggle-btn-1"> <!-- w-200 = width: 20rem (200px) -->
          <a href="#" class="dropdown-item">Home</a>
          <div class="dropdown-divider"></div>
          <h6 class="dropdown-header">{{ user.displayName }}</h6>
          <div class="dropdown-divider"></div>
          <router-link class="dropdown-item" to="/profile">Profil</router-link>
          <router-link class="dropdown-item" to="/logout">Logout</router-link>
          <div class="dropdown-divider"></div>
          <div class="dropdown-content">
            <button class="btn btn-block" @click="halfmoon.toggleDarkMode()">Dunkelmodus umschalten</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { halfmoon } from "@/main";
import Util from "@/Util.ts";

export default {
  setup() {
    return {
      halfmoon
    }
  },

  data() {
    return {
      appName: Util.APP_NAME,
      //TODO: Use real user
      user: {
        displayName: "Username",
        _id: "_id",
        profileImage: "606f801770402029ae887153",
        totalScore: 1337
      }
    }
  }
}
</script>
