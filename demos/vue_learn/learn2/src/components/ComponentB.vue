<template>
    <h3>ComponentB</h3>
    <div>{{ title }}</div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        title:{
            type:[Number,String,Object],
        }
    }
}
</script>