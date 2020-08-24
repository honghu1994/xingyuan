<template>
  <div class="my-contract">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">我的合同</div>
        </header-top>
        <div class="navFixed">
            <van-dropdown-menu active-color='red'>
                <van-dropdown-item v-model="screeningType" :options="findContractTypeList" @click.native="changeDrop()"/>
            </van-dropdown-menu>
        </div>
        <div class="all-lease" style="margin-top:100px;">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="200">    
                <div class="item" v-for="item in findMyContractList" :key="item.contract_enquiry_id" @click="goContractDetail(item.contract_enquiry_id)">
                    <h4>{{item.contract_name}}</h4>
                    <div class="lessor">
                        <span>出租方</span>
                        <span>{{item.company_name}}</span>
                    </div>
                    <div class="lessor tenantry">
                        <span>承租方</span>
                        <span>{{item.partyB_name}}</span>
                    </div>
                    <div class="contract" >
                        <div class="left">
                            <div>
                                <span>合同编号:</span>
                                <span>{{item.contract_number}}</span>
                            </div>
                            <div>
                                <span>签订日期:</span>
                                <span>{{item.start_date}}</span>
                            </div>
                            <div style="color:red">
                                <span>终止日期:</span>
                                <span>{{item.end_date}}</span>
                            </div>
                        </div>
                        <div class="right">
                            <div>
                                <span>合同类型:</span>
                                <span style="color:#6b73f5">{{item.contract_type}}</span>
                            </div>
                            <div>
                                <span>合同总表的:</span>
                                <span>{{item.general_objective}}元</span>
                            </div>
                        </div>
                    </div>
                </div>
            </van-list>
        </div>
  </div>
</template>

<script>
import HeaderTop from '@/common/Header'
import Scroll from '@/common/Scroll'
export default {
    data(){
        return{
            screeningType:'',
            findContractTypeList: [
                {text:'请选择',value:''}
            ],
            nowpage:0,
            findMyContractList:[],
            isShowMessage:false,
            // vant
            loading: false,   //是否处于加载状态
            finished: false,  //是否已加载完所有数据
        }
    },
    components:{
        HeaderTop,Scroll
    },
    methods:{
        goContractDetail(id){
            this.$router.push({path:'/myContract/contractDetail',query:{id:id}})
        },
        onLoad(){
            this.getFindMyContract()
        },
        
        getFindMyContract(){
            this.loading = true
            this.nowpage = this.nowpage + 1
            this.$http.post('app_Module3/findMyContract',{nowpage:this.nowpage,contract_type:this.screeningType}).then(res=>{
                // console.log(res)
                if(res.data.code == 200){
                    
                    this.findMyContractList.push(...res.data.data.findMyContract)//列表
                    this.pagesCount = res.data.data.page.pageCount
                    for(let i=0;i<res.data.data.findContractType.length;i++){
                        this.findContractTypeList[i+1] = res.data.data.findContractType[i]//下拉菜单
                    }
                    this.loading = false;//数据请成功后
                    if(this.nowpage >= this.pagesCount){
                        this.finished = true;
                    }
                }
            })
        },
        changeDrop(){
            // console.log(this.screeningType)
            this.nowpage = 0
            this.findMyContractList = []
            this.getFindMyContract()
        },
    },
    mounted(){
        this.getFindMyContract()
    }

}
</script>

<style lang='less' scoped>
    .my-contract{

        .all-lease{
            .item{
                padding: 10px;
                box-sizing: border-box;
                width: 100%;
                border-bottom: 1px solid #ddd;
                font-size: 14px;
                h4{
                    color: #333;
                    height: 36px;
                    font-size: 16px;
                    line-height: 36px;
                    font-weight: normal;
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .lessor{

                    height: 36px;
                    line-height: 36px;
                    color: #666;
                    span{
                        &:nth-child(1){
                            color: #6f77fe;
                            border: 1px solid #168abd;
                            padding: 5px;
                        }
                        &:nth-child(2){
                            font-size: 15px;
                        }
                    }
                }
                .contract{
                    display: flex;
                    color: #666;
                    .left{
                        flex:1;
                        div{
                            height:22px;
                            line-height: 22px;
                        }
                    }
                    .right{
                        flex:1;
                        div{
                            height:22px;
                            line-height: 22px;
                        }
                    }
                }

            }
        }
    }
    .navFixed{
        position: fixed;
        top: 1.18rem;
        width: 100%;
        box-sizing: border-box;
        border-top: 1px solid #ddd;
        padding:0 10px;
        background: #fff;
        z-index: 100;
        // height:100%;
    }
</style>
