<template>
	<div class="hetongXiangQing">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>合同详情</h1>
		</header>
		<nav class="nav">
			<ul>
				<li :class="{active:type=='a'}" @click="page('a')">基本信息</li>
				<li :class="{active:type=='b'}" @click="page('b')">收款项目</li>
			</ul>
		</nav>
		<section>
			<!--基本信息-->
			<div class="tabe1" v-if="type=='a'">
				<h1>{{contractBasicDetail.contractName}}</h1>
				<ul>
					<li>
						<span>合同编号：</span>
						<span>{{contractBasicDetail.contractNumber}}</span>
					</li>
					<li>
						<span>合同类型：</span>
						<span>{{contractBasicDetail.contractType}}</span>
					</li>
					<li>
						<span>开始日期：</span>
						<span>{{contractBasicDetail.startDate}}</span>
					</li>
					<li>
						<span>结束日期：</span>
						<span>{{contractBasicDetail.endDate}}</span>
					</li>
					<li>
						<span>合同标总标的：</span>
						<span>{{contractBasicDetail.contractName}}</span>
					</li>
					<li>
						<span>合同标的物：</span>
						<span>{{contractBasicDetail.generalObjective}}</span>
					</li>
					<li>
						<span>面积：</span>
						<span>{{contractBasicDetail.rentalArea}}</span>
					</li>
				</ul>
				<div>
					<p>
						<span>甲方：</span>
						<span>{{contractBasicDetail.partyaName}}</span>
					</p>
					<p>
						<span>地址：</span>
						<span>{{contractBasicDetail.partyaAddress}}</span>
					</p>
					<p>
						<span>证件号：</span>
						<span>{{contractBasicDetail.partyaCertificateNumber}}</span>
					</p>
					<p>
						<span>电话：</span>
						<span>{{contractBasicDetail.partyaTelephone}}</span>
					</p>
				</div>
				<div>
					<p>
						<span>乙方：</span>
						<span>{{contractBasicDetail.partybName}}</span>
					</p>
					<p>
						<span>地址：</span>
						<span>{{contractBasicDetail.partybAddress}}</span>
					</p>
					<p>
						<span>证件号：</span>
						<span>{{contractBasicDetail.partybCertificateNumber}}</span>
					</p>
				</div>
				<p class="bottom">
					<span>附件：</span>
					<span>
					   <!-- <el-upload
                          class="upload-demo"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :on-change="handleChange"
                          :file-list="fileList3">
                           <el-button size="small" type="primary">点击上传</el-button>
                           <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                         </el-upload> -->
					</span>

				</p>

			</div>

			<!--收款项目-->
			<div class="tabe2" v-if="type=='b'">
				<select>
					<option>租金</option>
					<option>年租金</option>
					<option>物业租金</option>
					<option>递增幅度</option>
					<option>二房东统计表</option>
				</select>
				<!-- <div class="top">
					<p>
						最新1期<span v-if="collectionItemDetail.currentReceivables == null || collectionItemDetail.currentReceivables == 0">未收款</span>
						<span v-else>已收款</span>
						（<span>{{collectionItemDetail.startDate | dateFormat}} </span>~<span> {{collectionItemDetail.endDate | dateFormat}}</span>）
					</p>
					<div>
						<ul>
							<li>{每期应收款}</li>
							<li>{{collectionItemDetail.receivablesEachPeriod}}元</li>
							<li v-if="collectionItemDetail.currentReceivables == null || collectionItemDetail.currentReceivables == 0">未收款</li>
							<li v-else>已收款</li>
							<span>></span>
						</ul>

					</div>
				</div> -->

				<ul class="bottom">
					<li>
						<span><img  src="../../assets/img/icon_02.png"></span>
						<span>递增</span>
						<span class="iconfont icon-jiantou"></span>
					</li>
					<li>
						<span>收款名称：</span>
						<span>{{collectionItemDetail && collectionItemDetail.beneficiaryName || ''}}</span>
					</li>
					<li>
						<span>收款单位：</span>
						<span>{{collectionItemDetail && collectionItemDetail.nameReceivingAgency || ''}}</span>
					</li>
					<li>
						<span>付费周期算法：</span>
						<!-- <span>{{collectionItemDetail.beneficiaryName}}</span> -->
					</li>
					<li>
						<span>付费周期：</span>
						<!-- <span>{{collectionItemDetail.beneficiaryName}}</span> -->
					</li>
					<li>
						<span>付费基数：</span>
						<span>{{collectionItemDetail && collectionItemDetail.paymentAmountAlgorithm || ''}}元</span>
					</li>
					<li>
						<span>付款金额算法：</span>
						<!-- <span>{{collectionItemDetail.beneficiaryName}}</span> -->
					</li>
					<li>
						<span>递增周期性算法：</span>
						<span>{{collectionItemDetail && collectionItemDetail.paymentBase || ''}}</span>
					</li>

					<li>
						<span>递增周期：</span>
						<span>{{collectionItemDetail && collectionItemDetail.paymentCycle || ''}}期</span>
					</li>
					<li>
						<span>地政幅度：</span>
						<!-- <span>{{collectionItemDetail.beneficiaryName}}%</span> -->
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
				//切换面板
				type: 'a',
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
				contractBasicDetail:{},
				collectionItemDetail:{}
			};

		},
		methods: {
			//上传文件
			handleChange(file, fileList) {
				this.fileList3 = fileList.slice(-3);
			},
			hui1() {
				this.$router.go(-1);
			},
			//切换面板
			page(val) {
				this.type = val;
			},
			getContractDetailById(){
				this.$http.post('contractManagement/findById',{id:this.id}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.contractBasicDetail = res.data.data.basic
						this.collectionItemDetail = res.data.data.collectionItem
					}
				})
			}

		},
		mounted(){
			this.getContractDetailById()
		}
	}
