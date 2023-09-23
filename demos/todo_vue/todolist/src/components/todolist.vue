<template>
  <ul class="list-group">
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
      v-for="item in todolist"
      :key="item.id"
    >
      <input
        class="form-check-input me-1"
        type="checkbox"
        value=""
        :id="item.id"
        v-model="item.isCompleted"
      />
      <label
        class="form-check-label stretched-link"
        :for="item.id"
        :class="item.isCompleted ? 'delete' : ''"
        >{{ item.task }}</label
      >
      <span class="badge bg-primary rounded-pill" v-if="item.isCompleted"
        >已完成</span
      >
      <span class="badge bg-warning rounded-pill" v-else>未完成</span>
    </li>
  </ul>
</template>
  
<script>
export default {
  name: "todolist",
  props: {
    todolist: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>

<style scoped>
/*scoped: 防止不同组件样式冲突 */
.list-group {
  width: 500px;
  margin: 0 auto; /*居中 */
}
.delete {
  text-decoration: line-through;
}
</style>
  