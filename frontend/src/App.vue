<template>
  <!--
  <div id="app">
    <button @click="test()">CLICK ME</button>
  </div>
  -->
  <div id ="filterdiv">
    <filters>
    </filters>
  </div>
  <v-app>
    <v-content>
      <HelloWord/>
    </v-content>  
  </v-app>
</template>

<script>
  import Filters from './components/Filters'

  export default {
    name: 'filterdiv',
    components: {
      'filters' : Filters
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
