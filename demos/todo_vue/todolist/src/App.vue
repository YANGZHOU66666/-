<template>
  <div id="app">
    <h1>根组件</h1>
    <todoInput @addTask="addTask"></todoInput>
    <todolist :todolist="todolist"></todolist>
    <todoButton @changeActive="changeActive"></todoButton>
  </div>
</template>

<script>
import todolist from "./components/todolist.vue";
import todoButton from "./components/todoButton.vue";
import todoInput from "./components/todoInput.vue";
export default {
  name: "App",
  data() {
    return {
      todolist: [
        { id: 1, task: "eat", isCompleted: true },
        { id: 2, task: "sleep", isCompleted: true },
        { id: 3, task: "beat", isCompleted: false },
      ],
      active: 0,
    };
  },
  computed: {
    /*过滤，active为0返回整个列表，1返回已完成，2返回未完成 */
    todolist() {
      if (this.active === 0) {
        return this.todolist;
      } else if (this.active === 1) {
        return this.todolist.filter((item) => item.isCompleted);
      } else {
        return this.todolist.filter((item) => !item.isCompleted);
      }
    },
  },
  methods: {
    changeActive(active) {
      this.active = active;
    },
    addTask(taskname){
      this.todolist.push({
        id:this.todolist.length+1,
        task:taskname,
        isCompleted:false,
      });
    },
  },
  components: {
    todolist,
    todoButton,
    todoInput,
  },
};
</script>
