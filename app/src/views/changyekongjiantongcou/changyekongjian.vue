<template>
	<div class="changyekongjian">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>产业空间统筹</h1>
		</header>

		<section>
			<h1>南山区国有资产监督管理局</h1>
			<div class="box01">
				<p>
					<span><img src="../../assets/img/icon_08.png"></span>
					<span>产业空间总面积</span>
					<span>{{overallSupply.assetsTotalArea}}万m²</span>
				</p>
				<ul clss="middle">
					<li>
						<h2>供应量</h2>
						<p>
							<span>写字楼:</span>
							<span>{{overallSupply.officeBuildingTotalArea}}万m²</span>
							<span>厂房:</span>
							<span>{{overallSupply.workshopTotalArea}}万m²</span>
							
						</p>
						<p>
							<span>宿舍:</span>
							<span>{{overallSupply.dormitoryTotalArea}}万m²</span>
							<span>其他:</span>
							<span>{{overallSupply.otherTotalArea}}万m²</span>
						</p>
					</li>
					<li>
						<h2>需求量</h2>
						<p>
							<span>写字楼:</span>
							<span>{{overallDemand.OfficeBuilding}}万m²</span>
							<span>厂房:</span>
							<span>{{overallDemand.Workshop}}万m²</span>
							
						</p>
						<p>
							<span>宿舍:</span>
							<span>{{overallDemand.Dormitory}}万m²</span>
							<span>其他:</span>
							<span>{{overallDemand.Other}}万m²</span>
						</p>
					</li>
				</ul>
			</div>

			<div class="box02" style="position:relative;">
				<el-collapse accordion>
					<el-collapse-item>
						<template slot="title">
							<span><img src="../../assets/img/icon_08.png"></span>
							<span>股份公司</span>
							<span>{{companyCount}}家</span>
						</template>
						<div class="one" v-for="item in companyList" :key="item.company_id" @click='spatialPlanningClick(item.company_code)'>{{item.company_name}}</div>
					</el-collapse-item>
				</el-collapse>
				<van-button type="info" size="mini" style="position:absolute; right:40px; top:40px;" @click.native="$router.push('/changyekongjian/moreStockCompany')">更多>></van-button>
			</div>

			<div class="box03">
				<ul>
					<li @click="ff()">
						<span><img src="../../assets/img/icon_01.png"></span>
						<span>国有企业</span>
						<span>{{countryCompanyList}}家</span>
						<span></span>
					</li>
					<li>
						<span><img src="../../assets/img/icon_01.png"></span>
						<span>入驻企业</span>
						<span>{{appBusinessCount}}家</span>
						<!--<span></span>-->
					</li>
					<li @click="ff2()">
						<span><img src="../../assets/img/icon_01.png"></span>
						<span>业主单位信息</span>
						<span></span>
						<span class="lit"></span>
					</li>
					<li @click="ff3()">
						<span><img src="../../assets/img/icon_01.png"></span>
						<span>产业空间规划指引</span>
						<span></span>
						<span class="lit"></span>
					</li>

					<li @click="ff4()">
						<span><img src="../../assets/img/icon_01.png"></span>
						<span>待交易物业</span>
						<span>{{assetsNumber}}家</span>
						<span></span>
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
				overallSupply:{},//供应量
				overallDemand:{},//需求量
				companyCount:0,
				companyList:[],
				countryCompanyList:0,//国有企业
				appBusinessCount:0,//入驻企业数量
				assetsNumber:0,//待交易物业
				
			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			//跳转
			ff() {//国有企业列表
				this.$router.push('/changyekongjian/guoyouqiye');
			},
			ff2() {
				this.$router.push('/yezhu');
			},

			ff3() {
				this.$router.push('/zhiyin');
			},
			ff4() {
				this.$router.push('/daijiaoyi');
			},
			spatialPlanningClick(id){//产业空间统筹
				this.$router.push({path:'/changyekongjian/spatialPlanning',query:{company_code:id}})
				
			},
			getOverallSupply(){//供应量
				this.$http.post('app_module2/getOverallSupply').then(res=>{
					// console.log(res)
					if(res.data.code == 200){
						this.overallSupply = res.data.data
					}
				})
			},
			getOverallDemand(){//需求量
				this.$http.post('app_module2/getOverallDemand').then(res=>{
					// console.log(res)
					if(res.data.code == 200){
						this.overallDemand = res.data.data
					}
				})
			},
			getCompanyCount(){//家总数
				this.$http.post('app_module2/getOverallPlanningIndustrialSpaceStockCompanyCount',{torganization_id:'D440305101'}).then(res=>{
					// console.log(res)
					if(res.data.code == 200){
						this.companyCount = res.data.data.pd
					}
				})
			},
			getCompanyList(){//股份公司list
				this.$http.post('app_module2/getOverallPlanningIndustrialSpaceStockCompany',{nowPage:1,torganization_id:'D440305101'}).then(res=>{
					// console.log(res)
					if(res.data.code == 200){
						this.companyList = res.data.data.dataList
					}
				})
			},
			getAppStateOwnedEnterpriseCounts(){//国有企业
				this.$http.post('app_module2/getAppStateOwnedEnterpriseCounts').then(res=>{
					// console.log(res)
					if(res.data.code == 200){
						this.countryCompanyList = res.data.data.count
					}
				})
			},
			getAppBusinessCount(){//入驻企业数量
				this.$http.post('app_module2/getAppBusinessCount').then(res=>{
					// console.log(res)
					if(res.data.code == 200){
						this.appBusinessCount = res.data.data.businessCount
					}
				})
			}, 
			getPendingTransactionsAssetsNumber(){//待交易物业
				this.$http.post('app_module2/getPendingTransactionsAssetsNumber',{torganization_id:'D440305101001'}).then(res=>{
					// console.log(res)
					if(res.data.code == 200){
						this.assetsNumber = res.data.data.pd
					}
				})
			}
			
		},
		mounted(){
			this.getOverallSupply()
			this.getOverallDemand()
			this.getCompanyCount()
			this.getCompanyList()
			this.getAppStateOwnedEnterpriseCounts()
			this.getAppBusinessCount()
			this.getPendingTransactionsAssetsNumber()
		}
	}
