<template>
    <h3>Parent</h3>
    <Child :title="title"/>
</template>
<script>
import Child from './Child.vue';
export default {
    components:{
        Child,
    },
    props:{
        title:{
            type:String,
        }
    }
}
</script>