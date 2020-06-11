<template>
  <div class="Article">
    <div v-for="item in txt" :key="item.id"></div>

  </div>
</template>

<script>
export default {
  name: 'Article',
  data(){
    return{
      txt:[
        {},
        {},
        {},
        {},
        
      ]
    }
  }
}
</script>


<style scoped>

</style>
