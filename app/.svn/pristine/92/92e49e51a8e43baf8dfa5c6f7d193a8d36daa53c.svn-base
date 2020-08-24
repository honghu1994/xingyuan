<template>
  <div class="chengjiaogonggaoXQ">
    <header-top>
      <div slot="left">
        <img @click="$router.go(-1)" src="@/assets/img/back.png" />
      </div>
      <div slot="mid">招标信息</div>
    </header-top>
    
    <div class="main">
      <div class="middle">
        <h1 class="h1">{{transactionDetails.contractName}}</h1>
        <p class="pad center">
          <span>发布时间：</span>
          <span >{{transactionDetails.signingDate}}</span>
        </p>
        
        <p class="border"></p>
      </div>
      <!-- <table>
          <h1>文字</h1>
      </table> -->
      <div v-html='transactionDetails.content'></div>

    </div>
  </div>
</template>

<script>
import HeaderTop from "@/common/Header";
export default {
  data() {
    return {
      id:this.$route.query.id,
      transactionDetails:{}
    };
  },
  components: {
    HeaderTop
  },
  methods:{
    getTransactionDetail(){//成交公告
				this.$http.post('transactionInformation/findById',{contractEnquiryId:this.id}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.transactionDetails = res.data.data
					}
				})
			},
		
  },
  mounted(){
			this.getTransactionDetail()
		}
};
</script>

<style  lang='less' scoped>
.chengjiaogonggaoXQ {
  .main {
    border-top: 0.2rem solid #e9e9e9;
  }

  .h1 {
    margin-top: 0.3rem;
    text-align: center;
    font-weight: normal;
  }
  .center {
    text-align: center;
    padding-top: 20/100rem;
    color: gray;
  }
  .border {
    border-top: 1px solid grey;
    margin-top: 0.3rem;
  }
  .pad {
    padding-left: 0.3rem;
  }
}

table{
	color: gray;
	font-weight: normal;
}


</style>