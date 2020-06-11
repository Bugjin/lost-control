<template>
  <div id="app">
  <p>{{time}}</p>
 
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data:function() {
    return{
      time: '',
      type: 'hex'
      }
    
  },
  mounted () {
    this.updateTime()
    setInterval(function () {
      this.updateTime()
    }.bind(this), 1000)
  },
  methods: {
    updateTime () {
      let date = new Date();
      this.time = date.toTimeString().substr(0,8)
    } 
  }
}

</script>


<style scoped>
p{
  text-align: center;
}
</style>
