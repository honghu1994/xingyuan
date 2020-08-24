




import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// import Index from '../components/index';
// import District from '../components/district';
// import Street from '../components/street';
import CompanyDetail from '../components/companyDetail';
// import Company from '../components/company';

import tongchouForm from '../components/tongchouForm';
import zhuanxingForm from '../components/zhuanxingForm';
import licenseForm from '../components/licenseForm';
import hetongForm from '../components/hetongForm';
import caiwuForm from '../components/caiwuForm';
// 资源列表详情
import Detail from '../components/detail';
import detailZiyuan from '../components/detailZiyuan';
import detailTouzi from '../components/detailTouzi';
import detailWuxing from '../components/detailWuxing';
import detailOthers from '../components/detailOthers';
import detailHetong from '../components/detailHetong';
import detailTongchou from '../components/detailTongchou';

//首页
import home from '../components/home';
import homeMap from '../components/homeMap';

const router = new Router({
  routes: [
    // {name:'Index',  path: '/index',component: Index },
    { path: "", redirect: '/home' },
    // { name:'District',  path: '/district',component: District},
    // {name:'Street',  path: '/street',component: Street },
    {name:'CompanyDetail',  path: '/companyDetail',component: CompanyDetail },
    // {name:'Company',  path: '/company',component: Company },
    {name:'Detail',  path: '/detail',component: Detail },
    {name:'tongchouForm',  path: '/tongchouForm',component: tongchouForm },
    {name:'zhuanxingForm',  path: '/zhuanxingForm',component: zhuanxingForm },
    {name:'licenseForm',  path: '/licenseForm',component: licenseForm },
    {name:'hetongForm',  path: '/hetongForm',component: hetongForm },
    {name:'caiwuForm',  path: '/caiwuForm',component: caiwuForm },
    {name:'detailZiyuan',  path: '/detailZiyuan',component: detailZiyuan },
    {name:'detailTouzi',  path: '/detailTouzi',component: detailTouzi },
    {name:'detailWuxing',  path: '/detailWuxing',component: detailWuxing },
    {name:'detailOthers',  path: '/detailOthers',component: detailOthers },
    {name:'detailHetong',  path: '/detailHetong',component: detailHetong },
    {name:'detailTongchou',  path: '/detailTongchou',component: detailTongchou },

    {name:'home',  path: '/home',component: home },
    {name:'homeMap',  path: '/homeMap',component: homeMap },
   
  ]
});


export default router;
