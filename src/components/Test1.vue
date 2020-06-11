<template>
  <div class="Test1">
    书名<input type="text" v-model="inputName">
    <!-- 价格<input type="text" v-model="inputPrice" @keyup="chack"> -->
    价格<input type="text" v-model="inputPrice" @blur="chack" @keyup="chack">
    <button @click="btnclick">添加</button>    
    查询<input type="text" v-model="search">
   
    <table>
    <thead>
      <th>图书序号</th>
      <th>图书名称</th>
      <th>图书价格</th>
      <a>操作</a>
    </thead>
    <tbody v-show="userform.length">
      
      <tr v-for ='(item,index) in userform' :key="item.name" :class="{on:index%2==0,off:index%2!=0}">
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <a @click="del(item)">删除</a>
      </tr>
    </tbody>
    <tbody v-show="!userform.length"><!-- v-else不需要属性 -->
      <p>---当前列表无数据---</p>
    </tbody>
      
    </table>
      
    
  </div>
</template>

<script>
export default {
  name: 'Test1',
  
  data:function(){
    return {
      // isEmpty:this.userform.length,
      mes:{
        user:"guojin",
        psw:""
      },
      inputName:"",
      inputPrice:"",
      userform:[    //源数据
        {name:"python",price:190},
        {name:"java",price:130},
        {name:"php",price:150},
        {name:"c",price:170},
        {name:"ruby",price:220}]
    }
  },
  methods:{
    chack(e){//监听键盘松开
        if(this.inputPrice!==""){//判断当前输入框是否有字符
        const a =this.inputPrice.trim();//去除字符串前后空格
        const reg=/^[+]{0,1}(\d+)$/; //匹配整数正则
        if(!reg.test(a)){ 
        console.log ("对不起，您输入的类型格式不正确!"); 
      } }else{
        console.log("请输入价格")
      }

    },
    btnclick(){//CREATE
        const bookmes={};
        bookmes.name=this.inputName,//v-modle获取输入值并追加到对象中
        bookmes.price=this.inputPrice,
        this.userform.push(bookmes)//新的数据对象push到需要v-for渲染的数组中
                                        //bug  push多个数据会覆盖之前的值   //已修复，对象引用地址值导致
        // this.$store.commit("setusermes",this.mes)
    },
    del(item){//delete,update
      
      let a =this.userform.findIndex(function(i){
        return i==item}); 
      // let a =this.userform.indexOf(item)
      console.log(a)
      
      this.userform.splice(a,1)
    },
    search(){//Retrieve 

    }
  }
}
</script>


<style scoped>
.Test1{
  height: 500px;
  background-color: lightblue;
}
table,thead
  {
  border-collapse:collapse;
  width:100%;
  }
th,td,thead{
  border:1px solid pink;
  height:25px;
  text-align:center;
  /* vertical-align: auto; */
}
.on{
  background-color: burlywood;
}
</style>
