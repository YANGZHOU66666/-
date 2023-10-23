<template>
    <h3>事件修饰符</h3>
    <a v-on:click.prevent="clickHandle" href="https://www.baidu.com">百度</a>
</template>
<script>
export default{
    methods:{
        clickHandle(){
            console.log("点击了");
        }
    }
}
</script>
