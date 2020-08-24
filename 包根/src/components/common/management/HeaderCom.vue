<template>
  <div class="header">
    <div class="header-top">
      <div class="lef-nav-btn">
        <slot/>
      </div>
      <div class="mid-title">
        <img src="@/assets/images/logo2.png" alt="" class="image" >
        <div class="text">南山阳光 365资产管理平台</div>
      </div>
      <div class="right-nav-btn">
        <div class="top-btn">
          <div v-for="(item,index) in topInfo" :key="index" :class="item.styleName">
            <img :src="item.img" alt="">
            <span v-if="item.name">{{item.name}}</span>
          </div>
        </div>
        <div class="bottom-btn">
          <div :class="item.styleName" v-for="(item,index) in bottomInfo" :key="index">
            <img v-if="item.img" :src="item.img" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      topInfo:[
        {name:'',img:require('@/assets/images/authority/home.png'),styleName:'home'},
        {name:'未读短信',img:require('@/assets/images/authority/message.png'),styleName:'message'},
        {name:'待办事项',img:require('@/assets/images/authority/item.png'),styleName:'project'},
        {name:'在线用户',img:require('@/assets/images/authority/user.png'),styleName:'user'},
        {name:'通知公告',img:require('@/assets/images/authority/round.png'),styleName:'notice'},
        ],
      bottomInfo:[
        {name:'南头街道办',img:require('@/assets/images/authority/manage.png'),styleName:'position'},
        {name:'管理员',img:'',styleName:'manager'},
        {name:'修改密码',img:require('@/assets/images/authority/pwd.png'),styleName:'modify'},
        {name:'退出',img:require('@/assets/images/authority/out.png'),styleName:'out'},
        ]
    }
  }
}
</script>

<style lang='scss' scoped>
  .header{
    width: 100%;
    height: 90px;
    padding-top: 0.16rem;
    font-size: 14px;
    .header-top{
      position: relative;
      width: 18.8rem;
      box-sizing: border-box;
      height: 90px;
      background: url("../../../assets/images/authority/top.png") no-repeat;
      background-size: 100% 100%;
      margin: 0 auto;
      display: flex;
      justify-content:space-between;
      .lef-nav-btn{
        display: flex;
      }
      .mid-title {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-direction: row;
        .image {
          width:76px;
          height: 56px;
          vertical-align: middle;
        }
        .text {
          display: inline-block;
          font-size: 0.36rem;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #ffffff;
          line-height: 58px;
        }
      }
      .right-nav-btn{
        color: #fff;
        
        .top-btn,.bottom-btn{
          display: flex;
          height: 45px;
          align-items: center;
          margin-right: 0.55rem;
          justify-content: flex-end;
          div{
            cursor: pointer;
          }
          .home{
            margin-right: 0.22rem;
          }
          img{
            height: 20px;
            vertical-align: middle;
          }
          .message{
            span{
              color: #ffff00;
            }
          }
          span{
            margin-right: 0.17rem;
          }
        }
        
        
      }
      
    
    }
  }
</style>