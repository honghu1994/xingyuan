import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import axios from 'axios';
import qs from 'qs';

//用qs解析，jsonToForm
axios.interceptors.request.use(config => {
    if(config.type == 'formData' || config.method != 'post'){
      return config
    }
    config.data = qs.stringify(config.data)
    return config
  }, (err) =>{
    Message.error({
      message: '加载超时'
    });
    return Promise.reject(err);
  })
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

// Vue.prototype.openLoading = function() {
//   const loading = this.$loading({           // 声明一个loading对象
//     lock: true,                             // 是否锁屏
//     text: '正在加载...',                     // 加载动画的文字
//     spinner: 'el-icon-loading',             // 引入的loading图标
//     background: '#fff',       // 背景颜色
//     target: '.sub-main',                    // 需要遮罩的区域
//     body: true,                              
//     customClass: 'mask'                     // 遮罩层新增类名
//   })
//   setTimeout(function () {                  // 设定定时器，超时5S后自动关闭遮罩层，避免请求失败时，遮罩层一直存在的问题
//     loading.close();                        // 关闭遮罩层
//   },3000)
//   return loading;
// }

// 设置基地址
//服务器地址
axios.defaults.baseURL = "http://119.23.209.162"

//李宜敏地址
// axios.defaults.baseURL = "http://192.168.2.113:8080/"
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
