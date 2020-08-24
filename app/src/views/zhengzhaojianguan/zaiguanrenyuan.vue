<template>
	<div class="zaiguanrenyuan">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>证照监管</h1>
		</header>

		<section>
			<div class="tabe1">
				<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            		<van-list v-model="loading" :finished="finished" finished-text="没有更多数据了" @load="onLoad">    	
						<div class="item" @click="goLicenceDetail(item.licence_personnel_code)" v-for="(item,index) in inChargeList" :key="index">
							<p>
								<span>{{item.name}}</span>
								<span>{{item.post}}</span>
							</p>
							<p>
								<span>{{item.contact_number}}</span>
								<span></span>
							</p>
							<p>
								<span>{{item.torganization_name}}</span>
								<span>{{item.company_name}}</span>
							</p>
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
				inChargeList: [],
				nowpage: 0,
				torganization_id: this.$store.state.loginInfo.sessionVal.organization_id,
				isShowMessage:false,
				pagesCount:1,
				// vant
				loading: false,   //是否处于加载状态
				finished: false,  //是否已加载完所有数据
				isLoading: false,   //是否处于下拉刷新状态

			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},

			goLicenceDetail(id) {
				this.$router.push({
					path: '/xiangqing02',
					query: {
						id: id
					}
				});
			},
			onLoad(){
				this.getInChargeList()
			},
			onRefresh(){
				this.isLoading = false;
			},
			getInChargeList() {
				this.loading = true
				console.log(this.torganization_id)
				this.nowpage = this.nowpage + 1
				this.$http.post('app_Module3/inChargeList', {
					nowpage: this.nowpage,
					torganization_id: this.torganization_id
				}).then(res => {
					// console.log(res)
					if(res.data.code == 200) {
						// this.inChargeList = res.data.data.inChargeList
						// console.log(this.inChargeList)
						this.inChargeList.push(...res.data.data.inChargeList)
						this.pagesCount = res.data.data.page.pageCount
						this.loading = false;   //数据请成功后
                        if(this.nowpage >=this.pagesCount){
                            this.finished = true;
                        }
					}
				})
			},
		},
		mounted() {
			this.getInChargeList()
		},
	}
</script>

<style lang="less">
	.zaiguanrenyuan {
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
			// width: 100%;
			// position: absolute;
			// top: 118/100rem;
			// background: rgba(242, 242, 242);
			// overflow: auto;
			.tabe1 {
				// ul {
					// margin-top: 20/100rem;
					color: black;
					margin-bottom: 60px;
					margin-top:40px;
					.item {
						height: 200/100rem;
						background: white;
						padding-left: 40/100rem;
						margin-top: 20/100rem;
						padding-bottom: 15/100rem;
						p:nth-child(1) {
							font-size: 16px;
							padding-top: 40/100rem;
							span:nth-child(2) {
								padding-left: 60/100rem;
								color: gray;
							}
						}
						p:nth-child(2) {
							font-size: 14px;
							color: gray;
							padding-top: 40/100rem;
							position: relative;
							span:nth-child(2) {
								position: absolute;
								right: 80/100rem;
								top:50/100rem;
								color: black;
								content: '';
								display: inline-block;
								width: 8px;
								height: 8px;
								border-top: 1px solid #656565;
								border-right: 1px solid #656565;
								transform: rotate(45deg);
								-webkit-transform: rotate(50deg);
							}
						}
						p:nth-child(3) {
							border-top: 1px solid gray;
							font-size: 14px;
							color: gray;
							padding-top: 30/100rem;
							position: relative;
							top: 20/100rem;
							span:nth-child(2) {
								position: absolute;
								right: 80/100rem;
								color: rgba(111, 119, 254);
							}
						}
					}
				// }
			}
		}
	}
	.scroll-content{
      overflow: hidden;
      position: absolute;
      top: 1.18rem;
      bottom: 50px;
      left:0;
      right:0;
      border-top: 1px solid #ddd;
      padding:0 10px;

  	}
</style>