<template>
  <div class="log">
   
   <!-- <crumbs2></crumbs2> -->
   <Aside></Aside>
   <div id="content">
     <p>qweaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaqe</p>
     <p>qweqwewqeqe</p>
     <p>qweqwewqeqe</p>
     <p>qweqwewqeqe</p>
     <p>qweqwewqeqe</p>
     <p>qweqwewqeqe</p>
     <p>qweqwewqeqe</p>
     <p>qweqwewqeqe</p>
     <p>qweqwewqeqe</p>
   </div>
    
    
  
  </div>
</template>

<script>


import Aside from '@/components/Aside'
import Crumbs2 from '@/components/Crumbs2'

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
    Crumbs2,

  },
  
}


</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
body{
  background-color:#f2f4a1;
}
.log{
  width: 100%;
  height: 100%;
}

#crumbs{
  margin: 0;
  padding: 0;
  height: 30px;
}
.aside{
  width: 8%;
}
#content{
  width: 92%;
  height: 100%;
  border-top: 5px solid seagreen;
  border-bottom: 5px solid seagreen;
  float: right;
}
#content1::after{
  display: block;
  clear: both;
  content: "";
}

</style>