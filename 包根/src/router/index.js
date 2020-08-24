import Vue from 'vue'
import Router from 'vue-router'

const AssetManagement = () => import('../views/assetManagement/AssetManagement.vue') 
const ResourcesRegister = () => import('../views/assetManagement/resourcesRegister/ResourcesRegister.vue') 
const AssetsDandle = () => import('../views/assetManagement/assetsDandle/AssetsDandle.vue') 
const FixedAssetsRegistration = () => import('../views/assetManagement/fixedAssetsRegistration/FixedAssetsRegistration.vue')
const InvestmentRegistration = () => import('../views/assetManagement/investmentRegistration/InvestmentRegistration.vue')  
const NoAssetsRegistration = () => import('../views/assetManagement/noAssetsRegistration/NoAssetsRegistration.vue')
const OtherAssetsRegistration = () => import('../views/assetManagement/otherAssetsRegistration/OtherAssetsRegistration.vue')
const AssetsReportForm = () => import('../views/assetManagement/assetsReportForm/AssetsReportForm.vue')

Vue.use(Router)

export default new Router({
  routes: [
  
  {
    path:'/assetManagement',  
    redirect:'/assetManagement/assetsDandle',
    component:AssetManagement,
    children:[
      {
        path:'resourcesRegister',
        component:ResourcesRegister,
      },
      {
        path:'assetsDandle',
        component:AssetsDandle,   
      },
      {
        path:'fixedAssetsRegistration',
        component:FixedAssetsRegistration, 
      },
      {
        path:'investmentRegistration',
        component:InvestmentRegistration, 
      },
      {
        path:'noAssetsRegistration',
        component:NoAssetsRegistration, 
      },
      {
        path:'otherAssetsRegistration',
        component:OtherAssetsRegistration,
      },
      {
        path:'assetsReportForm',
        component:AssetsReportForm,
      }
    ]
  },
  
  ]
})
