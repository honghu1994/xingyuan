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
                    <p>组织机构:</p>
                    <span>{{ownerUnitDetails.company_name}}</span>
                </div>
                <div class="item">
                    <p>统一信用代码:</p>
                    <span>{{ownerUnitDetails.credit_code}}</span>
                </div>
                <div class="item">
                    <p>法人代表:</p>
                    <span>{{ownerUnitDetails.legal_representative}}</span>
                </div>
                <div class="item">
                    <p>委托办理人:</p>
                    <span>{{ownerUnitDetails.entrusted_agent}}</span>
                </div>
                <div class="item">
                    <p>联系电话:</p>
                    <span>{{ownerUnitDetails.contact_number}}</span>
                </div>
                <div class="item">
                    <p>传真:</p>
                    <span>{{ownerUnitDetails.fax}}</span>
                </div>
                <div class="item">
                    <p>单位地址:</p>
                    <span>{{ownerUnitDetails.registration_address}}</span>
                </div>
                <div class="item">
                    <p>开户银行:</p>
                    <span>{{ownerUnitDetails.bank_name}}</span>
                </div>
                <div class="item">
                    <p>银行账号:</p>
                    <span>{{ownerUnitDetails.bank_account}}</span>
                </div>
                <div class="item">
                    <p>账户名:</p>
                    <span>{{ownerUnitDetails.account_name}}</span>
                </div>
                <div class="item">
                    <p>联行号:</p>
                    <span>{{ownerUnitDetails.joint_line_number}}</span>
                </div>
                <div class="item">
                    <p>支行名称:</p>
                    <span>{{ownerUnitDetails.bank_branch}}</span>
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
            id:this.$route.query.company_code,
            ownerUnitDetails:{}
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        getOwnerUnitDetails(){
            console.log(this.id)
            this.$http.post('overallplanning/propertyTransaction/getOwnerUnitDetails',{company_code:this.id}).then(res=>{
                // console.log(res)
                if(res.data.code == 200){
                    this.ownerUnitDetails = res.data.data.dataList
                }
            })
        }
    },
    mounted(){
        this.getOwnerUnitDetails()

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
		background: #fff;
		z-index: 100;
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