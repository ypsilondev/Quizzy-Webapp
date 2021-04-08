<template>
  <div class="card w-250" id="card">
    <div id="headspace">
      <img src="../assets/logo.png" :alt="player.username"
           class="profilePicture centerVertically img-fluid w-25 h-25"
           id="userIcon">
      <h2 class="card-title centerVertically text-truncate">{{ player.username }}</h2>
    </div>

    <div id="content">
      {{ player.wins }} mal gewonnen
    </div>
  </div>
</template>

<script>
import {Player} from "@/types/Player";

export default {
  props: {
    player: Player
  },

  methods: {
    nameWithAdjustedLength(value) {
      if (value.length > 12) {
        return value.substring(0, 12) + "...";
      }
      return value;
    }
  },
}
</script>

<style>
#card {
  cursor: pointer;
  margin-top: 0;
  margin-right: 0;
}

#headspace {
  position: relative;
  height: 50px;
}
#headspace h2 {
  font-size: 1.7rem;
  text-align: left;
}

#content {
  font-family: 'Noto Sans JP', sans-serif;
}

.centerVertically {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.profilePicture {
  float: left;
  border: 2px solid #807d7d;
  border-radius: 100%;
  margin-right: 12px;
}
</style>
