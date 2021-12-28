<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ title }}</span>
    </div>
    <div>
      {{ content }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: "card",
  props: {
    title: {
      type: String,
      default: () => {
        return "";
      },
    },
    content: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>