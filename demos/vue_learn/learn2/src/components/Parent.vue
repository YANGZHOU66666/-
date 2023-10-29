<template>
    <h3>Parent</h3>
    <Child title="Parent数据"/>
</template>
<script>
import Child from './Child.vue'

export default {
    data(){
        return{
            age:10,
        }
    },
    components:{
        Child,
    }
}
</script>