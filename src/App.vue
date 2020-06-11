<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/user">User</router-link>|
      <router-link to="/login">Login</router-link>
    </div>
    <hr />
    <router-view/>

  </div>
</template>

<style >
html,body,#app{
    margin: 0;
    padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #564e58;
    background:#f2f4f6;
    height: 100%;
    width: 100%;
  }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #26b3cc;
}

#nav {
  padding-top: 30px;
}

#nav a {
  font-weight: bold;
  color: #7a6385;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
<script>
import {mapState,mapComputed} from "vuex";
export default {
  data:function(){
    return{
      mes:123
    }
  },
  computed:{
    mesx(data){return data.mes*2},
    c(){
      return window.localStorage.getItem("user")
      },
      ...mapState({
        a:state=>state.usermes,
        b:state=>state.mes
      })
  },
  methods:{ 
//   created(){
//       if(localStorage.getItem('login')=='null'){

//       this.infoForm=this.$route.params

//       localStorage.setItem('login',JSON.stringify(this.$route.params))
//       }else{
//         this.infoForm=JSON.parse(localStorage.getItem('login'))
//       }
// }
}
}
</script>