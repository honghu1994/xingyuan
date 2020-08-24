<template>
	<div class="hetong">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>合同管理</h1>
		</header>

		<section>
			<div class="tabe1">
				<h1>深圳市大新实业股份有限公司</h1>
				<span v-show="false">{{contractList}}</span>
				<ul>
					<li @click="contractListClick(item.typeName)" v-for="item in contractList1" :key="item.id">
						<span><img src="@/assets/img/icon_012.png"></span>
						<span>{{item.typeName}}</span>
						<span>{{item.count}}</span>
						<span></span>
					</li>
				</ul>
				<ul>
					<li @click="contractListClick(item.typeName)" v-for="item in contractList2" :key="item.id">
						<span><img src="@/assets/img/icon_01.png"></span>
						<span>{{item.typeName}}</span>
						<span>{{item.count}}</span>
						<span></span>
					</li>
				</ul>
				<ul>
					<li @click="contractListClick(item.typeName)" v-for="item in contractList3" :key="item.id">
						<span><img src="@/assets/img/icon_011.png"></span>
						<span>{{item.typeName}}</span>
						<span>{{item.count}}</span>
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
				nowPage: 1,
				contractList: [],
				contractList1: [],
				contractList2: [],
				contractList3: []
			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},

			contractListClick(name) {
				this.$router.push({
					path: '/hetongliebiao',
					query: {
						contractType: name
					}
				});
			},
			getContractListPage() {
				this.$http.post('contractManagement/getContractTypeList', {
					nowPage: this.nowPage
				}).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						// let contractData = res.data.data
						this.contractList = res.data.data
						this.contractList.filter((item, index) => {
							if(item.typeName == '写字楼租赁') {
								this.contractList1[0] = item
							} else if(item.typeName == '厂房租赁') {
								this.contractList1[1] = item
							} else if(item.typeName == '商铺租赁') {
								this.contractList1[2] = item
							} else if(item.typeName == '住宅租赁') {
								this.contractList1[3] = item
							}

							if(item.typeName == '农田租赁') {
								this.contractList2[0] = item
							} else if(item.typeName == '鱼塘租赁') {
								this.contractList2[1] = item
							} else if(item.typeName == '土地出租') {
								this.contractList2[2] = item
							} else if(item.typeName == '土地出让') {
								this.contractList2[3] = item
							}
							if(item.typeName == '协作服务') {
								this.contractList3[0] = item
							} else if(item.typeName == '投资') {
								this.contractList3[1] = item
							}

						})
					}
				})
			}
		},
		mounted() {
			this.getContractListPage()
		}
	}
</script>

<style lang="less">
	.hetong {
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
			top: 128/100rem;
			overflow: auto;
		    // margin-bottom: 2rem;
			.tabe1 {
				h1 {
					color: rgba(111, 119, 254);
					font-size: 17px;
				    font-weight: normal;
					padding-top: 10/100rem;
					padding-bottom: 10/100rem;
					padding-left: 20/100rem;
				}
				ul {
					li {
						/*border-bottom: 1px solid red;*/
						line-height: 90/100rem;
						padding-left: 30/100rem;
						font-size: 16px;
						/*font-weight: normal;*/
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
						  /*padding-left: 140/100rem;*/
							position: absolute;
							left: 400/100rem;
						}
						span:nth-child(4) {
							position: absolute;
							right: 100/100rem;
							top: 30/100rem;
							content: '';
							display: inline-block;
							width: 6px;
							height: 6px;
							border-top: 1px solid black;
							border-right: 1px solid black;
							transform: rotate(45deg);
							-webkit-transform: rotate(50deg);
						}
					}
				}
			}
		}
	}
</style>