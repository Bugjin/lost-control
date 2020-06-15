<template>
    <div class="Portraits">
      <Avatar></Avatar>
    </div>
   
</template>
<script>
import Avatar from 'vue-avatar'
    export default {
        data () {
            return {
                value:0,
                max:100,
                
            }
        },
        components:{
            Avatar
        },

        methods:{
            
            
        }
    }
</script>
<style  scoped>

.Portraits{
    width: 40px;
    height: 40px;
    float: left;
}
</style>