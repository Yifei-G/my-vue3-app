<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import SimpleCounter from "./components/SimpleCounter.vue";
import SimpleCountDown from "./components/SimpleCountDown.vue";
import SimpleGreeting from "./components/SimpleGreeting.vue";

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
<!--  <HelloWorld msg="Hello Vue 3 + Vite" />-->
  <SimpleCounter />

  <SimpleCountDown />


  <SimpleGreeting />
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
