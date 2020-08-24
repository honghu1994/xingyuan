<template>
    <div class="main-content">
        <left-wrap>
            <h3 slot="title" class="title">组织架构</h3>
            <div slot="content" style="padding-left:15px;padding-top:6px;">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="background: transparent;"></el-tree>
            </div>
        </left-wrap>
        <right-wrap>
            <div slot='breadcrumb' class="breadcrumb-nav">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item >资产管理</el-breadcrumb-item>
                <el-breadcrumb-item><span class="isYellow">其它资产类登记</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div >
            <div slot="authContent" class="query" style="padding:0 20px;">
                <el-form :inline="true" :model="fixedAssetForm" class="demo-form-inline">
                    <el-form-item label="包含下级单位:">
                        <el-checkbox v-model="fixedAssetForm.checked"></el-checkbox>
                    </el-form-item>
                    <el-form-item label="资产名称">
                        <el-input v-model="fixedAssetForm.conpany" placeholder="请输入机构名称"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">搜索</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">综合搜索</el-button>
                    </el-form-item>
                </el-form>
                <div class="navBtn">
                    <el-button type="success" size="mini"><span class="iconfont icon-xinzeng"></span>新增</el-button>
                    <el-button type="success" size="mini"><span class="iconfont icon-xinzeng"></span>新增子资产</el-button>
                    <el-button type="success" size="mini"><span class="iconfont icon-xiugai"></span>修改</el-button>
                    <el-button type="success" size="mini"><span class="iconfont icon-shanchu"></span>删除</el-button>
                    <el-button type="primary" size="mini"><span class="iconfont icon-chakan"></span>查看</el-button>
                    <el-button type="primary" size="mini"><span class="iconfont icon-daochu"></span>导出</el-button>
                    <el-button type="primary" size="mini"><span class="iconfont icon-biangengjilu"></span>转待交易</el-button>
                    <el-button type="primary" size="mini"><span class="iconfont icon-hetonggaikuang"></span>生成合同</el-button>
                    <el-button type="primary" size="mini"><span class="iconfont icon-chakanwenjian"></span>查看合同</el-button>
                </div>
                <div style="padding-top:20px;">
                    <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#0588DA',color:'#fff'}" >
                        <el-table-column fixed label="" width="60">
                        </el-table-column>
                        <el-table-column fixed prop="title" label="组织机构"></el-table-column>
                        <el-table-column  prop="applicantCompany" label="资产性质"></el-table-column>
                        <el-table-column  prop="currentLink" label="资产类别" width="150"></el-table-column>
                        <el-table-column  prop="sourcePerson" label="资产编号"  width="150"></el-table-column>
                        <el-table-column  prop="sourceTime" label="资产名称"></el-table-column>
                        <el-table-column  prop="flowName" label="购置日期" width="120"></el-table-column>
                        <el-table-column  prop="flowName" label="使用年限" width="100"></el-table-column>
                        <el-table-column  prop="flowName" label="数量" width="100"></el-table-column>
                        <el-table-column  prop="flowName" label="交易状态" width="100"></el-table-column>
                        <el-table-column  prop="flowName" label="资产类型" width="100"></el-table-column>
                        
                    </el-table>
                </div>
            </div>
        </right-wrap>
    </div>
</template>
<script>
import LeftWrap from '@/components/common/management/LeftWrap'
import RightWrap from '@/components/common/management/RightWrap'
export default {
    data(){
        return{
            fixedAssetForm:{
                place:'',
                conpany:'',
                checked:''

            },
            tableData:[],
            data: [{
                label: '南山区',
                children: [
                        {
                            label: '南头街道办',
                            children: [
                                {
                                    label: '深圳市大新股份有限公司',
                                    children: [
                                        {
                                            label: '深圳市大新股份公司盛世分公司'
                                        },
                                        {
                                            label: '深圳市大新股份有限公司'
                                        },
                                        {
                                            label: '大新新海物业管理分公司'
                                        },
                                        {
                                            label: '大新新海大厦停车场'
                                        },
                                        {
                                            label: '大新新海物业管理分公司'
                                        },
                                        {
                                            label: '大新新海停车场'
                                        },
                                    ]
                                },
                                {
                                    label: '深圳市南头城实业股份有限公司',
                                    children: [
                                        {
                                            label: '南头城第一发展部'
                                        },
                                        {
                                            label: '南头城第二发展部'
                                        },
                                        {
                                            label: '南头城第三发展部'
                                        },
                                        {
                                            label: '南头城第四发展部'
                                        },
                                        {
                                            label: '南头城第五发展部'
                                        },
                                        {
                                            label: '南头城第六发展部'
                                        },
                                    ]
                                },
                                {
                                    label: '深圳市田厦实业股份有限公司',
                                    children: [{
                                        label: '深圳市大新股份有限公司'
                                    }]
                                },
                            ]
                        },{
                            label: '南山街道办',
                            children: [{
                                label: '深圳市大新股份有限公司',
                                children: [{
                                    label: '深圳市大新股份有限公司'
                                }]
                            }]
                        },{
                            label: '西丽街道办',
                            children: [{
                                label: '深圳市大新股份有限公司',
                                children: [{
                                    label: '深圳市大新股份有限公司'
                                }]
                            }]
                        },{
                            label: '沙河街道办',
                            children: [{
                                label: '深圳市大新股份有限公司',
                                children: [{
                                    label: '深圳市大新股份有限公司'
                                }]
                            }]
                        },
                    ]
                // }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
        }
        
    },
    methods:{
        handleNodeClick(data) {
            console.log(data);
        },
        onSubmit(){

        }
    },
    components:{
        LeftWrap,RightWrap
    },
}
</script>
<style lang='scss' scoped>

</style>