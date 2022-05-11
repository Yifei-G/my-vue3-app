<template>
  <select v-model="unit">
    <option disabled>Please select an option</option>
    <option>Temperature</option>
    <option>Weight</option>
  </select>

  <h2 v-if="unit === 'Temperature'"> Temperature Converter: </h2>
  <h2 v-if="unit === 'Weight'">Weight Converter:</h2>

  <div class="input-container">
    <label v-if="unit === 'Temperature'"> Temperature in Celsius: </label>
    <label v-if="unit === 'Weight'"> Weight in Kilo: </label>

    <input v-if="unit === 'Temperature'" type="number" v-model="celsius"/>
    <input v-if="unit === 'Weight'" type="number" v-model="kilo"/>
  </div>

  <div>
    <h5>Result:</h5>
    <h5 v-if="unit === 'Temperature'">{{ convertTemperature }} F</h5>
    <h5 v-if="unit === 'Weight'">{{ convertWeight }} lb</h5>
  </div>

</template>

<script setup>
import {ref} from "vue";
import temperatureConvertion from "../utils/temperature-convertion";
import weightConvertion from "../utils/weight-convertion";

const unit = ref('Please select an option');

const { celsius, convertTemperature } = temperatureConvertion();

const { kilo, convertWeight } = weightConvertion();

</script>

<style scoped>

</style>