<template>
  <div>
    <img src="../assets/logo.png">

    <form class="w-400">
      <div class="form-group">
        <label for="username" class="required">E-Mail-Adresse</label>
        <input type="text" class="form-control" id="email" placeholder="E-Mail-Adresse" required="required"
          v-model="emailModel">
      </div>

      <div class="form-group">
        <label for="username" class="required">Benutzername</label>
        <input type="text" class="form-control" id="username" placeholder="Benutzername" required="required"
          v-model="usernameModel">
      </div>
      <div class="form-group">
        <label for="password" class="required">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" required="required"
          v-model="passwordModel">
        <div class="form-text">
          Mindestens 4 Zeichen
        </div>
      </div>
      <div class="form-group">
        <label for="confirm-password" class="required">Confirm password</label>
        <input type="password" class="form-control" id="confirm-password" placeholder="Confirm password" required="required"
          v-model="confirmPasswordModel">
      </div>
      <input class="btn btn-primary btn-block" type="submit" value="Account erstellen" @click="createAccount">
    </form>

    <br>

    <button class="btn" type="button" @click="routeLogin()">Anmelden</button>
  </div>
</template>

<script>
import Util from "@/Util.ts";
import router from "@/router";

export default {
  data() {
    return  {
      emailModel: "",
      usernameModel: "",
      passwordModel: "",
      confirmPasswordModel: ""
    }
  },

  methods: {
    createAccount() {
      if (!Util.E_MAIL_PATTERN.test(this.emailModel)) {
        document.getElementById("email").classList.add("is-invalid");
      } else {
        document.getElementById("email").classList.remove("is-invalid");
      }

      if (this.usernameModel.trim().length === 0) {
        document.getElementById("username").classList.add("is-invalid");
      } else {
        document.getElementById("username").classList.remove("is-invalid");
      }

      if (this.passwordModel.trim().length < 4) {
        document.getElementById("password").classList.add("is-invalid");
      } else {
        document.getElementById("password").classList.remove("is-invalid");
      }

      if (this.passwordModel !== this.confirmPasswordModel) {
        document.getElementById("confirm-password").classList.add("is-invalid");
      } else {
        document.getElementById("confirm-password").classList.remove("is-invalid");
      }

      // todo: Send registration request
    },

    routeLogin() {
      router.route("/login");
    }
  }
}
</script>
