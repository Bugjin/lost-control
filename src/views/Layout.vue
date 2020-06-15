
// 组件模板
<template>
  <div class="user">
    <h6>欢迎，用户{{a}}</h6>
      
    <h1>This is an user page</h1>
    <NavMenu></NavMenu>
    <!-- <aside></aside> -->
  
  </div>
</template>

<script>
import {mapState,mapComputed} from "vuex";
// 导入需要用到的组件
import NavMenu from '../components/NavMenu'
// 导出组件
export default {
  name: 'Home',
  components: {
    NavMenu
    // 注册子组件
 
  },
  methods:{
    

  },
 computed:{
   
    c(){
      return window.localStorage.getItem("user")
      },
      ...mapState({
        a:state=>state.usermes,
        b:state=>state.mes
      })
  },
  }

</script>