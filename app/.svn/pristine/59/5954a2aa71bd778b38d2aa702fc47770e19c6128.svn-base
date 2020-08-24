<template>
	<div class="huowufuwucaigou">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>货物服务采购</h1>
		</header>
		<section>
			<div class="tabe1">
				<ul>
					<li @click="zou2(item.goods_purchase_id)" v-for="item in cargoList" :key="item.goods_purchase_id">
						<p>
							<span>交易类型</span>
							<span>货物服务采购</span>
							<span></span>
						</p>
						<p>
							<span>品目：</span>
							<span>{{item.item}}</span>
						</p>
						<p>
							<span>名称：</span>
							<span>{{item.entry_name}}</span>
						</p>
						<p>
							<span>规格：</span>
							<span>{{item.specifications}}</span>
						</p>
						<p>
							<span>数量：</span>
							<span>{{item.number}}</span>
						</p>
						<p>
							<span>总价：</span>
							<span>{{item.total_price}}元</span>
						</p>
						<p class="tt">
							<span>已通过：</span>
							<span>{{item.transactor}}</span>
							<span>办理人：</span>
							<span>{{item.processing_time}}</span>
						</p>
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
				cargoList:[],
				id:this.$store.state.loginInfo.sessionVal.organization_id
			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			zou2(id) {
				this.$router.push({path:'/caigouXiangQing',query:{id:id}});
			},
			getCargoServiceList(){//货物服务采购
				this.$http.post('app_module2/gitCargoServiceList',{torganization_id:this.id,nowPage:1}).then(res=>{
					if(res.data.code == 200){
						this.cargoList = res.data.data.dataList
					}
				})
			}

		},
		mounted(){
			this.getCargoServiceList()
		}
	}
</script>

<style lang="less">
	.huowufuwucaigou {
		header {
			width: 100%;
			height: 118/100rem;
			background: rgb(111, 119, 254);
			z-index: 999;
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
			// height: 1400/100rem;
			position: absolute;
			top: 118/100rem;
			overflow: auto;
			background: rgba(242, 242, 242);
			.tabe1 {
				ul {
					margin-top: 0/100rem;
					margin-left: 0/100rem;
					li {
						margin-top: 15/100rem;
						padding-top: 20/100rem;
						padding-left: 20/100rem;
						font-size: 14px;
						position: relative;
						background: white;
						p {
							padding-top: 15/100rem;
						}
						p:nth-child(1) {
							padding-top: 20/100rem;
							span:nth-child(2) {
								padding-left: 10/100rem;
							}
							span:nth-child(3) {
								position: absolute;
								right: 40/100rem;
								

							content: '';
							display: inline-block;
							width: 6px;
							height: 6px;
							border-top: 1px solid  black;
							border-right: 1px solid black;
							transform: rotate(45deg);
							-webkit-transform: rotate(50deg);
							}
						}
						p:nth-child(6) {
							border-bottom: 1px solid gainsboro;
							padding-bottom: 10/100rem;
						}
						.tt {
							padding-bottom: 20/100rem;
							position: relative;
							span:nth-child(3) {
								position: absolute;
								left: 410/100rem;
							}
							span:nth-child(4) {
								position: absolute;
								left: 530/100rem;
							}
						}
					}
				}
			}
		}
	}
</style>