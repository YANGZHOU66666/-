<template>
  <h3>表单输入绑定</h3>
  <form>
    <input type="text" v-model.lazy="message" />
    <p>{{ message }}</p>
    <input type="checkbox" id="checkbox" v-model="checked" /><span>{{
      checked
    }}</span>
  </form>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      checked: true,
    };
  },
};
</script>