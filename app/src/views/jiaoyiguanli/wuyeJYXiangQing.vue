<template>
	<div class="wuyeJYXiangQing">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>详情</h1>
		</header>

		<section>
			<div class="tabe1">
				<h1>申请单位信息</h1>
				<ul>
					<li>
						<span>股份公司名称：</span>
						<span>{{detailsData.unit_name}}</span>
					</li>
					<li>
						<span>银行名称：</span>
						<span>{{detailsData.bank_name}}</span>
					</li>
					<li>
						<span>银行账号：</span>
						<span>{{detailsData.bank_account}}</span>
					</li>
				</ul>
			</div>
			<div class="tabe1">
				<h1>资产基本信息</h1>
				<ul>
					<li>
						<span>资产编号：</span>
						<span>{{detailsData.asset_number}}</span>
					</li>
					<li>
						<span>资产名称：</span>
						<span>{{detailsData.name_assets}}</span>
					</li>
					<li>
						<span>资产类别：</span>
						<span>{{detailsData.assets_category}}</span>
					</li>
					<li>
						<span>建筑面积：</span>
						<span>{{detailsData.builtup_area}}m²</span>
					</li>
					<li>
						<span>交易面积：</span>
						<span>{{detailsData.transaction_area}}m²</span>
					</li>

				</ul>
			</div>
			<div class="tabe1">
				<h1>交易方案</h1>
				<ul>
					<li>
						<span>业态要求：</span>
						<span>{{detailsData.business_form_requirements}}</span>
					</li>
					<li>
						<span>交易底价：</span>
						<span>{{detailsData.bottom_price}}万元/年</span>
					</li>
					<li>
						<span>合同履约保证金：</span>
						<span>{{detailsData.margin_yuan}}</span>
					</li>
					<li>
						<span>原承租方优先权：</span>
						<span>{{detailsData. original_lessee}}有</span>
					</li>
					<li>
						<span>免租金：</span>
						<span>{{detailsData.duty_free_period}}12个月</span>
					</li>
					<li>
						<span>品名：</span>
						<span>{{detailsData.item}}出租</span>
					</li>
					<li>
						<span>交易方式：</span>
						<span>{{detailsData.transaction_mode}}竞价</span>
					</li>
				</ul>
			</div>
			<div class="tabe1">
				<h1>承租方信息</h1>
				<ul>
					<li>
						<span>承租人名称：</span>
						<span>{{detailsData.lessee_name}}</span>
					</li>
					<li>
						<span>承租人证件号：</span>
						<span>{{detailsData.lessee_certificate_no}}</span>
					</li>
					<li>
						<span>所诉行业：</span>
						<span>{{detailsData.lndustry}}</span>
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
				id:this.$route.query.id,
				detailsData:{}
			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			getFindAppPropertyTransaction(){
				this.$http.post('app_module2/findAppPropertyTransactionByid',{project_id:this.id}).then(res=>{
					if(res.data.code == 200){
						this.detailsData = res.data.data.pd
						console.log()
					}
				})
			}

		},
		components:{
		},
		mounted(){
			this.getFindAppPropertyTransaction()
		}
	}
</script>

<style lang="less">
	.wuyeJYXiangQing {
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
				text-align: center;
				font-size: 20px;
				font-weight: normal;
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
			.tabe1 {
				h1 {
					font-size: 16px;
					font-weight: normal;
					padding-left: 30/100rem;
				}
				ul {
					font-size: 13px;
					li {
						width: 100%;
						height: 55/100rem;
						line-height: 55/100rem;
						padding-left: 45/100rem;
						display: flex;
						/*position: relative;*/
						span {
							display: block;
						}
						span:nth-child(1) {
							padding-left: 30/100rem;
						}
						span:nth-child(2) {
							/*position: absolute;
							left: 280/100rem;*/
							padding-left: 10/100rem;
						}
					}
				}
			}
			div {
				margin-top: 30/100rem;
			}
			div:nth-child(1) {
				border-bottom: 2px solid gainsboro;
			}
			div:nth-child(2) {
				border-bottom: 2px solid gainsboro;
			}
			div:nth-child(3) {
				border-bottom: 2px solid gainsboro;
			}
		}
	}
	.scroll-detail-content{
      overflow: hidden;
      position: absolute;
      top: 0.9rem;
      bottom: 40px;
      left:0;
      right:0;
    //   border-top: 1px solid #ddd;
      	padding:10px 10px;
  	}
</style>