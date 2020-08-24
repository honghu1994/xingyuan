<template>
    <div class="modify">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">修改密码</div>
        </header-top>
        <div class="changePwd">
            <div class="item">
                <p>旧密码:</p>
                <input type="text" v-model.trim="oldVal" placeholder="若包含字母，注意区分大小写" @blur="verifyPwd">
            </div> 
            <div class="item">
                <p>新密码:</p>
                <input type="text" v-model.trim="newVal" placeholder="若包含字母，注意区分大小写">
            </div> 
            <div class="item">
                <p>再次输入:</p>
                <input type="text" v-model.trim="againVal" placeholder="若包含字母，注意区分大小写">
            </div> 
        </div>
        <div style="position:absolute; left:0;bottom:50px; width:90%;margin-left:5%; ">
            <van-button type="primary" size="large" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="modifyPwdConfirm">确定</van-button>
        </div>
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
import { Dialog } from 'vant'
export default {
    data(){
        return{
            oldVal:'',
            newVal:'',
            againVal:'',
            pwd:this.$store.state.loginInfo.sessionVal.pASSWORD,
            uName:this.$store.state.loginInfo.sessionVal.uSERNAME,
            uId:this.$store.state.loginInfo.sessionVal.uSER_ID,
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        verifyPwd(){
             console.log(this.pwd)
             console.log(this.uName)
             console.log(this.uId)
            this.$http.post('app_module2/VerifyPassword',{
                username:this.uName,
                password:this.pwd,
                userId:this.uId,
                oldpwd:this.oldVal
            }).then(res=>{
               
                // console.log(res)
                if(res.data.data.smg == 'error'){
                    Dialog.alert({
                        message: '输入原始密码不正确'
                    })
                    this.oldVal = ''
                }
            })
        },
        modifyPwdConfirm(){
            if(this.oldVal == ''){
                Dialog.alert({
                    message: '旧密码不能为空!!!'
                })
                return
            }else if(this.newVal!=this.againVal){
                Dialog.alert({
                    message: '两次密码输入不一致，请重新输入!!!'
                })
                return
            }else if(this.newVal == ''){
                Dialog.alert({
                    message: '新密码不能为空!!!'
                })
                return
            }
            this.$http.post('app_module2/getChangePassword',{
                    USERNAME:this.uName,
                    NEWPASSWORD:this.newVal,
                    USER_ID:this.uId
                }).then(res=>{
                    console.log(res)
                if(res.data.code == 200){
                    Dialog.alert({
                        message: '修改成功!!!'
                    })
                    localStorage.removeItem('token')
                    this.$store.commit('clearLoginInfoInfo')
                    this.$router.push('/login')
                }else{
                    Dialog.alert({
                        message: '修改失败!!!'
                    })
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
            font-size: 15px;
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
                    padding-left: 20px;
                }
            }
        }
    }
</style>