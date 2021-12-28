<template>
  <div class="preface">
    <Card title="序言" :content="content" />
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "preface",
  components: {
    Card,
  },

  data() {
    return {
      content: "",
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      this.$axios.get("/user/preface").then((res) => {
        this.content = res.data.content;
      });
    },
  },
};
</script>

<style>
</style>