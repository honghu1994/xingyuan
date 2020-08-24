<template>
    <div class="invitation">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">邀请</div>
        </header-top>
        <div class="invitation-content">
            <div class="invitation-item">
                    <van-radio-group v-model="userName">
                        <van-radio class="van-radio-list" :name="item.USERNAME" v-for="(item,index) in invitationList" :key="index">
                            <div class="invitation-list" >
                                <p>{{item.NAME}}</p>
                                <p>{{item.ORG_NAME}}</p>
                                <p>{{item.ROLE_NAME}}</p>
                            </div>
                        </van-radio>
                    </van-radio-group>
            </div>
            <!-- <div v-if='invitationList.length<6' style="position:fixed;right:10px;bottom:80px;">
                <van-button type="info" size="small" @click="confirmBtn">确定</van-button>
            </div> -->
                <div style="text-align:right;margin-right:20px; margin-top:10px;" v-if="userName">
                    <van-button type="info" size="small"  @click="confirmBtn">确定</van-button>
                </div>
                <div style="text-align:right;margin-right:20px; margin-top:10px;" v-else>
                   <van-button disabled type="info" size="small">确定</van-button>
                </div>
        </div>
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
import { Toast } from 'vant';
export default {
    data(){
        return{
            userName:'',
            organization_id:this.$store.state.loginInfo.sessionVal.organization_id,
            name:this.$store.state.loginInfo.sessionVal.uSERNAME,
            invitationList:[],
            id:this.$route.query.id
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        getInvitationFor(){
            this.$http.post('app_module2/getInvitationFor',{organization_id:this.organization_id,USERNAME:this.name}).then(res=>{
                console.log(res)
                if(res.data.code == 200){
                    this.invitationList = res.data.data.varList
                }   
            })
        },
        confirmBtn(){
            this.$http.post('app_module2/getHandlingApproval',{ID_:this.id,ASSIGNEE:this.userName}).then(res=>{
                console.log(res)
                if(res.data.code == 200){
                    Toast.success('邀请成功');
                    setTimeout(()=>{
                        this.$router.push('/daiban')
                    },1000)
                }
            })
        }
    },
    mounted(){
        this.getInvitationFor()
    }
}
</script>

<style lang='less' scoped>
    
    .van-radio-list{
        box-sizing: border-box;
        width:100%;
         border-bottom:1px solid #ddd; 
         font-size:13px; 
         padding:10px;
    }
    .invitation-list{
        padding-left:6px;
        p{
            line-height: 18px;
            color: #666;
            // font-size: 14px;
            &:nth-of-type(1){
                font-weight: bold;
                font-size: 15px;
                color: #333;
            }
        }

    }
</style>