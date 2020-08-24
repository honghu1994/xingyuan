<template>
	<div class="lingqu">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>申领证照</h1>
		</header>
		<nav>
			<ul>
				<li :class="{active:type=='a'}" @click="page('a')">证照申领</li>
				<li :class="{active:type=='b'}" @click="page('b')">证照领取/证照归还</li>
			</ul>
		</nav>

		<section>
			<!--证照申领-->
			<div class="tabe1" v-if="type=='a'">
				<ul>
					<li class="item" style="">
						<span>使用人：</span>
						<span>
							<el-input	
								@input="searchKey"				
                               placeholder="请输入内容"
                               v-model.trim="searchVal"
                               clearable>
                            </el-input>
						</span>
						<div class="search-list" v-if="isShowList">
							<p @click="selectSearchVal(item.personnel_name,item.licence_personnel_code)" v-for="item in searchKeyValList" :key="item.licence_personnel_id">{{item.personnel_name}}</p>
						</div>
					</li>
					<li class="item">
						<span>证照类型：</span>
						<span>
							<el-select v-model="certificationType" placeholder="请选择" @change="selectOne">
								<el-option
									v-for="item in certificationTypeArr"
									:key="item.value"
									:label="item.label"
									:value="item.license_number">
								</el-option>
							</el-select>
						</span>
					</li>
					<li class="item">
						<span>证照编号：</span>
						<p style="font-size:14px;color:#666;">{{certificationType}}</p>
						<!-- <span>
							<el-input
                               placeholder="请输入内容"
                               v-model="input3"
                               clearable>
                            </el-input>
						</span> -->
					</li>
					<li class="item">
						<span>领取日期：</span>
						<el-date-picker v-model="receiveDate" type="date" placeholder="选择日期">
						</el-date-picker>
					</li>
				</ul>
				<div class="time">
					<div class="block">
						<span class="demonstration">离深时间:</span>
						<el-date-picker v-model="l_time" type="date" placeholder="选择日期">
						</el-date-picker>
					</div>

					<div class="block">
						<span class="demonstration">返深时间:</span>
						<el-date-picker v-model="r_time" type="date" placeholder="选择日期" @change="backTime">
						</el-date-picker>
					</div>
				</div>
				<p class="wen">
					<el-input type="textarea" v-model="textareaVal" :rows="4" placeholder="请输入假理由(最多输入125字)" maxlength="125">
					</el-input>
				</p>
				<p class="fu">
					<!-- <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList3">
						<el-button size="small" type="primary">点击上传</el-button>
						<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload> -->
					<upload-file @uploadImageData = 'uploadImageData'></upload-file>
				</p>
				<!-- <button class="button01" @click="certificationApplicationBtn">提交</button> -->
				<el-button
					type="primary"
					style='width:90%; margin-top:20px;margin-left:5%;'
					@click="certificationApplicationBtn"
					v-loading.fullscreen.lock="fullscreenLoading">
					提交
				</el-button>
			</div>
			<!--证照领取/证照归还-->
			<div class="tabe2" v-if="type=='b'">
				<!-- <scroll
					class="scroll-licenceReceive-content"
					ref="scroll"
				> -->
					<div v-for="item in licenceReceiveList" :key="item.licence_id">
							<div class="top">
								<h1>{{item.company_name}}</h1>
								<span >{{item.approval_time}}</span>
							</div>
							<ul>
								<li>
									<span v-if="item.operation_status == 'receive'">证照申领</span>
									<span v-if="item.operation_status == 'return'">证照归还</span>
								</li>
								<li>
									<span>使用人：</span>
									<span>{{item.personnel_name}}</span>
								</li>
								<li>
									<span>证照名：</span>
									<span>{{item.licence_name}}</span>
								</li>
								<li>
									<span>证照类型：</span>
									<span>{{item.license_number}}</span>
								</li>
								<li>
									<span>使用时间：</span>
									<span>{{item.start_time}}</span>
								</li>
								<li>
									<span>结束日期：</span>
									<span>{{item.end_time}}</span>
								</li>
								<li>
									<span>
									<div class="block">
										<span class="demonstration">领取日期：</span>
										<!-- <el-date-picker v-model="value3" type="date" placeholder="选择日期">
											</el-date-picker> -->
										<span>{{item.collection_date}}</span>
									</div>
									</span>
								</li>
								<li>
									<span>{{item.approval_status}}</span>
								</li>
						</ul>
						<div class="zz">
							<button v-if="item.operation_status == 'receive'" @click="receiveBtn(item.lincence_logs_id,item.licence_id)">领取</button>
							<button v-else style="background:#ccc">领取</button>
							<button v-if="item.operation_status == 'return'" @click="returnBtn(item.lincence_logs_id,item.licence_id)">归还</button>
							<button v-else style="background:#ccc">归还</button>
						</div>
					</div>
				<!-- </scroll> -->
			</div>
	</section>
	<!-- <div class="mask" v-if="isShowList" style="position:fixed;top:50px;left:0;bottom:0;right:0;z-index:200;background:rgba(0,0,0,0.6)"></div> -->
	</div>
