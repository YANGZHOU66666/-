<template>
  <p :class="[isActive ? 'active' : '', { danger: isDanger }]">Class样式绑定</p>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      isDanger: true,
      myClass: { active: true, danger: true },
      arrActive: "active",
      arrDanger: "danger",
    };
  },
};
</script>
<style scoped>
.active {
  color: red;
  font-size: large;
}
.danger {
  text-decoration: line-through;
}
</style>