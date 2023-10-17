
<template>
  <div v-bind:class="test">测试</div>
</template>

<script>
export default{
  data(){
    return{
      test:"testClass"
    }
  }
}
</script>
<style scoped>
.testClass{
  color:red;
}
</style>
