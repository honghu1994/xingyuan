<template>
    <div class="record-handle">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">审批记录</div>
            <div slot="right">
                <div style="width:80px;">
                    <van-dropdown-menu >
                        <van-dropdown-item v-model="value1" :options="option1" @change="selectVal"/>
                    </van-dropdown-menu>
                </div>
            </div>
        </header-top>
        <div class="tab">
            <van-tabs v-model="active" @click.native="navClick()">
                <van-tab title="我审批的" >
                    <!-- 资产 -->
                    <div>
                        <div v-if="selectIndex == 1">
                            <div class="item" @click="$router.push('/recordHandle/assetsDetail')">
                                <div class="companyName">
                                    <p>大新实业股份有限公司(张生)</p>
                                    <span>2019.09.09</span>
                                </div>
                                <p class="assetChange" style="color:blue">资产变更</p>
                                <p class="assetChange">资产名称</p>
                                <p class="assetChange">资产编号</p>
                                <p class="content">内容：大新大厦12层建筑面积核查修正，原登记面积2000㎡，修改后面积19修改后面积19修改后面积19</p>
                                <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                                <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                                <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                                <div style="border:5px solid #eee; margin-top:6px;"></div>
                            </div>
                        </div>
                        <!-- 合同 -->
                        <div v-if="selectIndex == 2">
                            <div class="item" @click="$router.push('/recordHandle/contractToDo')">
                                <div class="companyName">
                                    <p>Hello(张生)</p>
                                    <span>2019.09.09</span>
                                </div>
                                <p class="assetChange" style="color:blue">合同变更</p>
                                <p class="assetChange">合同名称:大新大厦12层物业租赁合同</p>
                                <p class="assetChange">合同编号:DX-ZL-WY10 </p>
                                <p class="content">内容：大新大厦12层建筑面积核查修正，原登记面积2000㎡，修改后面积19修改后面积19修改后面积19</p>
                                <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                                <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                                <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                                <div style="border:5px solid #eee; margin-top:6px;"></div>
                            </div>
                        </div>
                        <!-- 交易 -->
                        <div v-if="selectIndex == 3">
                            <div class="item" @click="$router.push('/recordHandle/transactionDetail')">
                                <div class="companyName">
                                    <p>大新实业股份有限公司(张生)</p>
                                    <span>2019.09.09</span>
                                </div>
                                <p class="assetChange" style="color:blue">物业交易</p>
                                <p class="assetChange">交易方案:大新大厦12层物业交易方案</p>
                                <p class="assetChange">品目:出租</p>
                                <p class="assetChange">交易方式:竞价</p>
                                <p class="content">内容:大新大厦12层建筑面积核查修正，原登记面积2000㎡，修改后面积19修改后面积19修改后面积19</p>
                                <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                                <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                                <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                                <div style="border:5px solid #eee; margin-top:6px;"></div>
                            </div>
                        </div>
                        <!-- 财务 -->
                        <div v-if="selectIndex == 4">
                            <div class="item" @click="$router.push('/recordHandle/financeDetail')">
                                <div class="companyName">
                                    <p>大新实业股份有限公司(张生)</p>
                                    <span>2019.09.09</span>
                                </div>
                                <p class="assetChange" style="color:blue">财务报表</p>
                                <p class="content">内容:2019年9月份 资产负债表、利润表、现金流量表 </p>
                                <p class="content"  >附件: 
                                    <a href="" download="" @click.stop="retrunBtn">资产负债表</a>
                                    <a href="" download="" @click.stop="retrunBtn">现金流量表</a>
                                    <a href="" download="" @click.stop="retrunBtn">利润表</a>
                                </p>
                                <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                                <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                                <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                                <div style="border:5px solid #eee; margin-top:6px;"></div>
                            </div>
                        </div>
                        <!-- 证照 -->
                        <div v-if="selectIndex == 5">
                            <div class="item" @click="$router.push('/recordHandle/licenceDetail')">
                                <div class="companyName">
                                    <p>大新实业股份有限公司(张生)</p>
                                    <span>2019.09.09</span>
                                </div>
                                <p class="assetChange" style="color:blue">证照申领</p>
                                <p class="assetChange">使用人:张生</p>
                                <p class="assetChange">证照名:公务护照</p>
                                <p class="assetChange">证照类型:公务护照</p>
                                <p class="assetChange">领取日期:</p>
                                <p class="assetChange">使用时间起:</p>
                                <p class="assetChange">领取日期止:</p>
                                <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                                <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                                <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                                <div style="border:5px solid #eee; margin-top:6px;"></div>
                            </div>
                        </div>
                        <!-- 请假 -->
                        <div v-if="selectIndex == 6">
                            <div class="item" @click="$router.push('/recordHandle/leaveDetail')">
                                <div class="companyName">
                                    <p>大新实业股份有限公司(张生)</p>
                                    <span>2019.09.09</span>
                                </div>
                                <p class="assetChange" style="color:blue">事假</p>
                                <p class="assetChange">申请人:张生</p>
                                <p class="assetChange">职位:总经理</p>
                                <p class="assetChange">目的地:香港</p>
                                <p class="assetChange">请假事由:</p>
                                <p class="assetChange">离深时间起:</p>
                                <p class="assetChange">返深时间止:</p>
                                <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                                <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                                <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                                <div style="border:5px solid #eee; margin-top:6px;"></div>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="我发起的" >
                    <!-- 资产 -->
                    <div v-if="selectIndex == 1">
                        <div class="item" @click="$router.push('/recordHandle/assetsDetail')">
                            <div class="companyName">
                                <p>大新实业股份有限公司(张生)</p>
                                <span>2019.09.09</span>
                            </div>
                            <p class="assetChange" style="color:blue">资产变更</p>
                            <p class="assetChange">资产名称</p>
                            <p class="assetChange">资产编号</p>
                            <p class="content">内容：大新大厦12层建筑面积核查修正，原登记面积2000㎡，修改后面积19修改后面积19修改后面积19</p>
                            <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                            <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                            <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                            <div style="border:5px solid #eee; margin-top:6px;"></div>
                        </div>
                    </div>
                    <!-- 合同 -->
                    <div v-if="selectIndex == 2">
                        <div class="item" @click="$router.push('/recordHandle/contractToDo')">
                            <div class="companyName">
                                <p>Hello(张生)</p>
                                <span>2019.09.09</span>
                            </div>
                            <p class="assetChange" style="color:blue">合同变更</p>
                            <p class="assetChange">合同名称:大新大厦12层物业租赁合同</p>
                            <p class="assetChange">合同编号:DX-ZL-WY10 </p>
                            <p class="content">内容：大新大厦12层建筑面积核查修正，原登记面积2000㎡，修改后面积19修改后面积19修改后面积19</p>
                            <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                            <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                            <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                            <div style="border:5px solid #eee; margin-top:6px;"></div>
                        </div>
                    </div>
                    <!-- 交易 -->
                    <div v-if="selectIndex == 3">
                        <div class="item" @click="$router.push('/recordHandle/transactionDetail')">
                            <div class="companyName">
                                <p>大新实业股份有限公司(张生)</p>
                                <span>2019.09.09</span>
                            </div>
                            <p class="assetChange" style="color:blue">物业交易</p>
                            <p class="assetChange">交易方案:大新大厦12层物业交易方案</p>
                            <p class="assetChange">品目:出租</p>
                            <p class="assetChange">交易方式:竞价</p>
                            <p class="content">内容:大新大厦12层建筑面积核查修正，原登记面积2000㎡，修改后面积19修改后面积19修改后面积19</p>
                            <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                            <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                            <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                            <div style="border:5px solid #eee; margin-top:6px;"></div>
                        </div>
                    </div>
                    <!-- 财务 -->
                    <div v-if="selectIndex == 4">
                        <div class="item" @click="$router.push('/recordHandle/financeDetail')">
                            <div class="companyName">
                                <p>大新实业股份有限公司(张生)</p>
                                <span>2019.09.09</span>
                            </div>
                            <p class="assetChange" style="color:blue">财务报表</p>
                            <p class="content">内容:2019年9月份 资产负债表、利润表、现金流量表 </p>
                            <p class="content"  >附件: 
                                <a href="" download="" @click.stop="retrunBtn">资产负债表</a>
                                <a href="" download="" @click.stop="retrunBtn">现金流量表</a>
                                <a href="" download="" @click.stop="retrunBtn">利润表</a>
                            </p>
                            <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                            <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                            <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                            <div style="border:5px solid #eee; margin-top:6px;"></div>
                        </div>
                    </div>
                    <!-- 证照 -->
                    <div v-if="selectIndex == 5">
                        <div class="item" @click="$router.push('/recordHandle/licenceDetail')">
                            <div class="companyName">
                                <p>大新实业股份有限公司(张生)</p>
                                <span>2019.09.09</span>
                            </div>
                            <p class="assetChange" style="color:blue">证照申领</p>
                            <p class="assetChange">使用人:张生</p>
                            <p class="assetChange">证照名:公务护照</p>
                            <p class="assetChange">证照类型:公务护照</p>
                            <p class="assetChange">领取日期:</p>
                            <p class="assetChange">使用时间起:</p>
                            <p class="assetChange">领取日期止:</p>
                            <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                            <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                            <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                            <div style="border:5px solid #eee; margin-top:6px;"></div>
                        </div>
                    </div>
                    <!-- 请假 -->
                    <div v-if="selectIndex == 6">
                        <div class="item" @click="$router.push('/recordHandle/leaveDetail')">
                            <div class="companyName">
                                <p>大新实业股份有限公司(张生)</p>
                                <span>2019.09.09</span>
                            </div>
                            <p class="assetChange" style="color:blue">事假</p>
                            <p class="assetChange">申请人:张生</p>
                            <p class="assetChange">职位:总经理</p>
                            <p class="assetChange">目的地:香港</p>
                            <p class="assetChange">请假事由:</p>
                            <p class="assetChange">离深时间起:</p>
                            <p class="assetChange">返深时间止:</p>
                            <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                            <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                            <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                            <div style="border:5px solid #eee; margin-top:6px;"></div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="抄送我的" >
                    <!-- 资产 -->
                    <div v-if="selectIndex == 1">
                        <div class="item" @click="$router.push('/recordHandle/assetsDetail')">
                            <div class="companyName">
                                <p>大新实业股份有限公司(张生)</p>
                                <span>2019.09.09</span>
                            </div>
                            <p class="assetChange" style="color:blue">资产变更</p>
                            <p class="assetChange">资产名称</p>
                            <p class="assetChange">资产编号</p>
                            <p class="content">内容：大新大厦12层建筑面积核查修正，原登记面积2000㎡，修改后面积19修改后面积19修改后面积19</p>
                            <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                            <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                            <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                            <div style="border:5px solid #eee; margin-top:6px;"></div>
                        </div>
                    </div>
                    <!-- 合同 -->
                    <div v-if="selectIndex == 2">
                        <div class="item" @click="$router.push('/recordHandle/contractToDo')">
                            <div class="companyName">
                                <p>Hello(张生)</p>
                                <span>2019.09.09</span>
                            </div>
                            <p class="assetChange" style="color:blue">合同变更</p>
                            <p class="assetChange">合同名称:大新大厦12层物业租赁合同</p>
                            <p class="assetChange">合同编号:DX-ZL-WY10 </p>
                            <p class="content">内容：大新大厦12层建筑面积核查修正，原登记面积2000㎡，修改后面积19修改后面积19修改后面积19</p>
                            <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                            <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                            <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                            <div style="border:5px solid #eee; margin-top:6px;"></div>
                        </div>
                    </div>
                    <!-- 交易 -->
                    <div v-if="selectIndex == 3">
                        <div class="item" @click="$router.push('/recordHandle/transactionDetail')">
                            <div class="companyName">
                                <p>大新实业股份有限公司(张生)</p>
                                <span>2019.09.09</span>
                            </div>
                            <p class="assetChange" style="color:blue">物业交易</p>
                            <p class="assetChange">交易方案:大新大厦12层物业交易方案</p>
                            <p class="assetChange">品目:出租</p>
                            <p class="assetChange">交易方式:竞价</p>
                            <p class="content">内容:大新大厦12层建筑面积核查修正，原登记面积2000㎡，修改后面积19修改后面积19修改后面积19</p>
                            <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                            <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                            <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                            <div style="border:5px solid #eee; margin-top:6px;"></div>
                        </div>
                    </div>
                    <!-- 财务 -->
                    <div v-if="selectIndex == 4">
                        <div class="item" @click="$router.push('/recordHandle/financeDetail')">
                            <div class="companyName">
                                <p>大新实业股份有限公司(张生)</p>
                                <span>2019.09.09</span>
                            </div>
                            <p class="assetChange" style="color:blue">财务报表</p>
                            <p class="content">内容:2019年9月份 资产负债表、利润表、现金流量表 </p>
                            <p class="content"  >附件: 
                                <a href="" download="" @click.stop="retrunBtn">资产负债表</a>
                                <a href="" download="" @click.stop="retrunBtn">现金流量表</a>
                                <a href="" download="" @click.stop="retrunBtn">利润表</a>
                            </p>
                            <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                            <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                            <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                            <div style="border:5px solid #eee; margin-top:6px;"></div>
                        </div>
                    </div>
                    <!-- 证照 -->
                    <div v-if="selectIndex == 5">
                        <div class="item" @click="$router.push('/recordHandle/licenceDetail')">
                            <div class="companyName">
                                <p>大新实业股份有限公司(张生)</p>
                                <span>2019.09.09</span>
                            </div>
                            <p class="assetChange" style="color:blue">证照申领</p>
                            <p class="assetChange">使用人:张生</p>
                            <p class="assetChange">证照名:公务护照</p>
                            <p class="assetChange">证照类型:公务护照</p>
                            <p class="assetChange">领取日期:</p>
                            <p class="assetChange">使用时间起:</p>
                            <p class="assetChange">领取日期止:</p>
                            <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                            <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                            <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                            <div style="border:5px solid #eee; margin-top:6px;"></div>
                        </div>
                    </div>
                    <!-- 请假 -->
                    <div v-if="selectIndex == 6">
                        <div class="item" @click="$router.push('/recordHandle/leaveDetail')">
                            <div class="companyName">
                                <p>大新实业股份有限公司(张生)</p>
                                <span>2019.09.09</span>
                            </div>
                            <p class="assetChange" style="color:blue">事假</p>
                            <p class="assetChange">申请人:张生</p>
                            <p class="assetChange">职位:总经理</p>
                            <p class="assetChange">目的地:香港</p>
                            <p class="assetChange">请假事由:</p>
                            <p class="assetChange">离深时间起:</p>
                            <p class="assetChange">返深时间止:</p>
                            <p class="appStatus1" v-if="appStatus == 1">审批通过</p>
                            <p class="appStatus2" v-else-if="appStatus == 2">审批拒绝</p>
                            <p class="appStatus3" v-else-if="appStatus == 3">南头街道办审判中</p>
                            <div style="border:5px solid #eee; margin-top:6px;"></div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
