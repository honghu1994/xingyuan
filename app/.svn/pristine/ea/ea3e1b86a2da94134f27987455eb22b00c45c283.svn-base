<template>
  <div class="contract-to-do">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid" v-if="typeName == 'a'">资产待办</div>
            <div slot="mid" v-if="typeName == 'b'">交易待办</div>
            <div slot="mid" v-if="typeName == 'c'">合同待办</div>
            <div slot="mid" v-if="typeName == 'd'">财务待办</div>
            <div slot="mid" v-if="typeName == 'e'">证照待办</div>
            <div slot="mid" v-if="typeName == 'f'">请假待办</div>
        </header-top>
        <div class="content">
            <div class="title">
                <h3>{{flowName}}</h3>
                <p>审批中</p>
            </div>
            <div class="all-content">
                <p v-for="(item,index) in handleArr1" :key="index">
                    <span>{{item.NAME_}}:</span>{{item.TEXT_}}
                </p>
                <div class="attachment" >
                    <span>附件:</span>
                    <div style="display:flex;width:260px;overflow-x: scroll;">
                        <div v-for="(item,index) in handleArr2" :key="index">
                            <img :src="item" alt="" style="width:120px;margin-right:6px;" @click='zoomImg()' >
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div style="border:5px solid #eee; margin-top:20px;margin-bottom:10px;"></div>
        <div class="people">
            <h3 style="height:30px;">{{approverType}}</h3>
            <h3 style="height:30px;">{{approver}}</h3>
            <div>
                <van-button type="info" size="small" style="margin-right:30px;" @click.native='agreeBtn'>同意</van-button>
                <van-button type="info" size="small" @click.native='rejectBtn'>拒绝</van-button>
            </div>
            <div style="text-align:center;box-sizing:border-box;padding-right:20px;padding-top:10px; ">
                <textarea v-model="reasonVal" style="width:100%; height:80px;box-sizing:border-box; resize:none; padding:6px;" placeholder="请填写相关理由"></textarea>
            </div>
        </div>
  </div>
</template>

<script>
import HeaderTop from '@/common/Header'
import { Dialog } from 'vant';
export default {
    data(){
        return{
            handleArr:[],
            handleArr1:[],
            handleArr2:{},
            reasonVal:'',
            approver:this.$route.query.name,
            approverType:this.$route.query.task,
            id:this.$route.query.id,
            ID:this.$route.query.ID,
            typeName:this.$route.query.type,
            flowName:this.$route.query.flowName,
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        agreeBtn(){
            Dialog.confirm({
                title: '提示',
                message: '请确认?'
            }).then(() => {
                // console.log(41522262626)
               let bool = 'yes'
               this.getApprovalApprovalRejection(bool)
            }).catch(() => {
                
            });
        },
        rejectBtn(){
            Dialog.confirm({
                    title: '提示',
                    message: '请确认?'
                }).then(() => {
                    let bool = 'no'
                    this.getApprovalApprovalRejection(bool)
                }).catch(() => {
                    
                });
        },
        zoomImg(){//图片放大

        },
        getApprovalApprovalRejection(bool){
            this.$http.post('app_module2/getApprovalApprovalRejection',{
                USERNAME:this.approver,
                ID_:this.ID,
                PROC_INST_ID_:this.id,
                msg:bool,
                OPINION:this.reasonVal,
                editorValue:this.reasonVal
            }).then(res=>{
                
                if(res.data.code == 200){
                    this.$router.push('/xiaoxi')
                }
            })
        },
        getgoHandle(){
            this.$http.post('app_module2/getgoHandle',{PROC_INST_ID_:this.id,ID_:this.ID}).then(res=>{
                console.log(res.data.data.varList)
                if(res.data.code == 200){
                    this.handleArr = res.data.data.varList
                    this.handleArr.filter(item=>{
                        if(item.NAME_ != "附件"){
                            this.handleArr1.push(item)
                        }
                    })
                    this.handleArr.filter(item=>{
                        if(item.NAME_ == "附件"){
                            console.log(item)
                            this.handleArr2 = item.TEXT_.split(",")
                        }
                    })
                    // this.subordinateCode=res.data.data.varList[1].TEXT_//审批编号
                    // this.mechanism=res.data.data.varList[2].TEXT_//所属机构
                    // this.type=res.data.data.varList[3].TEXT_//类别
                    // this.title=res.data.data.varList[4].TEXT_//标题
                    // this.content=res.data.data.varList[5].TEXT_//内容
                    // this.assetsName=res.data.data.varList[6].TEXT_//资产名称
                    // this.assetsCode=res.data.data.varList[7].TEXT_//资产编号
                    // this.assetsCode=res.data.data.varList[8].TEXT_//附件
                    
                    
                }   
            })
        }
    },
    mounted(){
        this.getgoHandle()
    }
}
</script>

<style lang='less' scoped>
    .content{
        padding-top: 10px;
        padding-left: 20px;
        font-size: 0.3rem;
        .title{
            border-bottom:1px solid #666;
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
                    // width: 2rem;
                    margin-right:10px;
                    font-size: 0.36rem;
                    font-weight: bold;
                    // margin-right:10px;
                    color: #333;
                }
            }
            .attachment{
                display: flex;
                span{
                    display: inline-block;
                    // width: 2rem;
                    margin-right:10px;
                    font-size: 0.36rem;
                    font-weight: bold;
                    // margin-right:10px;
                    color: #333;
                }
                div{
                    // width: 100px;
                    // margin-right: 10px;
                }
            }
        }
        
    }
    .people{
        padding-left: 20px;
        font-size: 0.3rem;
    }
    
</style>