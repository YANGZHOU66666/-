<template>
  <div class="user-header">
    <el-button type="primary" class="add-button">+新增</el-button>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="查找用户">
        <el-input
          placeholder="请输入用户名"
          clearable
          v-model="formInline.keyword"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
  <el-table
    :data="
      tableData.slice(
        (config.page - 1) * itemInOnePage,
        config.page * itemInOnePage
      )
    "
  >
    <el-table-column
      v-for="item in tableLabel"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      :width="item.width ? item.width : 125"
    >
    </el-table-column>
    <el-table-column fixed="right" label="操作" min-width="180">
      <template #default>
        <el-button size="small">编辑</el-button>
        <el-button size="small" type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination-container">
    <el-pagination
      small
      background
      layout="prev, pager, next"
      :page-size="itemInOnePage"
      :total="config.total"
      @current-change="onChangePage"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const itemInOnePage = 20;
const formInline = reactive({
  keyword: "",
});
const getUserTableData = async () => {
  await proxy.$api.getUserTableData().then((res) => {
    let len = res.length;
    tableData.value = res;
    config.total = len;
  });
};
const config = reactive({
  page: 1,
  total: 0,
});
const onChangePage = (page) => {
  config.page = page;
};
const tableData = ref([]);
const tableLabel = reactive([
  {
    prop: "name",
    label: "姓名",
  },
  {
    prop: "age",
    label: "年龄",
  },
  {
    prop: "sexLabel",
    label: "性别",
  },
  {
    prop: "birth",
    label: "出生日期",
    width: 200,
  },
  {
    prop: "addr",
    label: "地址",
    width: 320,
  },
]);
onMounted(() => {
  getUserTableData();
});
</script>

<style lang="less" scoped>
.el-table {
  height: 600px;
}
.pagination-container {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.user-header {
  display: flex;
  justify-content: space-between;
  .el-form {
    .el-form-item {
      .el-input{
        margin-right: 20px;
      }
      margin-right:0;
      margin-bottom: 10px;
    }
  }
}
</style>
