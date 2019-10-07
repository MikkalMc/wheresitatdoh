<template>
  <v-app>
    <v-content>
      <Filters/>
    </v-content>
  </v-app>
</template>

<script>
import Filters from './components/Filters'
import api from './api/api'

export default {
  name: 'App',
  components: {
    Filters
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
}
</script>
