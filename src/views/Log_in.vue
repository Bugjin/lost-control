<template>
  <div class="log_in">
    <form  action="#" >
      <h3>用户登录</h3>
     <div>
       <label> 账号：</label>
       <input type="text" placeholder="请输入账号" v-model="mes.username" @blur="chacked">
     </div>
      <div>
        <label> 密码：</label>
        <input type="password" placeholder="请输入密码" v-model="mes.pwd" >
     </div>
      
       <!-- <input id="btn" type= "button" @click="btnC" value="Login"></input>  使用input按钮-->
      
      <button @click.prevent="btnC" id="btn" >Login</button>
     
    
    </form>
     
    
  </div>
</template>
<script>

export default {
  name: 'Log_in',
  props: {
    
  },
 
  data: function () {
    return {
       
       mes:{
          username:window.localStorage.getItem("user"),
          pwd:window.localStorage.getItem("pwd")
        },
        
       users:[
         {username:"guojin",pwd:"555555",userid:"1001"},
         {username:"zhangsan",pwd:"555555",userid:"1002"},
         {username:"lisi",pwd:"555555",userid:"1003"},
         {username:"wangwu",pwd:"555555",userid:"1004"},
         {username:"lilei",pwd:"555555",userid:"1005"},
         {username:"xinyue",pwd:"555555",userid:"0823"}
        ]
    }
  },
  methods:{
    chacked(){//校验用户名
    if(this.users.some(item => {
       return item.username==this.mes.username
       })){
         
       } else{ alert("用户名不正确")}
    },

    btnC(){
     
     const flag=this.users.some((item)=> {
       return item.username == this.mes.username&&item.pwd==this.mes.pwd;
       }) 
     console.log(flag) 
     if(flag){
        
       /* this.$router.replace('/User');//登录路由跳转到用户界面
        this.$store.commit("setusermes",this.mes);//同步保存用户名状态
        localStorage.setItem('user',this.mes.username);//本地存储username
        console.log(window.localStorage.getItem("user"))//获取localstorage信息
        return  
        */
       this.$store.dispatch('LoginByUsername', this.mes)
       .then(() => {
          this.$router.push({ path: '/User' }); //登录成功之后重定向到首页
       }).catch(err => {
          this.$message.error(err); //登录失败提示错误
       });
      }else{
        alert("账号或密码错误") 
      }
      
    



  }}}
</script>


<style scoped>
  .log_in{
    background-color: rgba(0, 51, 0, 0.1);
    /* background-color: rgb(180,132,132,0.5); */
   
    width: 404px;
    height: 250px;
    margin: 40px auto;
    display: flex;
    border-radius:30px;
    justify-content: center;
    align-content:space-around;
    
  }

  .log_in div{
    width:100% ;
    /* height: 60px; */
    margin: 35px auto;
    
  }
  form input{
    width: 200px;
    border-radius: 10px;
    outline: none
  }
  
  #btn{
    width: 50%;
    height: 2rem;
    border-radius: 3rem;
    background-image: linear-gradient(to right,#a6c0fe, #f68084);
    font-size: 0.9rem;
   
    }
   
  /* #but{
    display: inline-block;
    width: 100px;
    height: 30px;
    border: 1px solid ;
    border-radius:10px;
    background-image: linear-gradient(to right,#a6c0fe, #f68084);
  } */
</style>
