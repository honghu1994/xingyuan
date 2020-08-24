<template>
	<div class="jitiyongdiXQ">
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
						<span>{{collectiveDetails.applicants }}</span>
					</li>
					<li>
						<span>银行账户名：</span>
						<span>{{collectiveDetails.bank_account}}</span>
					</li>
					<li>
						<span>银行账号：</span>
						<span>{{collectiveDetails.unit_account }}</span>
					</li>
					<li>
						<span>项目联系人：</span>
						<span>{{collectiveDetails.project_contacts }}</span>
					</li>
					<li>
						<span>项目联系人电话：</span>
						<span>{{collectiveDetails.project_contacts_phone }}</span>
					</li>
				</ul>
			</div>
			<div class="tabe1">
				<h1>项目内容</h1>
				<ul>
					<li>
						<span>项目名称：</span>
						<span>{{collectiveDetails.entry_name }}</span>
					</li>
					<li>
						<span>项目地点：</span>
						<span>{{collectiveDetails.project_site }}</span>
					</li>
					<li>
						<span>项目概况：</span>
						<span>{{collectiveDetails.project_summary }}</span>
					</li>
					<li>
						<span>品目：</span>
						<span>{{collectiveDetails.item }}</span>
					</li>
				</ul>
			</div>
			<div class="tabe1">
				<h1>资产数据</h1>
				<ul>
					<li>
						<span>资产名称：</span>
						<span>{{collectiveDetails.name_assets }}</span>
					</li>
					<li>
						<span>类别：</span>
						<span>{{collectiveDetails.assets_category }}</span>
					</li>
					<li>
						<span>资产编号：</span>
						<span>{{collectiveDetails.asset_number }}</span>
					</li>
					<li>
						<span>资产状态：</span>
						<span>{{collectiveDetails.asset_status }}</span>
					</li>
					<li>
						<span>资产原值：</span>
						<span>{{collectiveDetails.original_value_assets }}</span>
					</li>
					<li>
						<span>交易面积：</span>
						<span>{{collectiveDetails.transaction_area }}</span>
					</li>
					<li>
						<span>交易前评估：</span>
						<span>{{collectiveDetails.pretransaction_valuation }}</span>
					</li>
					
					<li class="kk">
						<span>附件：</span>
						<span>
							<el-upload
                          class="upload-demo"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :on-change="handleChange"
                          :file-list="fileList3">
                           <el-button size="small" type="primary">点击上传</el-button>
                           <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                         </el-upload>
						</span>
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
				collectiveDetails:{},
				id:this.$route.query.id

			}
		},
		methods: {
			//上传文件
			handleChange(file, fileList) {
				this.fileList3 = fileList.slice(-3);
			},

			hui1() {
				this.$router.go(-1);
			},
			getFindCollectiveLandTransactionById(){//集体用地交易
				this.$http.post('app_module2/findCollectiveLandTransactionById',{collective_id:this.id}).then(res=>{
					if(res.data.code == 200){
						this.collectiveDetails = res.data.data.pd
					}
				})
			}

		},
		mounted(){
			console.log(this.id)
			this.getFindCollectiveLandTransactionById()
		}
	}
</script>

<style lang="less">
	.jitiyongdiXQ {
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
				.kk{
					span:nth-child(2) {
					border: 1px solid gainsboro;
					border-radius: 8/100rem;
					width: 530/100rem;
					height: 380/100rem;
					position: absolute;
					left: 150/100rem;
					top: 1130/100rem;
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
								height: 60/100rem;
								line-height: 60/100rem;
							}
						}
						.el-button {
							padding-left: 10/100rem;
							
							
							}
					}
				}
			}
				
				
			}
		}
	}
</style>