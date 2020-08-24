<template>
  <div class="personal">
    <header-top>
        <div slot="left">
            <!-- <img @click="goBack" src="@/assets/img/back.png"> -->
        </div>
        <div slot="mid">个人信息</div>
    </header-top>
    <div class="uploadImg" style="">
       <!-- :on-success="handleAvatarSuccess" -->
       <!-- action="http://192.168.2.108:8080/app_module2/addHeadPortrait" :http-request="upLoad"-->
       <!-- action="http://119.23.209.162/app_module2/addHeadPortrait" -->
      <el-upload
        class="avatar-uploader"
        action="http://119.23.209.162/app_module2/addHeadPortrait"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :limit="1"
        :data="upLoadData"
        accept="image/jpg,image/jpeg,image/png,image/PNG"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" style='width:86px; height:86px; border-radius:50%;'>
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <div class="personalInfo">
      <div class="info">
        <h4>姓名：<span>{{personalInfo.NAME}}</span></h4>
        <p>所属公司：<span>{{personalInfo.company_name}}</span></p>
        <p>职位：<span>{{personalInfo.post}}</span></p>
        <p>电话：<span>{{personalInfo.PHONE}}</span></p>
        <p>Email：<span>{{personalInfo.EMAIL}}</span></p>
        <p>备注：<span>{{personalInfo.BZ}}</span></p>
      </div>
      <div class="modifyPwd" style="margin-top:30px;" @click="$router.push('/personal/email')">
        <p>邮箱配置</p>
        <span class="iconfont icon-jiantou"></span>
      </div>
      <div class="modifyPwd" @click="$router.push('/personal/modifyPwd')">
        <p>修改密码</p>
        <span class="iconfont icon-jiantou"></span>
      </div>
      <div class="modifyPwd" @click="loginOut">
        <p>更换帐号</p>
        <span class="iconfont icon-jiantou"></span>
      </div>
      <div class="modifyPwd">
        <p>软件版本</p>
        <span >V0.0.1</span>
        <span></span>
      </div>
    </div>
    <!-- <van-button type="primary" size="large" plain style="position:absolute; left:0;bottom:0px;">退出登录</van-button> -->

  </div>
</template>

<script>
import { Dialog } from 'vant';
import HeaderTop from '@/common/Header'
export default {
  data(){
    return{
      user_id:this.$store.state.loginInfo.sessionVal.uSER_ID,
      personalInfo:{},
      imageUrl: '',//localStorage.getItem('imgpath') && JSON.parse(localStorage.getItem('imgpath'))||'',
      uploadFile:'',
      upLoadData:{
        user_id:this.$store.state.loginInfo.sessionVal.uSER_ID,
      }
    }
  },
  components:{
    HeaderTop
  },
  mounted(){
    this.getPersonalInfo()
    // this.handleAvatarSuccess()
    this.getHeadPortraitImg()
  },
  methods:{
    getHeadPortraitImg(){
      this.$http.post('app_module2/getHeadPortrait',{user_id:this.user_id}).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          if(res.data.data.pd){
             this.imageUrl = res.data.data.pd.imgpath
          }
        }
      })
    },
    handleAvatarSuccess(res, file) {
      console.log(1222626)
      console.log(res)
      console.log(file)
      this.imageUrl = URL.createObjectURL(file.raw);
      localStorage.setItem('imgpath',JSON.stringify(res.data.pd.imgpath))

    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 10;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 10MB!');
      }

      return isJPG && isLt2M;
    },
    goBack(){
      this.$router.go(-1)
    },
    getPersonalInfo(){//获取个人信息
      this.$http.post('app_module2/getPersonalInformation',{USER_ID:this.user_id}).then(res=>{
        if(res.data.code == 200){
          this.personalInfo = res.data.data.pd
        }
      })
    },
    loginOut(){
      Dialog.confirm({
        title: '提示',
        message: '你确定要更换帐号吗?'
      }).then(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('imgpath')
        this.$router.push('/Login')
        // this.bus.emit('isActiveBtn')
      }).catch(() => {
        // on cancel
      });
    }
  }
}
</script>

<style lang='less' scoped>
.personal{
  // position: fixed;
  z-index: 9999999999;
  background-color: #fff;
  // top:0;
  // left:0;
  // right: 0;
  // bottom:0;
  .uploadImg{
    padding: 20px 0;
    text-align: center;
  }
  .personalInfo{
    padding-left: 20px;
    font-size: 16px;
    color: #666;
    .info{
      color: #333;
      span{
        color: #666;
      }
    }
    h4{
      height: 30px;
      line-height: 30px;
      font-size: normal;
    }
    p{
      height: 30px;
      line-height: 30px;
    }
    .modifyPwd{
      display: flex;
      height: 40px;
      line-height: 40px;
      padding-right: 10px;
      justify-content: space-between;
      border-bottom:1px solid #ddd;
      p{
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;

    line-height: 88px;
    width: 86px;
    height: 86px;
    border-radius: 50%;
    border: 1px solid #ccc;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
