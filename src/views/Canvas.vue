<template>
    <div class="intro">
       
    </div>
</template>
<script>

export default {
  
}
</script>
<style scoped>


/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 100;
  src: local('Raleway Thin'), local('Raleway-Thin'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptsg8zYS_SKggPNwE44Q4FqPfE.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 100;
  src: local('Raleway Thin'), local('Raleway-Thin'), url(https://fonts.gstatic.com/s/raleway/v14/1Ptsg8zYS_SKggPNwE44TYFq.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Berkshire Swash';
  font-style: normal;
  font-weight: 400;
  src: local('Berkshire Swash Regular'), local('BerkshireSwash-Regular'), url(https://fonts.gstatic.com/s/berkshireswash/v8/ptRRTi-cavZOGqCvnNJDl5m5XmN_pM4zXX4.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Berkshire Swash';
  font-style: normal;
  font-weight: 400;
  src: local('Berkshire Swash Regular'), local('BerkshireSwash-Regular'), url(https://fonts.gstatic.com/s/berkshireswash/v8/ptRRTi-cavZOGqCvnNJDl5m5XmN_qs4z.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
    margin: 0;
    background-color: #000;
    color: #fff;
    font-family: 'Raleway', sans-serif;
}
canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
