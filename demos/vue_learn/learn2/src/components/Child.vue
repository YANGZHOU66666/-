<template>
    <h3>Child</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
    <p>Names:{{ names }}</p>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    props:{
        title:{
            type:String,
        },
        age:{
            type:Number,
            required:true,
        },
        names:{
            type:Array,
            default(){
                return ["空"];
            }
        }
    }
}
</script>
