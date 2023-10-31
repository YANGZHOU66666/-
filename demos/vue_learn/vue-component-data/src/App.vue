<template>
  <h3>祖宗</h3>
  <Parent title="祖宗的财产" />
</template>
<script>
import Parent from "./components/Parent.vue";
export default {
  data() {
    return {
      msg: "爷爷的财产!!!",
    };
  },
  provide(){
    return{
      message: this.msg,
    }
  },
  components: {
    Parent,
  },
};
</script>

<style scoped>
</style>