<template>
   <div class="main-content">
        <left-wrap>
            <h3 slot="title" class="title">组织架构</h3>
            <div slot="content" style="padding-left:15px;padding-top:6px;">
                <el-tree :data="data" :props="defaultProps" :highlight-current='true' @node-click="handleNodeClick" style="background: transparent;"></el-tree>
            </div>
        </left-wrap>
        <right-wrap>
            <div slot='breadcrumb' class="breadcrumb-nav">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>资产管理</el-breadcrumb-item>
                <el-breadcrumb-item><span class="isYellow">资源类登记</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div slot="authContent" class="query" style="padding-left:20px;">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="街道办">
                        <el-select v-model="formInline.region" placeholder="请选择查询的街道">
                        <el-option label="南头街道办1" value="1"></el-option>
                        <el-option label="南头街道办2" value="2"></el-option>
                        <el-option label="南头街道办3" value="3"></el-option>
                        <el-option label="南头街道办4" value="4"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="机构名称">
                        <el-input v-model="formInline.user" placeholder="请输入机构名称"></el-input>
                    </el-form-item>
                    <el-form-item label="时间">
                        <div class="block">
                            <el-date-picker
                            v-model="value6"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
                <div class="navBtn">
                    <el-button type="success" size="mini"><span class="iconfont icon-xinzeng" @click="dialogAdd = true"></span>新增</el-button>
                    <el-button type="success" size="mini"><span class="iconfont icon-xinzeng"></span>新增子资产</el-button>
                    <el-button type="success" size="mini"><span class="iconfont icon-xiugai"></span>修改</el-button>
                    <el-button type="success" size="mini"><span class="iconfont icon-shanchu"></span>删除</el-button>
                    <el-button type="primary" size="mini"><span class="iconfont icon-daochu"></span>导出</el-button>
                    <el-button type="primary" size="mini"><span class="iconfont icon-biangengjilu"></span>转待交易</el-button>
                    <el-button type="primary" size="mini"><span class="iconfont icon-hetonggaikuang"></span>生成合同</el-button>
                    <el-button type="primary" size="mini"><span class="iconfont icon-chakanwenjian"></span>查看合同</el-button>
                    <el-button type="primary" size="mini"><span class="iconfont icon-daoru"></span>导入</el-button>
                    <el-button type="success" size="mini"><span class="iconfont icon-shelibiangeng"></span>变更</el-button>
                    <el-button type="success" size="mini"><span class="iconfont icon-tubiao_tijiaodingdan"></span>提交</el-button>
                    <el-button type="success" size="mini"><span class="iconfont icon-jiaoyin1"></span>跟踪</el-button>
                    <el-button type="success" size="mini"><span class="iconfont icon-jiandanchuzhi"></span>处置</el-button>
                </div>
                <div style="margin-top:20px;padding-right:20px;">
                    <el-table :data="tableData" border style="width: 100%;" :header-cell-style="{background:'#0588DA',color:'#fff'}">
                        <el-table-column  type="index" label="序号" width="60"></el-table-column>
                        <el-table-column  prop="conpany" label="股份公司" ></el-table-column>
                        <el-table-column  prop="mechanism" label="所属机制" ></el-table-column>
                        <el-table-column  prop="contractCode" label="合同编号" width="150"></el-table-column>
                        <el-table-column  prop="contractType" label="合同类别" width="150"></el-table-column>
                        <el-table-column  prop="contractMoney" label="合同金额(万)" width="150"></el-table-column>
                        <el-table-column  prop="startTime" label="开始日期" width="120"></el-table-column>
                        <el-table-column  prop="endTime" label="结束日期" width="120"></el-table-column>
                        <el-table-column  prop="levels" label="预警等级" width="100"></el-table-column>
                        <el-table-column  prop="status" label="监管状态" width="100"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="100">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div style="text-align:right; margin-top:20px;padding-right:20px;">
                    <el-pagination
                        background
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                    </el-pagination>
                </div>
            </div>
        </right-wrap>
        <dialog-bublicCom :isShow="dialogAdd">

        </dialog-bublicCom>
    </div>
</template>

<script>
import LeftWrap from '@/components/common/management/LeftWrap'
import RightWrap from '@/components/common/management/RightWrap'
import DialogBublicCom from '@/components/common/management/DialogBublicCom'
export default {
    data(){
        return{
            value6: '',
            currentPage:1,
            data: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                    label: '三级 1-1-1'
                    }]
                }]
                }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                    label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                    label: '三级 2-2-1'
                    }]
                }]
                }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                    label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                    label: '三级 3-2-1'
                    }]
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
           
            formInline: {
                user: '',
                region: ''
            },
            tableData:[],
            dialogAdd:false

        }
    },
    components:{
         LeftWrap,RightWrap,DialogBublicCom
    },
    methods:{
        handleCurrentChange(){//分页

        },
        handleClick(){},
         handleNodeClick(data) {
            console.log(data);
        },
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style lang='scss' scoped>
    
    .el-input__inner{
        // height: 28px;
    }
    .el-button+.el-button{
        margin-left:5px;
    }
    .iconfont{
        margin-right:3px;
    }
</style>