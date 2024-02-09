<template>
  App
  {{ message }}
  <button @click="logMessage">log</button>
  <Reactive></Reactive>
</template>
<script setup>
import Reactive from './components/reactive.vue'
//数据
const message = "this is message";
//函数
const logMessage = function () {
  console.log(message);
  return message;
};
</script>