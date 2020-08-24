<template>
  <div class="login">
    <div class="login-content">
      <section class="title">
        <img src="@/assets/images/logo2.png" alt="" class="image" >
        <div class="text">南山阳光 365</div>
      </section>
      <section class="login-form">
        <h3>用户登录</h3>
        <div class="login-input">
          <section class="user">
            <img src="@/assets/images/login/user.png" width="15px" alt="" class="user-icon">
            <input type="text" placeholder="请输入账号" v-model="user_name">
          </section>
          <section class="pwd">
            <img src="@/assets/images/login/pwd1.png" width="15px" alt="" class="pwd-icon">
            <input type="password" placeholder="密码" v-model="password" v-if="!pwdIsShow" >
            <input type="text" placeholder="密码" v-model="password" v-else>
            <div class="switch-show" @click="pwdIsShowClick">
              <img src="@/assets/images/login/show.png" alt="" width="15" v-if="pwdIsShow">
              <img src="@/assets/images/login/hide.png" alt="" width="15" v-else>
            </div>
          </section>

          <section class="verification ">
            <img src="@/assets/images/login/user.png" width="15px" alt="" class="ver-icon">
            <input type="text" placeholder="请输入验证码" v-model="verificationCode">
            <!-- <img :src="codeApi" ref="captcha" @click="getCaptcha" alt="" class="verification-icon"> -->
            <span @click="getCode">{{codeNum}}</span>
          </section>
          <el-button type="primary" @click.native="login">登录</el-button>
          <section class="bottom-info">
            <section class="remember" @click="rmbIsShow">
              <div class="check-btn" :class="{check:!isChecked}">
                <img src="@/assets/images/login/remember.png" width="11" height="11" alt="">
              </div>
              <span>记住密码</span>
            </section>
            <section class="help">
              <img src="@/assets/images/login/light.png" alt=""  width="16" height="16">
              <span>使用帮助</span>
            </section>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script >
  // import {baseURL} from '../../api/http.js'
  // import axios from 'axios'
  export default {
  data() {
    return {
      user_name: "",
      password: "",
      isChecked:true,
      pwdIsShow:false,
      verificationCode:'',
      time:'',
      codeNum:'',
      code:''
    };
  },
  mounted: function() {
    this.getCode()
  },
  computed:{
    
    codeApi(){
      this.time=new Date().getTime()
      // return baseURL+'code.do?t='+this.time
    }
  },
  methods: {
    getCode(){
      this.$http.post('code/getcode').then(res=>{
        // console.log(res)
        if(res.data.code == 200){
          this.codeNum = res.data.data.val
          this.code = res.data.data.code
        }
      })
    },

    login: function() {
      if(this.isChecked){
        localStorage.setItem('loginInfo',JSON.stringify({'name':this.user_name,'password':this.password}))
      }else{
        localStorage.setItem('loginInfo','')
      }
      if (!this.user_name) {
        this.$message("用户名不能为空");
        return;
      } else if (!this.password) {
        this.$message("密码不能为空");
        return
      }else if(!this.verificationCode){
        this.$message("验证码不能为空");
        return
      }else if(!(/^\w{4}$/gi.test(this.verificationCode))){
          this.$message("请输入正确的验证码");
          return
        }
      this.$http
        .post("login_pclogin", {
          KEYDATA:this.user_name+','+this.password+','+this.verificationCode,
          CODE:this.code,
          tm:new Date().getTime(),
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            sessionStorage.setItem('token',JSON.stringify(res.data.data.result))
            sessionStorage.setItem('session',JSON.stringify(res.data.data.session))
            this.$message({
              message: '恭喜你，登陆成功',
              type: 'success'
            });
            setTimeout(()=>{
              this.$router.push('/home')
            },3000)
          }
        });
    },
    pwdIsShowClick(){
      this.pwdIsShow =! this.pwdIsShow
    },
    rmbIsShow(){
      this.isChecked =! this.isChecked
    },
    getCaptcha(){
      this.time=new Date().getTime()
      this.$refs.captcha.src=baseURL+'code.do?time='+this.time
      // this.$refs.captcha.src='http://192.168.2.105:8080/code.do?t='+new Date().getTime();
    }
  }
};
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    position: relative;
    .login-content {
      width: 100%;
      height: 100vh;
      background: url("../../assets/images/login/login-bg.png") no-repeat;
      background-size: 100% 100%;
      text-align: center;
      position: absolute;
      padding-top: 40px;
      box-sizing: border-box;
      z-index: -1;
      .login-form{
        width:280px;
        // min-width: 300px;
        // min-height: 340px;
        height:280px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        transform: translateX(40%);
        // right: 370px;
        top: 165px;
        box-sizing: border-box;
        padding: 5px 8px 9px 9px;
        .login-input{
          padding: 0 10px;
          .bottom-info{
            display: flex;
            justify-content: space-between;
            padding-top: 15px;
            color: #333;
            font-size: 10px;
            .help{
              // text-align: right;
              // padding-top: 30px;
              img{
                vertical-align: middle;
              }
              span{
                vertical-align: middle;
                cursor: pointer;

              }
            }
            .remember{
              // padding: 40px 0 30px 0px;
              display: flex;
              span{
                  // vertical-align: middle;
                  margin-left: 6px;
                }
              .check-btn{
                margin-top: 2px;
               width: 11px;
               height: 11px;
                border-radius: 2px;
                background-color: #4a9fe7;
                cursor: pointer;
                // vertical-align: middle;
              }
              .check{
                img{

                  // vertical-align: middle;
                  display: none;
                }

              }
            }
          }
          .user{
            position: relative;
            padding-top:5px;
            .user-icon{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              padding-top: 10px;
              left: 3px;
              width: 15px;
              height:15px;

            }
          }
          .verification{
            margin-bottom:16px;
          }
          .pwd,.verification{
            position: relative;
            padding-top: 5px;
            span{
              position: absolute;
              right: 10px;
              top: 20px;
              color: #fff!important;
              width: 40px;
              height: 20px;
              line-height: 20px;
              background: #1F8FEF;
              font-size: 11px;
              cursor: pointer;
            }
            .pwd-icon,.ver-icon{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              padding-top: 10px;
              left: 3px;
            }
            .verification-icon{
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
              width: 70px;
            }
            .switch-show{
              position: absolute;
              right: 10px;
              top: 50%;
              transform: translateY(-50%);
              padding-top: 18px;
              cursor: pointer;
            }
          }
          input{
            height:38px;
            line-height:38px;
            border: none;
            border-bottom:1px solid #f2f2f2;
            width: 100%;
            padding-left: 30px;
            box-sizing: border-box;
            font-size: 10px;
            color: #9f9f9f;

            &:focus,&:active.focus,&:active:focus{
              outline: none;
              border-bottom: 1px solid #4a9fe7;
            }
          }
        }
        h3{
          font-weight: normal;
          font-size: 15px;
          line-height: 40px;
          border-bottom: 2px solid #4a9fe7;
          color: #4a9fe7;
        }
      }
      .title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .image {
          width: 75px;
          height: 50px;
      }

    }
    .text {
        display: inline-block;
        font-size: 30px;
        font-weight: bold;
        font-style: italic;
        font-stretch: normal;
        line-height: 27px;
        letter-spacing: 6px;
        color: #ffffff;
    }
    }
  }
  .el-button{
    width:100%;
    font-size: 12px;
    height: 30px;
    line-height: 10px;
  }
</style>
