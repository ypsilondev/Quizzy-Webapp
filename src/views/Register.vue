<template>
  <div style="display: flex; justify-content: center">
    <div class="card">
      <div class="text-center">
        <img src="../assets/logo.png" alt="Logo">
      </div>

      <h2 class="card-title text-center">Account erstellen</h2>

      <form class="w-400">
        <div class="form-group">
          <label for="username" class="required">E-Mail-Adresse</label>
          <input type="email" class="form-control" id="email" placeholder="E-Mail-Adresse" required="required"
            v-model="emailModel">
        </div>

        <div class="form-group">
          <label for="username" class="required">Benutzername</label>
          <input type="text" class="form-control" id="username" placeholder="Benutzername" required="required"
            v-model="usernameModel">
        </div>
        <div class="form-group">
          <label for="password" class="required">Password (min 4. Zeichen)</label>
          <input type="password" class="form-control" id="password" placeholder="Password" required="required"
            v-model="passwordModel">
        </div>
        <div class="form-group">
          <label for="confirm-password" class="required">Confirm password</label>
          <input type="password" class="form-control" id="confirm-password" placeholder="Confirm password" required="required"
            v-model="confirmPasswordModel">
        </div>

        <div class="form-group text-right">
          <button class="btn mr-15" type="button" @click="routeLogin()">Anmelden</button>
          <input class="btn btn-primary" type="button" value="Account erstellen" @click="createAccount">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Util from "@/Util.ts";
import router from "@/router";
import {RestService} from "@/services/RestService.ts";

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
      let invalid = false;

      if (!Util.E_MAIL_PATTERN.test(this.emailModel)) {
        document.getElementById("email").classList.add("is-invalid");
        invalid = true;
      } else {
        document.getElementById("email").classList.remove("is-invalid");
      }

      if (this.usernameModel.trim().length === 0) {
        document.getElementById("username").classList.add("is-invalid");
        invalid = true;
      } else {
        document.getElementById("username").classList.remove("is-invalid");
      }

      if (this.passwordModel.trim().length < 4) {
        document.getElementById("password").classList.add("is-invalid");
        invalid = true;
      } else {
        document.getElementById("password").classList.remove("is-invalid");
      }

      if (this.passwordModel !== this.confirmPasswordModel) {
        document.getElementById("confirm-password").classList.add("is-invalid");
        invalid = true;
      } else {
        document.getElementById("confirm-password").classList.remove("is-invalid");
      }

      if (!invalid) {
        RestService.registerUser(this.usernameModel, this.emailModel, this.passwordModel,
            "606f801770402029ae887153");
        //TODO: profileImage is currently hardcoded
        this.routeLogin();
      }
    },

    routeLogin() {
      router.push({ name: 'Login' });
    }
  }
}
</script>
