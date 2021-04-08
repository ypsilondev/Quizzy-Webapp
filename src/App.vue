<template>
  <div id="app">
    <button class="btn" type="button" @click="halfmoon.toggleDarkMode()">Toggle Dark Mode</button>
    <router-view/>
  </div>
</template>

<script>
import { halfmoon } from './main'

export default {
  mounted() {
    halfmoon.onDOMContentLoaded();
  },
  setup() {
    return {
      halfmoon
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
