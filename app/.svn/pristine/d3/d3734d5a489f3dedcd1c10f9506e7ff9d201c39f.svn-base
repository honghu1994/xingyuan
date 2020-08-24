<template>
	<div class="gongchengJYXQ">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>详情</h1>
		</header>

		<section>
			<div class="tabe1">
				<h1>申请单位信息</h1>
				<ul>
					<li>
						<span>申请单位：</span>
						<span>{{engineeringDetails.applicants}}</span>
					</li>
					<li>
						<span>法人代表</span>
						<span>{{engineeringDetails.legal_representative}}</span>
					</li>
					<li>
						<span>法人联系方式：</span>
						<span>{{engineeringDetails.legal_representative_phone}}</span>
					</li>
					<li>
						<span>项目联系人：</span>
						<span>{{engineeringDetails.project_leader}}</span>
					</li>
					<li>
						<span>项目联系人方式：</span>
						<span>{{engineeringDetails.project_leader_phone }}</span>
					</li>
				</ul>
			</div>
			<div class="tabe1">
				<h1>项目内容</h1>
				<ul>
					<li>
						<span>项目名称：</span>
						<span>{{engineeringDetails.entry_name }}</span>
					</li>
					<li>
						<span>项目地点：</span>
						<span>{{engineeringDetails.project_site }}</span>
					</li>
					<li>
						<span>拟发包项目工程概况：</span>
						<span>{{engineeringDetails.general_situation_engineering }}</span>
					</li>
					<li>
						<span>发包方式：</span>
						<span>{{engineeringDetails.packing_method }}</span>
					</li>
					<li>
						<span>拟发包合同计价方式：</span>
						<span>{{engineeringDetails.proposed_contract }}</span>
					</li>
					<li>
						<span>拟发包项目承包金额：</span>
						<span>{{engineeringDetails.contract_amount }}万元</span>
					</li>
					<li>
						<span>工期：</span>
						<span>{{engineeringDetails.construction_period }}</span>
					</li>
					<li>
						<span>承包商资质要求：</span>
						<span>{{engineeringDetails.contractor_qualification_requirements }}</span>
					</li>
					<li>
						<span>项目质量要求：</span>
						<span>{{engineeringDetails.project_quality_requirements }}</span>
					</li>
					<li>
						<span>项目类别：</span>
						<span>{{engineeringDetails.item_category }}</span>
					</li>
					<li>
						<span>品目：</span>
						<span>{{engineeringDetails.item }}</span>
					</li>
					<li>
						<span>交易保证金：</span>
						<span>{{engineeringDetails.trade_kicker }}万元</span>
					</li>
					<li>
						<span>申报资料：</span>
						<span>{{engineeringDetails.declaration_materials }}</span>
					</li>

				</ul>
			</div>
			<div class="tabe1">
				<h1>交易方案</h1>
				<ul>
					<li>
						<span>附件：</span>
						<!--<span>
							<el-upload
						class="upload-demo"
						action="https://jsonplaceholder.typicode.com/posts/"
						:on-change="handleChange"
						:file-list="fileList3">
						<el-button size="small" type="primary">点击上传</el-button>
						<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
						</el-upload>
						</span>-->
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

				//上传文件
				fileList3: [{
					name: 'food.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
					status: 'finished'
				}, {
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
					status: 'finished'
				}],
				id:this.$route.query.id,
				engineeringDetails:{}
			}
		},
		components:{
		},
		methods: {
			//上传文件
			handleChange(file, fileList) {
				this.fileList3 = fileList.slice(-3);
			},

			hui1() {
				this.$router.go(-1);
			},
			getFindEngineeringTransactionByid(){
				this.$http.post('app_module2/findEngineeringTransactionByid',{engineering_transaction_id:this.id}).then(res=>{
					if(res.data.code == 200){
						this.engineeringDetails = res.data.data.pd
					}
				})
			}

		},
		mounted(){
			this.getFindEngineeringTransactionByid()
		}
	}
</script>

<style lang="less">
	.gongchengJYXQ {
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
			/*height: 1400/100rem;*/
			position: absolute;
			top: 118/100rem;
			overflow: auto;
			margin-bottom: 1.4rem;
			.tabe1 {
				h1 {
					font-size: 16px;
					font-weight: normal;
					padding-left: 30/100rem;
				}
				ul {
					font-size: 13px;
					li {
						/*width: 100%;*/
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
				/*span:nth-child(2) {
					border: 1px solid gainsboro;
					border-radius: 8/100rem;
					width: 530/100rem;
					height: 380/100rem;
					position: absolute;
					left: 150/100rem;
					top: 1240/100rem;
					.upload-demo {
						margin-top: 0.1rem;
						padding-top: 0.0rem;
						padding-left: 0.2rem;
						border: 1px solid white;
					
						div:nth-child(2) {
							border: 1px solid white;
						}
						ul {
							padding-top: 0/100rem;
							li {
								height: 65/100rem;
								line-height: 60/100rem;
							}
						}
						.el-button {
							padding-left: 10/100rem;
							}
					}
				}*/
				
				
				
				
			}
		}
	}
	.scroll-gc-content{
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