<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button
      type="button"
      class="btn"
      :class="active === 0 ? 'btn-primary' : 'btn-secondary'"
      @click="changeActive(0)"
    >
      全部
    </button>
    <button
      type="button"
      class="btn"
      :class="active === 1 ? 'btn-primary' : 'btn-secondary'"
      @click="changeActive(1)"
    >
      已完成
    </button>
    <button
      type="button"
      class="btn"
      :class="active === 2 ? 'btn-primary' : 'btn-secondary'"
      @click="changeActive(2)"
    >
      未完成
    </button>
  </div>
</template>

<script>
export default {
  name: "todoButton",
  data() {
    return {
      active: 0,
    };
  },
  emits: ["changeActive"],
  methods: {
    changeActive(index) {
      this.active = index;
      this.$emit("changeActive", index);
    },
  },
};
</script>

<style scoped>
.btn-group {
  width: 500px;
  margin: 10px auto;
}
.btn {
  border-color: #fff;
  border-width: 2px;
}
</style>