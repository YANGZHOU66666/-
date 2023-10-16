<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <el-aside width="200px">Aside</el-aside>
      <el-container class="r-container">
        <CommonHeader/>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from "vue"
import CommonHeader from '../components/CommonHeader.vue'
export default defineComponent({
  setup() {
    
  },
  components:{
    CommonHeader,
  }
})
</script>
<style scoped>
.r-container{
  flex-wrap: wrap;
}
</style>
