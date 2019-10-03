<template>
  <!--
  <div id="app">
    <button @click="test()">CLICK ME</button>
  </div>
  -->
  <!-- <div id ="filterdiv">
    <filters>
    </filters>
  </div> -->
  <v-app>
    <v-content>
      <HelloWord/>
    </v-content>  
  </v-app>
</template>

<script>
  import Filters from './components/Filters'
  import HelloWord from './components/Helloworld';
  import api from './api/api'

  export default {
    
    //name: 'filterdiv',
    name: 'App',
    components: {
      //'filters' : Filters
      HelloWord,
    },
    methods:{
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
    },
    data: () => ({

    }),
  };
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
