
<template>
  <div>
    <template v-for="(item, index) in dataList">
      <el-submenu
        :key="index"
        v-if="item.children && item.children.length > 0"
        :index="item.name"
      >
        <template slot="title">
          <span class="menu-text" :class="{ active: name === item.name }">{{
            item.val
          }}</span>
        </template>
        <el-menu-item
          v-for="(ele, key) in item.children"
          :key="key"
          :index="ele.name"
          :disabled="!ele.name"
          @click="
            () => {
              handleSideItem(ele);
            }
          "
        >
          <span
            slot="title"
            class="menu-text"
            :class="{ active: name === ele.name }"
            >{{ ele.val }}</span
          >
        </el-menu-item>
      </el-submenu>
      <el-menu-item
        :key="index"
        :index="item.name"
        :disabled="!item.name"
        @click="
          () => {
            handleSideItem(item);
          }
        "
        v-else
      >
        <span
          slot="title"
          class="menu-text"
          :class="{ active: name === item.name }"
          >{{ item.val }}</span
        >
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      name: "",
    };
  },
  watch: {
    // $route: {
    //   handler: (val) => {
    //     console.log(val);
    //   },
    // },
  },
  mounted() {
    this.getActionStatus();
  },
  methods: {
    getActionStatus() {
      console.log(this.$route);
    },
    // 选择菜单
    handleSideItem(item) {
      // 控制点击高亮
      this.name = item.name;
      console.log(this.dataList);
      this.$router.push({
        name: item.name,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  color: red;
}
</style>