<template>
	<div class="ShouYe">
		<header>
			<h1>南山阳光365服务</h1>
			<!-- <img @click="to()" src="@/assets/img/u2.png"> -->
		</header>
		<nav>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide"><img src="../../assets/img/banner0.jpg"></div>
					<div class="swiper-slide"><img src="../../assets/img/banner1.jpg"></div>
					<div class="swiper-slide"><img src="../../assets/img/banner3.jpg"></div>
					<div class="swiper-slide"><img src="../../assets/img/banner4.jpg"></div>
				</div>
				<div class="swiper-pagination"></div>
				<!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
			</div>
		</nav>

		<section>
			<div class="father">
				<div @click="change1()">
					<img src="@/assets/img/icon_012.png"><br> 资产管理
					<!--<span>1</span>-->
				</div>
				<div @click="change2()">
					<img src="@/assets/img/icon_06.png"><br> 交易管理
					<!--<span>1</span>-->
				</div>
				<div @click="change3()">
					<img src="../../assets/img/ht.png"><br> 合同管理
					<!--<span>1</span>-->
				</div>
				<div @click="change4()">
					<img src="@/assets/img/icon_09.png"><br> 证照监管
					<!--<span>1</span>-->
				</div>
				<div @click="change5()">
					<img src="@/assets/img/icon_011.png"><br> 财务管理
					<!--<span>1</span>-->
				</div>
				<div @click="change6()">
					<img src="@/assets/img/icon_02.png"><br> 产业空间统筹

				</div>
				<div @click="change7()">
					<img src="../../assets/img/yj.png"><br> 预警监管
					<!--<span>1</span>-->
				</div>
				<div @click="change8()">
					<img src="../../assets/img/xx01.png"><br> 工作动态
					<!--<span>1</span>-->
				</div>
				<div @click="change9()">
					<img src="../../assets/img/gs.png"><br> 公司详情
					<!--<span>1</span>-->
				</div>
				<div @click="change10()">
					<img src="../../assets/img/zc.png"><br> 政策法规
					<!--<span>1</span>-->
				</div>
				<div @click="change11()">
					<img src="../../assets/img/wb.png"><br> 外部链接
				</div>
				<div @click="change12()">
					<img src="@/assets/img/icon_03.png"><br> 我的合同
					<!--<span>1</span>-->
				</div>
				<div @click="change13()">
					<img src="../../assets/img/xq.png"><br> 需求登记
					<!--<span>1</span>-->
				</div>
				<div @click="change14()">
					<img src="../../assets/img/bl.png"><br> 办理记录
					<!-- <span>1</span> -->
				</div>
				<div @click="emailClick">
					<img src="../../assets/img/nb.png"><br> 内部邮箱
					<!-- <span>1</span> -->
				</div>
				<div>
					
				</div>
				<div >
				</div>

			</div>
		</section>

		

	</div>
</template>

<script>
	//引入轮播插件
	import Swiper from 'swiper';

	export default {
		data() {
			return {}
		},
		mounted() {
			//轮播
			new Swiper('.swiper-container', {
				loop: true,
				//自动切换
				autoplay: true,
				pagination: {
					el: '.swiper-pagination',
				},
			})
		},
		methods: {
			//跳转
			to() {
				this.$router.push('/Login');
			},
			//二级页面
			change1() {
				this.$router.push('/zichang');
			},
			change2(){
				this.$router.push('/jiaoyi');
			},
			change3() {
				this.$router.push('/hetong');
			},
			change4() {
				this.$router.push('/zhengzhao');
			},
			change5() {
				this.$router.push('/caiwu');
			},
			change6() {
				this.$router.push('/changyekongjian');
			},	
			change7() {
				this.$router.push('/yujing');
			},
			
			change10() {
				this.$router.push('/zcfg');
			},
			change13(){
				this.$router.push('/requireInfo');
			},
			change12(){
				this.$router.push('/myContract');
			},
			change11(){
				this.$router.push('/outLink');
			},
			change9(){
				this.$router.push('/companyDetails');
			},
			change14(){ 
				this.$router.push('/recordHandle');
			},
			change8(){
				this.$router.push('/workStatus');
			},
			emailClick(){
				this.$router.push('/emailList');
			}
		}
	}
</script>

<style lang="less">
	.ShouYe {
		header {
			width: 100%;
			height: 105/100rem;
			background: rgb(111, 119, 254);
			position: fixed;
			top: 0;
			left: 0;
			color: white;
			line-height: 102/100rem;
			h1 {
				text-align: center;
				font-size: 20px;
				font-weight: normal;
			}
			img {
				width: 45/100rem;
				height: 45/100rem;
				position: absolute;
				top: 32/100rem;
				right: 9%;
			}
		}
		nav {
			.swiper-container {
				width: 100%;
				height: 378/100rem;
				position: absolute;
				top: 105/100rem;
				img {
					width: 100%;
					height: 378/100rem;
				}
			/*.swiper-pagination-bullet{
				background: white;
				width:10/100rem ;
				height:10/100rem;			     
             }*/
				.swiper-pagination-bullet-active {
					background: white!important;
					width: 13/100rem;
					height: 13/100rem;
				}
			}
		}
		section {
			position: absolute;
			top: 483/100rem;
			/*border: 1px solid red;*/
			/*width: 100%;*/
			/*height: 750/100rem;*/
			margin-bottom: 1rem;
			img {
				width: 105/100rem;
				height: 105/100rem;
			}
		
			.father {
				position: fixed;
				/*border: 1px solid red;*/
				width: 100%;
				height: 700/100rem;
				//流式布局
				display: flex;
				flex-wrap: wrap;
				align-content: flex-start;
				margin-top: 16/100rem;
				margin-left: 5%;
				div {
					font-size: 13px;
					flex: 25%;
					padding-top: 25/100rem;
					position: relative;
					/*span {
						display: block;
						width: 35/100rem;
						height: 35/100rem;
						line-height: 32/100rem;
						border-radius: 50px;
						background: red;
						text-align: center;
						color: white;
						position: absolute;
						top: 30/100rem;
						left: 80/100rem;
						z-index: 9999999999;
					}*/
				}
			}
		}
		
	}
</style>