<template>
	<div class="support">
		<div class="box">
			<header>
				<div class="tu1"> <img src="../assets/img/nav.png">
					<div class="tu2">
						<p><img src="../assets/img/logo.png"></p>
						<h1>扶持发展项目管理平台</h1>
					</div>
					<div class="tu3">
						<p>
							<img src="../assets/img/cd.png">
							<span class="span_a">	
							      <el-select v-model="value1" placeholder="扶持发展" @change="selectTrigger(value1)">
                         <el-option
                              v-for="item in cities1"
                              :key="item.value"
                              :label="item.label"
                              :value="item">
                            <!--  <span style="float: left">{{ item.label }}</span>-->
							<span style="float: left; color: #8492a6; font-size: 13px;">{{ item.value }}</span>
							</el-option>
							</el-select>

							</span>
						</p>

						<p><img src="../assets/img/cd.png">
							<span class="span_b">	
							      <el-select v-model="value2" placeholder="政策法规"  >
                           <el-option
                              v-for="item in cities2"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                              <!--<span style="float: left">{{ item.label }}</span>-->
							<span style="float: left; color: #8492a6; font-size: 13px;">{{ item.value }}</span>
							</el-option>
							</el-select>

							</span>
						</p>
					</div>

					<div class="tu4">
						<div class="tu3_top">
							<p><span><img src="../assets/img/fang.png"></span></p>
							<p><span><img src="../assets/img/ding.png"></span>未读短信</p>
							<p><span><img src="../assets/img/wen.png"></span>待办事项</p>
							<p><span><img src="../assets/img/ren (3).png"></span>在线用户</p>
							<p><span><img src="../assets/img/laba (2).png"></span>通知公告</p>
						</div>
						<div class="tu3_bottom">
							<p><span><img src="../assets/img/ren (2).png"></span>南头街道办 管理员</p>
							<p><span><img src="../assets/img/yao.png"></span>修改密码</p>
							<p><span><img src="../assets/img/tui.png"></span>退出</p>
						</div>
					</div>

				</div>
			</header>

			<section>
				<router-view/>
			</section>

		</div>

	</div>
</template>

<script>
	export default {
		name: 'support',
		data() {
			return {
				//选择器-扶持发展
				cities1: [{
						value: '扶持代办',
						path: '/fuchi',
						//label: '图标'
					}, {
						value: '项目登记管理',
						path: '/dengji'
						//label: '图标'
					}, {
						value: '项目类型管理',
						path: '/leixing'
						//label: '图标'
					}, {
						value: '项目审批管理',
						path: '/shenpi'
						//label: '图标'
					},
					{
						value: '项目跟踪管理',
						path: '/genzhong'
						//label: '图标'
					},
					{
						value: '项目报表',
						path: '/biao'
						//label: '图标'
					}
				],
				value1: '',
				
				//选择器-政策法规
				cities2: [{
						value: '1',
						path: '/',
						//label: '图标'
					}, {
						value: '2',
						path: '/'
						//label: '图标'
					}, {
						value: '3',
						path: '/'
						//label: '图标'
					}, {
						value: '4',
						path: '/'
						//label: '图标'
					},
					{
						value: '5',
						path: '/'
						//label: '图标'
					},
					{
						value: '6',
						path: '/'
						//label: '图标'
					}
				],
				value2: '',
				
				
				
				
				

				//表
				multipleSelection: [],
			}
		},
		methods: {
			selectTrigger(item) {
				this.$router.push({
					path: item.path,
				})
			},
			//结构名称
			loadAll() {
				return [{
						"value": "三全鲜食（北新泾店）",
						"address": "长宁区新渔路144号"
					},
					{
						"value": "Hot honey 首尔炸鸡（仙霞路）",
						"address": "上海市长宁区淞虹路661号"
					},
				];
			},
		},

		mounted() {
			//机构名称
			this.restaurants = this.loadAll();
		},

	}
</script>

<style lang="less">
	@import "../style/support.less";
</style>