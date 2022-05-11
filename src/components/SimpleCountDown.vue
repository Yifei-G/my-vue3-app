<template>
<!--  When VUE finds a ref in the template it will automatically expose the value-->
  <h2>Count is: {{ initialNum }}</h2>
  <button @click="decrement">Count Down!</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name:'SimpleCountDown',

  // You can also use the setup function to write compositionAPI syntax
  setup() {

    const initialNum = ref(10);

    function decrement() {
      return initialNum.value--;
    }

    //We need to return the objects, functions that the template needs to render...
    return { initialNum, decrement };

  }
}


</script>

<style scoped>
button {
  margin-bottom: 20px;
}

</style>