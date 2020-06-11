<template>
  <div>
    <div class="NavMenu">
      <ul class="nav navbar-nav">
      <router-link to="/user/test1">测试1</router-link> |
      <router-link to="/user/test2">测试2</router-link>|
      <router-link to="/user/test3">测试3</router-link>|
      <router-link to="/user/test4">测试4</router-link>
      </ul>
      <div id=div1>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    msg: String
  }
};
</script>
<style  scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  background-color:blanchedalmond
}
ul > li {
  float: left;
  margin: 50px;
}
.div1{
  width: 100%;
  height: 500px;
}
</style>