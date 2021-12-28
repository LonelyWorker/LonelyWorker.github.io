import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import VueAMap from 'vue-amap'; // 引入高德地图
import axios from 'axios';

Vue.prototype.$axios = axios;

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  undefined
  return routerPush.call(this, location).catch(error => error)
}


// 高德地图
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '388a3aac1d3a063d41b2ff94736ad6a4',
  plugin: [
    'Autocomplete',
    'PlaceSearch',
    'Scale',
    'OverView',
    'ToolBar',
    'MapType',
    'PolyEditor',
    'AMap.CircleEditor'
  ]
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
