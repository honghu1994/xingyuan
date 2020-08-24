<template>
	<div class="yujingxiangqing">
			<header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">资产预警信息</div>
        </header-top>

		<section>
			<div class="box">
				<h1>{{detailData.assetsName  }}</h1>
				<ul>
					<li>
						<span>组织机构：</span>
						<span class="zspos">{{detailData.jurisdictionName    }}</span>
					</li>
					<li>
						<span>股份公司:</span>
						<span>{{detailData.companyName      }}</span>
					</li>
					<li>
						<span>预警分类:</span>
						<span>{{detailData.typeName        }}</span>
					</li>
					<li>
						<span>关联资产:</span>
						<span>xx</span>
					</li>
					<li>
						<span>关联资产：</span>
						<span>是</span>
						<span class="iconfont icon-jiantou"></span>
					</li>
					<li>
						<span>发生时间:</span>
						<span>xx</span>
					</li>
					<li>
						<span>备注:</span>
						<span>{{detailData.remarks          }}</span>
					</li>
					<li>
						<span>预警级别:</span>
						<span style="color:orange;">{{this.$route.query.levels }}色</span>
					</li>

				</ul>

				<div class="zsmy01">
					<p>核查情况</p>
					<p class="zstop">
						<span class="zsmar">是否检查</span>
						<span>是</span>
					</p>
					<p class="zstop01">备注</p>
				</div>

				<div class="zsmy01">
					<p class="zstop">督办情况</p>

					<p class="zstop zsmar01">监管状态</p>
					<p class="zstop zsmar01">受理人</p>
					<p class="zstop zsmar01">联系电话</p>
				</div>

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
       		 	.post("earlyWarnings/getAssetsById", {
						assetsId:this.$route.query.assetsId
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

<style lang="less" >
	.yujingxiangqing {
	
		section {
			/*border: 1px solid black;*/
			width: 100%;
			margin-bottom: 1.5rem;
		
			position: absolute;
			top: 118/100rem;
			
			overflow: auto;
			.box {
				width: 100%;
				// height: 650/100rem;
				background: white;
				margin-top: 20/100rem;
				
				h1 {
					font-size: 18px;
					font-weight: bold;
					padding-top: 25/100rem;
					padding-left: 30/100rem;
				}
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
							left: 2.5rem;
						}
						span:nth-child(3) {
							position: absolute;
							right: 100/100rem;
						}
						
					}
				}
				.zsmy01{
					font-size: 16px;
					padding-left: .3rem;
					margin-top: .25rem;
					.zstop{
							margin-top: .25rem;
							.zsmar{
							margin-right: .4rem;
						padding-left: .3rem;
					}
				
					}
						.zstop01{
						margin-top: .25rem;
						padding-left: .3rem;
						

					}
					.zsmar01{
							
						padding-left: .3rem;
					}
					
					

				}
				
				
			}
		}
	}
</style>