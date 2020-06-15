<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/user">User</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/Canvas">Canvas</router-link>|
      <router-link to="/layout">Layout</router-link>
    </div>
    <hr /> -->
    <router-view id="med"/>
  <!-- <about></about> -->
  <!-- <Carousel></Carousel> -->
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
    background-color: #eef7f2;
  }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #26b3cc;
  position: relative;
}


</style>
<script>
// import About from '@/views/About'
import Carousel from '@/components/Carousel'
import {mapState,mapComputed} from "vuex";
export default {
}
</script>