<template>
  <div class="spatial-planning">
    <header-top>
        <div slot="left">
            <img @click="$router.go(-1)" src="@/assets/img/back.png">
        </div>
        <div slot="mid">产业空间统筹</div>
    </header-top>
    <div style="width:90%; margin:0 auto;">
        <drop-down :dropDownArr='dropDownArr' @selectValue='selectValue'></drop-down>
        <div class="item" @click="goDetail(item.contract_enquiry_id)" style="border-bottom:1px solid #eee;"
        v-for="item in companyTransactionsDetailsList" :key="item.contract_enquiry_id">
            <div class="wraper"> 
                <div>
                    <p>{{item.partyB_name}}</p>
                    <span>承租方</span>
                </div>
                <span class="iconfont icon-jiantou"></span>
            </div>
            <div class="place">
                <p>{{item.partyB_name}}</p>
                <p>{{item.location_address}}</p>
                <p>{{item.name}}<span>{{item.rental_area}}㎡</span></p>
            </div>
            <h4>{{item.partyA_name}}</h4>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/common/Header'
import DropDown from '@/common/DropDown'
export default {
    data(){
        return{
            dropDownArr:[],
            id:this.$route.query.company_code,
            nowPage:1,
            access_type:"",
            companyTransactionsDetailsList:[]
        }
    },
    components:{
        HeaderTop,DropDown
    },
    methods:{
        selectValue(val){//下拉框
            console.log(val)
            this.access_type = val
            this.getCompanyTransactionsDetailsList()
        },
        goDetail(id){
            this.$router.push({path:'/changyekongjian/enterprisesDetails',query:{contract_enquiry_id:id}})
        },
        // 下拉框
        getZcType(){
            this.$http.post('app_module2/getZcType').then(res=>{
                // console.log(res)
                if(res.data.code == 200){
                    this.dropDownArr = res.data.data.pageList
                }
            })
        },
        //列表
        getCompanyTransactionsDetailsList(){ 
            this.$http.post('app_module2/getCompanyTransactionsDetailsList',{nowPage:this.nowPage,company_code:this.id,access_type:this.access_type}).then(res=>{
                // console.log(res)
                if(res.data.code == 200){
                    this.companyTransactionsDetailsList = res.data.data.dataList
                }
            })
        }
    },
    mounted(){
        this.getZcType()
        this.getCompanyTransactionsDetailsList()
    }
}
</script>

<style lang='less' scoped>
    h4{
        margin-top: 6px;
        color:#6f7ffe;
        height: 36px;
        line-height: 36px;
        font-size: 0.34rem;
        border-bottom: 3px solid #eee;
    }
    .wraper{
        height: 40px;
        line-height: 40px;
        margin-top: 6px;
        font-size: 0.32rem;
        display:flex;
        justify-content: space-between;
        div{
           display: flex; 
           p{
               padding-right: 10px;
           }
           .iconfont{
               font-size: 0.32rem;
           }
        }
        
    }
    .place{
        border-bottom:1px solid #f1f1f1;
        p{
            font-size: 0.32rem; 
            height: 30px;
            line-height: 30px;
            span{
                margin-left: 90px;
            }
        }
    }
    
</style>