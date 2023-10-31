<template>
  <keep-alive>
    <component :is="tabComponent"></component>
  </keep-alive>
  <button @click="changeHandle">切换组件</button>
</template>
<script>
import { defineAsyncComponent } from "vue";
import ComponentA from "./ComponentA.vue";
const ComponentB = defineAsyncComponent(() => {
  import("./ComponentB.vue");
});
export default {
  data() {
    return {
      tabComponent: "ComponentA",
    };
  },
  methods: {
    changeHandle() {
      this.tabComponent =
        this.tabComponent == "ComponentA" ? "ComponentB" : "ComponentA";
    },
  },
  components: {
    ComponentA,
    ComponentB,
  },
};
</script>