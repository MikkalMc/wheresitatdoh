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
    departments: ["A/R", "AAS", "ACCT", "AE", "AFRS", "AIS", "AM", "ANTH", "ARAB", "ARMN", "ART", "ASTR", "ATHL", "BIOL", "BLAW", "BUS", "CADV", "CAS", "CCE", "CD", "CE", "CECS", "CHEM", "CHIN", "CHS", "CIT", "CJS", "CLAS", "CM", "COMP", "COMS", "CTVA", "DEAF", "ECE", "ECON", "EDUC", "EED", "ELPS", "ENGL", "EOH", "EPC", "FCS", "FIN", "FLIT", "FREN", "GBUS", "GEOG", "GEOL", "GWS", "HEBR", "HHD", "HIST", "HSCI", "HUM", "IS", "ITAL", "JAPN", "JOUR", "JS", "KIN", "KOR", "LING", "LRS", "MATH", "MCOM", "ME", "MGT", "MKT", "MPA", "MSE", "MUS", "NURS", "PERS", "PHIL", "PHSC", "PHYS", "POLS", "PSY", "PT", "QS", "RE", "RS", "RTM", "RUSS", "SBS", "SCI", "SCM", "SED", "SOC", "SOM", "SPAN", "SPED", "SUST", "SWRK", "TH", "UNIV", "URBS"]
  }),
}
</script>
