<template>
    <div class="mail-list">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">邮箱</div>
        </header-top>
        <div>
            <div class="receive-info">
                <span class="iconfont icon-shoujianxiang iconLeft"></span>
                <div class="item-info" @click="receiveMailBtn">
                    <p>收件箱</p>
                    <div>
                        <span v-show="countNum != 0" style="background:red;padding:3px;border-radius:50%;color:#fff;font-size:13px;font-weight:bold;">{{countNum}}</span>
                        <span class="iconfont icon-jiantou icon-arrow"></span>
                    </div>
                </div>
            </div>
            <div class="receive-info write-info">
                <span class="iconfont icon-gaixie iconLeft"></span>
                <div class="item-info" @click="$router.push('/emailList/emailDrafts')">
                    <p>草稿箱</p>
                    <span class="iconfont icon-jiantou icon-arrow"></span>
                </div>
            </div>
            <div class="receive-info write-info">
                <span class="iconfont icon-gaixie iconLeft"></span>
                <div class="item-info" @click="$router.push('/emailList/emailSentComplete')">
                    <p>已发送</p>
                    <span class="iconfont icon-jiantou icon-arrow"></span>
                </div>
            </div>
            <div class="receive-info write-info">
                <span class="iconfont icon-gaixie iconLeft"></span>
                <div class="item-info" @click="$router.push('/emailList/emailDelete')">
                    <p>已删除</p>
                    <span class="iconfont icon-jiantou icon-arrow"></span>
                </div>
            </div>
            <div class="receive-info write-info">
                <span class="iconfont icon-gaixie iconLeft"></span>
                <div class="item-info" @click="$router.push('/emailList/mailList')">
                    <p>通讯录</p>
                    <span class="iconfont icon-jiantou icon-arrow"></span>
                </div>
            </div>
            <div class="receive-info write-info">
                <span class="iconfont icon-gaixie iconLeft"></span>
                <div class="item-info" @click="$router.push('/emailList/writingMail')">
                    <p>写邮件</p>
                    <span class="iconfont icon-jiantou icon-arrow"></span>
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
            countNum:0,
            id:this.$store.state.loginInfo.sessionVal.uSER_ID
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        getInboxCount(){
            this.$http.post('/app_module2/getInboxCount',{user_code:this.id}).then(res=>{
                console.log(res)
                if(res.data.code == 200){
                    this.countNum = res.data.data.count
                }
            })
        },
        receiveMailBtn(){
            this.$router.push('/emailList/receiveMail')  
        },
        writeMailBtn(){
            this.$router.push('/emailList/writingMail')
        },
    },
    mounted(){
        this.getInboxCount()
    }
}
</script>

<style lang='less' scoped>
    .receive-info{
        display: flex;
        height: 56px;
        // line-height: 42px;
        font-size: 16px;
        box-sizing: border-box;
        align-items: center;
        padding-left: 10px;
        .iconLeft{
            font-size: 24px;
            color:#fff;
            width: 26px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            padding: 3px;
            background: #ddd;
            border-radius: 50%;
        }
        .item-info{
            display: flex;
            align-items: center;
            flex:1;
            border-bottom: 1px solid #ddd;
            margin-left:8px;
            p{
                flex: 1;
                // margin-left: 10px;
                height: 56px;
                line-height: 56px;
                padding-left: 10px;
            }
            .icon-arrow{
                color:darkgray;
                margin-right:10px; 
            }
        }
        
    }
</style>