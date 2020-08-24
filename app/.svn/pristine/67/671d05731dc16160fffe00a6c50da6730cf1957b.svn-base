<template>
	<div class="zhengzhao">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>证照监管</h1>
		</header>

		<section>
			<div class="tabe1">
				<h1>深圳市大新实业股份有限公司</h1>
				<ul>
					<li @click="hh()">
						<span><img src="@/assets/img/u13.png"></span>
						<span>在管人员</span>
						<span>{{inCount.inChargeCount}}</span>
						<span class="iconfont icon-jiantou"></span>
					</li>
					<li @click="hh2()">
						<span><img src="@/assets/img/u13.png"></span>
						<span>在管证照</span>
						<span>{{inCount.inLicenceCount}}</span>
						<span class="iconfont icon-jiantou"></span>
					</li>
					<li @click="hh3()">
						<span><img src="@/assets/img/u13.png"></span>
						<span>请假管理</span>
						<span></span>
						<span class="iconfont icon-jiantou"></span>
					</li>
					<li @click="hh4()">
						<span><img src="@/assets/img/u13.png"></span>
						<span>证照领取</span>
						<span></span>
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
				inCount:{}
			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			//切换面板
			page(val) {
				this.type = val;
			},
			//跳转
		    hh() {
			   this.$router.push('/zaiguanrenyuan');
     	   },
			hh2() {
				this.$router.push('/zaiguanzhengzhao');
     		},
     		
			hh3() {
				this.$router.push('/qingjiaguanli');
			},
			hh4() {
				this.$router.push('/lingqu');
			},
//
//			hh6() {
//				this.$router.push('/yujingdengji');
//			},
			getInCount(){
				this.$http.post('app_Module3/inCount').then(res=>{
					if(res.data.code == 200){
						this.inCount = res.data.data
					}
				})
			}

		},
		mounted(){
			this.getInCount()
		}
	}
</script>

<style lang="less">
	.zhengzhao {
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
			height: 1400/100rem;
			position: absolute;
			top: 118/100rem;
			overflow: auto;
			.tabe1 {
				h1 {
					color: rgba(111, 119, 254);
					font-size: 16px;
					padding-top: 30/100rem;
					padding-left: 30/100rem;
					font-weight: normal;
				}
				ul {
					margin-top: 40/100rem;
					li {
						/*border-bottom: 1px solid red;*/
						line-height: 100/100rem;
						padding-left: 50/100rem;
						font-size: 17px;
						display: flex;
						position: relative;
						span {
							display: block;
						}
						span:nth-child(1) {
							img {
								width: 50/100rem;
								height: 50/100rem;
							}
							padding-top: 10/100rem;
						}
						span:nth-child(2) {
							padding-left: 60/100rem;
						}
						span:nth-child(3) {
							padding-left: 100/100rem;
						}
						span:nth-child(4) {
							position: absolute;
							right: 100/100rem;
						}
					}
				}
			}
		}
	}
</style>