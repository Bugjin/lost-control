<template>
    <div class="intro">
        <!-- <canvas @mousedown="activateDraw" 
                @mousemove="moveEvent"
                @mouseup="disableDraw"
                id="can1"
                :
                >

        </canvas>
        <canvas @touchstart="activateDraw"
                @touchmove="moveEvent"
                @touchend="disableDraw"
                id="can2">
        </canvas> -->
    </div>
</template>
<script src="https://wow.techbrood.com/libs/jquery/jquery-1.11.1.min.js"></script>
<script src="./index.js"></script>
<script>

export default {
    data:function () {
        return{
            dustCanvas:document.getElementById("can1"),
            starCanvas:document.getElementById("can2"),
            dustCtx :dustCanvas.getContext('2d'),
            starCtx :starCanvas.getContext('2d'),
            w : window.innerWidth,
            h : window.innerHeight,
            // dustCanvas.width :w,
            // starCanvas.width :w,
            // dustCanvas.height:h,
            // starCanvas.height:h,
            // dustCtx.globalCompositeOperation :'lighter',
            // starCtx.globalCompositeOperation :'lighter',
            // galaxies :[],

            mouse :{
                pos: {
                    x: w * 0.5,
                    y: h * 0.5
                },
                speed: 0
            },

            PI:Math.PI,
            TAU :PI * 2,

            currentGalaxy:null,

            drawingMode:false

        }
        
    },


// mounted(){
//      draw();
//      update();
//      render();
//      window.requestAnimationFrame(loop);
// },


// // var loop = function loop() {
// //     draw();
// //     update();
// //     render();
// //     window.requestAnimationFrame(loop);
// // };

// // loop();

// computed:{
//     randomNumbers(length) {
//         return Array.from(new Array(length), function() {
//             return Math.random();
//             });
//         },
//     r() {
//         return Math.random();
//     },
//     angle2(p1, p2) {
//         return Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
//     },
//     distance2(p1, p2) {
//         return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
//     },
//     Star(x, y, spread) {
//         var s = this;
//         s.x = x + Math.cos(TAU * r()) * spread;
//         s.y = y + Math.sin(TAU * r()) * spread;
//         s.radius = r() + 0.25;
//         s.speed = r();
//     },

//     Dust(x, y, size) {
//         var d = this;
//         d.x = x;
//         d.y = y;
//         d.size = size;
//         d.texture = createDustParticle();
//         d.speed = r();
//     },
//     updateStarDust(s, g) {
//         if (g == currentGalaxy && drawingMode) return;
//         s.angle += (0.5 + s.speed * 0.5) / s.distance;
//         s.x = g.x + Math.cos(s.angle + g.realAngleOffsetX) * s.distance;
//         s.y = g.y + Math.sin(s.angle + g.realAngleOffsetY) * s.distance;
//     },

// },
// methods:{
//     createDustParticle(color) {

//         var canvas = document.createElement('canvas');

//         var w = 100;
//         var h = 100;
//         var cx = w * 0.5;
//         var cy = h * 0.5;

//         canvas.width = w;
//         canvas.height = h;
//         var ctx = canvas.getContext('2d');
//         canvas.ctx = ctx;

//         var xRand = -5 + r() * 10;
//         var yRand = -5 + r() * 10;
//         var xRand2 = 10 + r() * (cx / 2);
//         var yRand2 = 10 + r() * (cy / 2);

//         var color = color || {
//             r: Math.round(150 + r() * 100),
//             g: Math.round(50 + r() * 100),
//             b: Math.round(50 + r() * 100)
//         };

//         ctx.fillStyle = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',.02)';

//         Array.from(new Array(200), function() {
//             return randomNumbers(3);
//         }).forEach(function(p, i, arr) {
//             var length = arr.length;

//             var x = Math.cos(TAU / xRand / length * i) * p[2] * xRand2 + cx;
//             var y = Math.sin(TAU / yRand / length * i) * p[2] * yRand2 + cy;

//             ctx.beginPath();
//             ctx.moveTo(x, y);
//             ctx.arc(x, y, p[2] * 4, 0, TAU);
//             ctx.fill();
//         });

//         return canvas;
//     },
//     Galaxy(x, y) {

//         var g = this;

//         g.x = x;
//         g.y = y;
//         g.stars = [];
//         g.dust = [];
//         g.drag = r();

//         g.angleOffsetX = TAU * r();
//         g.angleOffsetY = TAU * r();
//         g.realAngleOffsetX = 0;
//         g.realAngleOffsetY = 0;

//         g.color = {
//             r: Math.round(50 + r() * 100),
//             g: Math.round(50 + r() * 100),
//             b: Math.round(150 + r() * 100)
//         };

//         var calculateStarDustParams = function calculateStarDustParams(o) {
//             o.angle = angle2([g.x, g.y], [o.x, o.y]);
//             o.distance = distance2([g.x, g.y], [o.x, o.y]);
//             o.xAspect = [o.x / o.y];
//             o.yAspect = [o.y / o.x];
//         };

//         g.calculateCenter = function() {
//             if (!g.stars.length) return;
//             g.x = g.stars.map(function(s) {
//                 return s.x;
//             }).reduce(function(previous, current) {
//                 return previous + current;
//             }) / g.stars.length;

//             g.y = g.stars.map(function(s) {
//                 return s.y;
//             }).reduce(function(previous, current) {
//                 return previous + current;
//             }) / g.stars.length;

//             g.stars.forEach(calculateStarDustParams);
//             g.dust.forEach(calculateStarDustParams);
//         }
//     },
//     update() {
//         this.galaxies.forEach(function(g) {
//             if (g != this.currentGalaxy) {
//                 g.realAngleOffsetX += g.realAngleOffsetX < g.angleOffsetX ? (g.angleOffsetX - g.realAngleOffsetX) * 0.05 : 0;
//                 g.realAngleOffsetY += g.realAngleOffsetY < g.angleOffsetY ? (g.angleOffsetY - g.realAngleOffsetY) * 0.05 : 0;
//             }
//             g.stars.forEach(function(s) {
//                 /*s.distance -= s.distance < 2
//                 ? 0
//                 : TAU/s.distance;*/
//                 updateStarDust(s, g);
//             });
//             g.dust.forEach(function(d) {
//                 /*d.distance -= d.distance < 50
//                 ? 0
//                 : TAU/d.distance;*/
//                 updateStarDust(d, g);
//             });
//         });
//     },
//     render() {

//         this.dustCtx.globalCompositeOperation = 'source-over';
//         this.dustCtx.fillStyle = 'rgba(0,0,0,.05)';
//         this.dustCtx.fillRect(0, 0, w, h);
//         this.dustCtx.globalCompositeOperation = 'lighter';

//         this.starCtx.clearRect(0, 0, w, h);
//         this.starCtx.fillStyle = '#ffffff';
//         this.starCtx.strokeStyle = 'rgba(255,255,255,.05)';
//         this.starCtx.beginPath();

//         if (this.drawingMode) this.galaxies.forEach(function(g) {
//             this.starCtx.moveTo(g.x, g.y);
//             this.starCtx.arc(g.x, g.y, 2, 0, TAU);
//         });

//         this.galaxies.forEach(function(g) {
//             g.stars.forEach(function(s) {
//                 this.starCtx.moveTo(s.x, s.y);
//                 this.starCtx.arc(s.x, s.y, s.radius, 0, TAU);
//             });
//             g.dust.forEach(function(d) {
//                 this.dustCtx.drawImage(d.texture, d.x - d.size * 0.5, d.y - d.size * 0.5, d.size, d.size);
//             });
//         });

//         dustCtx.fill();
//         starCtx.fill();

//         if (drawingMode && currentGalaxy) {
//             starCtx.beginPath();
//             currentGalaxy.stars.forEach(function(s, i) {
//                 starCtx.moveTo(s.x, s.y);
//                 starCtx.lineTo(currentGalaxy.x, currentGalaxy.y);
//             });
//             starCtx.stroke();
//         }
//     },
//     activateDraw(e) {
//         drawingMode = true;
//         mouse.pos.x = e.layerX;
//         mouse.pos.y = e.layerY;
//         this.currentGalaxy = new Galaxy(e.layerX, e.layerY);
//         galaxies.push(currentGalaxy);
//     },
//     disableDraw(e) {

//         drawingMode = false;
//         currentGalaxy = null;
//     },
//     draw(e) {
//         if (!drawingMode) return;

//         this.currentGalaxy.stars.push(new Star(mouse.pos.x, mouse.pos.y, mouse.speed));
//         this.currentGalaxy.stars.push(new Star(mouse.pos.x, mouse.pos.y, mouse.speed));
//         this.currentGalaxy.stars.push(new Star(mouse.pos.x, mouse.pos.y, mouse.speed));

//             if (mouse.speed * 1.5 > 13 && mouse.speed < 100) currentGalaxy.dust.push(new Dust(currentGalaxy.x + Math.cos(TAU * r()) * mouse.speed * 0.1, currentGalaxy.y + Math.sin(TAU * r()) * mouse.speed * 0.1, mouse.speed * 1.5));

//         this.currentGalaxy.calculateCenter();
//     },
//     moveEvent(e) {
//         mouse.speed = distance2([e.layerX, e.layerY], [mouse.pos.x, mouse.pos.y]);
//         mouse.pos.x = e.layerX;
//         mouse.pos.y = e.layerY;
//         draw(e);
//     }






// },



// window.addEventListener('mousedown', activateDraw);
// window.addEventListener('mousemove', moveEvent);
// window.addEventListener('mouseup', disableDraw);

// window.addEventListener('touchstart', activateDraw);
// window.addEventListener('touchmove', moveEvent);
// window.addEventListener('touchend', disableDraw);

}
</script>
<style>


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