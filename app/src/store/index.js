import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state={
    token:localStorage.token && JSON.parse(localStorage.getItem('token')).token || '',
    loginInfo:JSON.parse(localStorage.getItem('token')),
    mailList:''
}
const mutations={ 
    getToken(state,params){
        // console.log(params)
        // localStorage.setItem('token',JSON.stringify(params))
        state.loginInfo=params
    },
    mailNum(state,params){
        console.log(JSON.parse(params))
        state.mailList = JSON.parse(params);
    },
    clearLoginInfoInfo(state){
        state.loginInfo = {}
    }
}
const store = new Vuex.Store({
    state,
    mutations
});
 
export default store;