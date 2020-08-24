




import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Index from '../components/index';
import District from '../components/district';
import Street from '../components/street';
import CompanyDetail from '../components/companyDetail';
import Company from '../components/company';
import Detail from '../components/detail';

const router = new Router({
  routes: [
    {name:'Index',  path: '/index',component: Index },
    { path: "", redirect: '/index' },
    { name:'District',  path: '/district',component: District},
    {name:'Street',  path: '/street',component: Street },
    {name:'CompanyDetail',  path: '/companyDetail',component: CompanyDetail },
    {name:'Company',  path: '/company',component: Company },
    {name:'Detail',  path: '/detail/:assets_id',component: Detail },
   
  ]
});


export default router;
