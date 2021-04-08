<template>
  <div>
    <div id="recommendContainer">
      <h1 class="content">Für dich herausgesucht</h1>
      <Card v-for="(recommendedQuiz, i) in recommended" :key="i" :title="recommendedQuiz.name" :content="recommendedQuiz.subject"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from "@/components/Card.vue";

export default defineComponent({
  name: 'Home',

  components: {
    Card
  },

  data() {
    return {
      recommended: [
        {name: "No. 1 Quiz", subject: "Algo 1"},
        {name: "Syntaktischer Zucker", subject: "SWT 1"},
        {name: "Rafaels Dahmen", subject: "LA oder so"},
      ]
    }
  }
});
</script>

<style>
#recommendContainer h1 {
  text-align: left;
  padding: 0 0 0 55px;
  font-size: 44px;
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
