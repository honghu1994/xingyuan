<template>
	<div class="guoyouqiye">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>国有企业</h1>
		</header>
		<section>	
		    <h1 style="width:100%;">区国有资产监督管理局</h1>
			<!-- <ul> -->
			<div style="margin-top:60px;padding-top:20px;">
				<!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
					<van-list v-model="loading" :finished="finished" finished-text="没有更多数据了" @load="onLoad">    
						<div class="overallPlanning" v-for="item in overallPlanningList" :key="item.company_id" @click="goOverallPlanningDetail(item.company_id)">
							<h2>{{item.company_name}}</h2>
							<div>
							<p>
							<span>统一社会信用代码：</span>
							<span>{{item.credit_code}}</span>
							</p>
							<p>
							<span>法人代表：</span>
							<span>{{item.legal_representative}}</span>
								<span>注册资本：</span>
							<span>{{item.registered_capital}}万元</span>
							</p>
							<p>
							<span>联系电话：</span>
							<span>{{item.contact_number}}</span>
							</p>
							<p>
							<span>地址：</span>
							<span>{{item.registration_address}}</span>
							</p>
							</div>       
						</div>
					</van-list>
				<!-- </van-pull-refresh> -->
			</div>
			<!-- </ul> -->
		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				overallPlanningList:[],
				nowPage:0,
				pagesCount:1,
				isShowMessage:false,
				// vant
				loading: false,   //是否处于加载状态
				finished: false,  //是否已加载完所有数据
				isLoading: false,   //是否处于下拉刷新状态
			}
		},
		
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			goOverallPlanningDetail(id){
				this.$router.push({path:'/changyekongjian/countryEnterprisesDetails',query:{company_id:id}})
			},
			onLoad(){
				this.getOverallPlanningStateOwnedEnterprise()
			},
			onRefresh(){
				this.isLoading = false;
			},
			getOverallPlanningStateOwnedEnterprise(){
				this.loading = true
				this.nowPage = this.nowPage + 1
				this.$http.post('app_module2/getOverallPlanningStateOwnedEnterprise',{nowPage:this.nowPage}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						// this.overallPlanningList = res.data.data.dataList
						this.overallPlanningList.push(...res.data.data.dataList)
						this.pagesCount = res.data.data.PageUtil.pageCount
						this.loading = false;   //数据请成功后
                        if(this.nowPage >=this.pagesCount){
                            this.finished = true;
                        }
					}
				})
			},

		},
		mounted(){
			this.getOverallPlanningStateOwnedEnterprise()
		}
	}
</script>

<style lang="less">
	.guoyouqiye {
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
				width: 100%;
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
		section{
			/*border: 1px solid black;*/
			// position: absolute;
			// top: 118/100rem;
			// overflow: auto;
			// margin-bottom: 1.5rem;
			// margin-top: 60px;
			h1{
				padding-top: 10/100rem;
				padding-left:20/100rem;
				font-size: 16px;
				color: blue;
				font-weight: lighter;
				border-top: 10px solid  rgb(242, 242, 242);
				position: absolute;
				z-index: 100;
			}		
			   .overallPlanning{
			     border-bottom: 10px solid  rgb(242, 242, 242);
			     padding-bottom: 15/100rem;
			     h2{
			     height: 50/100rem;
			      padding-top: 30/100rem;
				  padding-left:20/100rem;
				  font-size: 16px;
				  font-weight: normal;
			   }
			     div{
				  border-top: 1px solid  rgb(242, 242, 242);
				  box-sizing: border-box;
				  padding-right:5px;
			      width: 100%;
			       font-size: 14px;
			       color: gray;
			      p{
			         padding-top: 20/100rem;
			         padding-left:20/100rem;
			      }
			      p:nth-child(2){
			         span:nth-child(3){
			         padding-left: 80/100rem;
			         
			         }
			      }
			     }
			   }
		}
	}
	.scroll-content{
      overflow: hidden;
      position: absolute;
      top: 1.9rem;
      bottom: 0px;
      left:0;
      right:0;
      border-top: 1px solid #ddd;
      padding:0 10px;

  	}
</style>