<template>
	<div class="jiaoyi">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>交易分项</h1>
		</header>
		<nav>
			<h1>深圳市大新实业股份有限公司</h1>
		</nav>

		<section>
			<!--合同信息-->
			<div class="tabe1">
				<h1>2019年</h1>
				<ul class="tou">
					<li @click="wu()">
						<span><img src="@/assets/img/u13.png"></span>
						<span>物业交易</span>
						<span>{{PropertyTransactionsCount}}</span>
						<span class="iconfont icon-jiantou"></span>
					</li>
					<li @click="wu2()">
						<span><img src="@/assets/img/u13.png"></span>
						<span>工程交易</span>
						<span>{{engineeringCount}}</span>
						<span class="iconfont icon-jiantou"></span>
					</li>
					<li @click="wu3()">
						<span><img src="@/assets/img/u13.png"></span>
						<span>货物服务采购</span>
						<span>{{cargoCount}}</span>
						<span class="iconfont icon-jiantou"></span>
					</li>
					<!-- <li>
						<span><img src="@/assets/img/u13.png"></span>
						<span>股权交易</span>
						<span>2</span>
						<span>></span>
					</li> -->
					<li @click="wu5()">
						<span><img src="@/assets/img/u13.png"></span>
						<span>集体用地交易</span>
						<span>{{collectiveCount}}</span>
						<span class="iconfont icon-jiantou"></span>
					</li>
					<!-- <li>
						<span><img src="@/assets/img/u13.png"></span>
						<span>其它</span>
						<span>2</span>
						<span>></span>
					</li> -->
				</ul>

				<ul class="tt">
					<li @click="wu7()">
						<span>招标公告</span>
						<span>{{demandCount}}</span>
						<span class="iconfont icon-jiantou"></span>
					</li>
					<li @click="wu8()">
						<span>成交公告</span>
						<span>{{transactionCount}}</span>
						<span class="iconfont icon-jiantou"></span>
					</li>
					<li @click="wu9()">
						<span>流标项目</span>
						<span>0</span>
						<span class="iconfont icon-jiantou"></span>
					</li>
					<li @click="wu10()">
						<span>带交易资产</span>
						<span>{{assetsCount}}</span>
						<span class="iconfont icon-jiantou"></span>
					</li>
				</ul>

			</div>

		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				PropertyTransactionsCount:0,
				engineeringCount:0,
				cargoCount:0,
				collectiveCount:0,
				demandCount:0,
				assetsCount:0,
				transactionCount:0,
				id:this.$store.state.loginInfo.sessionVal.organization_id
			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			

			wu() {
				this.$router.push('/wuyeJY');
			},
	        wu2() {
				this.$router.push('/gongchengJY');
			},
			wu3() {
				this.$router.push('/huowufuwucaigou');
			},		
			
			wu5() {
				this.$router.push('/jitiyongdi');
			},
			wu7() {
				this.$router.push('/tenderNotice01');
			},        
			wu8() {
				this.$router.push('/chengjiaogonggao');
			},
			wu9() {
				this.$router.push('/liubiaoxiangmu');
			},
           wu10() {
				this.$router.push('/fixedAssets01');
			},

			getPropertyTransactionsCount(){//物业交易
				this.$http.post('app_module2/getPropertyTransactionsCount',{torganization_id:'D440305'}).then(res=>{
					if(res.data.code == 200){
						this.PropertyTransactionsCount = res.data.data.count
					}
				})
			},
			getEngineeringTransaction(){//工程交易
				this.$http.post('app_module2/gitEngineeringTransactionList',{torganization_id:'D440305',nowPage:1}).then(res=>{
					if(res.data.code == 200){
						this.engineeringCount = res.data.data.PageUtil.totalCount
					}
				})
			},
			getCargoService(){//货物服务采购
				this.$http.post('app_module2/gitCargoServiceList',{torganization_id:'D440305',nowPage:1}).then(res=>{
					if(res.data.code == 200){
						this.cargoCount = res.data.data.PageUtil.totalCount
					}
				})
			},
			getCollectiveLandTransaction(){//集体用地交易
				this.$http.post('app_module2/gitCollectiveLandTransactionList',{torganization_id:'D440305',nowPage:1}).then(res=>{
					if(res.data.code == 200){
						this.collectiveCount = res.data.data.PageUtil.totalCount
					}
				})
			},
			getDemandInformationListPage(){//招标公告
				this.$http.post('biddingInformation/getBiddingInformationListPage',{nowPage:1}).then(res=>{
					if(res.data.code == 200){
						this.demandCount = res.data.data.pageUtil.totalCount
					}
				})
			},
			getPendingTransactionsAssetsCount(){//待交易物业
				this.$http.post('app_module2/getPendingTransactionsAssetsNumber',{torganization_id:this.id}).then(res=>{
					// console.log(res)
					if(res.data.code == 200){
						this.assetsCount = res.data.data.pd
					}
				})
			},
			getTransactionInformationList(){//成交公告
				this.$http.post('transactionInformation/getTransactionInformationListPage',{nowPage:1}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.transactionCount = res.data.data.pageUtil.totalCount
					}
				})
			},
		},
		mounted(){
			this.getPropertyTransactionsCount()
			this.getEngineeringTransaction()
			this.getCargoService()
			this.getCollectiveLandTransaction()
			this.getDemandInformationListPage()
			this.getTransactionInformationList()
			this.getPendingTransactionsAssetsCount()
		}
	}
