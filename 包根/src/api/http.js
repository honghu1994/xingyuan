import axios from 'axios'
import qs from 'qs';
import router from '../router'

// import { Message } from 'element-ui';  //element库的消息提示，可以不用
let qsData = qs;

//创建axios实例
export let baseURL= 'http://192.168.2.108:8080/'
var service = axios.create({
    //    baseURL: 'http://192.168.2.105:8080/',
    // baseURL: 'http://admin.jtzc.szspapp.com/',
    // baseURL: 'http://192.168.0.119:8082/',
    // baseURL: 'http://192.168.0.103:8080/',
    // baseURL: 'http://192.168.0.115:8080/',
    // baseURL: 'http://192.168.0.126:8082/',
    // baseURL: 'http://192.168.0.132:8080/',

    timeout: 5000,
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        "access_token": localStorage.token || '14a1347f412b319b0fef270489f',
        "time": Math.random()
    },
})

export default {
    post(url, param) {
        return new Promise((cback, reject) => {
            let data = qsData.stringify(param);
            service({
                method: 'post',
                url,
                data: data,
                // param: [],
            }).then(res => {
                // console.log(url);
                console.log(res);
                if (res.headers.access_token) {
                    localStorage.setItem("token", res.headers.access_token);
                }
                if (res.data.code == 10400) {
                    router.replace({
                        path: '/login',
                    })
                }



                //axios返回的是一个promise对象
                var res_code = res.status.toString();
                var res_code2 = res.data.code.toString();
                if (res_code2 == '0') {
                    console.log('1111111')
                    console.log('请求错误')
                } else {
                }
                if (res_code.charAt(0) == 2) {
                    cback(res);   //cback在promise执行器内部
                } else {
                    console.log(res, '异常1')
                }
            }).catch(err => {
                if (!err.response) {
                   console.log('222222')
                    console.log('请求错误')
                } else {
                    reject(err.response);
                    console.log(err.response, '异常2')
                }
            })
        })
    },
    //get请求，其他类型请求复制粘贴，修改method
    get(url, param) {
        return new Promise((cback, reject) => {
            service({
                method: 'get',
                url,
                params: param,
            }).then(res => {

                if (res.headers.access_token) {
                    localStorage.setItem("token", res.headers.access_token);
                }
                if (res.data.code == 10400) {
                    // router.replace({
                    //     path: '/login',
                    // })
                }

                //axios返回的是一个promise对象
                var res_code = res.status.toString();
                if (res_code.charAt(0) == 2) {
                    cback(res);   //cback在promise执行器内部
                } else {
                    console.log(res, '异常1')
                }
            }).catch(err => {
                if (!err.response) {
                    console.log('请求错误')
                } else {
                    reject(err.response);
                    console.log(err.response, '异常2')
                }
            })
        })
    }
}
