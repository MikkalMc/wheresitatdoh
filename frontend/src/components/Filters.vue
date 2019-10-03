<template>
  <v-container fluid class = "container">
    <v-col align="center">
       <v-row class="d-flex" cols="12" sm="6">
        <v-autocomplete
         label="Semester"
        :items="Semester"
        ></v-autocomplete>
      </v-row>
      <v-row class="d-flex" cols="12" sm="6">
         <v-autocomplete
         label="Class"
        :items="Class"
        ></v-autocomplete>
      </v-row>
      <v-row class="d-flex" cols="12" sm="6">
        <v-autocomplete
         label="Level"
        :items="Level"
        ></v-autocomplete>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default{
  data(){
    return{
    Semester:['spring 2019','fall 2019','spring 2020','fall 2020'],
    Class:['Class A','Class B','Class C','Class D'],
    Level:['100','200','300','400','500'],
    }
  },
}
</script>

<style scoped>
  .container{
    padding: 400px;

  }
</style>