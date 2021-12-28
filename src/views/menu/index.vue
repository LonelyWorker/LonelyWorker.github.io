<template>
  <div class="menus">
    <el-container>
      <el-aside width="200px">
        <el-header>logo</el-header>
        <el-aside>
          <Sidebar ref="sidebar" />
        </el-aside>
      </el-aside>
      <el-container>
        <el-header> <Menu @handleSelect="selectMeunItem" /> </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "./menus";
import Sidebar from "./sidebar";
export default {
  name: "menus",
  components: {
    Menu,
    Sidebar,
  },
  data() {
    return {
      itemIndex: null,
    };
  },
  methods: {
    selectMeunItem(item) {
      this.$refs.sidebar.open(item);
    },
  },
};
</script>

<style lang='scss' scoped>
.menus,
.el-container {
  height: 100%;
  .el-aside {
    width: 100%;
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    height: 100%;
    overflow: hidden;
  }

  .el-main {
    color: #333;
    background-color: #e9eef3;
  }
  .el-header,
  .el-footer {
    background-color: #545c64;
    color: #333;
    text-align: center;
    height: 30px;
    line-height: 1.875rem;
  }
  .el-footer {
    height: 30px !important;
  }
}
</style>