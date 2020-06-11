<template>
  <div class="Test3">
    <!-- <button @click="btnclick" >sdas</button> -->
    
    <Editor></Editor>
    
    
  </div>
</template>

<script>
import Editor from '@/components/Editor'
export default {
  name: 'Test1',
  components:{
      Editor
  },
  data:function(){
    return{
      
    }
  },
  
}


</script>


<style scoped>
.Test3{
  
  /* display: flex;
  justify-content:center; */
  /* align-items:center; */
  color: brown;

}
.Tes{
  border:1px solid cornflowerblue;
  height: 500px;
}
.Tes,.edit_container{
  width: 100%;
}

</style>
