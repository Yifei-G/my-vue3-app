<template>
  <h2>Count is: {{ count }}</h2>
  <button @click="increment">Increment the number!</button>
</template>

<!--Using directly the CompositionAPI by adding setup into the script tag-->
<script setup>

import { ref } from 'vue';

// count is a reactive reference object (not a primitive number)
const count = ref(0);

//This is a function that change the count's value;
function increment() {
  console.log(count);
  return count.value++;
}
</script>

<style scoped>


</style>
