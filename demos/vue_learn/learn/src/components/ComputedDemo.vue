<template>
    <h3>{{ itbaizhan.name }}</h3>
    <p>{{ itbaizhanContent }}</p>
</template>
<script>
export default{
    data(){
        return{
            itbaizhan:{
                name:"百战程序员",
                content:["前端","java","python"],
            }
        }
    },
    computed:{
        itbaizhanContent(){
            return this.itbaizhan.content.length>0?'Yes':'No';
        }
    },
}
</script>