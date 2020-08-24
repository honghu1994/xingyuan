// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import Element from 'element-ui'
import echarts from 'echarts'


Vue.use(Element)
Vue.prototype.$echarts = echarts

import http from './api/http.js'   //axios实例化后引入取名http
Vue.prototype.http = http   //放入全局


import yearList from './assets/yearList'
Vue.prototype.$yearList = yearList

Vue.config.productionTip = false
Vue.config.errorApiCode = 0; ///0无错误，1有错误

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

console.log(document.getElementsByTagName('html')[0].style.fontSize = 60 + 'px')
function setRem() {
  var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
  var bodyWidth = document.body.clientWidth;// 当前窗口的宽度
  var rem = bodyWidth * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  document.getElementsByTagName('html')[0].style.fontSize = 80 + 'px';
  if(bodyWidth>1800){
    document.getElementsByTagName('html')[0].style.fontSize = 100 + 'px';
  }else if(bodyWidth>1000 && bodyWidth<=1800){
    document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
  }
  else{
    document.getElementsByTagName('html')[0].style.fontSize = 60 + 'px';
  }

}
window.addEventListener('load', setRem);
window.addEventListener('resize', setRem);
