<template>
    <h3>slots再续集</h3>
    <slot name="name1" :msg="childMessage"></slot>
    <slot name="name2" :demo="demoMessage"></slot>
</template>
<script>
export default {
    data(){
        return{
            childMessage:"子组件数据",
            demoMessage:"子组件数据2",
        }
    }
}
</script>