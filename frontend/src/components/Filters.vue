<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          label="Standard"
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          filled
          label="Filled style"
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
<!--
  <div class="filter">
    <label for="autocomplete-dropdown"> Class </label>
    <dropdown id="autocomplete-dropdown" :options="classOptions" v-model="selectedClass"></dropdown>
  </div>
-->

</template>

<script>
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
/*
  import Dropdown from '@/components/Dropdown'
  import AutocompleteDropdown from '@/components/AutocompleteDropdown'
export default {
    components: {
        'dropdown' : Dropdown,
        'autocomplete-dropdown' : AutocompleteDropdown
    },

    data () {
        return {
            selectedClass: 'ClassA',
            classOptions: {
                'ClassA' : 'ClassA',
                'ClassB' : 'ClassB',
                'ClassC' : 'ClassC',
                'ClassD' : 'ClassD',
                'ClassE' : 'ClassE'
            }
        }
    }
}
*/

</script>
<!--
<style scoped>

.filters {
    width: 200px;
  margin: 0 auto
}

.filter {
  text-align: right;
}

label {
  display: block;
}
-->
</style>