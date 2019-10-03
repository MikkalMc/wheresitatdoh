<template>
  <div class="dropdown">
      <input type ="text" v-model="searchText"></input>
      <pre> {{ matches}} </pre>
  </div>
</template>

<script>
export default {
    data () {
        return {
            searchText: ''
        }
    },
    
    computed: {
        matches () {
            return Object.entries(this.options).filter((option) => {
            var optionText = option[0].toUpperCase()
            return optionText.match(this.searchText.toUpperCase())
            })
        }
    },
    
    computed: {
        matches () {
            var optionArray = []
            for (var key in this.options) {
                if (has(this.options, key) && isEnumerable(this.options, key)) {
                    optionArray.push([key, this.options[key]]);
               }
            }        
            return optionArray.filter((option) => {
                var optionText = option[0].toUpperCase()
                return optionText.match(this.searchText.toUpperCase())
            })
        }
    }
}
</script>

