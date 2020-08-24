<template>
	<div class="yujingxinxi">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>预警信息</h1>

		</header>
		<article>
			<select v-model="value">
				<option value>全部</option>
				<option value="1">资产预警</option>
				<option value="2">财务预警</option>
				<option value="3">交易预警</option>
				<option value="4">证照预警</option>
			</select>
		</article>

		<section>
			<div  @click="xi(item.assetsId)"   class="box" id="Box" v-for="item in assetEarlyWarningList" :key="item.assetsId">
				<!-- <h1>{{item.contractName}}</h1> -->
				<ul>
					<li>
						<span>{{item.address}}</span>
					</li>
					<li>
						<span>合同名称:</span>
						<span>{{item.contractName}}</span>
					</li>
					<li>
						<span>合同编号:</span>
						<span>{{item.contractNumber}}</span>
					</li>
					<li>
						<span>截止时间:</span>
						<span style="color: red;">{{item.endDate}}</span>
					</li>
					<li>
						<span>资产预警</span>
						<span style="color:royalblue;">{{item.earlyWarningType}}</span>
						<span style="color:orange;" v-if="item.levels == 0 || item.levels == 3 ">黄色预警</span>
						<span style="color:orange;" v-if="item.levels == 1 ">红色预警</span>
						<span style="color:orange;" v-if="item.levels == 2 ">橙色预警</span>
					</li>
				</ul>
				<p>
					<span>{{item.jurisdictionName}}</span>
					<span>{{item.companyName}}</span>
				</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value:this.$route.params.n,
				nowPage:1,
				assetEarlyWarningList:[],
				propertyExpiredList:[]
			}
		},
		
		methods: {
			hui1() {
				this.$router.go(-1);
			},
           
           xi(){
              this.$router.push('/yujingxiangqing');
		   },
		   getAssetEarlyWarningListPage(){ //资产预警
			   this.$http.post('earlyWarnings/getAssetEarlyWarningListPage',{nowPage:this.nowPage}).then(res=>{
					// console.log(res)
					if(res.data.code == 200){
						this.assetEarlyWarningList = res.data.data.data
						// console.log(this.assetEarlyWarningList)
					}
				})
		   },
		   getPropertyExpiredList(){ //交易预警
			   this.$http.post('earlyWarnings/getPropertyExpiredListPage',{nowPage:this.nowPage}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.assetEarlyWarningList = res.data.data.data

						console.log(this.propertyExpiredList)
					}
				})
		   }
		},
		mounted(){
			if(this.value == 1){
				this.getAssetEarlyWarningListPage()
			}else if(this.value == 2){

			}else if(this.value == 3){
				this.getPropertyExpiredList()
			}else if(this.value == 4){

			}
		}
	}
</script>

<style lang="less">
	.yujingxinxi {
		header {
			width: 100%;
			height: 118/100rem;
			background: rgb(111, 119, 254);
			position: fixed;
			top: 0;
			left: 0;
			color: white;
			font-size: 10px;
			font-family: "宋体";
			line-height: 124/100rem;
			h1 {
				margin-left: 280/100rem;
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
		article {
			width: 100%;
			height: 80/100rem;
			position: absolute;
			top: 118/100rem;
			select {
				/*  border: 1px solid bblack;*/
				width: 90%;
				height: 70/100rem;
				background: gainsboro;
				margin-left: 5%;
				border: none;
			}
		}
		section {
			/*border: 1px solid black;*/
			width: 100%;
			height: 1400/100rem;
			background: gainsboro;
			position: absolute;
			top: 198/100rem;
			#Box{
			 margin-top:-1/100rem;
			}
			.box {
			     width: 100%;
			     height: 450/100rem;
				background: white;
				margin-top:20/100rem;
				h1 {
					font-size: 17px;
					font-weight: normal;
					padding-top: 25/100rem;
					padding-left: 30/100rem;
				}
				ul {
					border-bottom: 1px solid gainsboro;
					width: 100%;
					height: 300/100rem;
				
					list-style-type: none;
					padding-top: 5/100rem;
					padding-left: 30/100rem;
					font-size: 13px;
					li {
					    
						padding-top: 20/100rem;
						span:nth-child(2) {
							padding-left: 30/100rem;
						}
						span:nth-child(3) {
							padding-left: 60/100rem;
						}
					}
				}
				p {
					padding-left: 30/100rem;
					padding-top:20/100rem;
					font-size: 13px;
					position: relative;
					span:nth-child(2) {
						position: absolute;
						right: 60/100rem;
					}
				}
			}
		}
	}
</style>