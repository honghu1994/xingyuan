import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state={
    token:sessionStorage.token && JSON.parse(sessionStorage.getItem('token')).token || '',
    loginInfo:JSON.parse(sessionStorage.getItem('token')),
    mailList:''
}
const mutations={ 
    getToken(state,params){
        // console.log(params)
        // localStorage.setItem('token',JSON.stringify(params))
        state.loginInfo=params
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