</template>

<script>
	import { Toast } from 'vant';
	import UploadFile from '@/common/UploadFile'
	import Scroll from '@/common/Scroll'
	export default {
		data() {
			return {
				//文本框1
				searchVal: '',//搜索关键字
				receiveDate:'',//领取时间
				l_time: '',//离深时间
				r_time: '',//返深时间
				input4: '',
				searchKeyValList:[],//搜索关键字列表
				//输入框2
				textareaVal: '',
				//时间插件
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				value1: '',
				value2: '',
                value3: '',
				isShowList:false,
				//切换面板
				type: 'a',
				torganization_id:this.$store.state.loginInfo.sessionVal.organization_id,
				currentUser:this.$store.state.loginInfo.sessionVal.uSERNAME,
				certificationTypeArr: [],//证照类型list
				certificationType:'',//选中证照编号
				select_licence_id:'',//证照类型id
				select_license_name:'',//证照类型name
				select_people_code:'',//选中人的code
				licenceReceiveList:[],//证照领取
				imageUrl:[],
				fullscreenLoading:false,

			}
		},
		components:{
			UploadFile,Scroll
		},
		
		methods: {
			returnBtn(logs_id,licence_id){//归还
				this.$http.post('app_Module3/licence_Return',{
					lincence_logs_id:logs_id,
					licence_id:licence_id,
					currentUser:this.currentUser}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.getLicenceReceive()
					}

				})
			},
			receiveBtn(logs_id,licence_id){//领取
				this.$http.post('app_Module3/licence_Receive',{
						lincence_logs_id:logs_id,
						licence_id:licence_id,
						currentUser:this.currentUser,

					}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.getLicenceReceive()
					}

				})
			},
			uploadImageData(data){
				this.imageUrl = data
				// console.log(this.imageUrl)
			},
			backTime(val){
				let le = this.fomateDate(this.l_time)
				let re = this.fomateDate(this.r_time)
				let leArr = le.split('-')
				let reArr = re.split('-')
				if(Number(reArr[0])>=Number(leArr[0])){
					if(Number(reArr[1])>=Number(leArr[1])){
						if(Number(reArr[2])<Number(leArr[2])){
							Toast('您所选择时间有问题');
							this.r_time =''
							return
						}
					}else{
						Toast('您所选择时间有问题');
						this.r_time =''
						return
					}
				}else{
					Toast('您所选择时间有问题');
					this.r_time =''
					return
				}
			},
			certificationApplicationBtn(){//提交按钮
			console.log(this.searchVal)
				if(!this.select_people_code){
					Toast('使用人不能为空');
					return
				}else if(!this.select_license_name){
					Toast('证照类型不能为空');
					return
				}else if(!this.receiveDate){
					Toast('领取时间不能为空');
					return
				}else if(!this.l_time){
					Toast('离深时间不能为空');
					return
				}else if(!this.r_time){
					Toast('返深时间不能为空');
					return
				}
				this.fullscreenLoading=true
				this.receiveDate = this.fomateDate(this.receiveDate)
				this.l_time = this.fomateDate(this.l_time)
				this.r_time = this.fomateDate(this.r_time)
				this.$http.post('app_Module3/licenceApply',{
					use_people:this.searchVal,
					user:this.select_people_code,
					license_code:this.select_licence_id,
					certificate_name:this.select_license_name,
					collection_date:this.receiveDate,
					start_time:this.l_time,
					end_time:this.r_time,
					cause:this.textareaVal,
					imageData:JSON.stringify(this.imageUrl),
					currentUser:this.currentUser,
					torganization_id:this.torganization_id
				}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						if(res.data.code == 200){
							this.fullscreenLoading=false
							Toast.success(res.data.msg);
						}
					}else if(res.data.code == 100){
						this.fullscreenLoading=false
						Toast.fail(res.data.msg);
					}else if(res.data.code == 0){
						this.fullscreenLoading=false
						Toast.fail(res.data.msg);
					}
				})
			},
			selectOne(val){//证照类型选中证照编号自动获取
				this.certificationTypeArr.forEach(item =>{
					if(item.license_number == val){
						// console.log(item)
						this.select_licence_id = item.value
						this.select_license_name = item.license_name
					}
				})
			},
			selectSearchVal(val,code){//搜索key值所显示list，点击选择
				this.searchVal = val
				this.isShowList = false;
				this.select_people_code = code
				this.$http.post('app_Module3/findlicenceByPersonnel',{personnel_code:code}).then(res=>{
					if(res.data.code == 200){
						this.certificationTypeArr = res.data.data.findlicenceByPersonnel
					}
				})
			},
			searchKey(){//搜索关键字
				if(!this.searchVal) {
					this.isShowList = false;
					return
				}
				this.$http.post('app_Module3/selectPersonnel',{torganization_id:this.torganization_id, personnel_name:this.searchVal}).then(res=>{
					// console.log(res)
					if(res.data.code == 200){
						this.isShowList = true;
						this.searchKeyValList = res.data.data.selectPersonnel
					}
				})
			},
			fomateDate(time){
				if (!time) return ''
				let t = new Date(time).getTime();
				let data = new Date(t)
				let y = data.getFullYear()
				let m = data.getMonth()+1
				let d = data.getDate()
				let fmt = y+'-'+m+'-'+d
				return fmt
			},
			//输入框2
			handleChange: function() {

			},

			//切换面板
			page(val) {
				this.type = val;
				if(val == 'b'){
					this.getLicenceReceive()
				}
			},
			getLicenceReceive(){//证照领取列表
				this.$http.post('app_Module3/licenceReceive',{torganization_id:this.torganization_id}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.licenceReceiveList = res.data.data.licenceReceive
					}
				})
			},

			hui1() {
				this.$router.go(-1);
			},

		}
	}
