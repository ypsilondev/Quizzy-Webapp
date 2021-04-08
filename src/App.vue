<template>
  <div id="app">
    <NavBar/>

    <!-- Content wrapper -->
    <div class="content-wrapper">
      <br><br><br><br>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { halfmoon } from './main'
import NavBar from "@/components/NavBar";

export default {
  components: {NavBar},
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
