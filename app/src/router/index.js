import Vue from 'vue'
import Router from 'vue-router'
import zhengzhao from '../views/zhengzhaojianguan/zhengzhao'


const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
//首页
import ShouYe from '../views/home/ShouYe'

//登录
import Login from '../views/Login01/Login'
import UserAgreement from '../views/Login01/UserAgreement'

//底部消息页面
import xiaoxi from '../views/xiaoxi01/xiaoxi'
import daiban from '../views/xiaoxi01/daiban'
import MessageDynamic from '../views/xiaoxi01/MessageDynamic' 
import MessageNotice from '../views/xiaoxi01/MessageNotice'
import MessageNoticeDetail from '../views/xiaoxi01/MessageNoticeDetail'    
import PoliciesRegulations from '../views/xiaoxi01/PoliciesRegulations'    
import PoliciesRegulationsDetail from '../views/xiaoxi01/PoliciesRegulationsDetail'     
import DynamicDetail from '../views/xiaoxi01/DynamicDetail'     
import NavAssetsDetail from '../views/xiaoxi01/NavAssetsDetail'     
import AssetsHandle from '../views/xiaoxi01/AssetsHandle'    
import Invitation from '../views/xiaoxi01/Invitation'    



//二级页面
import zichang from '../views/zichangguanli/zichang'
// 资产管理下的三级页面
import fixedAssets from '../views/zichangguanli/fixedAssets'
import resource from '../views/zichangguanli/resource'
import invest from '../views/zichangguanli/invest'
import invisibleAssets from '../views/zichangguanli/invisibleAssets'
// 资产管理下的四级页面
import fixedDetail from '../views/zichangguanli/fixedDetail'
import  resourceDetail from '../views/zichangguanli/resourceDetail'
import  investDetail from '../views/zichangguanli/investDetail'
import  invisibleDetail from '../views/zichangguanli/invisibleDetail'
// 资产管理下的五级页面
import map from '../views/zichangguanli/map'

//财务管理
import caiwu from '../views/caiwuguanli/caiwu'
//财务管理下的三级页面
import assetForm from '../views/caiwuguanli/assetForm'
import profitForm from '../views/caiwuguanli/profitForm'
import cashForm from '../views/caiwuguanli/cashForm'
import shareholderForm from '../views/caiwuguanli/shareholderForm'
import rightsForm from '../views/caiwuguanli/rightsForm'
import bankMessage from '../views/caiwuguanli/bankMessage'


// //预警监管
// import yujingdengji from '../views/zhengzhaojianguan/yujingdengji'
// import yujing from '../views/yujingjianguan/yujing'
// import yujingxinxi from '../views/yujingjianguan/yujingxinxi'
// import yujingxiangqing from '../views/yujingjianguan/yujingxiangqing'


//预警监管
import yujingdengji from '../views/zhengzhaojianguan/yujingdengji'
import yujing from '../views/yujingjianguan/yujing'
import yujingxinxi from '../views/yujingjianguan/yujingxinxi'
import yujingxiangqing from '../views/yujingjianguan/yujingxiangqing'
import assetMessage from '../views/yujingjianguan/assetMessage'
import IDMessage from '../views/yujingjianguan/IDMessage'
import IDdetail from '../views/yujingjianguan/IDdetail'
//预警三级页面
import warningBooking from '../views/yujingjianguan/warningBooking'




//交易管理页面
import jiaoyi from '../views/jiaoyiguanli/jiaoyi'
import wuyeJY from '../views/jiaoyiguanli/wuyeJY'
import wuyeJYXiangQing from '../views/jiaoyiguanli/wuyeJYXiangQing'
import huowufuwucaigou from '../views/jiaoyiguanli/huowufuwucaigou'
import caigouXiangQing from '../views/jiaoyiguanli/caigouXiangQing'
import gongchengJY from '../views/jiaoyiguanli/gongchengJY'
import gongchengJYXQ from '../views/jiaoyiguanli/gongchengJYXQ'
import jitiyongdi from '../views/jiaoyiguanli/jitiyongdi'
import jitiyongdiXQ from '../views/jiaoyiguanli/jitiyongdiXQ'
import chengjiaogonggao from '../views/jiaoyiguanli/chengjiaogonggao'
import chengjiaogonggaoXQ from '../views/jiaoyiguanli/chengjiaogonggaoXQ'
import liubiaoxiangmu from '../views/jiaoyiguanli/liubiaoxiangmu'
import tenderNotice01 from '../views/jiaoyiguanli/tenderNotice01'
import tenderMessage01 from '../views/jiaoyiguanli/tenderMessage01'
import fixedAssets01 from '../views/jiaoyiguanli/fixedAssets01'
import fixedDetail01 from '../views/jiaoyiguanli/fixedDetail01'

