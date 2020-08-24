<template>
	<div class="gongchengJY">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>工程交易</h1>
		</header>
		<section>
			<div class="tabe1">
				<ul>
					<li @click="zou3(item.engineering_transaction_id)" v-for="item in engineeringList" :key="item.engineering_transaction_id">
						<p>
							<span>交易类型:</span>
							<span>工程交易</span>
							<span></span>
						</p>
						<p>
							<span>项目名称：</span>
							<span>{{item.entry_name}}</span>
						</p>
						<p>
							<span>项目地点：</span>
							<span>{{item. project_site}}</span>
						</p>
						<p>
							<span>发包方式：</span>
							<span>{{item.packing_method}}</span>
						</p>
						<p>
							<span>项目类别：</span>
							<span>{{item.item_category}}</span>
						</p>
						<p>
							<span>品目：</span>
							<span>{{item.item}}</span>
						</p>
						<p>
							<span>你发包项目承包金额：</span>
							<span>{{item.contract_amount}}万元</span>
						</p>
						<p>
							<span>工期：</span>
							<span>{{item.construction_period}}天</span>
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
				engineeringList:[],
				nowPage:1
			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			zou3(id) {
				this.$router.push({path:'/gongchengJYXQ',query:{id:id}});
			},
			getEngineeringTransactionList(){//工程交易
				this.$http.post('app_module2/gitEngineeringTransactionList',{torganization_id:'D440305',nowPage:this.nowPage}).then(res=>{
					if(res.data.code == 200){
						this.engineeringList = res.data.data.dataList
					}
				})
			}

		},
		mounted(){
			this.getEngineeringTransactionList()
		}
	}
</script>

<style lang="less">
	.gongchengJY {
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
							padding-top: 10/100rem;
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
						p:nth-child(8) {
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