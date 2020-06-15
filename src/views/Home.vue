<template>
  <div class="home" >
    <p @click="skip">点我跳转</p>
    
  </div>
  
</template>

<script>

import Carousel from '@/components/Carousel'


export default {
  name: 'Home',
  components: {
    
    Carousel
  },
  methods:{
    skip(){
      this.$router.push('/Login')
    }
  }
}
</script>
<style scoped>

</style>