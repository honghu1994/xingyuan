<template>
	<div class="zhiyin">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>产业空间规划指引</h1>
		</header>
		<section>
			<div class="top">
			   <img src="../../assets/img/ditu.png">
			</div>
			<div class="bottom">
			    <h1>18大片区</h1>
			    <div>
			       <p v-for="item in appAreaList" :key="item.area_id" @click="goAppAreaList(item.area_id)">
						<span>{{item.address}}</span>
						<span>></span>
					</p>
			    </div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				appAreaList:[]
			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			getAppAreaList(){
				this.$http.post('app_module2/getAppAreaList').then(res=>{
					// console.log(res)
					if(res.data.code == 200){
						this.appAreaList = res.data.data.dataList
					}
				})
			},
			goAppAreaList(id){
				this.$router.push({path:'/changyekongjian/areaIndustryDetail',query:{area_id:id}})
			}

		},
		mounted(){
			this.getAppAreaList()
		}
	}
</script>

<style lang="less">
	.zhiyin{
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
			/*height: 2050/100rem;*/
			position: absolute;
			top: 118/100rem;
			
			margin-bottom: 1.2rem;
			.top{
			  img{
			     width: 750/100rem;
			     height: 950/100rem;
			  }
			}
			.bottom{		  
			   h1{
			      padding-left: 20/100rem;
			       padding-top: 10/100rem;
			      font-size: 17px;
			      font-weight: normal;
			   }
			   div{
			   p{
			   	 font-size: 14px;
			    padding-top: 15/100rem;
				 padding-left: 80/100rem;
				 height:26px;
				 line-height: 26px;
			     position: relative;
			     span:nth-child(2){
			    position: absolute;
			    right: 50/100rem;
			     }
			   }
			   
			   }
			   
			}
			
		}
		
		
	}
</style>