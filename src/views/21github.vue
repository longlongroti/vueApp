<template>
  <div>
    <top-nav-bar></top-nav-bar>
    <h1>github user search</h1>
    <div class="container">
      <github-search />
      <github-list />
    </div>
  </div>
</template>

<script>
import ComponentB from "@/components/comp-github-search.vue";
import ComponentA from "@/components/comp-github-list.vue";

export default {
  name: "github",
  components: {
    "github-search": ComponentB,
    "github-list": ComponentA,
  },
};
</script>

<style scoped>
</style>