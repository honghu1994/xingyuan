<template>
	<div class="yujing">
		<header-top>
			<div slot="left">
			<img @click="$router.go(-1)" src="@/assets/img/back.png">
			</div>
			<div slot="mid">资产预警信息</div>
    </header-top>
		<section>
			<div class="tabe1">
				<h1>区国有资产监督管理局</h1>
				<!-- <p class="mm">
				  <span>预警登记</span>
				  <span @click="toWarningBooking()"><span class="iconfont icon-addTodo-nav"></span></span>
				</p> -->
				<p class="tt">预警信息</p>
				<ul >
					<li  @click="toAssetMessage()">
						<p    class="top"><span>资产预警</span><span class="iconfont icon-jiantou"></span></p><br>
						<div  class='zsbom'>
						    <p><span class="zswid">新增资产</span><span>{{futureData.newAssetsWarning }}</span></p><br>
						    <p><span>资产变动</span><span>{{futureData.assetChangeWarning }}</span></p><br>
						    <p><span>资产处置</span><span>{{futureData.disposalOfAssetsWarning }}</span></p><br>
						    <p><span>即将到期物业</span><span>{{futureData.expiringProperty }}</span></p>
						</div>
					</li>

					<li>
						<p class="top"><span>财务预警</span><span class="iconfont icon-jiantou"></span></p><br>
						<div>
						    <p><span>资金异动</span><span>0</span></p><br>
						</div>
					</li>
					<li>
						<p class="top"><span>交易预警</span><span class="iconfont icon-jiantou"></span></p><br>
						<div>
						    <p><span>资产拆分交易</span><span>0</span></p><br>
						    <p><span>资产合并交易</span><span>0</span></p><br>

						</div>
					</li>
					<li  @click="toIDMessage()">
						<p class="top"><span>证照监管</span><span class="iconfont icon-jiantou"></span></p><br>
						<div>
						    <p><span>证照逾期未交回</span><span>{{futureData.overdueLicense }}</span></p><br>
						</div>
					</li>

				</ul>

			</div>

		</section>

	</div>
</template>

<script>
import HeaderTop from '@/common/Header'
	export default {
		data() {
			return {
				futureData:[],
				 id:this.$store.state.loginInfo.sessionVal.organization_id,
			}
		},
		 components:{
        HeaderTop
		},
		mounted() {
			this.getData()
		},
		methods: {
			getData(){
				this.$http
       		 	.post("earlyWarnings/getAssetEarlyWarning", {
						 torganization_id:this.id,


       			 })
        		.then(result => {

         		 if (result.data.code == 200) {

				this.futureData=result.data.data

         			 }
        		});
			},

			toWarningBooking(){
				 this.$router.push('/warningBooking');
			},
			hui1() {
				this.$router.go(-1);
			},
			toAssetMessage(){
			    this.$router.push('/assetMessage');
			},
			toIDMessage(){
			    this.$router.push('/IDMessage');
			}
		}
	}
</script>

<style lang="less">
	.yujing {

		.zsbom{
			margin-bottom: .2rem;
		}
		.zswid{

			width: 1rem;
		}

		section {

			/*border: 1px solid black;*/
			width: 100%;
			// height: 1400/100rem;
			margin-bottom: .7rem;
			position: absolute;
			top: 118/100rem;

			overflow: auto;
			.tabe1 {
				h1 {
					color: #6f77fe;
					font-weight: normal;

					padding-left: 20/100rem;
					padding-top: 30/100rem;
					font-size: 18px;
				}
				.mm{

				    border-bottom: 1px solid  gainsboro;
				   width: 100%;
				//    height: 80/100rem;
				   line-height:80/100rem;
				   padding-left: 20/100rem;
				   font-size: 16px;

				   span:nth-child(2){
					   position: absolute;
					    		right:50/100rem;


				}

				}
				.tt{
				padding-left: 20/100rem;
				padding-top: 40/100rem;
				font-size: 16px;
				}


				ul {

					margin-top: 30/100rem;
					li {

						width: 100%;
						// height: 360/100rem;
						font-size: 16px;
					    .top{
					    	position: relative;
					    	padding-left: 40/100rem;

					    	span:nth-child(2){
					    		position: absolute;
					    		right:50/100rem;
					    	}
					    }
					    div{
					    	padding-left: 120/100rem;

					    	span:nth-child(2){
					    	   position: absolute;
					    	    left:400/100rem;
					    	}
					    }

					}

				}
			}
		}
	}
</style>
