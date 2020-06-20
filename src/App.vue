<template>
    <div id="app">
        <!-- <div class="layout" v-if="isuser">
            <router-view></router-view>
        </div>
        <div v-if="!isuser">
            <login></login>
        </div> -->
    <router-view v-if="!flag"></router-view>
    <!-- <login v-if="flag"></login> -->
    </div>
</template>
<script>
import user from './views/Home'
import login from './views/Login'

    export default {
        data () {
            return {
                
                flag:false

            
            };
        },
        methods:{
            islogin(flag){
                this.flag=flag
            },
            
        },
        components:{user,login}
    }
</script>
<style >
html{
    height: 100%;
}
    .layout-con{
        height: 100%;
        width: 100%;
    }
    #menu li {
        padding: 14px 10px;

    }
    


</style>