<template>
    <div class="more-company">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">股份公司列表</div>
        </header-top>
        <table border='0' cellspacing="0" cellpadding="0" style="width:92%;margin: 90px auto;">
            <thead>
                <th>街道名称</th>
                <th>机构名称</th>
            </thead>
            <tbody>
                <tr>
                    <td>{{companyList1.street_name}}</td>
                    <td></td>
                </tr>
                <tr v-for="item in companyList1.company_name" :key="item.company_name">
                    <td></td>
                    <td>{{item}}</td>
                </tr>
                <tr>
                    <td>{{companyList2.street_name}}</td>
                    <td></td>
                </tr>
                <tr v-for="item in companyList2.company_name" :key="item.company_name">
                    <td></td>
                    <td>{{item}}</td>
                </tr>
                <tr>
                    <td>{{companyList3.street_name}}</td>
                    <td></td>
                </tr>
                <tr v-for="item in companyList3.company_name" :key="item.company_name">
                    <td></td>
                    <td>{{item}}</td>
                </tr>
                <tr>
                    <td>{{companyList4.street_name}}</td>
                    <td></td>
                </tr>
                <tr v-for="item in companyList4.company_name" :key="item.company_name">
                    <td></td>
                    <td>{{item}}</td>
                </tr>
                <tr>
                    <td>{{companyList5.street_name}}</td>
                    <td></td>
                </tr>
                <tr v-for="item in companyList5.company_name" :key="item.company_name">
                    <td></td>
                    <td>{{item}}</td>
                </tr>
                <tr>
                    <td>{{companyList6.street_name}}</td>
                    <td></td>
                </tr>
                <tr v-for="item in companyList6.company_name" :key="item.company_name">
                    <td></td>
                    <td>{{item}}</td>
                </tr>
                <tr>
                    <td>{{companyList7.street_name}}</td>
                    <td></td>
                </tr>
                <tr v-for="item in companyList7.company_name" :key="item.company_name">
                    <td></td>
                    <td>{{item}}</td>
                </tr>
                <tr>
                    <td>{{companyList8.street_name}}</td>
                    <td></td>
                </tr>
                <tr v-for="item in companyList8.company_name" :key="item.company_name">
                    <td></td>
                    <td>{{item}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
export default {
    data(){
        return{
           companyList1:{},
           companyList2:{},
           companyList3:{},
           companyList4:{},
           companyList5:{},
           companyList6:{},
           companyList7:{},
           companyList8:{},
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        getMoreCompant(){
            this.$http.post('app_module2/getAppMoreStockCompanyList').then(res=>{
                console.log(res)
                if(res.data.code == 200){
                    this.companyList1 = res.data.data.datalist[0]
                    this.companyList2 = res.data.data.datalist[1]
                    this.companyList3 = res.data.data.datalist[2]
                    this.companyList4 = res.data.data.datalist[3]
                    this.companyList5 = res.data.data.datalist[4]
                    this.companyList6 = res.data.data.datalist[5]
                    this.companyList7 = res.data.data.datalist[6]
                    this.companyList8 = res.data.data.datalist[7]
                }
            })
        }
    },
    mounted(){
        this.getMoreCompant()
    }
}
</script>

<style lang='less' scoped>
    table{border-right:1px solid #666;border-bottom:1px solid #666;font-size: 15px;}
    table td,th{border-left:1px solid #666;border-top:1px solid #666;text-align: center; height: 30px;}
</style>