//合同管理页面
import hetong from '../views/hetongguanli/hetong'
import hetongliebiao from '../views/hetongguanli/hetongliebiao'
import hetongXiangQing from '../views/hetongguanli/hetongXiangQing'

//证照监管
import zhengzhaodaiban from '../views/zhengzhaojianguan/zhengzhaodaiban'
import zaiguanrenyuan from '../views/zhengzhaojianguan/zaiguanrenyuan'
import xiangqing02 from '../views/zhengzhaojianguan/xiangqing02'
import zaiguanzhengzhaoXQ from '../views/zhengzhaojianguan/zaiguanzhengzhaoXQ'
import lingqu from '../views/zhengzhaojianguan/lingqu'
import zaiguanzhengzhao from '../views/zhengzhaojianguan/zaiguanzhengzhao'
import qingjiaguanli from '../views/zhengzhaojianguan/qingjiaguanli'


//产业空间统筹    
import changyekongjian from '../views/changyekongjiantongcou/changyekongjian'
import guoyouqiye from '../views/changyekongjiantongcou/guoyouqiye'
import yezhu from '../views/changyekongjiantongcou/yezhu'
import zhiyin from '../views/changyekongjiantongcou/zhiyin'
import daijiaoyi from '../views/changyekongjiantongcou/daijiaoyi'
import MoreStockCompany from '../views/changyekongjiantongcou/MoreStockCompany'
import SpatialPlanning from '../views/changyekongjiantongcou/SpatialPlanning'
import EnterprisesDetails from '../views/changyekongjiantongcou/EnterprisesDetails'
import CountryEnterprisesDetails from '../views/changyekongjiantongcou/CountryEnterprisesDetails' 
import OwnerUnitDetails from '../views/changyekongjiantongcou/OwnerUnitDetails'
import AreaIndustryDetail from '../views/changyekongjiantongcou/AreaIndustryDetail' 
import PendingTransactionsDetail from '../views/changyekongjiantongcou/PendingTransactionsDetail'
import BasicMap from '../views/changyekongjiantongcou/BasicMap'

//政策法规 
import zcfg from '../views/zhengcefagui/zcfg'
import zhengceXiangQing from '../views/zhengcefagui/zhengceXiangQing'


const RequireRegister = () => import('@/views/requireRegister/RequireRegister') 
const AssetLocation = () => import('@/views/requireRegister/AssetLocation')
const RequireInfo = () => import('@/views/requireRegister/RequireInfo')  
const MyContract = () => import('@/views/contract/MyContract')  
const ContractDetail = () => import('@/views/contract/ContractDetail')  
const OutLink = () => import('@/views/outLink/OutLink')  
const NestLink = () => import('@/views/outLink/NestLink')
const ScanQRCode = () => import('@/views/outLink/ScanQRCode') 
const CompanyDetails = () => import('@/views/companyDetails/CompanyDetails') 
// 办理记录
const RecordHandle = () => import('@/views/recordHandle/RecordHandle') 
const ContractToDo = () => import('@/views/recordHandle/ContractToDo') 
const TransactionDetail = () => import('@/views/recordHandle/TransactionDetail') 
const AssetsDetail = () => import('@/views/recordHandle/AssetsDetail') 
const FinanceDetail = () => import('@/views/recordHandle/FinanceDetail') 
const LicenceDetail = () => import('@/views/recordHandle/LicenceDetail')  
const LeaveDetail = () => import('@/views/recordHandle/LeaveDetail') 

