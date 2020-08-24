<template>
  <div class="message">
    <header-top>
      <div slot="left">
        <img @click="$router.go(-1)" src="@/assets/img/back.png" />
      </div>
      <div slot="mid">招标信息</div>
    </header-top>
    <div class="main">
      
        <div class="middle">
          
          <!-- <h1 class="h1">{{title}}</h1> -->
          <p class="pad center">
            <span>项目编号：{{proNum}}</span>
            <span style="marginLeft:.4rem">状态：{{status}}</span>
          </p>
          <p class="pad center">
            <!-- <span>联系方式：0755-83881848</span>
            <span style="marginLeft:.2rem">王先生</span> -->
            <!-- <span style="marginLeft:.2rem">发布时间：{{time}}</span> -->
          </p>
          <p class="border"></p>
        </div>
        <!-- <table>
            <h1>表格图片</h1>
        </table> -->
        <div v-html="conytent" style="padding:0 10px;"></div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/common/Header";
export default {
  data() {
    return {
      id:this.$route.query.id,
      conytent:'',
      title:'',
      source:'',
      time:'',
      proNum:'',
      status:''

    };
  },
  components: {
    HeaderTop
  },
  methods:{
    getFindDetail(){
      this.$http.post('biddingInformation/findById',{id:this.id}).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          this.conytent = res.data.data.noticeContent
          this.title = res.data.data.noticeTitle
          this.source = res.data.data.noticeContent
          this.time = res.data.data.pubStartTime
          this.proNum = res.data.data.proNo
          this.status = res.data.data.establishmentStatus
          // this.proNum = res.data.data.data.proNo
        }
      })
    }
  },
  mounted(){
    this.getFindDetail()
  }
};
</script>

<style  lang='less' scoped>
.message {
  .main {
    // border-top: 0.2rem solid #e9e9e9;
    
  }

  .h1 {
    margin-top: 0.3rem;
    text-align: center;
  }
  .center {
    text-align: center;
    line-height: 36px;
    font-size: 15px;
  }
  .border {
    border-top: 1px solid grey;
    // margin-top: 0.3rem;
  }
  .pad {
    padding-left: 0.3rem;
  }
}

</style>