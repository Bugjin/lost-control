<template>
    <div class="Portraits">
      <Avatar 
      :username="users.username"
      :src="users.src"
      :backgroundColor="users.backgroundColor"
      :color="users.color"
      ></Avatar>
      <span></span>
    </div>
   
</template>
<script>
import {mapState} from "vuex"
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
        computed:{
            ...mapState([
                "users"
            ]),
            // username:this.$store
        }
        ,
        methods:{
            
            
        },
        
    }
</script>
<style  scoped>

.Portraits{
    width: 40px;
    height: 40px;
    float: right;
}
</style>