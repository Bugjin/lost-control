<style>
body {
    margin: 0;
    background-color: #000;
    color: #fff;
    font-family: 'Raleway', sans-serif;
}
canvas {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;;
    /* width: 93vw;
    height: 85vh; */
    /* margin: 0;
    padding: 0px; */
    
    
}
.intro {
    position: absolute;
    z-index: 2;
    top: 25px;
    left: 25%;
    width: 50%;
    text-align: center;
    pointer-events: none;
}
h1 {
    margin: 10px 0;
    text-shadow: 0 0 20px rgba(255, 255, 255, .5);
    font-family: 'Berkshire Swash', cursive;
}
p {
    color: rgba(255, 255, 255, .75);
}
</style>

<template>
    <div id="intro">
       
    </div>
</template>
<script>
import fun from '../components/javascript/index.js'
export default {
  name:'Cloud'
}
</script>