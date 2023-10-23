<template>
  <h3>侦听器</h3>
  <p>{{ message }}</p>
  <button @click="updateHandle">修改数据</button>
</template>
<script>
export default {
  data() {
    return {
      message: "Hello",
    }
  },
  methods:{
    updateHandle(){
        this.message+=" World";
    }
  },
  watch:{
    message(newValue,oldValue){//参数分别为新值和旧值
        console.log(newValue,oldValue);
    }
  }
};
</script>