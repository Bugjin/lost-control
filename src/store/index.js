import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  
  state: {
    users:[
      {username:"guojin",pwd:"555555",userid:"10001",email:"10000@163.com",backgroundColor:"pink",
      truename:"陈国金",src:'require("../assets/image/img111.png")' ,initials:"",},

      {username:"xingyue",pwd:"555555",userid:"00823",email:"10001@163.com",turename:"陈国金"},
      {username:"zhangsan",pwd:"555555",userid:"10002",email:"10002@163.com",turename:"陈国金"},
      {username:"lisi",pwd:"555555",userid:"10003",email:"10003@163.com",turename:"陈国金"},
      {username:"wangwu",pwd:"555555",userid:"10004",email:"10004@163.com",turename:"陈国金"},
      {username:"lilei",pwd:"555555",userid:"10005",email:"10005@163.com",turename:"陈国金"}
     ],
    
    user:{
      username:"游客",//计算用户初始值的用户名
      initials:"",//通过重写计算的首字母
      inline:false,//true 使用内联 false使用flex
      src:'',//要显示的头像图像的路径
      backgroundColor:"pink",//如果未提供图像，则使用化身背景颜色。如果未指定，则根据用户名长度选择背景色。
      color:""//用于呈现用户首字母的字体颜色。如果未提供，则使用背景色来计算字体颜色。
      //:customStyle   一个自定义样式对象，用于覆盖基本样式。
      // :lighten：减轻	ñ	80	数	背景颜色必须变浅以产生字体颜色的因素。介于[-100,100]之间的数字。
      // :size：尺寸	ñ	50	数	头像大小（以像素为单位）。
      // :rounded	：四舍五入	ñ	真正	布尔型	如果化身必须四舍五入则为真。
    }
  },
  mutations: {
    
    setuser(state,paylold){
      
      state.user.username=paylold.username;
      state.user.initials  =paylold.initials ;   
      state.user.inline  =paylold.inline;
      state.user.src =paylold.src;
      state.user.backgroun   =paylold.backgroun;
      state.user.color =paylold.color;
    }
 
  },
  actions: {
    asyncsetuser(state,paylold){
      state.commit('setuser',paylold)
    },
    
  },
  modules: {
  }
})
