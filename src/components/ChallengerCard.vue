<template>
  <div class="card w-200 p-0" id="card">
    <img src="../assets/person.jpg" :alt="player.username"
         class="img-fluid rounded-top"
         id="userIcon">

    <div class="content" id="content">
      <h2 class="card-title text-truncate">{{ player.username }}</h2>
      <div>
        <span class="badge">
          <div class="material-icons-outlined align-middle font-size-18 mr-5" style="margin-top: auto">emoji_events</div>
          <span class="align-middle align-text-bottom">{{ player.wins }}</span>
        </span>
        <span class="badge ml-5">
          <div class="material-icons-outlined align-middle font-size-18 mr-5">view_list</div>
          <span class="align-middle align-text-bottom">{{ player.reputationPoints }}</span>
        </span>
      </div>
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

.icon-text-pair {
  position: relative;
  height: 32px;
}
</style>
