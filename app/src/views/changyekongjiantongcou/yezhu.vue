<template>
	<div class="yezhu">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>业主单位登记</h1>
		</header>

		<section>
			<h1>区国有资产监督管理局</h1>
			<ul>
				<li v-for="item in appStockCompanyList" :key="item.company_code" @click="goOwnerUnitDetails(item.company_code)">
					<h2>{{item.company_name}}</h2>
					<div style="color:#666;">
						<p>
							<span>统一社会信用代码：</span>
							<span>{{item.credit_code}}</span>
						</p>
						<p>
							<span>法人代表：</span>
							<span>{{item.legal_representative}}</span>
							<span>注册资本：</span>
							<span>{{item.registered_capital}}万元</span>
						</p>
						<p>
							<span>委托代理人：</span>
							<span>{{item.entrusted_agent}}</span>
							<span>联系电话：</span>
							<span>{{item.company_name}}</span>
						</p>
						<p>
							<span>地址：</span>
							<span>{{item.contact_number}}</span>
						</p>
					</div>
				</li>

				
			</ul>
		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				appStockCompanyList:[],
				nowPage:1
			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			getAppStockCompanyList(){
				this.$http.post('overallplanning/propertyTransaction/getOwnerUnitList',{nowPage:this.nowPage}).then(res=>{
					// console.log(res)
					if(res.data.code == 200){
						this.appStockCompanyList = res.data.data.dataList
					}
				})
			},
			goOwnerUnitDetails(id){
				this.$router.push({path:'/changyekongjian/ownerUnitDetails',query:{company_code:id}})
			}
		},
		mounted(){
			this.getAppStockCompanyList()
		}
	}
</script>

<style lang="less">
	.yezhu {
		
		header {
			width: 100%;
			height: 118/100rem;
			background: rgb(111, 119, 254);
			z-index: 9999;
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
			/*height: 1400/100rem;*/
			position: absolute;
			top: 118/100rem;
			overflow: auto;
			margin-bottom: 0.9rem;
			h1 {
				padding-top: 10/100rem;
				padding-left: 20/100rem;
				font-size: 13px;
				color: blue;
				font-weight: lighter;
				border-top: 5px solid gainsboro;
			}
			ul {
				li {
					width: 100%;
					// height: 355/100rem;
					padding-bottom:12px;
					border-bottom: 5px solid #eee;
					h2 {
						height: 50/100rem;
						padding-top: 30/100rem;
						padding-left: 20/100rem;
						font-size: 16px;
						font-weight: normal;
					}
					div {
						border-top: 1px solid gainsboro;
						width: 100%;
						// height: 280/100rem;
						font-size: 14px;
						font-weight: lighter;
						p {
							padding-top: 20/100rem;
							padding-left: 20/100rem;
						}
						p:nth-child(2) {
							span:nth-child(3) {
								margin-left: 80/100rem;
							}
						}
						p:nth-child(3) {
							span:nth-child(3) {
								margin-left: 50/100rem;
							}
						}
					}
				}
			}
		}
	}
</style>