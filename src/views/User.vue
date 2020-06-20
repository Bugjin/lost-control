<style >

.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
.content{
     position: absolute;
    /* z-index: 2; */
    top: 25px;
    left: 25%;
    width: 50%;
    text-align: center;
    pointer-events: none;
}

</style>
<template>
   
</template>
<script>
import Portraits from '@/components/Portraits'
   export default {
        data () {
            return {
                isCollapsed: false,
                flag :true
            };
        },
        methods: { },
        components:{
          Portraits
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>