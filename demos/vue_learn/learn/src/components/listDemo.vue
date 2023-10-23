<template>
  <h3>列表渲染</h3>
  <div v-for="(item,key,index) in type">{{ item }}:{{ key }}:{{ index }}</div>
</template>
<script>
export default {
  data() {
    return {
      names: ["111", "222", "333"],
      type:{
        id:1,
        name:"Bob",
        content:"12345",
      }
    };
  },
};
</script>