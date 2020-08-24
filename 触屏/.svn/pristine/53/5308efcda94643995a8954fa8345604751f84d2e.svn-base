import Vue from 'vue'
import Router from 'vue-router'
//首页
import home from '../view/home'

//扶持发展
import support from '../view/support'
//扶持发展  子页面
import fuchi from '../view/fuchi'
import dengji from '../view/dengji'
import leixing from '../view/leixing'
import shenpi  from '../view/shenpi'
import genzhong  from '../view/genzhong'
import biao  from '../view/biao'


const Login = () => import('../view/login/Login.vue')


//import xinzeng  from '../components/xinzeng'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path:'/support',
      name:'support',
      redirect: '/fuchi',
      component: support,
      children: [
        {
          path:'/fuchi',
          name:'fuchi',
          component: fuchi,
        },{
          path:'/dengji',
          name:'dengji',
          component: dengji,
        },{
          path:'/leixing',
          name:'leixing',
          component: leixing,
        },{
          path:'/shenpi',
          name:'shenpi',
          component: shenpi ,
        },{
          path:'/genzhong',
          name:'genzhong',
          component: genzhong ,
        },{
          path:'/biao',
          name:'biao',
          component: biao,
        }
      ]
    },
      {
        path:'/login',
        component:Login,
      }
//  {
//    path: '/xinzeng',
//    name: 'xinzeng',
//    component:xinzeng
//  },






  ]
})
