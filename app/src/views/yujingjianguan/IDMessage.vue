<template>

	<div class="yujingxinxi">
		<header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">证照预警信息</div>
        </header-top>
		

		<div class="zssection">
			<div  @click="toDetail(item)"   class="box" id="Box"  v-for="item in assetsData">
				<h1>{{item.licenceName   }}</h1>
				<ul>
				
					<li>
						<span>证照编号:</span>
						<span style="color:royalblue;">{{item.licenseNumber    }}</span>
						<span style="color:red;">{{item.levels    }}色预警</span>
						<span class="zsmar" style="color:red;">逾期 {{item.overdueDays      }}天</span>
					</li>
				</ul>
				
				<div class="border"></div>
				<p class="zsbom">
					<span>已申领&nbsp&nbsp&nbsp&nbsp{{item.collectionDate      }}</span>
					<span>申领人:{{item.userName      }}</span>
				</p>
			</div>
			
			
			
			
			
			

		</div>

	</div>
</template>

<script>
import HeaderTop from '@/common/Header'
	export default {
		data() {
			return {
				assetsData:[],
				id:'',
			}
		},
		 components:{
        HeaderTop
		},
		mounted() {
			this.getData()
		},
		methods: {
			//获取数据
			getData(){
					this.$http
       		 	.post("earlyWarnings/getOverdueLicenseListPage", {
						nowPage:1
       			 })
        		.then(result => {

         		 if (result.data.code == 200) {
			  
					this.assetsData=result.data.data.data
					
						
         			 }
        		});
			},
			
           
		   toDetail(val) {

      			 this.$router.push({
        			path: "/IDdetail",
      			  query: {
					id: val.id,
					levels:val.levels

					
					 
        
        }
      });
    },
           
           
		}
	}
</script>

<style lang="less" scoped>
	.yujingxinxi {
		
	
		.zssection{
			
			width: 100%;
			
			// background: gainsboro;
			overflow: auto;
			
			
			#Box{
			 margin-top:-1/100rem;
			}
			.box {
			    border-bottom: .2rem solid #f2f2f2;
				background: white;
			
					.border{
						margin-top: .2rem;
							padding-left: 30/100rem;
					border-bottom: 1px solid #797979;
					
					}
					.zsbom{
						margin-bottom: .1rem;
					}
					.zsmar{
						margin-left: .3rem;
					}
				h1 {
					font-size: 18px;
					font-weight: normal;
					padding-top: 25/100rem;
					padding-left: 30/100rem;
				}
				ul {
					
				
					list-style-type: none;
					padding-top: 5/100rem;
					padding-left: 30/100rem;
					font-size: 16px;
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
					font-size: 16px;
					// position: relative;
					span:nth-child(2) {
						position: absolute;
						right: 60/100rem;
					}
				}
			}
		}
	}
</style>