</script>

<style lang="less">
	.changyekongjian {
		header {
			width: 100%;
			height: 118/100rem;
			background: rgb(111, 119, 254);
			z-index: 99999;
			position: fixed;
			top: 0;
			left: 0;
			color: white;
			line-height: 124/100rem;
			h1 {
				font-size: 20px;
				font-weight: normal;
				text-align: center;
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
		section {
			/*border: 1px solid black;*/
			width: 100%;
			height: 1400/100rem;
			position: absolute;
			top: 118/100rem;
			img {
				width: 50/100rem;
				height: 50/100rem;
				vertical-align: middle;
			}
			h1 {
				padding-left: 30/100rem;
				padding-top: 20/100rem;
				color: rgba(111, 119, 254);
				font-size: 15px;
			}
			div {
				padding-left: 28/100rem;
				padding-top: 10/100rem;
				font-size: 12px;
				h2 {
					font-size: 14px;
				}
			}
			.box01 {
				p:nth-child(1) {
					font-size: 15px;
					span:nth-child(2) {
						padding-left: 20/100rem;
					}
					span:nth-child(3) {
						padding-left: 50/100rem;
					}
				}
				ul {
					li {
						padding-top: 25/100rem;
						h2 {
							font-weight: normal;
						}
						p {
							padding-top: 15/100rem;
							color: gray;
							font-size: 12px;
							/*transform: scale(0.9);*/
							span:nth-child(1) {
								padding-left: 0.4rem;
								display: inline-block;
								width: 1rem;
							}
							span:nth-child(2) {
								display: inline-block;
								width: 2rem;
							}
							span:nth-child(4) {
								display: inline-block;
								width: 2rem;
							}
							// span:nth-child(3) {
								
							// 	padding-left:0.2rem;
							// }
							// span:nth-child(5) {
								
							// 	padding-left: 0.2rem;
							// }
							// span:nth-child(7) {
							// 	padding-left: 0.2rem;
							// }
						}
					}
				}
			}
			.box02 {
				margin-left: -110/100rem;
				span:nth-child(2) {
					padding-left: 40/100rem;
					font-size: 14px;
				}
				span:nth-child(3) {
					font-size: 14px;
					position: absolute;
					right: 300/100rem;
				}
				.one {
					padding-left: 100/100rem;
				}
				.el-collapse-item__arrow {
					margin: 0 14px 0 auto;
				}
				.el-collapse {
					border-top: 1px solid white;
					border-bottom: 1px solid white;
				}
				.el-collapse-item__header {
					border-bottom: 1px solid white;
				}
				.el-icon-arrow-right:before {
					content: '';
					display: inline-block;
					width: 6px;
					height: 6px;
					border-top: 1px solid #656565;
					border-right: 1px solid #656565;
					transform: rotate(45deg);
					-webkit-transform: rotate(50deg);
					position: absolute;
					right: 40/100rem;
				}
			}
			.box03 {
				font-size: 14px;
				ul {
					li {
						/* border-bottom: 1px solid gainsboro;*/
						width: 100%;
						height: 110/100rem;
						line-height: 110/100rem;
						position: relative;
						span:nth-child(2) {
							padding-left: 35/100rem;
						}
						span:nth-child(3) {
							position: absolute;
							left: 360/100rem;
						}
						span:nth-child(4) {
							position: absolute;
							right: 40/100rem;
							top: 50/100rem;
						}
						span:nth-child(4) {
							content: '';
							display: inline-block;
							width: 6px;
							height: 6px;
							border-top: 1px solid #656565;
							border-right: 1px solid #656565;
							transform: rotate(45deg);
							-webkit-transform: rotate(50deg);
						}
					}
				}
			}
			
			
			
			
            
            
            
			
		}
	}
</style>