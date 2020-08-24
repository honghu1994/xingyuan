<template>
    <div class="company-detail">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">公司详情</div>
        </header-top>
        <div class="top">
            <div class="topImg">
                <img v-if="companyDetail== null || companyDetail.company_img== null" src="@/assets/img/fail.jpg" alt="">
                <img v-else  :src="companyDetail.company_img" alt="" >
            </div>
            <div class="toptitle">
                <h3>{{companyDetail && companyDetail.company_name}}</h3>
                <p>法定代表人：<span style="margin-right:5px;">{{companyDetail && companyDetail.legal_representative}}</span>电话：<span>{{companyDetail && companyDetail.contact_number}}</span></p>
                <p>地址：{{companyDetail && companyDetail.registration_address}}</p>
            </div>
        </div>
        <div class="introduce">
            <h3>企业简介</h3>
            <p>
                {{companyDetail && companyDetail.structure}}
            </p>
            <div style="border:6px solid #ddd"></div>
        </div>
        <div class="framework">
            <h3>组织架构</h3>
            <img v-if="companyDetail && companyDetail.structure != null || companyDetail && companyDetail.structure == ''" :src="companyDetail.structure" alt="">
            <p v-else>暂无数据</p>
        </div>
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
export default {
    data(){
        return{

            companyDetail:{},
            organization_id:this.$store.state.loginInfo.sessionVal.organization_id
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        getCompanyDetail(){
            this.$http.post('app_Module3/companyDetail',{company_id:this.organization_id}).then(res=>{
                console.log(res)
                if(res.data.code == 200){
                    this.companyDetail = res.data.data.companyDetail
                }
            })
        }
    },
    mounted(){
        this.getCompanyDetail()
    }
}
</script>

<style lang='less' scoped>
    .top{
        padding: 5px;
        padding-bottom: 0px;
        display: flex;
        flex-direction: row;
        font-size: 0.24rem;
        .topImg{
            img{
                width:2.1rem;
                height:2.1rem;
                border: 3px solid #ddd;
                padding:1px;
            }
        }
        .toptitle{
            margin-left:5px;
            h3{
                font-size: 16px;
                padding-top: 8px;
                height: 0.62rem;
                line-height: 0.62rem;
                margin-bottom: 0.1rem;
                color: #333;
            }
            p{
                color:#666;
                font-size: 14px;
                height: 0.54rem;
                line-height: 0.54rem;
            }
        }
    }
    .introduce{
        padding: 0 5px;
        h3{
            font-size: 15px;
            height: 56px;
            line-height: 56px;
            color: #333;
        }
        p{
            font-size: 14px;
            line-height: 22px;
            color: #666;
        }
    }
    .framework{
        padding: 0 5px;
        padding-bottom: 10px;
        h3{
            font-size: 15px;
            height: 56px;
            line-height: 56px;
            color: #333;
        }
        img{
            width: 100%;
        }
    }
</style>
