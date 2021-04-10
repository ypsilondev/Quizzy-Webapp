<template>
  <div id="app">
    <router-view name="NavBar"></router-view>
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
}
</style>
