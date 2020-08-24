<template>
	<div class="Login">
		<!-- <header>
			<h1>登录</h1>
		</header> -->
		<section>
			<img class="bei" src="@/assets/img/loginbg@2x.png">
			<p><img src="@/assets/img/logo2@2x.png"></p>

			<div class="form">
				<div>
					<span><img src="../../assets/img/login_phone@2x.png"></span>
					<input class="ff" type="username" v-model.trim="username" placeholder="请输入手机号码" />
				</div>
				<div>
					<span><img src="../../assets/img/login_password@2x.png"></span>
					<input class="ff" type="password" v-model.trim="pwd" placeholder="请输入密码" />
				</div>
			</div>
			<div class="tt">
				<p class="one" style="display:flex;margin-top:6px;">
					<van-checkbox v-model="keepAgreement" shape="square" style="font-size:12px;" @click="changeBtn"></van-checkbox>
					<span style="color:#fff; font-size:12px; margin-left:3px;" @click="userAgreementBtn">《用户协议》</span>
				</p>
				<p class="two">
          			<van-button round type="info" @touchstart='loginBtn' v-if="isShowBtn" >登录</van-button>
          			<van-button round type="default" v-else @click="popInfo">登录</van-button>
					<!-- <button @touchstart='loginBtn' style="cursor: pointer;">登录</button> -->
				</p>
			</div>
			<!-- <div class="kk">
				<span>
					<van-checkbox v-model="autoLogin" shape="square" @click="autoLoginBtn">自动登录</van-checkbox>
				</span>
				<span>忘记密码？</span>
			</div> -->
		</section>
	</div>
</template>
<script>
	import {Dialog,Toast} from 'vant';
	export default {
		data() {
			return {
				keepAgreement: false,
				// autoLogin: localStorage.autoBtn && JSON.parse(localStorage.getItem('autoBtn')) || false,
				autoLogin:false,
				username:'',
				pwd:'',
				isShowBtn:false
			}
		},
		methods: {
			userAgreementBtn(){//保密协议
				console.log(12525)
				let type =1
				this.$router.push('/userAgreement')
			},
			autoLoginBtn(){//是否选择自动登录
				this.autoLogin = !this.autoLogin
			},
			changeBtn(){//转换按钮
				this.keepAgreement = !this.keepAgreement
				this.isShowBtn = !this.isShowBtn
			},
			popInfo(){//点击未选中时
				Toast('请勾选保密协议');
			},
			tui1() {
				this.$router.go(-1);
			},
			loginBtn(){//登录
		// Toast.success('你的手机能点击登录按钮');
				localStorage.setItem('autoBtn',this.autoLogin)
				if(!this.username){
					Dialog.alert({
						title:'提示',
						message:'用户名不能为空'
					})
					return
				}else if(!this.pwd){
					Dialog.alert({
						title:'提示',
						message:'密码不能为空'
					})
					return
				}
				this.$http.post('getAppUserInfo',{USERNAME:this.username,PASSWORD:this.pwd}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						if(res.data.data.state == 3){
							// localStorage.setItem('token',JSON.stringify(res.data.data))
							let token=res.data.data.result
							let sessionVal=res.data.data.session
							let params={
								token,sessionVal
							}
							 localStorage.setItem('token',JSON.stringify(params))
							this.$store.commit('getToken',params)
							Toast.success('恭喜你登录成功');
							// Toast.loading({
							// 	duration: 0, // 持续展示 toast
							// 	forbidClick: true,
							// 	message: '倒计时 3 秒'
							// });
							setTimeout(()=>{
								this.$router.push('/home')
								this.$bus.$emit('isShowNum',2)
							},3000)
						}else{
							Dialog.alert({
								title:'提示',
								message:res.data.data.result
							})
						}
					}
				})
			}

		},
		mounted(){
			// if(this.autoLogin){
			// 	this.loginBtn()
			// }
		}
	}
</script>

<style lang="less">
	.Login {
		position:fixed;
		left: 0;
		top:0;
		right:0;
		bottom:0;
		background: rgb(81, 101, 187);
		z-index: 100;
		header {
			width: 100%;
			height: 115/100rem;
			background: rgb(111, 119, 254);
			z-index: 999;
			position: fixed;
			top: 0;
			left: 0;
			color: white;
			font-family: "宋体";
			font-size: 12px;
			text-align: center;
			line-height: 115/100rem;
			img {
				width: 24/100rem;
				height: 40/100rem;
				position: absolute;
				top: 30%;
				left: 5%;
			}
		}
		section {
			/*border: 1/100rem solid black;*/
		   /*width: 100%;*/
			height: 1200/100rem;
			margin-top: 0/100rem;
			background: rgb(81, 101, 187);
			position: fixed;
			overflow: auto;
			margin-bottom: 0rem;
			.bei {
				width: 100%;
				height: 600/100rem;
			}
			p {
				position: absolute;
				top: 120/100rem;
				left: 21%;
				img {
					width: 408/100rem;
					height: 164/100rem;
				}
			}
			.form {
				position: absolute;
				top: 35%;
				left: 5%;
				div {
					display: block;
					position: relative;
					padding-top: 20/100rem;
					input {
						width: 600/100rem;
						height: 80/100rem;
						border: none;
						border-radius: 10px;
						background: rgb(116, 132, 192);
						padding-left: 12%;
						color: #fff;
						font-size: 14px;
					}
					//改变input-placeholder 的颜色
					input::-webkit-input-placeholder {
						color: white;
						font-size: 13px;
					}
					span {
						position: absolute;
						top: 40/100rem;
						left: 20/100rem;
						img {
							width: 33/100rem;
							height: 45/100rem;
						}
					}
				}
			}
			.tt {
				position: absolute;
				top: 43%;
				left: 6%;
				.one {
					width: 300/100rem;
					.van-checkbox__icon .van-icon {
						width: 36/100rem;
						height: 36/100rem;
					}
					.van-checkbox__label {
						color: white;
					}
				}
				.two {
					margin-top: 80/100rem;
					button {
						width: 670/100rem;
						height: 80/100rem;
						line-height: 80/100rem;
						border-radius: 15/100rem;
						border: none;
						background: #6f77fe;
						color: white;
						font-size: 16px;
						font-weight: bold;
					}
				}
			}
			.kk {
				position: absolute;
				top: 70%;
				left: 6%;
				display: flex;
				/*border: 1px solid black;*/
				width: 660/100rem;
				height: 70/100rem;
				/*line-height:70/100rem;*/
				span:nth-child(1) {
					.van-checkbox__icon .van-icon {
						width: 36/100rem;
						height: 36/100rem;
						line-height: 36/100rem;
						border-radius: 50px;
					}
					.van-checkbox__label {
						color: white;
					}
				}
				span:nth-child(2) {
					width: 450/100rem;
					height: 36/100rem;
					line-height: 36/100rem;
					color: white;
				}
			}
		}
	}
</style>
