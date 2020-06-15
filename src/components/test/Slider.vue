<template>
    <Slider v-model="value"
            :max="max"
            @on-input="flag"
           >
    </Slider>
   
</template>
<script>
    export default {
        data () {
            return {
                value:0,
                max:100,
                
            }
        },
        methods:{
            flag(){
                if(this.value>85) {
                    return true
                }
            }
        }
    }
</script>
