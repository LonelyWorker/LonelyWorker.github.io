import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './systemRouters.js';

Vue.use(VueRouter)



const router = new VueRouter({
  routes: routers,
});
router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  console.log(router);
  next();
})


export default router
