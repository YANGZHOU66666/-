<template>
  <h3>Child</h3>
  <p>{{ title }}</p>
  <p>{{ fullMessage }}</p>
</template>
<script>
export default {
  inject: ["message"],
  data() {
    return {
      fullMessage: this.message,
    };
  },
  props: {
    title: {
      type: String,
    },
  },
};
</script>