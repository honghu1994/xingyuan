<template>
	<div class="yujingxiangqing">
			<header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">证照预警信息</div>
        </header-top>

		<section>
			<div class="box">
			
				<ul>
				
					<li>
						<span>股份公司:</span>
						<span>{{detailData.companyName      }}</span>
					</li>
					<li>
						<span>预警分类:</span>
						<span>证照预警</span>
					</li>
					<li>
						<span>预警项</span>
						<span>证照逾期未归还</span>
					</li>
					<li>
						<span>预警级别：</span>
						<span>{{this.$route.query.levels  }}</span>
						
					</li>
					<li>
						<span>预警时间:</span>
						<span>2019-09-09</span>
					</li>
					<p class="border"></p>

					<li>
						<span>人员姓名</span>
						<span>{{detailData.userName    }}</span>
					</li>
					<li>
						<span>证照类别</span>
						<span style="color:orange;">{{detailData.lincenceType  }}</span>
					</li>
					<li>
						<span>证照编号</span>
						<span style="color:orange;">{{detailData.licenseNumber   }}</span>
					</li>
					<li>
						<span>证照状态</span>
						<span style="color:orange;">已领取</span>
					</li>
					<li>
						<span>使用时间</span>
						<span style="color:orange;">{{detailData.startTime      }}至{{detailData.endTime        }}</span>
					</li>
					<li>
						<span>请假时间</span>
						<span style="color:orange;">2019-09-09至2019-09-09</span>
					</li>
					<li>
						<span>目的地</span>
						<span style="color:orange;">{{detailData.destination      }}</span>
					</li>
					<li>
						<span>详情</span>
						<span style="color:orange;"></span>
					</li>
					<li>
						<span>附件</span>
						<span style="color:orange;">{{detailData.enclosure      }}</span>
					</li>

				</ul>

				

			</div>

		</section>

	</div>
</template>

<script>
import HeaderTop from '@/common/Header'
	export default {
		data() {
			return {
				detailData:[]
			}
		},
		 components:{
        HeaderTop
		},
		mounted() {
			this.getData()
		},
		methods: {
				getData(){
					this.$http
       		 	.post("earlyWarnings/getOverdueLicenseById", {
						id:this.$route.query.id
       			 })
        		.then(result => {

         		 if (result.data.code == 200) {
			  
					this.detailData=result.data.data

         			 }
        		});
			},

		}
	}
</script>

<style lang="less">
	.yujingxiangqing {
	
		section {
			/*border: 1px solid black;*/
			width: 100%;
			
			position: absolute;
			top: 118/100rem;
		
			
			overflow: auto;
			.box {
				
				.border{
					border-bottom: 1px solid #797979;
					margin-top: .3rem;
				}
				width: 100%;
				// height: 650/100rem;
				background: white;
				margin-top: 20/100rem;
			
				ul {
					
					// width: 100%;
					// height: 450/100rem;
					list-style-type: none;
					padding-top: 5/100rem;
					padding-left: 30/100rem;
					font-size: 16px;
					li {
						padding-top: 20/100rem;
						position: relative;
						span:nth-child(2) {
							position: absolute;
							left: 2rem;
						}
						span:nth-child(3) {
							position: absolute;
							right: 100/100rem;
						}
					}
				}
				div:nth-child(3) {
					font-size: 13px;
					h1 {
						font-size: 13px;
					}
					p:nth-child(3) {
						padding-top: 20/100rem;
						padding-left: 30/100rem;
						span {
							padding-left: 30/100rem;
						}
					}
					p:nth-child(4) {
						padding-top: 20/100rem;
						padding-left: 30/100rem;
					}
				}
				div:nth-child(4) {
					font-size: 13px;
					padding-top: 20/100rem;
					h1 {
						font-size: 13px;
					}
					p {
						padding-top: 20/100rem;
						padding-left: 50/100rem;
					}
				}
			}
		}
	}
</style>