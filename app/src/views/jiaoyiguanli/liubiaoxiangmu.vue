<template>
	<div class="liubiaoxiangmu">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>流标项目</h1>
		</header>

		<section>
			<div class="tabe1">
				<ul>
					<li>
						<p>
							<span>南山区后海路名苑居后海办公楼8楼物业招租项目</span>
							<span>已结束</span>
						</p>
						<div class="box">
							深圳市国有免税商品（集团）有限公司委托深圳联合产权交易
						</div>
						<p>
							<span>南头街道</span>
							<span>深圳市大新实业股份有限公司</span>
						</p>
					</li>
					
					<li>
						<p>
							<span>南山区后海路名苑居后海办公楼8楼物业招租项目</span>
							<span>已结束</span>
						</p>
						<div class="box">
							深圳市国有免税商品（集团）有限公司委托深圳联合产权交易
						</div>
						<p>
							<span>南头街道</span>
							<span>深圳市大新实业股份有限公司</span>
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
				// transactionList:[]
			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			getTransactionInformationList(){//成交公告
				this.$http.post('transactionInformation/getTransactionInformationListPage',{nowPage:1}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						// this.transactionList = res.data.data.data
					}
				})
			},
		},
		mounted(){
			// this.getTransactionInformationList()
		}
	}
</script>

<style lang="less">
	.liubiaoxiangmu {
		header {
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
			/*border: 1px solid black;*/
			width: 100%;
			height: 1000/100rem;
			position: fixed;
			top: 118/100rem;
			background: rgb(233, 233, 233);
			.tabe1 {
				h1 {
					color: rgba(145, 151, 254);
					font-size: 14px;
					font-weight: lighter;
					padding-left: 30/100rem;
				}
				ul {
					margin-top: 10/100rem;
					li {
						border-bottom: 1px solid gainsboro;
						/*width: 100%;*/
						height: 250/100rem;
						padding-left: 30/100rem;
						margin-top: 10/100rem;
						font-size: 14px;
						background: white;
						p {
							padding-top: 20/100rem;
							position: relative;
							font-size: 14px;
							span:nth-child(2) {
								position: absolute;
								right: 20/100rem;
								color: red;
								font-size: 13px;
							}
						}
						p:nth-child(3){
						
							font-size: 16px;
							position: relative;
							color: gray;
							span:nth-child(2){
							position: absolute;
							left: 240/100rem;
							color: blue;
							font-size: 16px;
							}
						}
						
						.box {
							position: relative;
							padding-top: 20/100rem;
							width: 85%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							font-size: 13px;
							border-bottom:1px solid gainsboro;
							padding-bottom: 25/100rem;
						}
					}
				}
			}
		}
	}
</style>