<template>
  <div class="carousel" @keyup.13="delta(1)">
    

  <div class="postarea" >
    <div class="posts" :style="computed_left">

      <div class="post_box" v-for="(w,id) in works" :class="{cur_item: id==now_index}" :key="w.title">
        <div class="img" :style="bg_css(w.url)">
        <!-- <div class="img" :style="works.url"> -->
          <div class="infos">
            <h1>{{w.title}}</h1>
            <h5>{{w.description}}</h5>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="left" @click="delta(-1)"><i class="fa fa-angle-left"></i></div>
  <div class="right" @click="delta(1)"><i class="fa fa-angle-right"></i></div>



  </div>
</template>

<script>

let works= [
  {
    title: "在水中央",
    description: "男女迷途在大海之中",
    url:require("../assets/image/img001.jpg")
    
  },
  {
    title: "沖泡咖啡",
    description: "用最經典的濾紙沖泡",
    url:require("../assets/image/img002.jpg")
  },
  {
    title: "熊在野",
    description: "孩子，這是你們的世界",
    url:require("../assets/image/img003.jpg")
  },
  {
    title: "鹿兒",
    description: "可愛的小鹿",
    url:require("../assets/image/img004.jpg")
  },
  {
    title: "城堡",
    description: "聳立於林中",
    url:require("../assets/image/img005.jpg")
  }
]
export default {

 name: 'Carousel',
  data(){
    return{
    works: works,
    
    now_index: 0,  
    span_width: 930,
    flag: true
    }
  },
  computed: {
    // works(){return this.$store.state.works},
    computed_left: function(){
      let result = {
        left: (-this.now_index * this.span_width) + "px"
      };
      // console.log(result);
      return result;
    }},
    methods: {
    mounted(){
    setInterval(() => {
      let l = this.works.length;
      this.delta(1);
      this.now_index++;
      if (this.now_index == l) {
        this.now_index = 0;
      }
    }, 2000);
   },

    delta(d){   //实现点击翻页
      this.now_index = 
        (this.now_index + d + this.works.length) % this.works.length;
       
    },
    bg_css(url){
      
      return {
        "background-image": "url("+url+")"
      }
    },
    

    //    animate(moveX, callback){
    //       if(this.flag){
    //         this.flag = false;  // 关闭节流阀，每次调用动画函数回调函数中打开
    //         let ulX = this.$refs.showImg.offsetLeft;
    //         let target = ulX + moveX; // 求出移动的目标位置
    //         this.swiper = setInterval(()=>{ // 创建定时器移动元素
    //           let step = (target - this.$refs.showImg.offsetLeft)/10; // 实现由快到慢的过渡效果
    //           step = step>0 ? Math.ceil(step) : Math.floor(step); // 对每次移动的距离取整
    //           let startX = this.$refs.showImg.offsetLeft; // 求出元素的当前位置
    //           if(this.$refs.showImg.offsetLeft === target){ // 移动完成
    //             clearInterval(this.swiper); // 清除先前已经创建的定时器
    //             callback && callback();
    //             return;
    //           }
    //           this.$refs.showImg.style.left = startX + step + 'px';  // 移动
    //         }, 15);
    //       }
    //     }
  }
}
</script>


<style scoped>
 * {
  font-family: "cwTeXHei", serif;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #1c1c1c;
  margin: 0;
  padding: 0;
}

.carousel{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.postarea {
  width: 930px;
  height: 250px;
  white-space: nowrap;
}

.posts {
  height: 100%;
  position: relative;
  transition: 0.5s;
}

.post_box {
  display: inline-block;
  height: 100%;
}
.post_box .img {
  width: 330px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 300px;
  margin-right: 300px;
  background-size: cover;
  background-position: center center;
  transition: 0.3s;
  cursor: pointer;
}
.post_box .img:hover {
  width: 340px;
  height: 110%;
}
.post_box .img:hover .infos {
  transform: translate(-220px, -10px);
}
.post_box .img .infos {
  color: white;
  transform: translate(-250px, 0);
  text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
}
.post_box .img .infos * {
  margin: 0;
}
.post_box .img .infos h1 {
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 10px;
}
.post_box .img .infos h5 {
  background-color: white;
  color: black;
  padding: 4px 12px;
  font-size: 20px;
  font-weight: 300;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translate(30px, 0);
    filter: saturate(0);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0);
  }
}
@keyframes silceIn {
  0% {
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(0px);
  }
}
.cur_item .img {
  animation: fadeIn 1s ease both;
}
.cur_item .infos h5 {
  animation: silceIn 1s 0.1s ease;
}

.left, .right {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: solid 1px white;
  position: fixed;
  color: white;
  font-size: 30px;
  transition: 0.3s;
}
.left:hover, .right:hover {
  background-color: white;
  color: black;
}

.left {
  left: 50px;
}

.right {
  right: 50px;
}
</style>
