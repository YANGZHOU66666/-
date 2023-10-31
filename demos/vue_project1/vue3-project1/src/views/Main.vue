<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <CommonAside />
      <el-container class="r-container">
        <CommonHeader />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonAside from "../components/CommonAside.vue";
export default defineComponent({
  setup() {},
  components: {
    CommonHeader,
    CommonAside,
  },
});
</script>
<style scoped>
.r-container {
  flex-wrap: wrap;
}
</style>
