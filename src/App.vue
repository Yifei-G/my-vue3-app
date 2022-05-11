<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import TemperatureConverter from "./components/TemperatureConverter.vue";
import UnitConverter from "./components/UnitConverter.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TemperatureConverter/>
<!--  <UnitConverter/>-->


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
