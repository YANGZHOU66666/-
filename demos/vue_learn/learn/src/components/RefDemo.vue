<template>
  <button @click="getElementHandle">获取元素</button>
  <input type="text" ref="textInput" />
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getElementHandle() {
      console.log(this.$refs.textInput.value);
    },
  },
};
</script>