export default {
    data(){
        return{
            value1: 1,
            active: 0,
            appStatus:1,
            option1: [
                // { text: '筛选', value: 0 },
                // { text: '全部', value: 1 },
                { text: '资产', value: 1 },
                { text: '合同', value: 2 },
                { text: '交易', value: 3 },
                { text: '财务', value: 4 },
                { text: '证照', value: 5 },
                { text: '请假', value: 6 }
            
            ],
            selectIndex:1,

        }
    },
    components:{
        HeaderTop
    },
    computed:{
        
    },
    methods:{
        retrunBtn(){
           
        },
        selectVal(){//下拉框
            this.selectIndex = this.value1
            console.log(this.value1)
            if(this.active == 0){
                console.log(this.active)

            }else if(this.active == 1){
                console.log(this.active)

            }else if(this.active == 2){
                console.log(this.active)

            }
        },
        navClick(){//导航列表
            this.value1 = 1
            this.selectIndex = 1
            if(this.active == 0){
                console.log(this.active)

            }else if(this.active == 1){
                console.log(this.active)

            }else if(this.active == 2){
                console.log(this.active)

            }
        }
    }
}
</script>

<style lang='less' scoped>
    .tab{
       .item{
           width: 100%;
           padding: 10px;
           box-sizing: border-box;
           font-size: 15px;
           color: #666;
           .companyName{
               display: flex;
               justify-content: space-between;
               font-size: 15px;
               height: 26px;
               line-height: 26px;
               color: #333;
           }
           p{
               line-height: 26px; 
               height: 26px;
               width: 100%; 
               white-space: nowrap;
               text-overflow: ellipsis;
               overflow: hidden;
               font-size: 14px;
           }
           .appStatus1{
               color:#009999;
           }
           .appStatus2{
               color:#ff0000;
           }
           .appStatus3{
               color:#ff9900;
           }
       }
    }
    .companyName>p{
        font-size: 15px!important;
    }
</style>