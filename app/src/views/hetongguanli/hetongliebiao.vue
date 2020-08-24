<template>
	<div class="hetongliebiao">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>合同列表</h1>
		</header>

		<section>
			<div class="nav">
				<select v-model='selectStatus' @change="selectStatusChange">
					<option value>筛选</option>
					<option value="1">南山办事处</option>
					<option value="2">南头办事处</option>
					<option value="3">西丽办事处</option>
					<option value="4">沙河办事处</option>
					<option value="5">蛇口办事处</option>
					<option value="6">招商办事处</option>
					<option value="7">粤海办事处</option>
					<option value="8">桃园办事处</option>
				</select>

			</div>
			<div style="margin-top:100px;">
				<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
					<van-list v-model="loading" :finished="finished" finished-text="没有更多数据了" @load="onLoad">   
						<div @click="contractDetail(item.contractId)" class="tabe1" v-for="(item) in contractList" :key="item.contractId">
							<h1>{{item.contractName}}</h1>
							<ul>
								<li>
									<span>甲方</span>
									<span>{{item.partyaName}}</span>
								</li>
								<li>
									<span>乙方</span>
									<span>{{item.partybName}}</span>
								</li>
							</ul>
							<div>
								<p>
									<span>合同编号：</span>
									<span>{{item.contractNumber}}</span>
									<span>合同类型：</span>
									<span style="color:rgba(127, 134, 254);">{{item.contractType}}</span>
								</p>
								<p>
									<span>签订日期：</span>
									<span>{{item.signingDate}}</span>
									<span>合同总标：</span>
									<span>{{item.generalObjective}}元</span>
								</p>
								<p>
									<span>终止日期：</span>
									<span style="color: red;">{{item.endDate}}</span>
								</p>
							</div>
						</div>
					</van-list>
        		</van-pull-refresh>
			</div>
		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: this.$route.query.contractType,
				nowPage: 0,
				contractList: [],
				pagesCount:1,
            	isShowMessage:false,
				selectStatus:'',
				// vant
				loading: false,   //是否处于加载状态
				finished: false,  //是否已加载完所有数据
				isLoading: false,   //是否处于下拉刷新状态
				}
		},
		
		mounted() {
			console.log(this.$route.query.contractType)
			this.getContractList()
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			contractDetail(id) {
				this.$router.push({
					path: '/hetongXiangQing',
					query: {
						id: id
					}
				});
			},
			
			selectStatusChange(){
				console.log(this.selectStatus)
				this.nowPage = 0
				this.contractList = []
				this.getContractList()
			},
			onLoad(){
				this.getContractList()
			},
			onRefresh(){
				this.isLoading = false;
			},
			getContractList() {
				this.loading = true
				this.nowPage = this.nowPage + 1
				this.$http.post('contractManagement/getContractListPage', {
					contractType: this.name,
					nowPage: this.nowPage,
          			jurisdictionId:this.selectStatus
				}).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						// this.contractList = res.data.data.data
						this.contractList.push(...res.data.data.data)
						this.pagesCount = res.data.data.pageUtil.pageCount
						this.loading = false;   //数据请成功后
                        if(this.nowPage >=this.pagesCount){
                            this.finished = true;
                        }
					}
				})
			}

		}
	}
</script>

<style lang="less">
	.hetongliebiao {
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
			// position: absolute;
			// top: 118/100rem;
			// overflow: auto;
			// margin-bottom: 2rem;
			
			.nav {
				/* border: 1px solid red;*/
				font-size: 11px;
				font-weight: lighter;
				padding-left: 30/100rem;
				position: absolute;
				z-index: 100;
				position: fixed;
				left: 0;
				top:1.18rem;
				background: #fff;
				select {
					width: 690/100rem;
					height: 60/100rem;
					background: rgba(242, 242, 242);
					margin-top: 20/100rem;
					border: none;
				}
			}
			.tabe1 {
				border-bottom: 1px solid gainsboro;
				width: 100%;
				min-height: 405/100rem;
				margin-left: 30/100rem;
				font-size: 13px;
				color: #333;
				padding-top: 10px;
				h1 {
					font-size: 16px;
					color: #000;
					font-weight:normal;
					width: 100%;
					box-sizing: border-box;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					padding-right:6px;
				}
				ul {
					li {
						padding-top: 20/100rem;
						display: flex;
						span:nth-child(1) {
							display: block;
							border: 1px solid rgba(194, 225, 238);
							width: 90/100rem;
							height: 40/100rem;
							line-height: 40/100rem;
							text-align: center;
							color: rgba(127, 134, 254);
						}
						span:nth-child(2) {
							padding-left: 15/100rem;

						}
					}
				}
				div {
					float: left;
					p:nth-child(1) {
						padding-top: 15/100rem;
						span:nth-child(3) {
							margin-left: 50/100rem;
						}
					}
					p:nth-child(2) {
						padding-top: 15/100rem;
						span:nth-child(3) {
							margin-left: 95/100rem;
						}
					}
					p:nth-child(3) {
						padding-top: 15/100rem;
					}
				}
			}
		}
	}
	.scroll-contract-content{
      overflow: hidden;
      position: absolute;
      top: 2rem;
      bottom: 50px;
      left:0;
      right:0;
      border-top: 1px solid #ddd;
      padding:0 10px;

  	}
</style>
