<template>
  <div class="dropdown">
    <select
      v-model="selectedClass"
      @input="event => { $emit('input', event.target.value) }"
      >
      <option v-for="(option, name) in options" :value="option">{{ name }}</option>
    </select>
    <ul class ="suggestion-list">
        <li v-for="(suggestion, index) in matches">
            {{sugesstion[0]}}
        </li>
    </ul>
  </div>
</template>

<script>

export default {
    props:{
        value: null,
        options: {
            type: Object,
            required: true
        }
    },
    data(){
        return{
            selectedClass: null
        }
    },
    mounted () {
        this.selectedClass = this.value
    },

    watch: {
        value: function (newValue) {
            this.selectedClass = newValue
        }
    }
}

</script>