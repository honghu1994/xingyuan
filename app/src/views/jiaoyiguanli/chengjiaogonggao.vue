<template>
	<div class="chengjiaogonggao">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>成交公告</h1>
		</header>

		<section>
			<div class="tabe1">
				<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
					<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">  
						<div class="cfgg-content" @click="wu4(item.contractEnquiryId)" v-for="item in transactionList" :key="item.contractEnquiryId">
							<p>
								<span>{{item.contractName}}</span>
								<span>进行中</span>
							</p>
							<div class="box">
								<div>
									{{item.partyAName}}
								</div>
								<span>{{item.signingDate}}</span>
							</div>
						</div>
					</van-list>
            	</van-pull-refresh>
			</div>

		</section>
	</div>
</template>

<script>
	import Scroll from '@/common/Scroll'
	export default {
		data() {
			return {
				transactionList:[],
				nowPage:0,
				pagesCount:1,
				isShowMessage:false,
				// vant
				loading: false,   //是否处于加载状态
				finished: false,  //是否已加载完所有数据
				isLoading: false,   //是否处于下拉刷新状态
			}
		},
		components:{
			Scroll
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},

			wu4(id) {
					this.$router.push({path:'/chengjiaogonggaoXQ',query:{id:id}});
			},
			onLoad(){
            	this.getTransactionInformationList()
			},
			onRefresh(){
				// if(this.nowPage >this.pagesCount) {
				// 	this.isLoading = false;
				// 	return
				// }
				// setTimeout(()=>{
				// 	this.getTransactionInformationList()
				// },10)
				this.isLoading = false;
			},
			getTransactionInformationList(){//成交公告
				this.loading = true
				this.nowPage = this.nowPage + 1
				this.$http.post('transactionInformation/getTransactionInformationListPage',{nowPage:this.nowPage}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.transactionList.push(...res.data.data.data)
						this.pagesCount = res.data.data.pageUtil.pageCount
						this.loading = false;//数据请成功后
						if(this.nowPage >= this.pagesCount){
							this.finished = true;
						}
						// this.transactionList = res.data.data.data
						
					}
				})
			},
			loadMore(){
				// console.log('加载更多')
				console.log(this.nowPage)
				console.log(this.pagesCount)
				if( this.nowPage >= this.pagesCount ){
					this.isShowMessage = true
					return
				}
				this.getTransactionInformationList()
			},
		},
		mounted(){
			this.getTransactionInformationList()
		}
	}
</script>

<style lang="less">
	.chengjiaogonggao {
		header {
			position: fixed;
			left: 0;
			top: 0;
			z-index: 100;
			width: 100%;
			height: 118/100rem;
			background: rgb(111, 119, 254);
			top: 0;
			left: 0;
			color: white;
			font-size: 10px;
			font-family: "宋体";
			line-height: 124/100rem;
			h1 {
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
			margin-top:1.18rem;
			/*border: 1px solid black;*/
			width: 100%;
			// height: 1000/100rem;
			// position: fixed;
			// top: 118/100rem;
			background: rgb(233, 233, 233);
			.tabe1 {
				h1 {
					color: rgba(145, 151, 254);
					font-size: 14px;
					font-weight: lighter;
					padding-left: 30/100rem;
				}
				// ul {
				// 	margin-top: 10/100rem;
					.cfgg-content{
						border-bottom: 1px solid gainsboro;
						/*width: 100%;*/
						height: 70px;
						padding-left: 30/100rem;
						font-size: 14px;
						background: white;
						p {
							width: 100%;
							box-sizing: border-box;
							padding-top: 5px;
							position: relative;
							font-size: 14px;
							height: 30px;
							line-height: 30px;
							span:nth-child(1) {
								display: inline-block;
								width: 80%;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
								font-size: 15px;
								color: #000;
							}
							span:nth-child(2) {
								position: absolute;
								right: 20/100rem;
								color: #168ABD;
								font-size: 13px;
							}
						}
						.box {
							position: relative;
							color: #333;
							div {
								padding-top: 20/100rem;
								width: 75%;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								font-size: 13px;
							}
							span {
								display: block;
								position: absolute;
								top: 20/100rem;
								right: 20/100rem;
								font-size: 13px;
							}
						}
					}
				// }
			}
		}
	}
	.scroll-cjgg-content{
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