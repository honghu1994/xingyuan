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
// 设置基地址
axios.defaults.baseURL = "http://119.23.209.162/"
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
