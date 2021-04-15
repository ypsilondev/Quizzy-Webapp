<template>
  <div class="d-flex justify-content-center">
    <h1 id="logout-text">Login out...</h1>
  </div>
</template>

<script>
import {RestService} from "@/services/RestService.ts";
import router from "@/router";

export default {
  name: "Logout",
  mounted() {
    RestService.isLogin().then(isLogin => {
      if (isLogin) {
        RestService.revokeTokens().then(success => {
          document.getElementById('logout-text').innerText = success ? 'Logout successful' : 'Logout failed';
          setTimeout(() => {
            router.push({ name: 'Home' });
          }, 2000);
        })
      } else {
        document.getElementById('logout-text').innerText = 'Already log out';
        setTimeout(() => {
          router.push({ name: 'Home' });
        }, 2000);
      }
    })
  }
}
</script>
