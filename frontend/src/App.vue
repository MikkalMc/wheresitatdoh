<template>
  <v-app>
    <!-- <v-navigation-drawer/> -->
    <v-content>
      <!-- <Filters/>
      <AdditionalFilters/> -->
      <Form/>
    </v-content>
  </v-app>
</template>

<script>
import Filters from './components/Filters'
import AdditionalFilters from './components/AdditionalFilters'
import Form from './components/Form'
import api from './api/api'

export default {
  name: 'App',
  components: {
    Filters,
    Form,
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
}
</script>
