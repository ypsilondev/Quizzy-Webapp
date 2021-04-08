<template>
  <div class="card w-300" id="card">
    <h2 class="card-title">
      {{ title }}
    </h2>
    <div id="content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String
  }
}
</script>

<style>
#card {
  cursor: pointer;
  float: left;
  margin-top: 0;
  margin-right: 0;
}

#content {
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
