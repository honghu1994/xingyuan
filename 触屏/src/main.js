// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'

//引入less
import Less from 'Less'

// 导入ElementUI
import ElementUI from 'element-ui';//element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css';//element-ui的css
import store from './store'
Vue.use(ElementUI) //使用elementUI

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://192.168.2.108:8080/'
Vue.prototype.$http = axios


axios.interceptors.request.use(config => {
  // 判断是否存在token，如果存在的话，则每个http header都加上token
  // if (sessionStorage.getItem('token')) {
  //   // 配置请求头部
  //   config.headers['token'] = sessionStorage.getItem('token')
  // }
  if(config.type == 'formData' || config.method != 'post'){
    return config
  }
  config.data = qs.stringify(config.data)
  return config
}, (err) =>{
  Message.error({
    message: '加载超时'
  });
  return Promise.reject(err);
})

router.beforeEach((to, from ,next) => {
  if (sessionStorage.token) {
    to.path !== '/Login' ? next() : next({
      path: '/home'
    })
  } else {
    to.path !== '/Login' ? next({
      path: '/Login'
    }) : next()
  }
})








Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
