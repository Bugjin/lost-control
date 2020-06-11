import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let works= [
  {
    title: "在水中央",
    description: "男女迷途在大海之中",
    url: "https://unsplash.it/600/400?image=1083"
  },
  {
    title: "沖泡咖啡",
    description: "用最經典的濾紙沖泡",
    url: "https://unsplash.it/600/400?image=1060"
  },
  {
    title: "熊在野",
    description: "孩子，這是你們的世界",
    url: "https://unsplash.it/600/400?image=1020"
  },
  {
    title: "鹿兒",
    description: "可愛的小鹿",
    url: "https://unsplash.it/600/400?image=1003"
  },
  {
    title: "城堡",
    description: "聳立於林中",
    url: "https://unsplash.it/600/400?image=1040"
  }
]

export default new Vuex.Store({
  
  state: {
    usermes:"游客",
    mes:"我是初始值",
    works
  },
  mutations: {
    setusermes(state,paylold){
      state.usermes=paylold.username
    },
    changemes(state,paylold){
      state.mes=paylold
    },
 
  },
  actions: {
    asyncchange(state,paylold){
      state.commit('changemes',paylold)
      
    },
    LoginByUsername(state,paylold){
      state.commit("setusermes",paylold)

    }
  },
  modules: {
  }
})
