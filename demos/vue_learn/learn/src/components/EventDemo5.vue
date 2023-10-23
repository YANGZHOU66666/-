<template>
  <h3>内联事件处理器</h3>
  <p v-for="item in name" @click="printName(item,$event)">{{ item }}</p>
</template>
  <script>
export default {
  data() {
    return {
      count: 0,
      name: ["a", "b", "c"],
    };
  },
  methods: {
    printName(name,e) {
      console.log(name);
      console.log(e);
    },
  },
};
</script>