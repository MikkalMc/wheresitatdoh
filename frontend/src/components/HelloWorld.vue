<template>
  <v-container class="grey lighten-5">
    <v-row dense >
       
       <v-col class="d-flex" cols="12" sm="6">
        <v-autocomplete
          :items="Type"
          label="Type"
          outlined
        ></v-autocomplete>
      </v-col>

        <v-col class="d-flex" cols="12" sm="6">
        <v-autocomplete
          :items="Status"
          label="Status"
          outlined
        ></v-autocomplete>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-autocomplete
          :items="Level"
          label="Level"
          outlined
        ></v-autocomplete>
      </v-col>
      
      
        <v-col class="d-flex" cols="12" sm="6">
        <v-autocomplete
          :items="Faculty"
          label="Faculty"
          outlined
        ></v-autocomplete>
      </v-col>

        <v-col class="d-flex" cols="12" sm="6">
        <v-autocomplete
          :items="Day"
          label="Day"
          outlined
        ></v-autocomplete>
      </v-col>

        <v-col class="d-flex" cols="12" sm="6">
        <v-autocomplete
          :items="Time"
          label="Time"
          outlined
        ></v-autocomplete>
      </v-col>

    </v-row>
    <v-row>
        <v-col class="text-center" cols="12" sm="12">
        
        <div class="my-2">
          <v-btn depressed large color="deep-orange darken-1">Search</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      Type: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      Status: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      Level: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      Faculty: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      Day: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      Time: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>
