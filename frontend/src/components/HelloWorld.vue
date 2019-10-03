<template>
  <v-container fluid>
    <v-row align="center">
       
       <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="Type"
          label="Type"
          outlined
        ></v-select>
      </v-col>

            <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="Status"
          label="Status"
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
      
      
            <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="Faculty"
          label="Faculty"
          outlined
        ></v-select>
      </v-col>

        <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="Day"
          label="Day"
          outlined
        ></v-select>
      </v-col>

        <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="Time"
          label="Time"
          outlined
        ></v-select>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      Time: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      Status: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      Level: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      Faculty: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      Day: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      Time: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>
