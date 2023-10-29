<template>
    <h3>componentB</h3>
    <p>{{ title }}</p>
    <div>{{onEvent('传递数据')}}</div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    props:{
        title:String,
        onEvent:Function,
    }
}
</script>