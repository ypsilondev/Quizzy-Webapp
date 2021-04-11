<template>
  <div style="display: flex; justify-content: center">
    <div class="card">
      <div class="text-center">
        <img src="../assets/logo.png" alt="Quizzy-Logo">
      </div>

      <h2 class="card-title text-center">Anmelden</h2>

      <form class="w-400">
        <div class="form-group">
          <label for="username" class="required">Benutzername</label>
          <input type="text" class="form-control" id="username" placeholder="Benutzername" required="required"
            v-model="usernameModel">
        </div>

        <div class="form-group">
          <label for="password" class="required">Passwort</label>
          <input type="password" class="form-control" id="password" placeholder="Passwort" required="required"
            v-model="passwordModel">
          <div class="form-text">
            Mindestens 4 Zeichen.
          </div>
        </div>

        <div class="form-group">
          <div class="custom-checkbox">
            <input type="checkbox" id="remember" v-model="rememberModel">
            <label for="remember">Angemeldet bleiben</label>
          </div>
        </div>

        <div class="form-group text-right">
          <button class="btn mr-15" type="button" @click="routeCreateAccount()">Account erstellen</button>
          <input class="btn btn-primary" type="submit" value="Anmelden" @click="executeLogIn">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      usernameModel: "",
      passwordModel: "",
      rememberModel: true
    }
  },

  methods: {
    executeLogIn(event) {
      event.preventDefault();

      if (this.usernameModel.trim().length === 0) {
        document.getElementById("username").classList.add("is-invalid");
      } else {
        document.getElementById("username").classList.remove("is-invalid");
      }

      if (this.passwordModel.length < 4) {
        document.getElementById("password").classList.add("is-invalid");
      } else {
        document.getElementById("password").classList.remove("is-invalid");
      }

      // todo: Send login-request
    },

    routeCreateAccount() {
      router.push({ name: 'Register' });
    }
  }
}
</script>

<style>
</style>
