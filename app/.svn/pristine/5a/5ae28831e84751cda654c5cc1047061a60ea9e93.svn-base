<template>
	<div class="caigouXiangQing">
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
						<span>{{purchaseDetail.purchasing_unit}}</span>
					</li>
					<li>
						<span>法定代表人：</span>
						<span>{{purchaseDetail.legal_representative}}</span>
					</li>
					<li>
						<span>法人联系方式：</span>
						<span>{{purchaseDetail.legal_person_contact}}</span>
					</li>
					<li>
						<span>项目联系人：</span>
						<span>{{purchaseDetail.project_contacts}}</span>
					</li>
					<li>
						<span>项目联系人联系方式：</span>
						<span>{{purchaseDetail.project_contacts_phone}}</span>
					</li>
					<li>
						<span>品目：</span>
						<span>{{purchaseDetail.item}}</span>
					</li>
					<li>
						<span>申报日期：</span>
						<span>{{purchaseDetail.declaration_date}}</span>
					</li>
					<li>
						<span>是否评定分离：</span>
						<span>{{purchaseDetail.assessment_separation}}</span>
					</li>
					<li>
						<span>采购方式：</span>
						<span>{{purchaseDetail.procurement_methods}}</span>
					</li>
					<li>
						<span>供应商：</span>
						<span>{{purchaseDetail.recommended_suppliers}}</span>
					</li>
					<li>
						<span>数量：</span>
						<span>{{purchaseDetail.number}}</span>
					</li>
					<li>
						<span>控制单位：</span>
						<span>{{purchaseDetail.control_unit_price}}</span>
					</li>
					<li>
						<span>控制金额：</span>
						<span>{{purchaseDetail.controlled_amount}}</span>
					</li>
					<li>
						<span>交易代理机构：</span>
						<span>{{purchaseDetail.transaction_agency}}</span>
					</li>
					<li>
						<span>项目名称：</span>
						<span>{{purchaseDetail.entry_name}}</span>
					</li>
					<li>
						<span>备注：</span>
						<span>{{purchaseDetail.remarks}}</span>
					</li>
				</ul>
				
			</div>
			<!-- <div class="tabe1">
				<h1>资产基本信息</h1>
				<ul>
					<li>
						<span>资产编号：</span>
						<span>xxxxxxxx</span>
					</li>
					<li>
						<span>资产名称：</span>
						<span>大新大厦12层</span>
					</li>
					<li>
						<span>资产类别：</span>
						<span>写字楼</span>
					</li>
					<li>
						<span>建筑面积：</span>
						<span>1900</span>
					</li>
					<li>
						<span>交易面积：</span>
						<span>1900</span>
					</li>

				</ul>
			</div>
			<div class="tabe1">
				<h1>交易方案</h1>
				<ul>
					<li>
						<span>液态要求：</span>
						<span>鼓励发展楼</span>
					</li>
					<li>
						<span>交易底价：</span>
						<span>100万元/年</span>
					</li>
					<li>
						<span>合同履约保证金：</span>
						<span></span>
					</li>
					<li>
						<span>原承租方优先权：</span>
						<span>有</span>
					</li>
					<li>
						<span>免租金：</span>
						<span>12个月</span>
					</li>
					<li>
						<span>品名：</span>
						<span>出租</span>
					</li>
					<li>
						<span>交易方式：</span>
						<span>竞价</span>
					</li>
				</ul>
			</div>
			<div class="tabe1">
				<h1>承租方信息</h1>
				<ul>
					<li>
						<span>承租人名称：</span>
						<span>xx生物科技有限公司</span>
					</li>
					<li>
						<span>承租人证件号：</span>
						<span>123456789</span>
					</li>
					<li>
						<span>所诉行业：</span>
						<span>生物科技</span>
					</li>
				</ul>
			</div> -->
			<div class="attchment" style="padding-left:20px;">
				<p style="font-size:14px;">民主表决</p>
				<p style="font-size:14px;">附件</p>
			</div>
		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				id:this.$route.query.id,
				purchaseDetail:{}
			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			getCargoServiceDetails(){
				this.$http.post('app_module2/getCargoServiceDetails',{goods_purchase_id:this.id}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.purchaseDetail = res.data.data.pd
					}
				})
			}

		},
		mounted(){
			this.getCargoServiceDetails()
		}
	}
</script>

<style lang="less">
	.caigouXiangQing {
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
							// padding-left: 30/100rem;
							/*width:130px;*/
							// border: 1px solid red;
							text-align: left;
						}
						span:nth-child(2) {
							/*position: absolute;
							left: 280/100rem;*/
							padding-left: 10/100rem;
							color: #666;	
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
</style>