<template>
	<div class="yujingdengji">
		<header>
			<img @click="hui1()" class="left" src="@/assets/img/back.png">
			<h1>预警登记</h1>
		</header>
		

		<section>
			<!--合同信息-->
			<div class="tabe1" >
				
			</div>
			<!--合同办理-->
			<div class="tabe2" >
				
			</div>

		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				type: 'a',
			}
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
			//切换面板
			page(val) {
				this.type = val;
			},

		}
	}
</script>

<style lang="less">
	.yujingdengji{
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
	
		section {
			/*border: 1px solid black;*/
			width: 100%;
			height: 1400/100rem;
			position: absolute;
			top: 218/100rem;
			.tabe1 {
				
				
				
			}
			
		}
	}
</style>