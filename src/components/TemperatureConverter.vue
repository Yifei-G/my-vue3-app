<template>
  <h2>Temperature Converter:</h2>
  <div class="input-container">
    <label>Temperature in Celsius:</label>
    <input type="number" v-model="celsius"/>
  </div>

  <div>
    <h5>Result:</h5>
    <h5>{{ convertTemperature }} F</h5>
  </div>

</template>


<script setup>
import {computed, ref} from "vue";
import temperatureConvertion from "../utils/temperature-convertion";
const celsius = ref(0);

const convertTemperature = computed( () => {
    return (celsius.value * 9/5) + 32;
});

//const { celsius, convertTemperature } = temperatureConvertion();

</script>

<style scoped>
.input-container {
  display: flex;
  width: 10%;
  margin: auto;
  flex-direction: column;
}
.input-container label, input {
  margin-bottom: 10px;
}

</style>