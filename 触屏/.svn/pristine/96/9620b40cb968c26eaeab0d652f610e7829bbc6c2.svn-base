<template>
	<div class="biao">
		<div class="right">
			<div class="section_top">
				<div class="top1">
					<p><img src="../assets/img/fang.png"></p>
					<p>首页<span></span></p>
					<p>扶持发展<span></span></p>
					<p>扶持代办</p>
				</div>
				<div class="top2">
					<div>
						<p>街道办：</p>
						<p>
							<el-select v-model="value2" filterable placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</p>
					</div>

					<div>
						<p>机构名称：</p>
						<p>
							<el-autocomplete popper-class="my-autocomplete" v-model="state3" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect">
								<i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick">
                  </i>
								<template slot-scope="props">
									<div class="name">{{ props.item.value }}</div>
									<span class="addr">{{ props.item.address }}</span>
								</template>
							</el-autocomplete>
						</p>
					</div>

					<div>
						<p class="p_1">时间：</p>
						<p class="p_2">
							<div class="block">
								<!--<span class="demonstration">date</span>-->
								<el-date-picker v-model="value3" type="date" placeholder="开始日期" default-value="2010-10-01">
								</el-date-picker>
							</div>
						</p>
						<p class="p_3">至</p>
						<p class="p_4">
							<div class="block">
								<!--<span class="demonstration">date</span>-->
								<el-date-picker v-model="value4" type="date" placeholder="结束日期" default-value="2010-10-01">
								</el-date-picker>
							</div>

						</p>
						<p class="p_5">
							<el-button type="primary"><span><img src="../assets/img/sou.png"></span><span>查询</span></el-button>
						</p>

					</div>

				</div>

				<div class="top3">
					<el-button type="success"> <img src="../assets/img/xin.png" />新增</el-button>
					<el-button type="success"><img src="../assets/img/xiu.png">修改</el-button>
					<el-button type="success"><img src="../assets/img/shan.png">删除</el-button>
					<el-button type="success"><img src="../assets/img/cha.png">查看</el-button>
					<el-button type="success"><img src="../assets/img/ti.png">提交</el-button>
					<el-button type="success"><img src="../assets/img/dao.png">资料导出</el-button>
				</div>

			</div>

			<div class="biao">
				<el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column label="申请单位" width="270">
						<template slot-scope="scope">{{ scope.row.name }}</template>
					</el-table-column>
					<el-table-column prop="fuchi" label="扶持类别" width="170">
					</el-table-column>
					<el-table-column prop="nei" label="资助内容" width="250" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="xiang" label="项目情况" width="250" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="sheng" label="申请金额" width="150" show-overflow-tooltip>
					</el-table-column>
					<el-table-column prop="shifou" label="是否已提交" width="110" show-overflow-tooltip>
					</el-table-column>

				</el-table>
				<div style="margin-top: 20px">
					<el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换选中状态</el-button>
					<el-button @click="toggleSelection()">取消选择</el-button>
				</div>
			</div>
			<div class="fen">
				<div class="block">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//街道办下拉框
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value2: '',

				//结构名称  模糊查询
				restaurants: [],
				state3: '',

				//时间选择器
				value3: '',
				value4: '',
				tableData3: [{
					name: '深圳市塘朗实业股份有限公司',
					fuchi: '转型升级与同富裕',
					nei: '2019年塘朗片区幼儿园用地收地经济补助',
					xiang: '2018年10月12日，曾湃区长主持召开xx会议',
					sheng: '14624700.00',
					shifou: '未提交',
				}, {
					name: '深圳市塘朗实业股份有限公司',
					fuchi: '转型升级与同富裕',
					nei: '2019年塘朗片区幼儿园用地收地经济补助',
					xiang: '2018年10月12日，曾湃区长主持召开xx会议',
					sheng: '14624700.00',
					shifou: '未提交',
				}, {
					name: '深圳市塘朗实业股份有限公司',
					fuchi: '转型升级与同富裕',
					nei: '2019年塘朗片区幼儿园用地收地经济补助',
					xiang: '2018年10月12日，曾湃区长主持召开xx会议',
					sheng: '14624700.00',
					shifou: '未提交',
				}, {
					name: '深圳市塘朗实业股份有限公司',
					fuchi: '转型升级与同富裕',
					nei: '2019年塘朗片区幼儿园用地收地经济补助',
					xiang: '2018年10月12日，曾湃区长主持召开xx会议',
					sheng: '14624700.00',
					shifou: '未提交',
				}, {
					name: '深圳市塘朗实业股份有限公司',
					fuchi: '转型升级与同富裕',
					nei: '2019年塘朗片区幼儿园用地收地经济补助',
					xiang: '2018年10月12日，曾湃区长主持召开xx会议',
					sheng: '14624700.00',
					shifou: '未提交',
				}, {
					name: '深圳市塘朗实业股份有限公司',
					fuchi: '转型升级与同富裕',
					nei: '2019年塘朗片区幼儿园用地收地经济补助',
					xiang: '2018年10月12日，曾湃区长主持召开xx会议',
					sheng: '14624700.00',
					shifou: '未提交',
				}],
				//分页器
				currentPage4: 4,
			}
		},
		methods: {
			//表格
			toggleSelection(rows) {
				if(rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},

			//结构名称
			querySearch(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return(restaurant) => {
					return(restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
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
			handleSelect(item) {
				console.log(item);
			},
			handleIconClick(ev) {
				console.log(ev);
			},

			//分页器
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},

		},
	}
</script>

<style lang="less">
	@import "../style/biao.less";
</style>