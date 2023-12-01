<template>
    <div>
        <h1>
            {{ dataEgg.name }}-路由组件
        </h1>
        <div class="">
            {{ dataEgg.description }}
        </div>
    </div>
</template>
<script>
import dataEggs from '../data.json'
export default {
    computed:{
        eggType(){
            return this.$route.params.eggType;
        },
        dataEgg(){
            return dataEggs.find(dataEgg=>dataEgg.type===this.eggType);
        }
    }
}
</script>
