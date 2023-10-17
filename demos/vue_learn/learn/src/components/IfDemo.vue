<template>
  <h1>条件渲染</h1>
  <div v-if="flag">你能看见我吗</div>
  <div v-else>那你还是看看我吧</div>
  <div v-if="type === 'A'">A</div>
  <div v-if="type === 'B'">B</div>
  <div v-if="type === 'C'">C</div>
  <div v-show="!flag">show</div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      type: "A",
    };
  },
};
</script>
