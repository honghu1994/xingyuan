<template>
  <div class="contract-to-do">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">交易详情</div>
        </header-top>
        <div class="content">
            <div class="title">
                <h3>XX股份有限公司（王生）</h3>
                <p>审批中</p>
            </div>
            <div class="all-content">
                <p>
                    <span>审批编号:</span>2019010100101010101
                </p>
                <p>
                    <span>所属机构:</span>南头街道办
                </p>
                <p>
                    <span>类型:</span>物业交易
                </p>
                <div style="border-bottom:1px solid #ddd"></div>
                <h4 style="hieght:30px; line-height:30px; color:#333;">申请单位信息</h4>
                <div style="" class="transaction-info">
                    <p>
                        <span>股份公司名称:</span>深圳市大新实业股份有限公司
                    </p>
                    <p>
                        <span>银行名称:</span>平安银行
                    </p>
                    <p>
                        <span>银行账号:</span>3242234242342
                    </p>
                </div>
                <h4 style="hieght:30px; line-height:30px; color:#333;">资产基本信息</h4>
                <div style="" class="transaction-info">
                    <p>
                        <span>资产编号:</span>TY-GDZC-XZL-31231
                    </p>
                    <p>
                        <span>资产名称:</span>大新大厦12层
                    </p>
                    <p>
                        <span>资产类别:</span>写字楼
                    </p>
                    <p>
                        <span>建筑面积:</span>1900㎡
                    </p>
                    <p>
                        <span>交易面积:</span>1900㎡
                    </p>
                </div>
                <h4 style="hieght:30px; line-height:30px; color:#333;">交易方案</h4>
                <div style="" class="transaction-info">
                    <p>
                        <span>业态要求:</span>鼓励发展类
                    </p>
                    <p>
                        <span>交易底价:</span>100万元/年
                    </p>
                    <p>
                        <span>合同履约保证金:</span>
                    </p>
                    <p>
                        <span>原承租方优先权:</span>有
                    </p>
                    <p>
                        <span>免租期:</span>12个月
                    </p>
                    <p>
                        <span>品目:</span>出租
                    </p>
                    <p>
                        <span>交易方式:</span>竞价
                    </p>
                </div>
                <h4 style="hieght:30px; line-height:30px; color:#333;">承租方信息</h4>
                <div style="" class="transaction-info">
                    <p>
                        <span>承租人名称:</span>XXX生物科技有限公司
                    </p>
                    <p>
                        <span>承租人证件号:</span>91440300MA5D7G343434
                    </p>
                    <p>
                        <span>所属行业:</span>生物科技
                    </p>
                </div>
                
               
            </div>
        </div>
        <div style="border:5px solid #eee; margin-top:20px;margin-bottom:10px;"></div>
        <div class="people">
            <div class="people-item">
                <div class="left">
                    <div style="width:0.5rem; height:0.5rem;border:1px solid #ccc;border-radius:50%;"></div>
                    <span>王生(XX股份有限公司)</span>
                </div>
                <span>发起申请</span>
            </div>
            <div class="people-item">
                <div class="left">
                    <div style="width:0.5rem; height:0.5rem;border:1px solid #ccc;border-radius:50%;"></div>
                    <span>张生（XX街道办）</span>
                </div>
                <span style="color:#009999;">已同意</span>
            </div>
            <div class="people-item">
                <div class="left">
                    <div style="width:0.5rem; height:0.5rem;border:1px solid #ccc;border-radius:50%;"></div>
                    <span>李生（南山区集体资产管理办公室）</span>
                </div>
            </div>
        </div>
        <div style="border:5px solid #eee; margin-bottom:10px;"></div>
        <div class="copyPerson">
            <p>
                <span>抄送人</span>
                审批发起时和审批通过后，都通知抄送人
            </p>
            <div class="people-item">
                <div class="left">
                    <div style="width:0.5rem; height:0.5rem;border:1px solid #ccc;border-radius:50%;"></div>
                    <span>王生（XX股份有限公司）</span>
                </div>
            </div>
            <div class="people-item">
                <div class="left">
                    <div style="width:0.5rem; height:0.5rem;border:1px solid #ccc;border-radius:50%;"></div>
                    <span>李生（XX股份有限公司）</span>
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

        }
    },
    components:{
        HeaderTop
    },
}
</script>

<style lang='less' scoped>
    .content{
        padding-top: 10px;
        padding-left: 20px;
        font-size: 0.3rem;
        .title{
            border-bottom:1px solid #333;
            h3{
                height: 26px;
                line-height: 26px;
                font-size: 0.4rem;
            }
            p{
                color:#009999;
                height: 26px;
                line-height: 26px;
            }
        }
        .all-content{
            padding-top: 10px;
            p{
               
                line-height: 30px;
                color: #666;
                span{
                    display: inline-block;
                    width: 2rem;
                    font-size: 0.36rem;
                    font-weight: bold;
                    // margin-right:10px;
                    color: #333;
                }
            }
            .transaction-info{
                margin-left:20px;
                border-bottom: 1px solid #ddd;
                p{
                    font-size: 0.30rem;
                    color: #666;
                    span{
                        font-size: 0.30rem;
                        color: #666;
                         font-weight: normal;
                    }
                }
            }
            .attachment{
                display: flex;
                span{
                    display: inline-block;
                    width: 2rem;
                    font-size: 0.36rem;
                    font-weight: bold;
                    // margin-right:10px;
                    color: #333;
                }
                div{
                    width: 100px;
                    margin-right: 10px;
                }
            }
        }
        
    }
    .people{
        padding-left: 20px;
        font-size: 0.3rem;
       
         
    }
    .copyPerson{
        padding-left:20px;
        p{
            font-size: 0.3rem;
            height: 36px;
            line-height: 36px;
            span{   
                font-size: 0.36rem;
                // color:#333;
                font-weight: bold;
            }
        }

    }
    .people-item{
        font-size: 0.3rem;
        display: flex;
        line-height: 0.6rem;
        justify-content: space-between;
        padding-right: 10px;
        padding-bottom: 10px;
        .left{
            display: flex;
            span{
                margin-left: 10px;
                font-weight: bold;
            }
        }
    }      
</style>