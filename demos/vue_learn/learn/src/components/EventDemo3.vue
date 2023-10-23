<template>
  <h3>内联事件处理器</h3>
  <button v-on:click="addCount">add</button>
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
    addCount(e) {
      //Vue中的event对象就是原生Js中的event对象
      e.target.innerHTML = "ADD" + this.count;
      this.count++;
    },
  },
};
</script>