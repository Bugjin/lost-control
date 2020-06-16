<template>
    <div class="demo-avatar">
        
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg">USER</Avatar>
         <span>asdasddas</span> 
        
    </div>
</template>

<script>
import {mapState} from "vuex"
    export default {
        data () {
            return {
                value:0,
                max:100,
                
                
            }
        },
      
        computed:{
            ...mapState([
                "users"
            ]),
            
        }
       
    }
</script>
<style  scoped>

.Portraits{
    width: 40px;
    height: 40px;
    float: right;
}
</style>