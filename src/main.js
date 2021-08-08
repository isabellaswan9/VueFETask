// main.js
import Vue from 'vue'
import App from './App'
import router from './router'

import { Button } from 'ant-design-vue';
import { Col,Row,Layout,Icon,Radio,Input,Form,Divider,Steps,Spin } from 'ant-design-vue';

//注册全局组件
import tab from './components/tab'
import subTab from './components/subTab'
import hoting from './components/hoting'

Vue.component(Button.name, Button);
Vue.component(Col.name, Col);
Vue.component(Row.name, Row);
Vue.component(Layout.name, Layout);
Vue.component(Icon.name, Icon);
Vue.use(Radio);
//Vue.component(RadioGroup.name, RadioGroup);
Vue.use(Input);
Vue.use(Form);
Vue.use(Steps);
Vue.use(Spin);
Vue.component(Divider.name, Divider);

Vue.component('tab',tab);
Vue.component('subTab',subTab);
Vue.component('hoting',hoting);
/**
 * 其实就是：import router from './router/index.js'
 * 在使用webpack项目中，如果导入index.js，则可以省略
 * 这里是相当于导入了一个路由
 */

// 在生产环境下把注释全部去掉
Vue.config.productionTip = false
	Spin.setDefaultIndicator({
	  indicator: {
	    render() {
	      return ;
	    },
	  },
	});
// 是否启动代码质量检查，不要删除
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})