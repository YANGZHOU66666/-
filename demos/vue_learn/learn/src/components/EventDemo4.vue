<template>
  <h3>内联事件处理器</h3>
  <button v-on:click="addCount('Hello')">add</button>
  <p>{{ count }}</p>
</template>
  <script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount(msg) {
      console.log(msg);
      this.count++;
    },
  },
};
</script>