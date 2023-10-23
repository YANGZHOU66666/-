<template>
    <h3>监听数组变化</h3>
    <button @click="addListHandle">添加数据</button>
    <ul>
        <li v-for="name in names" :key="index">{{ name }}</li>
    </ul>
</template>
<script>
export default{
    data(){
        return{
            names:["ime","jack","bob"],
        }
    },
    methods:{
        addListHandle(){
            this.names.push("eric");
        }
    }
}
</script>