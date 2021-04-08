<template>
  <div>
    <div class="content" id="recommendContainer">
      <h1 class="content-title">Für dich herausgesucht</h1>

      <!-- Use one row to support responsive design -->
      <div class="row">
        <Card v-for="recommendedQuiz in recommended" :key="recommendedQuiz"
              :title="recommendedQuiz.name"
              :content="recommendedQuiz.subject"/>
      </div>
    </div>

    <div class="content" id="challengeContainer">
      <h1 class="content-title">Challenge mal...</h1>

      <div class="row">
        <ChallengerCard v-for="challengerPlayer in challengers" :key="challengerPlayer"
              :player="challengerPlayer"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from "@/components/Card.vue";
import ChallengerCard from "@/components/ChallengerCard.vue";
import {Player} from "@/types/Player";

export default defineComponent({
  name: 'Home',

  components: {
    ChallengerCard,
    Card
  },

  data() {
    return {
      recommended: [
        {name: "No. 1 Quiz", subject: "Algo 1"},
        {name: "Syntaktischer Zucker", subject: "SWT 1"},
        {name: "Rafaels Dahmen", subject: "LA oder so"},
      ],
      challengers: this.createSamplePlayers(),
    }
  },

  methods: {
    createSamplePlayers(): Player[] {
      return [
          new Player("Elite-Gegner", "../assets/logo.png", 10069, 201),
          new Player("Wilderich", "../assets/logo.png", 995, 17),
          new Player("Augusto M.", "../assets/logo.png", 8087, 187),
          new Player("Bruno der Kameramann", "../assets/logo.png", 209, 2)
      ]
    }
  }
});
</script>

<style>
#recommendContainer h1 {
  text-align: left;
  padding: 20px 0 0 55px;
  font-size: 44px;
  font-family: 'Noto Sans JP', sans-serif;
}

#challengeContainer h1 {
  text-align: left;
  padding: 20px 0 0 55px;
  font-size: 44px;
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
