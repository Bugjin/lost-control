<template>

  <div id="intro">
    <canvas id="canvas1"></canvas>
    <canvas id="canvas2"></canvas>
  
  </div>
    
</template>
<script>

export default {
  data:function(){
    return{
      galaxies :[],
      mouse :{
        pos: {
          x: w * 0.5,
          y: h * 0.5
        },
        speed: 0
      },

    }
  },
  computed:{
    randomNumbers(length) {
    return Array.from(new Array(length), function() {
        return Math.random();
    });
},
    r() {
    return Math.random();
},
    angle2(p1, p2) {
    return Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
},
    distance2(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
},
    createDustParticle(color) {

    var canvas = document.createElement('canvas');

    var w = 100;
    var h = 100;
    var cx = w * 0.5;
    var cy = h * 0.5;

    canvas.width = w;
    canvas.height = h;
    var ctx = canvas.getContext('2d');
    canvas.ctx = ctx;

    var xRand = -5 + r() * 10;
    var yRand = -5 + r() * 10;
    var xRand2 = 10 + r() * (cx / 2);
    var yRand2 = 10 + r() * (cy / 2);

    var color = color || {
        r: Math.round(150 + r() * 100),
        g: Math.round(50 + r() * 100),
        b: Math.round(50 + r() * 100)
    };

    ctx.fillStyle = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',.02)';

    Array.from(new Array(200), function() {
        return randomNumbers(3);
    }).forEach(function(p, i, arr) {
        var length = arr.length;

        var x = Math.cos(TAU / xRand / length * i) * p[2] * xRand2 + cx;
        var y = Math.sin(TAU / yRand / length * i) * p[2] * yRand2 + cy;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x, y, p[2] * 4, 0, TAU);
        ctx.fill();
    });

    return canvas;
},
    Galaxy(x, y) {

    var g = this;

    g.x = x;
    g.y = y;
    g.stars = [];
    g.dust = [];
    g.drag = r();

    g.angleOffsetX = TAU * r();
    g.angleOffsetY = TAU * r();
    g.realAngleOffsetX = 0;
    g.realAngleOffsetY = 0;

    g.color = {
        r: Math.round(50 + r() * 100),
        g: Math.round(50 + r() * 100),
        b: Math.round(150 + r() * 100)
    };

    var calculateStarDustParams = function calculateStarDustParams(o) {
        o.angle = angle2([g.x, g.y], [o.x, o.y]);
        o.distance = distance2([g.x, g.y], [o.x, o.y]);
        o.xAspect = [o.x / o.y];
        o.yAspect = [o.y / o.x];
    };

    g.calculateCenter = function() {
        if (!g.stars.length) return;
        g.x = g.stars.map(function(s) {
            return s.x;
        }).reduce(function(previous, current) {
            return previous + current;
        }) / g.stars.length;

        g.y = g.stars.map(function(s) {
            return s.y;
        }).reduce(function(previous, current) {
            return previous + current;
        }) / g.stars.length;

        g.stars.forEach(calculateStarDustParams);
        g.dust.forEach(calculateStarDustParams);
    };
},
    tar(x, y, spread) {
    var s = this;
    s.x = x + Math.cos(TAU * r()) * spread;
    s.y = y + Math.sin(TAU * r()) * spread;
    s.radius = r() + 0.25;
    s.speed = r();
},

    Dust(x, y, size) {
    var d = this;
    d.x = x;
    d.y = y;
    d.size = size;
    d.texture = createDustParticle();
    d.speed = r();
},

    updateStarDust(s, g) {
    if (g == currentGalaxy && drawingMode) return;
    s.angle += (0.5 + s.speed * 0.5) / s.distance;
    s.x = g.x + Math.cos(s.angle + g.realAngleOffsetX) * s.distance;
    s.y = g.y + Math.sin(s.angle + g.realAngleOffsetY) * s.distance;
  }
    
  },
  mounted() {
    this.loop();
    this.initCanvas();
  },
  methods: {

    initCanvas() {
      let dustCanvas = document.getElementById('canvas1');
      let dustCtx = dustCanvas.getContext('2d');
      let starCanvas = document.getElementById('canvas2');
      let starCtx = starCanvas.getContext('2d');
     
    },
    loop() {
      this.draw();
      this.update();
      this.render();
      window.requestAnimationFrame(loop);
    },
    draw(e) {
      if (!drawingMode) return;

      currentGalaxy.stars.push(new Star(mouse.pos.x, mouse.pos.y, mouse.speed));
      currentGalaxy.stars.push(new Star(mouse.pos.x, mouse.pos.y, mouse.speed));
      currentGalaxy.stars.push(new Star(mouse.pos.x, mouse.pos.y, mouse.speed));

      if (mouse.speed * 1.5 > 13 && mouse.speed < 100) currentGalaxy.dust.push(new Dust(currentGalaxy.x + Math.cos(TAU * r()) * mouse.speed * 0.1, currentGalaxy.y + Math.sin(TAU * r()) * mouse.speed * 0.1, mouse.speed * 1.5));

      currentGalaxy.calculateCenter();
    },
    activateDraw(e) {
      drawingMode = true;
      mouse.pos.x = e.layerX;
      mouse.pos.y = e.layerY;
      currentGalaxy = new Galaxy(e.layerX, e.layerY);
      galaxies.push(currentGalaxy);
    },
    render() {
      dustCtx.globalCompositeOperation = 'source-over';
      dustCtx.fillStyle = 'rgba(0,0,0,.05)';
      dustCtx.fillRect(0, 0, w, h);
      dustCtx.globalCompositeOperation = 'lighter';

      starCtx.clearRect(0, 0, w, h);
      starCtx.fillStyle = '#ffffff';
      starCtx.strokeStyle = 'rgba(255,255,255,.05)';
      starCtx.beginPath();

      if (drawingMode) galaxies.forEach(function(g) {
          starCtx.moveTo(g.x, g.y);
          starCtx.arc(g.x, g.y, 2, 0, TAU);
      });

      galaxies.forEach(function(g) {
          g.stars.forEach(function(s) {
              starCtx.moveTo(s.x, s.y);
              starCtx.arc(s.x, s.y, s.radius, 0, TAU);
          });
          g.dust.forEach(function(d) {
              dustCtx.drawImage(d.texture, d.x - d.size * 0.5, d.y - d.size * 0.5, d.size, d.size);
          });
      });

      dustCtx.fill();
      starCtx.fill();

      if (drawingMode && currentGalaxy) {
          starCtx.beginPath();
          currentGalaxy.stars.forEach(function(s, i) {
              starCtx.moveTo(s.x, s.y);
              starCtx.lineTo(currentGalaxy.x, currentGalaxy.y);
          });
          starCtx.stroke();
      }
    },
    update() {
      galaxies.forEach(function(g) {
          if (g != currentGalaxy) {
              g.realAngleOffsetX += g.realAngleOffsetX < g.angleOffsetX ? (g.angleOffsetX - g.realAngleOffsetX) * 0.05 : 0;
              g.realAngleOffsetY += g.realAngleOffsetY < g.angleOffsetY ? (g.angleOffsetY - g.realAngleOffsetY) * 0.05 : 0;
          }
          g.stars.forEach(function(s) {
              /*s.distance -= s.distance < 2
                ? 0
                : TAU/s.distance;*/
              updateStarDust(s, g);
          });
          g.dust.forEach(function(d) {
              /*d.distance -= d.distance < 50
                ? 0
                : TAU/d.distance;*/
              updateStarDust(d, g);
          });
      });
    },










  }
}
</script>
