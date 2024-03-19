<template>
  <div>
    <input 
      type="text" 
      :value="searchKeyword" 
      @input="$emit('input', $event.target.value)"
    />
    <button type="button">search</button>
  </div>  
</template>

<script>
export default {
  // vpr => 자동완성 스니펫
  props: {
    searchKeyword: {
      type: String,
      default: ""
    },
  },
}
</script>

<style>

</style>