</script>

<style lang="less">
	.jiaoyi {
		header {
			width: 100%;
			height: 118/100rem;
			background: rgb(111, 119, 254);
			top: 0;
			left: 0;
			color: white;
			line-height: 124/100rem;
			h1 {
				text-align: center;
				font-size: 20px;
				font-weight: normal;
			}
			.left {
				position: absolute;
				top: 40/100rem;
				left: 5%;
				img {
					width: 40/100rem;
					height: 40/100rem;
				}
			}
		}
		nav {
			/*border: 1px solid red;*/
			width: 100%;
			height: 170/100rem;
			position: fixed;
			top: 118/100rem;
			font-size: 12px;
			font-weight: lighter;
			padding-left: 30/100rem;
			h1 {
				color: rgba(145, 151, 254);
				font-weight: lighter;
				padding-top: 30/100rem;
			}
		}
		section {
			/*border: 1px solid black;*/
			width: 100%;
			height: 1000/100rem;
			position: fixed;
			top: 228/100rem;
			.tabe1 {
				h1 {
					color: rgba(145, 151, 254);
					font-size: 15px;
					font-weight: lighter;
					padding-left: 30/100rem;
				}
				.tou {
					li {
						/*border-bottom: 1px solid red;*/
						width: 100%;
						height: 90/100rem;
						line-height: 90/100rem;
						padding-left: 30/100rem;
						font-size: 17px;
						display: flex;
						position: relative;
						span {
							display: block;
						}
						span:nth-child(1) {
							img {
								width: 55/100rem;
								height: 55/100rem;
							}
							padding-top: 10/100rem;
						}
						span:nth-child(2) {
							padding-left: 40/100rem;
						}
						span:nth-child(3) {
							position: absolute;
							left: 420/100rem;
						}
						span:nth-child(4) {
							position: absolute;
							right: 100/100rem;
							top:0;
							// font-weight: bold;
							// content: '';
							// display: inline-block;
							// width: 8px;
							// height: 8px;
							// border-top: 1px solid black;
							// border-right: 1px solid black;
							// transform: rotate(45deg);
							// -webkit-transform: rotate(50deg);
						
						}
					}
				}
				.tt {
					border-top: 5px solid gainsboro;
					li {
						width: 100%;
						height: 80/100rem;
						line-height: 80/100rem;
						padding-left: 30/100rem;
						font-size: 16px;
						display: flex;
						position: relative;
						span:nth-child(2) {
							position: absolute;
							left: 375/100rem;
						}
						span:nth-child(3) {
							position: absolute;
							right: 100/100rem;
							top:0;
							
							// content: '';
							// display: inline-block;
							// width: 6px;
							// height: 6px;
							// border-top: 1px solid  black;
							// border-right: 1px solid black;
							// transform: rotate(45deg);
							// -webkit-transform: rotate(50deg);
						}
					}
				}
				
				
				
			}
		}
	}
</style>