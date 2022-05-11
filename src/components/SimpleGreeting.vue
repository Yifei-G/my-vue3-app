<template>
  <div>
    <label for="name">Write your name:</label>
    <input type="text" id="name" v-model="name" />
    <h2>{{ greeting }}</h2>
  </div>

</template>

<script setup>
  import {ref, computed} from "vue";

  const name = ref("");
  const greeting = computed( () => {
    return 'Hello ' + name.value;
  });

</script>

<style scoped>

</style>