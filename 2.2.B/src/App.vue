<template>

  <div id="app">
    <h1>This is the main page</h1>
    <cars></cars>
  </div>
</template>

<script>
import Cars from './cars.vue'
export default {
  components: {
    'cars' : Cars
  },
  data () {     
    return {

    }
  }
}
</script>

<style>

</style>
