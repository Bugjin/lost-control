<template>
  <div class="aside">
      <div class="main-menu" v-bind:class="{open:menu}">
      <div class="top">
        <ul>
          <li @click="asd" v-for="(item,index) in list" :key="index"><a href="#"><i :class="list[index]"></i>
            </a>
          </li>
        <ul class="set">
          <!-- <li>9<a href="#"><i class="fa fa-cog" aria-hidden="true"></i></a></li> -->
          <li><a href="#"><i class="iconfont icon-set"></i></a></li>
        </ul>
        </ul>
     </div>
     
   </div>
 
    
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data(){
    return{
      menu:"ture",
      list:["iconfont icon-category logo","iconfont icon-lights","iconfont icon-favorites","iconfont icon-link","iconfont icon-shengyijing","iconfont icon-code"]
    }
    },
    methods:{
    asd(e){
       this.menu = !this.menu
      
    },
  },
  
  props: {
    msg: String
  }
}
</script>


<style scoped>
* {
  /* font-family: "Roboto"; */
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 24px;
  box-sizing: border-box;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.main-menu {
  display: -webkit-box;
  display: flex;
  margin-top: 18px;
  height: 90%;
  width: 10vh;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-pack: justify;
          justify-content: space-between;
  position: fixed;
  left: 0;
  background: rgb(224, 206, 206);
  box-shadow: 0px 0px 4vh 0px rgba(219,219,219,0.5);
}
.main-menu a {
  padding: 3vh;
  display: block;
  font-size: 3.1vh;
  text-align: center;
}
.iconfont {
  color: #373737;
  display: block;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
a:hover .iconfont {
  color: #000000;
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
}
.open {
  width: 0vh;
}

.content{
  height: 100%;
  width: 200px;
  background-color: burlywood;
}
.set{
  margin-top: 10vh;
}
</style>
