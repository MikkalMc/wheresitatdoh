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
      Semester: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      Class: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      Level: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>
