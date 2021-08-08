// index.js
import Vue from 'vue'
import Router from 'vue-router'
// 引入路由
import index from '../pages/index'
import moveDetail from '../pages/moveDetail'
import floorPlan from '../pages/floorPlan'
Vue.use(Router)

export default new Router({
   // routes用来定义路由对象，里面的每一个对象都是一个路由
 routes: [
   {
     path: '/', // 碰到这个路径跳转路由至index
     name: 'index',  // 给这个路由取的一个别名
     component: index // 代表在当前路径下，加载index路由
   },
   {
	   path:'/moveDetail',
	   name: 'moveDetail',
	   component: moveDetail
   },
   {
   	   path:'/floorPlan',
   	   name: 'floorPlan',
   	   component: floorPlan
   }
 ]
})