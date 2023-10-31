<template>
    <h3>ComponentA</h3>
    <p>{{ message }}</p>
    <button @click="changeData">更换数据</button>
</template>
<script>
export default {
    beforeMounte(){
        console.log("组件卸载之前");
    },
    mounted(){
        console.log("组件卸载之后");
    },
    data(){
        return{
            message:"老数据",
        }
    },
    methods:{
        changeData(){
            this.message="新数据";
        }
    }
}
</script>