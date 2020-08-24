<template>
  <div class="contract-to-do">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">资产详情</div>
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
                    <span>类型:</span>合同变更
                </p>
                <p>
                    <span>标题:</span>A区B栋13层资产变更
                </p>
                <p style="line-height:18px;">
                    <span>内容:</span>
                        大新大厦12层物业租赁合同变更，2019年大新大厦12层物业租金由120元/㎡变更为130元/㎡
                        已经股东会议讨论通过，会议时间2019年9月1日
                </p>
                <p>
                    <span>资产名称:</span>大新商业大厦
                </p>
                <p>
                    <span>资产编号:</span>DX-XZ-101
                </p>
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
        font-size: 15px;
        .title{
            border-bottom:1px solid #333;
            h3{
                height: 26px;
                line-height: 26px;
                font-size: 16px;
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
                font-size: 14px;
                span{
                    display: inline-block;
                    // width: 2rem;

                    font-size: 15px;
                    // font-weight: bold;
                    margin-right:10px;
                    color: #333;
                }
            }
            .attachment{
                display: flex;
                span{
                    display: inline-block;
                    // width: 2rem;
                    font-size: 15px;
                    // font-weight: bold;
                    margin-right:10px;
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
        font-size:15px;
    }
    .copyPerson{
        padding-left:20px;
        padding-bottom: 30px;
        p{
            font-size: 15px;
            height: 36px;
            line-height: 36px;
            span{   
                font-size: 15px;
                // color:#333;
                // font-weight: bold;
            }
        }
    }
    .people-item{
        font-size: 14px;
        display: flex;
        line-height: 0.6rem;
        justify-content: space-between;
        padding-right: 10px;
        padding-bottom: 10px;
        .left{
            display: flex;
            span{
                margin-left: 10px;
                // font-weight: bold;
            }
        }
    } 
    .scroll-content{
        overflow: hidden;
        position: absolute;
        top: 1.18rem;
        bottom: 50px;
        left:0;
        right:0;
        border-top: 1px solid #ddd;
        padding:0 10px;
    }     
</style>