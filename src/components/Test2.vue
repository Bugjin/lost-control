<template>
  <div class="Test2">test2{{$store.state.usermes}}
    {{$store.state.mes}}
    <input v-model="mes">
    <button @click.prevent="changemes" id="btn" >异步修改</button>
    <button @click.prevent="changemes1" id="btn" >同步修改</button>
  </div>
</template>

<script>
export default {
  name: 'Test1',
  props: {
    
  },
  data:function(){
    return{
      mes:""
    }
    }
  ,
  methods:{
    changemes(){  //异步修改
      setTimeout(()=>{
          this.$store.dispatch("asyncchange",this.mes);
          console.log("修改成功")
        },2000
      )
      
     
    },
     changemes1(){ //同步修改
      
          this.$store.commit("changemes",this.mes);
          console.log("修改成功")
          alert("xiugaichenggong")
        
     }

  }
}
</script>


<style scoped>

</style>
