<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    window.addEventListener('beforeunload', e => this.beforeunloadHandler(e));
  },
  destroyed(){
    window.removeEventListen('beforeunload', e => this.beforeunloadHandler(e))
  },

  methods: {
    // 关闭时提醒
    beforeunloadHandler(e) {
      console.log(this);
      this._beforeUnload_time = new Date().getTime();
      console.log("this._beforeUnload_time", this._beforeUnload_time);
      e = e || window.event;
      if(e){
        e.returnValue = '关闭提示'
      }

      // debugger
      return '关闭提示'
    },
    unloadHandler(){
      console.log('this._beforeUnload_time2', this._beforeUnload_time);
      this._gap
    }
  },
};
</script>


<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
