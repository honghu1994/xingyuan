<template>
  <div class="caiwu">
    <header-top>
      <div slot="left">
        <img @click="$router.go(-1)" src="@/assets/img/back.png" />
      </div>
      <div slot="mid">财务管理</div>
    </header-top>
    <div class="main">
      <div class="title">深圳市大新实业股份有限公司</div>
      <div class="content">
		  <div class="logo"  @click="toAssetForm()">
			  <img src="../../assets/img/icon_012.png" alt="" class="myimg">
			  <span>资产负债表</span>
			  <span class="font iconfont icon-jiantou"></span>
		  </div>
		  <div class="logo" @click="toCashForm()">
			  <img src="../../assets/img/icon_02.png" alt="" class="myimg">
			  <span>现金流量表</span>
			   <span class="font iconfont icon-jiantou"></span>
		  </div>
		  <div class="logo"  @click="toProfitForm()">
			  <img src="../../assets/img/icon_02.png" alt="" class="myimg">
			  <span>利润分配表</span>
			  <span class="font iconfont icon-jiantou"></span>
		  </div>
		  <div class="logo"  @click="toshareholderForm()">
			  <img src="../../assets/img/icon_02.png" alt="" class="myimg">
			  <span>股东</span>
			  <span style="marginLeft:0.7rem">29</span>
			  <span class="font iconfont icon-jiantou" ></span>
		  </div>
		  <div class="logo" @click="toRightsForm()" >
			  <img src="../../assets/img/icon_02.png" alt="" class="myimg">
			  <span>股东权益分配</span>
			  <span class="font02 iconfont icon-jiantou" ></span>
		  </div>
		  <div class="logo" @click="toBankMessage()">
			  <img src="../../assets/img/icon_02.png" alt="" class="myimg">
			  <span>银行账号</span>
			  <span class="font03 iconfont icon-jiantou" ></span>
		  </div>
	  </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/common/Header";
export default {
  data() {
    return {
      type: "a"
    };
  },
  components: {
    HeaderTop
  },
  methods: {
  toAssetForm(){
	  this.$router.push('/assetForm')
  },
  toProfitForm(){
	  this.$router.push('/profitForm')
  },
  toCashForm(){
	   this.$router.push('/cashForm')
  },
  toshareholderForm(){
	  this.$router.push('/shareholderForm')
  },
  toRightsForm(){
	  this.$router.push('/rightsForm')
  },
  toBankMessage(){
	   this.$router.push('/bankMessage')
  }
  }
};
</script>

<style lang="less" scoped>
.caiwu {
	.main{
		padding-left: .4rem;
		.title{
			border-top: .2rem solid #fff;
			font-size: 18px;
			color: #6f77fe;
		}
		.content{
			font-size: 16px;
			
			margin-top: .3rem;
			.logo{
				display: flex;
				align-items: center;
				line-height: 1.6rem;
			}
			.myimg{
				width: 30px;
				margin-right: .5rem;
			}
			.font02{
				right: 1rem;
				position: absolute;
				
				margin-left: 2.6rem;
			}
			.font03{
				right: 1rem;
				position: absolute;
				
				margin-left: 3.4rem;
			}
			.font{
				right: 1rem;
				position: absolute;
				
				margin-left: 3rem;
			}
		}

	}
}
</style>
