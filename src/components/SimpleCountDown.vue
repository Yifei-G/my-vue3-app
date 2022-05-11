<template>
  <h2>Count is: {{ reactiveObj.initialNum }}</h2>

  <!--  After you use toRefs(), you can use the property of the reactive object directly-->
  <!--  <h2>Count is: {{ initialNum }}</h2>-->
  <button @click="decrement">Count Down!</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name:'SimpleCountDown',

  // You can also use the setup function to write compositionAPI syntax
  setup() {

    const reactiveObj = reactive({
      initialNum: 10
    })

    function decrement() {
      return reactiveObj.initialNum--;
    }

    //we return the entire reactiveObj
    //Error: we can't only return reactiveObj.initialNum (we will lose the reactivity...)
    // return { reactiveObj.count, decrement};

    return { reactiveObj, decrement };

    //if you don't want to do reactiveObj.xxx all the time...
    //you can use toRefs()
    //return { ...toRefs(reactiveObj), decrement};

  }
}


</script>

<style scoped>
button {
  margin-bottom: 20px;
}

</style>