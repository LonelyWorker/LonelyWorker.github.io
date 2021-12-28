<template>
  <div class="sidebar">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <Menu :dataList="sideList" />
    </el-menu>
  </div>
</template>

<script>
import Menu from "@/components/menu";
export default {
  components: { Menu },
  name: "sidebar",
  data() {
    return {
      datalist: {},
      sideList: [], // 菜单
    };
  },
  created() {
    this.getData();
  },

  methods: {
    // 初始化数据
    getData() {
      this.$axios.get("/user/sidebar").then((res) => {
        this.datalist = res.data;
        this.sideList = this.datalist.HTML;
      });
    },
    // 打开菜单
    open(item) {
      this.sideList = [];
      this.sideList = this.datalist[item.val];
    },
  },
};
</script>

<style lang='scss' scoped>
.sidebar,
.el-menu {
  height: 100%;
  min-height: 100%;
}
.el-menu {
  width: 66%;
  border: 0 none;
}
</style>