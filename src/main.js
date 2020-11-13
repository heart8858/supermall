import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Moment from 'moment'
import store from './store'

import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

import Toast from "components/common/toast"



// 定义全局时间戳过滤器
Vue.filter('formatDate', function (value) {
  return Moment(value).format('YYYY-MM-DD HH:mm:ss')
})

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(Toast)

//解决移动端300ms的延迟
FastClick.attach(document.body)

//使用懒加载插件
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/umaru.jpg")
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
