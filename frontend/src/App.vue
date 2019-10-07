<template>
  <v-app>
    <!-- <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar> -->

    <v-content>
      <HelloWorld/>
      <AdditionalFilters/>
      <!-- <button @click="test()">CLICK ME</button> -->
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AdditionalFilters from './components/AdditionalFilters'
import api from './api/api'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AdditionalFilters,
  },
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
  },
  data: () => ({
  }),
};
</script>
