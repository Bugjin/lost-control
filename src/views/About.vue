<template>
  <div class="log">
   
  
   <div id="aside"><Aside></Aside></div>
    
    
  
  </div>
</template>

<script>


import Aside from '@/components/Aside'


export default {
  name: 'Log',
  data(){
    return{
      menu:"ture",
      list:["iconfont icon-category logo","iconfont icon-lights","iconfont icon-favorites","iconfont icon-link","iconfont icon-shengyijing","iconfont icon-code"]
    }
    },
  components: {
    Aside,
 
  },
  
}


</script>

<style scoped>
body{
  background-color:#f2f4a1;
}

body,html {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: rgb(145, 123, 123);
  background-size: cover;
}
#crumbs{
  margin: 0;
  padding: 0;
  height: 30px;
}
</style>