</script>

<style lang="less">
	.hetongXiangQing {
    width:100%;
    box-sizing: border-box;
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
		nav {
			/*border: 1px solid red;*/
			width: 100%;
			height: 90/100rem;
			line-height: 90/100rem;
			position: absolute;
			top: 118/100rem;
			/*left:0;
			padding-left: -70/100rem;*/
			font-weight: lighter;
			&.nav{
        width: 100%;
				position: fixed;
				z-index: 999;
				background: #fff;
			}
			ul {
          width: 200%;
          height:70/100rem;

				li {
					list-style-type: none;
					border-bottom: 1px solid white;
					width: 160/100rem;
					height: 70/100rem;
					line-height: 70/100rem;
					float: left;
					text-align: center;
					margin-left: 140/100rem;
					font-size: 16px;

				}
			}
		}
		.active {
			color: blue;
			border-bottom: 1px solid blue;
		}
		section {
      box-sizing: border-box;
			/* border: 1px solid black;*/
			width: 100%;
			// height: 1480/100rem;
			position: absolute;
			top: 218/100rem;
      bottom: 50px;
			overflow: auto;
			.tabe1 {
				h1 {
					font-size: 16px;
					padding-left: 30/100rem;

				}
				ul {
					li {
            box-sizing: border-box;
						/*border-bottom: 1px solid red;*/
						width: 100%;
						height: 50/100rem;
						line-height: 50/100rem;
						padding-left: 30/100rem;
						font-size: 15px;
						display: flex;
						/*position: relative;*/
						span {
							display: block;
						}
						span:nth-child(2) {
							padding-left: 10/100rem;
						}
					}
				}
				div {
					padding-left: 30/100rem;
					padding-top: 30/100rem;
					font-size: 15px;
					p {
						padding-left: 30/100rem;
						padding-top: 15/100rem;
					}
					p:nth-child(1) {
						padding-left: 0/100rem;
						span:nth-child(2) {
							padding-left: 50/100rem;
						}
					}
				}
				.bottom {
					font-size: 15px;
					padding-top: 30/100rem;
					padding-left: 30/100rem;
					position: relative;
					span {
						display: block;
					}
					span:nth-child(2) {
						border: 1px solid gray;
						width: 550/100rem;
						height: 450/100rem;
						position: absolute;
						left: 130/100rem;
						top: 40/100rem;
					}
				}
			}
			//收款项目
			.tabe2 {
        box-sizing: border-box;
				background: rgba(243, 243, 243);
				// padding-bottom: 150/100rem;
        // overflow: hidden;
				select {
					width: 230/100rem;
					height: 80/100rem;
					font-size: 14px;
					margin-left: 260/100rem;
					border: none;
					background: rgba(243, 243, 243);

				}
				.top {
					width: 95%;
					height: 240/100rem;
					background: #007AFF;
					margin-left: 2%;
					p {
						color: white;
						font-size: 14px;
						text-align: center;
						padding-top: 35/100rem;
					}
					div {
						width: 85%;
						height: 80/100rem;
						line-height: 75/100rem;
						background: white;
						margin-left: 30/100rem;
						margin-top: 20/100rem;
						position: relative;
						ul {
							display: flex;
							justify-content: space-around;
							font-size: 15px;
						}
						span {
							position: absolute;
							right: -40/100rem;
							color: white;
						}
					}
				}
				.bottom {
					width: 95%;
					margin-left: 2.5%;
					margin-top: 20/100rem;
					background: white;
					font-size: 13px;

					img {
						width: 50/100rem;
						height: 50/100rem;
					}
					li {
						border: 1px solid gainsboro;
						height: 70/100rem;
						line-height: 80/100rem;
						span:nth-child(1) {
							padding-left: 30/100rem;
							color: gray;
						}
					}
					li:nth-child(1) {
						height: 110/100rem;
						line-height: 110/100rem;
						font-size: 16px;
						position: relative;
						span:nth-child(1) {
							position: absolute;
							top: 20/100rem;
						}
						span:nth-child(2) {
							padding-left: 110/100rem;
						}
						span:nth-child(3) {
							padding-left: 450/100rem;
						}
					}
				}
			}
		}
	}
</style>
