<template>
  <v-container fluid>
    <v-row align="center">      
       <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="Semester"
          label="Semester"
          outlined
        ></v-select>
      </v-col>

            <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="Class"
          label="Class"
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="Level"
          label="Level"
          outlined
        ></v-select>
      </v-col>   
         
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      Semester: ['spring 2019', 'fall 2019', 'spring 2020', 'fall 2020'],
      Class: ['Class A', 'Class B', 'Class C', 'Class D'],
      Level: ['100', '200', '300', '400', '500'],
    }),
  }
</script>
