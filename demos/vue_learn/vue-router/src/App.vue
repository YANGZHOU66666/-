<template>
  <nav>
    <router-link to="/">主页</router-link>
    <router-link v-for="dataEgg in dataEggs"  :to="{name:'eggs',params:{eggType:dataEgg.type}}">{{ dataEgg.name }}</router-link>
    <!--<router-link v-for="dataEgg in dataEggs" :key="dataEgg.id" :to="`/eggs/${dataEgg.type}`">{{ dataEgg.name }}</router-link>-->
  </nav>
  <router-view></router-view>
</template>
<script>
import dataEggs from './data.json'
export default {
  data(){
    return{
      dataEggs,
    }
  }
}
</script>
<style scoped>
.egg-active{
  color:red;
}
</style>