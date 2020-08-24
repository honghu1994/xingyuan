<template>
    <div class="enterprises-detail">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">详情</div>
        </header-top>
        <div class="enterprises-content">
            <h4>区国有资产监督管理局</h4>
            <div>
                <div class="item">
                    <p>企业名称:</p>
                    <span>{{findAppStateOwnedEnterprise.company_name}}</span>
                </div>
                <div class="item">
                    <p>统一信用代码:</p>
                    <span>{{findAppStateOwnedEnterprise.credit_code}}</span>
                </div>
                <div class="item">
                    <p>成立日期:</p>
                    <span>{{findAppStateOwnedEnterprise.establish_data}}</span>
                </div>
                <div class="item">
                    <p>法定代表人:</p>
                    <span>{{findAppStateOwnedEnterprise.legal_representative}}</span>
                </div>
                <div class="item">
                    <p>注册资本:</p>
                    <span>{{findAppStateOwnedEnterprise.registered_capital}}</span>
                </div>
                <div class="item">
                    <p>经营状态:</p>
                    <span>{{findAppStateOwnedEnterprise.business_status}}</span>
                </div>
                <div class="item">
                    <p>联系人:</p>
                    <span>{{findAppStateOwnedEnterprise.contact_people}}</span>
                </div>
                <div class="item">
                    <p>联系电话:</p>
                    <span>{{findAppStateOwnedEnterprise.contact_number}}</span>
                </div>
                <div >
                    <span >注册地址:</span>
                    <span style="color:#666;height:24px; line-height:24px;">{{findAppStateOwnedEnterprise.registration_address}}</span>
                </div>
                <div style="margin-top:10px;">
                    <span>业务经营范围:</span>
                    <span style="color:#666; height:26px; line-height:26px;">{{findAppStateOwnedEnterprise.business_scope}}</span>
                </div>
                <div class="attachment">
                    <p style="width:220px;">附件:</p>
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
            id:this.$route.query.company_id,
            findAppStateOwnedEnterprise:{}
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        findAppStateOwnedEnterpriseById(){
            console.log(this.id)
            this.$http.post('app_module2/findAppStateOwnedEnterpriseById',{company_id:this.id}).then(res=>{
                // console.log(res)
                if(res.data.code == 200){
                    this.findAppStateOwnedEnterprise = res.data.data.pd
                }
            })
        }
    },
    mounted(){
        this.findAppStateOwnedEnterpriseById()

    }
}
</script>

<style lang='less' scoped>
    .enterprises-detail{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right:0;
        z-index: 100;
        background-color: #fff;
        overflow-y: auto;
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
            min-height:30px;
            p{
                width: 116px;
            }
            span{
                color:#666;
            }
        }
        img{
            width: 160px;
            margin-left:40px;
            margin-top:10px;
        }
    }
</style>