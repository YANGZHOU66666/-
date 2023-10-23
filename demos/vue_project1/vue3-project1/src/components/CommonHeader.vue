<template>
  <el-header>
    <div class="l-content">
      <el-icon><Menu/></el-icon>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" :src="getImgSrc('user')" alt="" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  setup() {
    /*const imgSrc=require('../assets/images/user.png')*/
    const getImgSrc = (user) => {
      return new URL("../assets/images/user.png", import.meta.url).href;
    };
    return {
      getImgSrc,
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.user {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>