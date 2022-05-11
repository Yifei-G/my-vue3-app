<template>

<!--  We need to use reactiveObj.count instead of simple count-->
  <h2>Count is: {{ reactiveObj.count }}</h2>
  <button @click="increment">Increment the number!</button>
</template>

<!--Using directly the CompositionAPI by adding setup into the script tag-->
<script setup>

import { reactive } from 'vue';

const reactiveObj = reactive({
  count: 0,
});

//This is a function that change the count's value;
function increment() {
  //count is not an reactive object anymore, it's a property.
  // So no .value will be used anymore!
  console.log(reactiveObj.count);
  return reactiveObj.count++;
}
</script>

<style scoped>


</style>
