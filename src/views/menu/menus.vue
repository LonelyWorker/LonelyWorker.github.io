<template>
  <div class="menu">
    <el-menu
      default-active="20211001"
      class="el-menu-demo"
      mode="horizontal"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item
        v-for="item in projectGroup"
        :key="item.key"
        :index="item.key"
        @click="handleSelect(item)"
        >{{ item.val }}</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "menu",
  components: {},
  data() {
    return {
      title: "",
      projectGroup: [], // 数据
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 初始化数据
    getData() {
      this.$axios.get("/user/menu").then((res) => {
        this.projectGroup = res.data;
      });
    },
    
    // 点击事件
    handleSelect(item) {
      this.$emit("handleSelect", item);
    },
  },
};
</script>

<style lang='scss' scoped>
.menu {
  display: flex;
  .el-menu {
    flex: 1;
    border: 0 none;
  }
}
</style>