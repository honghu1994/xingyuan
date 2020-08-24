<template>
	<div class="daiban">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>待办事项</h1>

		</header>

		<nav>
			<ul>
				<li :class="{active:type=='a'}" @click="page('a')">资产</li>
				<li :class="{active:type=='b'}" @click="page('b')">交易</li>
				<li :class="{active:type=='c'}" @click="page('c')">合同</li>
				<li :class="{active:type=='d'}" @click="page('d')">财务</li>
				<li :class="{active:type=='e'}" @click="page('e')">证照</li>
				<li :class="{active:type=='f'}" @click="page('f')">请假</li>
			</ul>
		</nav>

		<section>
			<!--资产-->
			<div class="tabe1" v-if="type=='a'">
				<div class="assets-item" @click="goNavAssetsDetail(item.PROC_INST_ID_,item.ID_)" v-for="item in assetsList" :key="item.PROC_INST_ID_">
					<div style="border-bottom: 1px solid #ddd;padding-left:20px;padding-bottom:6px;">
						<p><span>审批用户:</span>{{item.INITATOR}}</p>
						<p><span>流程名称:</span>{{item.PNAME_}}</p>
						<p><span>当前节点(代办人):</span>{{item.ASSIGNEE_}}</p>
						<p><span>当前任务:</span>{{item.NAME_}}</p>
						<p><span>创建时间:</span>{{item.CREATE_TIME_ | dateFormat}}</p>
					</div>
					<div class="btn">
						<van-button icon="manager" type="info" size="small" @click.stop="delegateBtn(item.ID_)">委派</van-button>
						<van-button icon="edit" type="info" size="small" @click.stop="handleBtn(item.PROC_INST_ID_,item.ID_,item.ASSIGNEE_,item.NAME_,item.PNAME_)">办理</van-button>
					</div>
				</div>
			</div>
             <!--交易-->
			<div class="tabe1" v-if="type=='b'">
				<div class="assets-item" @click="goNavAssetsDetail(item.PROC_INST_ID_,item.ID_)" v-for="item in transactionList" :key="item.PROC_INST_ID_">
					<div style="border-bottom: 1px solid #ddd;padding-left:20px;padding-bottom:6px;">
						<p><span>审批用户:</span>{{item.INITATOR}}</p>
						<p><span>流程名称:</span>{{item.PNAME_}}</p>
						<p><span>当前节点(代办人):</span>{{item.ASSIGNEE_}}</p>
						<p><span>当前任务:</span>{{item.NAME_}}</p>
						<p><span>创建时间:</span>{{item.CREATE_TIME_ | dateFormat}}</p>
					</div>
					<div class="btn">
						<van-button icon="manager" type="info" size="small" @click.stop="delegateBtn(item.ID_)">委派</van-button>
						<van-button icon="edit" type="info" size="small" @click.stop="handleBtn(item.PROC_INST_ID_,item.ID_,item.ASSIGNEE_,item.NAME_,item.PNAME_)">办理</van-button>
					</div>
				</div>
			</div>
			 <!--合同-->
			<div class="tabe1" v-if="type=='c'">
				<div class="assets-item" @click="goNavAssetsDetail(item.PROC_INST_ID_,item.ID_)" v-for="item in contractList" :key="item.PROC_INST_ID_">
					<div style="border-bottom: 1px solid #ddd;padding-left:20px;padding-bottom:6px;">
						<p><span>审批用户:</span>{{item.INITATOR}}</p>
						<p><span>流程名称:</span>{{item.PNAME_}}</p>
						<p><span>当前节点(代办人):</span>{{item.ASSIGNEE_}}</p>
						<p><span>当前任务:</span>{{item.NAME_}}</p>
						<p><span>创建时间:</span>{{item.CREATE_TIME_ | dateFormat}}</p>
					</div>
					<div class="btn">
						<van-button icon="manager" type="info" size="small" @click.stop="delegateBtn(item.ID_)">委派</van-button>
						<van-button icon="edit" type="info" size="small" @click.stop="handleBtn(item.PROC_INST_ID_,item.ID_,item.ASSIGNEE_,item.NAME_,item.PNAME_)">办理</van-button>
					</div>
				</div>
			</div>

             <!--财务-->
			<div class="tabe1" v-if="type=='d'">
				<div class="assets-item" @click="goNavAssetsDetail(item.PROC_INST_ID_,item.ID_)" v-for="item in FinanceList" :key="item.PROC_INST_ID_">
					<div style="border-bottom: 1px solid #ddd;padding-left:20px;padding-bottom:6px;">
						<p><span>审批用户:</span>{{item.INITATOR}}</p>
						<p><span>流程名称:</span>{{item.PNAME_}}</p>
						<p><span>当前节点(代办人):</span>{{item.ASSIGNEE_}}</p>
						<p><span>当前任务:</span>{{item.NAME_}}</p>
						<p><span>创建时间:</span>{{item.CREATE_TIME_ | dateFormat}}</p>
					</div>
					<div class="btn">
						<van-button icon="manager" type="info" size="small" @click.stop="delegateBtn(item.ID_)">委派</van-button>
						<van-button icon="edit" type="info" size="small" @click.stop="handleBtn(item.PROC_INST_ID_,item.ID_,item.ASSIGNEE_,item.NAME_,item.PNAME_)">办理</van-button>
					</div>
				</div>
			</div>
			 <!--证照-->
			<div class="tabe1" v-if="type=='e'">
				<div class="assets-item" @click="goNavAssetsDetail(item.PROC_INST_ID_,item.ID_)" v-for="item in licenceList" :key="item.PROC_INST_ID_">
					<div style="border-bottom: 1px solid #ddd;padding-left:20px;padding-bottom:6px;">
						<p><span>审批用户:</span>{{item.INITATOR}}</p>
						<p><span>流程名称:</span>{{item.PNAME_}}</p>
						<p><span>当前节点(代办人):</span>{{item.ASSIGNEE_}}</p>
						<p><span>当前任务:</span>{{item.NAME_}}</p>
						<p><span>创建时间:</span>{{item.CREATE_TIME_ | dateFormat}}</p>
					</div>
					<div class="btn">
						<van-button icon="manager" type="info" size="small" @click.stop="delegateBtn(item.ID_)">委派</van-button>
						<van-button icon="edit" type="info" size="small" @click.stop="handleBtn(item.PROC_INST_ID_,item.ID_,item.ASSIGNEE_,item.NAME_,item.PNAME_)">办理</van-button>
					</div>
				</div>
			</div>
			<!--请假-->
			<div class="tabe1" v-if="type=='f'">
				
				<div class="assets-item" @click="goNavAssetsDetail(item.PROC_INST_ID_,item.ID_)" v-for="item in leaveList" :key="item.PROC_INST_ID_">
					<div style="border-bottom: 1px solid #ddd;padding-left:20px;padding-bottom:6px;">
						<p><span>审批用户:</span>{{item.INITATOR}}</p>
						<p><span>流程名称:</span>{{item.PNAME_}}</p>
						<p><span>当前节点(代办人):</span>{{item.ASSIGNEE_}}</p>
						<p><span>当前任务:</span>{{item.NAME_}}</p>
						<p><span>创建时间:</span>{{item.CREATE_TIME_ | dateFormat}}</p>
					</div>
					<div class="btn">
						<van-button icon="manager" type="info" size="small" @click.stop="delegateBtn(item.ID_)">委派</van-button>
						<van-button icon="edit" type="info" size="small" @click.stop="handleBtn(item.PROC_INST_ID_,item.ID_,item.ASSIGNEE_,item.NAME_,item.PNAME_)">办理</van-button>
					</div>
				</div>
			</div>
		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				type: 'a',
				name:this.$store.state.loginInfo.sessionVal.uSERNAME,
				assetsList:[],//资产
				contractList:[],//合同
				transactionList:[],//交易
				FinanceList:[],//财务
				licenceList:[],//证照
				leaveList:[],//请假
				typeName:'assets',
				flowName:''
			}
		},
		methods: {
			delegateBtn(id){//委派
				this.$router.push({path:'/xiaoxi/invitation',query:{id:id}})
			},
			handleBtn(id,ID_,name,task,flowName){//办理
				this.$router.push({path:'/xiaoxi/assetsHandle',query:{id:id,ID:ID_,name:name,task:task,type:this.type,flowName:flowName}})
			},
			getPendingApproval(){ 
				this.$http.post('app_module2/getPendingApproval',{USERNAME:this.name,MARK:this.typeName}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						if(res.data.data.status == 'Assets'){ //资产
							this.assetsList = res.data.data.varList
						}else if(res.data.data.status == 'transaction'){ //交易
							this.transactionList = res.data.data.varList
						}else if(res.data.data.status == 'contract'){ //合同
							this.contractList = res.data.data.varList
						}else if(res.data.data.status == 'Finance'){ //财务
							this.FinanceList = res.data.data.varList
						}else if(res.data.data.status == 'licence'){ //证照
							this.licenceList = res.data.data.varList
							// this.flowName = res.data.data.varList
						}else if(res.data.data.status == 'licence'){ //证照
							this.licenceList = res.data.data.varList
							// this.flowName = res.data.data.varList
						}else if(res.data.data.status == 'leave'){ //请假
							this.leaveList = res.data.data.varList
							// this.flowName = res.data.data.varList
						}
					}
				})
			},
			hui1() {
				this.$router.go(-1);
			},
			on1() {
				this.$router.push('/xiangxi1');
			},
			//切换面板
			page(val) {
				this.type = val;
				if(val == 'a'){
					this.typeName = 'assets'
					this.getPendingApproval()
				}else if(val == 'b'){
					this.typeName = 'transaction'
					this.getPendingApproval()
				}else if(val == 'c'){
					this.typeName = 'contract'
					this.getPendingApproval()
				}else if(val == 'd'){
					this.typeName = 'finance'
					this.getPendingApproval()
				}else if(val == 'e'){
					this.typeName = 'licence'
					this.getPendingApproval()
				}else if(val == 'f'){
					this.typeName = 'leave'
					this.getPendingApproval()
				}
			},
			goNavAssetsDetail(id,ID_){
				this.$router.push({path:'/xiaoxi/navAssetsDetail',query:{id:id,ID:ID_}})
			}
		},
		mounted(){
			this.getPendingApproval()
		}
	}
</script>

<style lang="less">
	.daiban{

		header {
			width: 100%;
			height: 118/100rem;
			background: rgb(111, 119, 254);
			position: fixed;
			top: 0;
			left: 0;
			color: white;
			line-height: 124/100rem;
			z-index: 100;
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
			position: fixed;
			z-index: 999;
			background: white;
			top: 118/100rem;
			font-size: 11px;

			margin-left: -8/100rem;
			padding-left: -20/100rem;
			font-weight: lighter;

			ul {
				display: flex;
				justify-content: space-between;
				height:80/100rem;
				width: 100%;
				li {
					text-align: center;
					font-size: 14px;
					flex:1;
				}
			}
		}
		.active{
			color: blue;
			border-bottom: 1px solid blue;
		}
		section{
			padding-top:2.1rem;
			font-size: 14px;

		}
		.assets-item{
			padding-top: 10px;
			// padding-bottom: 10px;

			// padding-left: 10px;
			p{
				line-height: 26px;
				color: #666;
				span{
					color: #333;
				}
			}
			.btn{
				display: flex;
				justify-content: space-between;
				padding:0 40px;
				margin-top:10px;
			}
		}
		.el-dialog{
			width: 90%;
		}

	}
</style>
