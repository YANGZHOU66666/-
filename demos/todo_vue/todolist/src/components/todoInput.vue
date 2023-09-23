<template>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">输入任务</span>
    <input
      type="text"
      class="form-control"
      placeholder="请输入待办任务"
      aria-label="Username"
      aria-describedby="basic-addon1"
      v-model="taskname"
    />
    <button type="button" class="btn btn-primary" @click="onsubmit">
      提交
    </button>
  </div>
</template>

<script>
export default {
  name: "todoInput",
  data() {
    return {
      taskname: "",
    };
  },
  emits:["addTask"],
  methods:{
    onsubmit(){
        this.$emit("addTask",this.taskname);
        this.taskname="";
    }
  }
};
</script>

<style scoped>
.input-group {
  width: 500px;
  margin: 0 auto;
}
</style>