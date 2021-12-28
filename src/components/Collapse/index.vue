<template>
  <div id="baseHTML">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>
          {{ title }}
        </span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        >
      </div>
      <div>
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item
            v-for="(item, index) in dataList"
            :key="index"
            :title="item.name"
            :name="item.key"
          >
            <div v-html="item.content"></div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "collapse",
  props: {
    title: {
      type: String,
      default: () => {
        return "";
      },
    },
    dataList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      activeNames: "",
    };
  },
  mounted() {},
};
</script>

<style>
</style>