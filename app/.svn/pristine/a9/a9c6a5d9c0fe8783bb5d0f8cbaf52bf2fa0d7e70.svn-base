<template>
    <div class="enterprises-detail">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">入驻企业详情</div>
        </header-top>
        <div class="enterprises-content">
            <h4>{{appStockCompanyList.partyA_name}}</h4>
            <div>
                <div class="item">
                    <p>统一信用代码:</p>
                    <span>{{appStockCompanyList.credit_code}}</span>
                </div>
                <div class="item">
                    <p>法定代表人:</p>
                    <span>{{appStockCompanyList.legal_representative}}</span>
                </div>
                <div class="item">
                    <p>注册资本:</p>
                    <span>{{appStockCompanyList.legal_representative}}</span>
                </div>
                <div class="item">
                    <p>成立日期:</p>
                    <span>{{appStockCompanyList.establish_data}}</span>
                </div>
                <div class="item">
                    <p>经营状态:</p>
                    <span>{{appStockCompanyList.business_status}}</span>
                </div>
                <div class="item">
                    <p>联系人:</p>
                    <span>{{appStockCompanyList.contacts}}</span>
                </div>
                <div class="item">
                    <p>联系方式:</p>
                    <span>{{appStockCompanyList.contact_number}}</span>
                </div>
                <div class="item">
                    <p>所属片区:</p>
                    <span>{{appStockCompanyList.respective_area}}</span>
                </div>
                <div class="item">
                    <p>物业地址:</p>
                    <span>{{appStockCompanyList.registration_address}}</span>
                </div>
                <div class="item">
                    <p>租赁面积:</p>
                    <span>{{appStockCompanyList.rental_area}}</span>
                </div>
                <div class="item">
                    <p>资产归属:</p>
                    <span>{{appStockCompanyList.PartyB_name}}</span>
                </div>
                <div class="attachment">
                    <p>附件:</p>
                    <img src="@/assets/img/index_pic.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
export default {
    data(){
        return{
            id:this.$route.query.contract_enquiry_id,
            appStockCompanyList:{}
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        findAppStockCompanyById(){
            console.log(this.id)
            this.$http.post('app_module2/getPartyBDetails',{contract_enquiry_id:this.id}).then(res=>{
                console.log(res)
                if(res.data.code == 200){
                    this.appStockCompanyList = res.data.data.pd
                }
            })
        }
    },
    mounted(){
        this.findAppStockCompanyById()

    }
}
</script>

<style lang='less' scoped>
    .enterprises-detail{

    }
    .enterprises-content{
        padding-top:12px;
        padding-left: 16px;
        font-size: 0.32rem;
        h4{
            margin-bottom: 18px;
        }
        .item{
            display: flex;
            
            height:30px;
            p{
                width: 120px;
            }
            span{
                color: #666;
            }
        }
        img{
            width: 160px;
            margin-left:40px;
            margin-top:10px;
        }
    }
</style>