<template>
    <h3>组件事件</h3>
    <Child @someEvent="getHandle"/>
</template>
<script>
import Child from './Child.vue';
export default {
    components:{
        Child,
    },
    methods:{
        getHandle(data){
            console.log("receieved",data);
        }
    }
}
</script>