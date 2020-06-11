<template>
  <div class="home">
    <div>这是home页面</div>
    <carousel></carousel>
  </div>
  
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Carousel'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    Carousel
  }
}
</script>
<style >

</style>