</script>

<style lang="less">
	.lingqu {
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
		nav {
			/*border: 1px solid red;*/
			width: 100%;
			height: 90/100rem;
			line-height: 90/100rem;
			position: absolute;
			top: 118/100rem;
			font-size: 11px;
			margin-left: -8/100rem;
			padding-left: -20/100rem;
			font-weight: lighter;
			ul {
				li {
					list-style-type: none;
					border-bottom: 1px solid white;
					width: 260/100rem;
					height: 80/100rem;
					line-height: 80/100rem;
					float: left;
					margin-left: 70/100rem;
					text-align: center;
					font-size: 15px;
				}
				li:nth-child(2) {
					margin-left: 80/100rem;
					text-align: center;
				}
			}
		}
		.active {
			color: blue;
			border-bottom: 1px solid blue;
		}
		section {
			/*border: 1px solid black;*/
			width: 100%;
			// height: 1400/100rem;
			position: absolute;
			top: 218/100rem;
			overflow: auto;
			margin-bottom: 1rem;
			.tabe1 {
				ul {
					.item {
						border-bottom: 1px solid gainsboro;
					/*	width: 100%;*/
						height: 100/100rem;
						line-height: 100/100rem;
						padding-left: 30/100rem;
						display: flex;
						// position:relative;
						.search-list{
							box-sizing: border-box;
							position:absolute;
							width: 100%;
							left:0;
							top:1rem;
							z-index: 30;
							background:#fff;
							border:2px solid #999;
							border-top:none;
							p{
								line-height:0.7rem;
								// border: 1px solid blue;
								color: #000;
								padding-left:30px;
								border-bottom:1px solid #f1f1f1;
								font-size: 14px;
							}
						}
						span:nth-child(1) {
							font-size: 14px;
						}
						span:nth-child(2) {
							.el-input__inner {
								border-radius: 8/100rem;
								border: 1px solid #DCDFE6;
								font-size: 14px;
								height: 70/100rem;
								line-height: 70/100rem;
								// width: 60%;
							}
						}
					}
				}
				.time {
					.block {
						border-bottom: 1px solid #DCDFE6;
					/*	width: 100%;*/
						height: 90/100rem;
						line-height: 80/100rem;
						padding-left: 30/100rem;
						padding-top: 20/100rem;
						.demonstration {
							font-size: 14px;
						}
						.el-input__inner {
							height: 70/100rem;
							line-height: 70/100rem;
							// width: 68%;
						}
					}
				}
				.wen {
					.el-textarea {
						width: 95%;
						margin-left: 2.5%;
						margin-top: 20/100rem;
						font-size: 14px;
						resize: none;
					}
				}
				.fu {
					border: 1px solid #DCDFE6;
					width: 92%;
					// height: 330/100rem;
					border-radius: 8/100rem;
					margin-left: 2.5%;
					margin-top: 10/100rem;
					padding-top: 20/100rem;
					padding-left: 20/100rem;
					li {
						border-bottom: none;
						height: 60/100rem;
						line-height: 60/100rem;
					}
				}
				.button01 {
					width: 90%;
					height: 70/100rem;
					// line-height: 70/100rem;
					margin-left: 5%;
					background: rgb(64, 158, 255);
					margin-top: 30/100rem;
					color: white;
					font-size: 15px;
					border: none;
				}
			}
			.tabe2 {
				.top {
					display: flex;
					justify-content: space-between;
					h1 {
						padding-top: 30/100rem;
						margin-left: 30/100rem;
						font-size: 16px;
						font-weight: normal;
					}
					span:nth-child(2) {
						padding-top: 33/100rem;
						// padding-left: 100/100rem;
						font-size: 16px;
						padding-right:10px;
					}
				}
				ul {
					padding-top: 0/100rem;
					padding-left: 20/100rem;
					font-size: 15px;
					border-bottom: 2px solid gainsboro;
					li {
						padding-top: 25/100rem;
					}
					li:nth-child(1) {
						color: blue;
					}
					li:nth-child(7){
						.el-input__inner {
							height: 70/100rem;
							line-height: 70/100rem;
							// width: 68%;
						}
					}
					li:nth-child(8) {
						color: cadetblue;
					}
				}
				.zz {
					margin-left: 14%;
					button {
						width: 150/100rem;
						height: 50/100rem;
						background: rgb(64, 158, 255);
						border: none;
						color: white;
						margin-top: 20/100rem;
						margin-left: 80/100rem;
						font-size: 14px;
				
					}
				}
			}
		}
		.el-input__inner{
			height:34px;
			line-height: 34px!important;
		}
	}
	.scroll-licenceReceive-content{
      overflow: hidden;
      position: absolute;
      top: 1.18rem;
      bottom: 0px;
      left:0;
      right:0;
      border-top: 1px solid #ddd;
      padding:0 10px;

  	}
</style>