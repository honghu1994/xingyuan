<template>
  <div class="contract-to-do">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">请假详情</div>
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
                    <span>类别:</span>事假
                </p>
                <div style="border-bottom:1px solid #ddd;"></div>
                <div class="finance-info">
                    <p>
                        <span>申请人:</span>
                    </p>
                    <p>
                        <span>职位:</span>
                    </p>
                    <p>
                        <span>目的地:</span>
                    </p>
                    <p>
                        <span>请假事由:</span>
                    </p>
                    <p>
                        <span>离深时间起:</span>
                    </p>
                    <p>
                        <span>返深时间止:</span>
                    </p>
                </div>
                <div class="attachment">
                    <span>附件</span>
                    <div>
                        <img src="@/assets/img/gz_pic1.png" alt="">
                    </div>
                    <div>
                        <img src="@/assets/img/gz_pic1.png" alt="">
                    </div>
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
            .finance-info{
                span{
                    font-weight: normal;
                }
            }
            .attachment{
                display: flex;
                span{
                    display: inline-block;
                    width: 2rem;
                    font-size: 0.36rem;
                    // font-weight: bold;
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