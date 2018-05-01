<template>

  <div id="app">
    <h1>List of Cars</h1>
    <ul>
    	<li v-for="car in cars">{{ car }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {     
    return {
    	cars: ['Saab', 'Datson', 'Seppuku', 'Fiat']
    }
  }
}
</script>

<style>

</style>