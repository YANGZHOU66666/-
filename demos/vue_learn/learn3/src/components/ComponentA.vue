<template>
    <h3>componentA</h3>
    <ComponentB title="标题" :onEvent="datafn"/>
    <div>{{ message }}</div>
</template>
<script>
import ComponentB from './componentB.vue';
export default {
    data(){
        return{
            message:"",
        }
    },
    methods:{
        datafn(data){
            console.log(data);
            this.message=data;
        }
    },
    components:{
        ComponentB,
    }
}
</script>