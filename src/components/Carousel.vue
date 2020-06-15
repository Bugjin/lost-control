<template>
   <div id="content">
    <Carousel
        v-model="value"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow"
        :loop="setting.loop"
        id="Carousel"
        >
        <Carousel-item v-for="item in imgs" :key="item.title" :height="setting.height">
            <div class="demo-carousel imgbox" :style="{backgroundImage:'url(' + item.url + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition: 'center center'}">
                
            
            <div class="infos">
                <h1>{{item.title}}</h1>
                <h5>{{item.description}}</h5>
            </div>
            </div>
        </Carousel-item>
    </Carousel>
        
    </div>
</template>

<script>
let imgs= [
  {
    title: "在水中央",
    description: "男女迷途在大海之中",
    url:require("../assets/image/img001.jpg")
    
  },
  {
    title: "沖泡咖啡",
    description: "用最經典的濾紙沖泡",
    url: require("../assets/image/img002.jpg")
  },
  {
    title: "熊在野",
    description: "孩子，這是你們的世界",
    url: require("../assets/image/img003.jpg")
  },
  {
    title: "鹿兒",
    description: "可愛的小鹿",
    url: require("../assets/image/img004.jpg")
  },
  {
    title: "城堡",
    description: "聳立於林中",
    url: require("../assets/image/img005.jpg")
  }
]   
    export default {
        data () {
            return {
                imgs,
                value: 0,
                setting: {
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    trigger: 'hover',
                    radiusDot: true,
                    arrow: 'hover',
                    loop:true
                    
                }
            }
        },
    }
</script>
<style scoped>

#content{
  /* border: 2px solid red; */
  
  height: 100vh;
}
#Carousel{
    
    height: 90vh;
    background-color: cadetblue;
    /* margin-left:  10vw;
    margin-right:  10vw;
    margin-top:5vh; */
    margin:5vh 10vw 0 10vw;

}
.imgbox{
  background: chocolate;
  height: 90vh;
  
  
  position: relative;
}
.img{
  width: 100vw;
  height: 100vh;
 
}
.infos {
  color: white;
  width:33%;
  height: 20wh;
  /* background-color: aquamarine; */
  text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  
  position: absolute;
  top: 5vh;

}

.imgbox .infos h1 {
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 10px;
}
.imgbox .infos h5 {
  background-color: white ;
  background-color:rgba(255,255,255,0.4);

  color: black;
  padding: 4px 0;
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
.imgbox{
  animation: fadeIn 1s ease both;
}
.imgbox .infos h5 {
  animation: silceIn 1s 0.1s ease;
}

</style>