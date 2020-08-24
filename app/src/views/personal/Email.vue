<template>
    <div class="modify">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">邮箱配置</div>
        </header-top>
        <div class="changePwd">
            <div class="item">
                <p>SMTP:</p>
                <input type="text" v-model.trim="smtp" placeholder="请输入SMTP">
            </div> 
            <div class="item">
                <p>端口:</p>
                <input type="text" v-model.trim="host" placeholder="请输入端口号">
            </div> 
            <div class="item">
                <p>邮箱:</p>
                <input type="text" v-model.trim="email" placeholder="请输入邮箱">
            </div> 
            <div class="item">
                <p>密码:</p>
                <input type="password" v-model.trim="pwd" placeholder="请输入密码">
            </div> 
        </div>
        <div style="position:fixed;left:0;bottom:5px;width:100%;">
            <van-button type="info" size="large" @click="saveEmail">保存</van-button>
        </div>
       
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
import { Toast } from 'vant';
export default {
    data(){
        return{
            smtp:'',
            host:'',
            email:'',
            pwd:'',
            user_id:this.$store.state.loginInfo.sessionVal.uSER_ID,
            mail_id:''

        }
    },
    mounted(){
        this.getEmaliInfo()
    },
    components:{
        HeaderTop
    },
    methods:{
        saveEmail(){//保存
            this.$http.post('app_module2/addMailbox',{
                user_id:this.user_id,
                mailbox_id:this.mail_id,
                mailbox_account:this.email,
                mailbox_password:this.pwd,
                mailbox_port:this.host,
                mailbox_smtp:this.smtp
            }).then(res=>{
                console.log(res)
                if(res.data.code == 200){
                    Toast.success(res.data.msg);
                    setTimeout(()=>{
                        this.$router.push('/personal')
                    },2000)
                }else{
                    Toast.fail(res.data.msg);
                }
            })
        },
        getEmaliInfo(){
            this.$http.post('app_module2/selectMailbox',{user_id:this.user_id}).then(res=>{
                if(res.data.code == 200){
                    if(res.data.data.pd == null) return 
                    let emaliInfo = res.data.data.pd
                    this.smtp = emaliInfo.mailbox_smtp
                    this.host = emaliInfo.mailbox_port
                    this.email = emaliInfo.mailbox_account
                    this.pwd = emaliInfo.mailbox_password
                    this.mail_id = emaliInfo.mailbox_id
                }
            })
        }
    }
}
</script>

<style lang='less' scoped>
    .modify{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #eee;
        z-index: 2;
        .changePwd{
            padding-top: 10px;
            font-size: 0.36rem;
            .item{
                p{
                    padding-left: 20px;
                    height: 46px;
                    line-height: 46px;
                    margin-top: 10px;
                    font-size: 16px;
                }
                input{
                    height: 46px;
                    width: 100%;
                    border: none;
                    padding-left: 30px;
                    font-size: 15px;
                }
            }
        }
        .van-button--large{
            height: 40px;
            line-height: 40px;
        }
    }
</style>