<template>
	<div class="zaiguanzhengzhaoXQ">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>详情</h1>
		</header>

		<section>
			<div class="tabe1" v-if="type=='a'">
				<ul>
					<li>
						<span>单位名称：</span>
						<span>{{perIsLicenceData.company_name}}</span>
					</li>
					<li>
						<span>姓名：</span>
						<span>{{perIsLicenceData.personnel_name}}</span>

					</li>
					<li>
						<span>职位：</span>
						<span>{{perIsLicenceData.post}}</span>

					</li>
					<li>
						<span>证照名称：</span>
						<span>{{licenceData.license_name}}</span>
					</li>
					<li>
						<span>证照编号：</span>
						<span>{{licenceData.license_number}}</span>
					</li>
					<li>
						<span>证照类型：</span>
						<span>{{licenceData.licence_type}}</span>
					</li>
					<li>
						<span>证照有效期：</span>
						<span>{{licenceData.certificate_valid}}</span>
					</li>
					<li class="last">
						<span>领取状态：</span>
						<span>{{licenceData.receiving_status}}</span>
						<span>领取时间：</span>
						<span>{{licenceData.collection_date}}</span>
					</li>
				</ul>
				<p class="bottom">
					<span>附件：</span>
					<span>
					   <!--<el-upload
                          class="upload-demo"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :on-change="handleChange"
                          :file-list="fileList3">
                           <el-button size="small" type="primary">点击上传</el-button>
                           <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                         </el-upload>-->
					</span>
				</p>
				<ul class="zz">
					<h2>领取记录</h2>
					<li v-for="(item,index) in receiveJournalData" :key="index">
						<span>使用时间：</span>
						<span>{{item.start_time}}</span>
						<span>归还时间：</span>
						<span>{{item.personnel_name}}</span>
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
				perIsLicenceData:{},
				licenceData:{},
				receiveJournalData:[],
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
			getInLicenceDetail(){
				this.$http.post('app_Module3/inLicenceDetail',{licence_id:this.id}).then(res=>{
					if(res.data.code == 200){
						this.perIsLicenceData = res.data.data.selectPerIsLicence
						this.licenceData = res.data.data.selectLicence[0]
						this.receiveJournalData = res.data.data.licenceReceiveJournal
					}
				})
			},
			

		},
		mounted(){
			this.getInLicenceDetail()
		}
	}
</script>

<style lang="less">
	.zaiguanzhengzhaoXQ {
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
			height: 1480/100rem;
			position: absolute;
			top: 118/100rem;
			overflow: auto;
			margin-bottom: 1.1rem;
			.tabe1 {
				ul {
					padding-top: 30/100rem;
					li {
						/*border-bottom: 1px solid red;*/
						/*width: 100%;*/
						height: 50/100rem;
						line-height: 50/100rem;
						padding-left: 30/100rem;
						padding-top: 15/100rem;
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
					.last{
						position: relative;
						span:nth-child(3){
							position: absolute;
							left: 45%;
						}
						span:nth-child(4){
							position: absolute;
							left: 70%;
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
						border: 1px solid gainsboro;
						border-radius: 8/100rem;
						width: 550/100rem;
						height: 400/100rem;
						position: absolute;
						left: 130/100rem;
						top: 40/100rem;
						/*.upload-demo {
							padding-top: 0.3rem;
							padding-left: 0.3rem;
							
							ul{
								padding-top: 0/100rem;
								li{
									height: 60/100rem;
									line-height: 60/100rem;
								}
							}
						}*/
						
					}
				}
				.zz {
					position: absolute;
					top: 1020/100rem;
					h2 {
						font-size: 15px;
						padding-left: 30/100rem;
						font-weight: normal;
					}
					li {
						padding-left: 50/100rem;
						font-size: 13px;
						color: gray;
						span:nth-child(3) {
							padding-left: 100/100rem;
						}
					}
				}
			}
		}
	}
</style>