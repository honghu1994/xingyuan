<template>
    <div class="assets-report">
        <div slot='breadcrumb' class="breadcrumb-nav">
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item >资产管理</el-breadcrumb-item>
            <el-breadcrumb-item><span class="isYellow">资产报表</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div >
        <div style="padding-top:20px;">
            <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#0588DA',color:'#fff'}" >
                <el-table-column  type="index" label="序号" width="100"></el-table-column>
                <el-table-column  prop="applicantCompany" label="报表"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tableData:[]
        }
    }
}
</script>

<style lang='scss' scoped>
    .assets-report{
        padding: 30px 20px;
        .isYellow{
            color: #ffff00;
        }
    }
    
</style>