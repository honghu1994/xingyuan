<template>
	<div class="wuyeJY">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>物业交易</h1>
		</header>
		<section>
			<div class="tabe1">
				<ul>
					<li @click="zou(item.project_id)" v-for="item in appPropertyTransaction" :key="item.project_id">
						<p>
							<span>{{item.assets_name}}</span>
							<span></span>
							<span></span>
						</p>
						<p>物业交易</p>
						<p>交易方案</p>
						<p>
							<span>品目：</span>
							<span>{{item.item}}</span>
						</p>
						<p>
							<span>交易方式：</span>
							<span>{{item.transaction_mode}}</span>
						</p>
						<p class="last">
							<span>内容：</span> {{item.content}}
						</p>
						<p class="tt">
							<span>已通过：</span>
							<span>{{item.processing_time}}</span>
							<span>办理人：</span>
							<span>{{item.transactor}}</span>
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
				appPropertyTransaction:[],
				nowPage:1
			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			zou(id) {
				this.$router.push({path:'/wuyeJYXiangQing',query:{id:id}});
			},
			getAppPropertyTransaction(){
				this.$http.post('app_module2/gitAppPropertyTransaction',{torganization_id:'D440305',nowPage:this.nowPage}).then(res=>{
					if(res.data.code == 200){
						this.appPropertyTransaction = res.data.data.dataList
						console.log()
					}
				})
			},
		},
		mounted(){
			this.getAppPropertyTransaction()
		}
	}
</script>

<style lang="less">
	.wuyeJY {
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
						p:nth-child(2) {
							color: blue;
						}
						.last {
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							width: 95%;
							border-bottom: 1px solid gainsboro;
							padding-bottom: 10/100rem;
							span:nth-child(2) {
								
							}
						}
						.tt{
							padding-bottom: 20/100rem;
						    position: relative;
							span:nth-child(3){
								position: absolute;
								left: 410/100rem;
							}
							span:nth-child(4){
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