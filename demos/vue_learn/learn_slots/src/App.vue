<template>
  <!-- <SlotsBase>
    <h3>插槽标题</h3>
    <p>插槽内容</p>
  </SlotsBase> -->
  <SlotsTwo>
    <template v-slot:header>
      <h3>标题</h3>
    </template>
    <template #main>
      <p>内容</p>
    </template>
  </SlotsTwo>
  <SlotsAttr>
    <template #name1="slotProps">
      <h3>{{ currentTEST }}</h3>
      <p>{{ slotProps.msg }}</p>
    </template>
    <template #name2="slotProps">
      <p>{{slotProps.demo}}</p>
    </template>
  </SlotsAttr>

</template>

<script>
import SlotsBase from './components/SlotsBase.vue';
import SlotsTwo from './components/SlotsTwo.vue';
import SlotsAttr from './components/SlotsAttr.vue';
export default {
  data(){
    return{
      message:"插槽内容续集",
      currentTEST:"测试内容",
    }
  },
  components:{
    SlotsBase,
    SlotsTwo,
    SlotsAttr,
  }
}
</script>

<style>
</style>