const WorkStatus = () => import('@/views/workStatus/WorkStatus') 
const WorkStatusDetails = () => import('@/views/workStatus/WorkStatusDetails') 
const Personal = () => import('@/views/personal/Personal')
const Email = () => import('@/views/personal/Email')
const ModifyPwd = () => import('@/views/personal/ModifyPwd')
const EmailList = () => import('@/views/email/EmailList')
const ReceiveMail = () => import('@/views/email/ReceiveMail')
const WritingMail = () => import('@/views/email/WritingMail')       
const ReceiveMailDetail = () => import('@/views/email/ReceiveMailDetail')
const EmailDelete = () => import('@/views/email/EmailDelete')
const EmailDrafts = () => import('@/views/email/EmailDrafts')  
const EmailSentComplete = () => import('@/views/email/EmailSentComplete') 
const MailList = () => import('@/views/email/MailList')
const AddContact = () => import('@/views/email/AddContact')


Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/home',
      name: 'ShouYe',
      component: ShouYe
    },
    {
      path: '/',
      redirect: '/home'     
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/userAgreement',
      name: 'UserAgreement',
      component: UserAgreement,
      meta:{
        auth:true  
      }
    },
    // 消息   
    {
      path: '/xiaoxi',
      name: 'xiaoxi',
      component: xiaoxi
    },
    {
      path: '/xiaoxi/messageNoticeDetail',
      name: 'MessageNoticeDetail',
      component: MessageNoticeDetail
    },
    {
      path: '/xiaoxi/messageNotice',
      name: 'MessageNotice',
      component: MessageNotice   
    },
    {
      path: '/xiaoxi/messageDynamic',  
      name: 'MessageDynamic',
      component: MessageDynamic  
    },
    {
      path: '/xiaoxi/policiesRegulations',  
      name: 'PoliciesRegulations',
      component: PoliciesRegulations   
    },
    {
      path: '/xiaoxi/PoliciesRegulationsDetail',   
      name: 'PoliciesRegulationsDetail',
      component: PoliciesRegulationsDetail    
    },
    {
      path: '/xiaoxi/dynamicDetail',   
      name: 'DynamicDetail',
      component: DynamicDetail  
    },
    {
      path: '/xiaoxi/navAssetsDetail',   
      name: 'NavAssetsDetail',
      component: NavAssetsDetail  
    },
    {
      path: '/xiaoxi/assetsHandle',   
      name: 'AssetsHandle',
      component: AssetsHandle
    },
    {
      path: '/xiaoxi/invitation',   
      name: 'Invitation',
      component: Invitation
    },
    {
      path: '/daiban',
      name: 'daiban',
      component: daiban
    }, 
    {
      path: '/zhengzhao',
      name: 'zhengzhao',
      component: zhengzhao
    },
    {
      path: '/caiwu',
      name: 'caiwu',
      component: caiwu
    },
    //财务管理下的三级页面
    {
      path: '/assetForm',
      name: 'assetForm',
      component: assetForm
    },
    {
      path: '/profitForm',
      name: 'profitForm',
      component: profitForm
    },
    {
      path: '/cashForm',
      name: 'cashForm',
      component: cashForm
    },
    {
      path: '/shareholderForm',
      name: 'shareholderForm',
      component: shareholderForm
    },
    {
      path: '/rightsForm',
      name: 'rightsForm',
      component: rightsForm
    },
    {
      path: '/bankMessage',
      name: 'bankMessage',
      component: bankMessage
    },
    {
      path: '/yujing',
      name: 'yujing',
      component: yujing
    },
     //预警下的三级子组件
     {
      path: '/warningBooking',
      name: 'warningBooking',
      component: warningBooking
    },
    {
      path: '/assetMessage',
      name: 'assetMessage',
      component: assetMessage
    },
    {
      path: '/IDMessage',
      name: 'IDMessage',
      component: IDMessage
    },
    {
      path: '/IDdetail',
      name: 'IDdetail',
      component: IDdetail
    },

     {
      path: '/zichang',
      name: 'zichang',
      component: zichang
    },
    // 资产管理下的子组件
    {
      name: 'fixedAssets',
      path: '/fixedAssets',
      component: fixedAssets
      },
      {
      name: 'resource',
      path: '/resource',
      component: resource
      },
      {
      name: 'invest',
      path: '/invest',
      component: invest
      },
      {
      name: 'invisibleAssets',
      path: '/invisibleAssets',
      component: invisibleAssets
      },
      //资产管理下的四级页面
      {
        name: 'fixedDetail',
        path: '/fixedDetail',
        component: fixedDetail
        },
      {
        name: 'resourceDetail',
        path: '/resourceDetail',
        component: resourceDetail
        },
      {
        name: 'investDetail',
        path: '/investDetail',
        component: investDetail
        },
      {
        name: 'invisibleDetail',
        path: '/invisibleDetail',
        component: invisibleDetail
        },

        //资产管理下的五级页面
      {
        name: 'map',
        path: '/map',
        component: map
        },




     {
      path: '/yujingdengji',
      name: 'yujingdengji',
      component: yujingdengji
    },
   
    
     {
      path: '/yujingxinxi',
      name: 'yujingxinxi',
      component: yujingxinxi
    },
    {
      path: '/yujingxiangqing',
      name: 'yujingxiangqing',
      component: yujingxiangqing
    },

    {
      path: '/requireRegister',
      name:'RequireRegister',
      component: RequireRegister,  
    },{
      path: '/assetLocation',
      name:'AssetLocation',
      component: AssetLocation  
    },{
      path: '/myContract',
      name:'MyContract',
      component: MyContract
    },
    ,{
      path: '/myContract/contractDetail',
      name:'ContractDetail',
      component: ContractDetail
    },
    {
      path: '/outLink',
      name:'OutLink',
      component: OutLink    
    },{
      path: '/nestLink',
      name:'NestLink',
      component: NestLink  
    },{
      path: '/companyDetails',
      name:'CompanyDetails',
      component: CompanyDetails  
    },{
      path: '/scanQRCode',
      name:'ScanQRCode',
      component: ScanQRCode     
    },{
      path: '/recordHandle',
      name:'RecordHandle',
      component: RecordHandle   
    },
    //办理记录 TransactionDetail AssetsDetail FinanceDetail LicenceDetail LeaveDetail
    {
      path: '/recordHandle/contractToDo',
      name:'ContractToDo',
      component: ContractToDo  
    }, {
      path: '/recordHandle/transactionDetail',
      name:'TransactionDetail',
      component: TransactionDetail  
    }, {
      path: '/recordHandle/assetsDetail',
      name:'AssetsDetail',
      component: AssetsDetail  
    }, {
      path: '/recordHandle/financeDetail',
      name:'FinanceDetail',
      component: FinanceDetail  
    }, {
      path: '/recordHandle/licenceDetail',
      name:'LicenceDetail',
      component: LicenceDetail  
    }, {
      path: '/recordHandle/leaveDetail',
      name:'LeaveDetail',
      component: LeaveDetail  
    },{
      path: '/workStatus',
      name:'WorkStatus',
      component: WorkStatus  
    },{
      path: '/workStatus/workStatusDetails',
      name:'WorkStatusDetails',
      component: WorkStatusDetails  
    },
    {
      path: '/personal',
      name:'Personal',
      component: Personal   
    },{
      path: '/personal/modifyPwd',
      name:'ModifyPwd',
      component: ModifyPwd  
    },{
      path: '/personal/email',
      name:'Email',
      component: Email  
    },{
      path: '/requireInfo',
      name:'RequireInfo',
      component: RequireInfo  
    },
    
    
 //产业空间统筹 
   {
      path: '/changyekongjian',
      name: 'changyekongjian',
      component: changyekongjian
   },{
    path: '/changyekongjian',
    name: 'changyekongjian',
    component: changyekongjian   
  },{
    path: '/changyekongjian/areaIndustryDetail',
    name:'AreaIndustryDetail',
    component:AreaIndustryDetail
  },{
    path: '/changyekongjian/moreStockCompany',
    name:'MoreStockCompany',
    component:MoreStockCompany 
  },{
    path: '/changyekongjian/basicMap',
    name:'BasicMap',
    component:BasicMap
  },
   {
      path: '/changyekongjian/pendingTransactionsDetail',
      name:'PendingTransactionsDetail',
      component:PendingTransactionsDetail
    },{
      path: '/changyekongjian/guoyouqiye',
      name:'guoyouqiye',
      component:guoyouqiye
    },{
      path: '/changyekongjian/countryEnterprisesDetails',
      name:'CountryEnterprisesDetails',
      component:CountryEnterprisesDetails
    },
    {
      path: '/changyekongjian/enterprisesDetails',
      name:'EnterprisesDetails',
      component:EnterprisesDetails
    }, {
      path: '/changyekongjian/ownerUnitDetails',
      name:'OwnerUnitDetails',
      component:OwnerUnitDetails
    },{
      path: '/changyekongjian/spatialPlanning',
      name:'SpatialPlanning',
      component:SpatialPlanning
    },{
      path: '/yezhu',
      name:'yezhu',
      component:yezhu
  },{
   path: '/zhiyin',
   name:'zhiyin',
   component:zhiyin
  },{
   path: '/daijiaoyi',
   name:'daijiaoyi',
   component:daijiaoyi 
  },

 //政策法规
   {
      path:'/zcfg',
      name:'zcfg',
      component:zcfg
   },{
      path:'/zhengceXiangQing',
      name:'zhengceXiangQing',
      component:zhengceXiangQing
    },
    
  //合同管理
    {
      path: '/hetong',
      name: 'hetong',
      component: hetong
    }, {
      path: '/hetongliebiao',
      name: 'hetongliebiao',
      component: hetongliebiao
    }, {
      path: '/hetongXiangQing',
      name: 'hetongXiangQing',
      component:hetongXiangQing
    },
    
    
    //交易管理  
    {
      path: '/jiaoyi',
      name: 'jiaoyi',
      component: jiaoyi
    }, {
      path: '/wuyeJY',
      name: 'wuyeJY',
      component:wuyeJY
    },{
      path: '/wuyeJYXiangQing',
      name: 'wuyeJYXiangQing',
      component:wuyeJYXiangQing
    },{
      path: '/huowufuwucaigou',
      name: 'huowufuwucaigou',
      component:huowufuwucaigou
    },{
      path: '/caigouXiangQing',
      name: 'caigouXiangQing',
      component:caigouXiangQing
    },{
      path: '/gongchengJY',
      name: 'gongchengJY',
      component:gongchengJY
    },{
      path: '/gongchengJYXQ',
      name: 'gongchengJYXQ',
      component:gongchengJYXQ
    },{
      path: '/jitiyongdi',
      name: 'jitiyongdi',
      component:jitiyongdi
    },{
      path: '/jitiyongdiXQ',
      name: 'jitiyongdiXQ',
      component:jitiyongdiXQ
    },{
      path: '/chengjiaogonggao',
      name: 'chengjiaogonggao',
      component:chengjiaogonggao
    },{
      path: '/chengjiaogonggaoXQ',
      name: 'chengjiaogonggaoXQ',
      component:chengjiaogonggaoXQ
    },{
      path: '/liubiaoxiangmu',
      name: 'liubiaoxiangmu',
      component:liubiaoxiangmu
    },{
      path: '/tenderNotice01',
      name: 'tenderNotice01',
      component:tenderNotice01
    },{
      path: '/tenderMessage01',
      name: 'tenderMessage01',
      component:tenderMessage01
    },{
      path: '/fixedAssets01',
      name: 'fixedAssets01',
      component:fixedAssets01
    },{
      path: '/fixedDetail01',
      name: 'fixedDetail01',
      component:fixedDetail01
    },
   

    //证照监管
     {
      path: '/zhengzhaodaiban',
      name: 'zhengzhaodaiban',
      component: zhengzhaodaiban
    },
    {
      path: '/zaiguanrenyuan',
      name: 'zaiguanrenyuan',
      component: zaiguanrenyuan
    },
    {
      path: '/xiangqing02',
      name: 'xiangqing02',
      component:xiangqing02
   }, {
      path: '/zaiguanzhengzhaoXQ',
      name: 'zaiguanzhengzhaoXQ',
      component:zaiguanzhengzhaoXQ
    },{
      path: '/lingqu',
      name: 'lingqu',
      component:lingqu
    },
    
   
    {
      path: '/zhengzhaodaiban',
      name: 'zhengzhaodaiban',
      component: zhengzhaodaiban
    },
    {
      path: '/zaiguanrenyuan',
      name: 'zaiguanrenyuan',
      component: zaiguanrenyuan
    },
    {
      path: '/zaiguanzhengzhao',
      name: 'zaiguanzhengzhao',
      component: zaiguanzhengzhao
    },
    {
      path: '/qingjiaguanli',
      name: 'qingjiaguanli',
      component: qingjiaguanli
    },{//邮箱
      path: '/emailList',
      name: 'EmailList',
      component: EmailList
    },{
      path: '/emailList/receiveMail',
      name: 'ReceiveMail',
      component: ReceiveMail     
    },{
      path: '/emailList/receiveMailDetail',
      name: 'ReceiveMailDetail',
      component: ReceiveMailDetail     
    },{
      path: '/emailList/writingMail',
      name: 'WritingMail',
      component: WritingMail
    },
    
    {
      path: '/emailList/emailDelete',
      name: 'EmailDelete',
      component: EmailDelete
    },{
      path: '/emailList/emailDrafts',
      name: 'EmailDrafts',
      component: EmailDrafts
    },{
      path: '/emailList/emailSentComplete',
      name: 'EmailSentComplete',
      component: EmailSentComplete     
    },{
      path: '/emailList/mailList',
      name: 'MailList',
      component: MailList    
    },{
      path: '/emailList/addContact',
      name: 'AddContact',
      component: AddContact    
    },
    // beforeEach:(to, from ,next) => {
    //   if (localStorage.token) {
    //     to.path !== '/Login' ? next() : next({
    //       path: '/'
    //     })
    //   } else {
    //     to.path !== '/Login' ? next({
    //       path: '/Login'
    //     }) : next()
    //   }
    // }
    

  ]
})

