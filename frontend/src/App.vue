<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="test()">CLICK ME</button>
  </div>
</template>

<script>
import api from './api/api'

export default {
  name: 'App',
  methods: {
    test(){
      console.log('got it')
      api.getCompAPI(
        (success) => {
          console.log(success)
        },
        (error) => {
          console.log(error)
        }
      )
    }
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
