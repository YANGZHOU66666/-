<template>
  <MyComponent/>
  <my-component/>
  <Parent/>
  <ComponentA/>
</template>
<script>
import Parent from './components/Parent.vue'
import ComponentA from './components/ComponentA.vue';
export default{
  components:{
    Parent,
    ComponentA,
  }


}
</script>
<style scoped>

</style>