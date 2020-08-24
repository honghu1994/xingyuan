<template>
    <div class="main-content">
         <left-wrap>
            <h3 slot="title" class="title">组织架构</h3>
            <div slot="content" style="padding-left:15px;padding-top:6px;">
                <div class="waitting" @click="navLeftBtn(1)" :class="{active:number == 1}">
                    <span class="iconfont icon-daibanshixiang"></span>
                    <p>代办事项</p>
                </div>
                <div class="waitting" @click="navLeftBtn(2)" :class="{active:number == 2}">
                    <span class="iconfont icon-yiban-moren"></span>
                    <p>已办事项</p>
                </div>
            </div>
         </left-wrap>
         <right-wrap>
             <div slot='breadcrumb' class="breadcrumb-nav">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item >资产管理</el-breadcrumb-item>
                <el-breadcrumb-item>资产待办</el-breadcrumb-item>
                <el-breadcrumb-item><span class="isYellow">{{breadcrumbName}}</span></el-breadcrumb-item>
                </el-breadcrumb>
            </div >
            <div slot="authContent" class="query">
                <div v-if="number == 1">
                    <div class="navBtnSearch">
                        <div>
                            <el-button type="success" size="mini"><span class="iconfont icon-dingzi"></span>办理</el-button>
                            <el-button type="success" size="mini"><span class="iconfont icon-fanhuiyou"></span>跳转</el-button>
                            <el-button type="success" size="mini"><span class="iconfont icon-yaoqingtongshi"></span>邀请</el-button>
                            <el-button type="success" size="mini"><span class="iconfont icon-jiaoyin"></span>跟踪</el-button>
                        </div>
                        <div>
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="活动区域">
                                    <el-select v-model="form.region" placeholder="请选择活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    <div>
                        <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#0588DA',color:'#fff'}" >
                            <el-table-column fixed label="" width="60">

                            </el-table-column>
                            <el-table-column fixed prop="title" label="标题"></el-table-column>
                            <el-table-column  prop="applicantCompany" label="申请单位"></el-table-column>
                            <el-table-column  prop="currentLink" label="当前环节" width="150"></el-table-column>
                            <el-table-column  prop="sourcePerson" label="来源人" width="150"></el-table-column>
                            <el-table-column  prop="sourceTime" label="来源时间" width="150"></el-table-column>
                            <el-table-column  prop="flowName" label="流程名称" width="150"></el-table-column>
                            <el-table-column fixed="right" label="详细说明" width="120">
                                <template slot-scope="scope">
                                    <el-button
                                    @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
                 <div v-if="number == 2">
                     <div class="navBtnSearch">
                        <div>
                            <el-button type="success" size="mini"><span class="iconfont icon-weibiaoti545"></span>撤销</el-button>
                            <el-button type="success" size="mini"><span class="iconfont icon-jiaoyin"></span>跟踪</el-button>
                        </div>
                        <div>
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="活动区域">
                                    <el-select v-model="form.region" placeholder="请选择活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    <div>
                    <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#0588DA',color:'#fff'}" >
                        <el-table-column fixed label="" width="60">

                        </el-table-column>
                        <el-table-column fixed prop="title" label="标题"></el-table-column>
                        <el-table-column  prop="applicantCompany" label="申请单位"></el-table-column>
                        <el-table-column  prop="currentLink" label="当前环节" width="150"></el-table-column>
                        <el-table-column  prop="sourcePerson" label="来源人" width="150"></el-table-column>
                        <el-table-column  prop="sourceTime" label="来源时间" width="150"></el-table-column>
                        <el-table-column  prop="dealWithTime" label="办理时间" width="150"></el-table-column>
                        <el-table-column  prop="flowName" label="流程名称" width="150"></el-table-column>
                        <el-table-column fixed="right" label="详细说明" width="120">
                            <template slot-scope="scope">
                                <el-button
                                @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
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
            breadcrumbName:'待办',
            number:1,
            form: {
                region: null,
            },
            tableData:[]
        }
    },
    components:{
         LeftWrap,RightWrap
    },
    methods:{
        navLeftBtn(n){
            if(n==1){
                this.number = n
                this.breadcrumbName = '待办'
            }else if(n==2){
                this.number = n
                this.breadcrumbName = '已办'
            }
        }
    }
}
</script>

<style lang='scss' scoped>
    .waitting{
        margin: 0 auto;
        padding:3px;
        width: 80px;
        border: 2px solid transparent;
        margin-top: 40px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        span{
            font-size: 36px;
        }
        .iconfont{
            color: grey;
        }
        p{
            padding-top: 6px;
        }
    }
    .active{
            border: 2px solid gray;
        }
    .query{
        padding-left:20px; 
        padding-right:30px; 
        .navBtnSearch{
            display:flex;
            justify-content: space-between;
        }
        .iconfont{
            margin-right:3px;
        }
    }
    
</style>