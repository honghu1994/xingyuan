<template>
  <div class="asset-managment">
    <header-com>
        <div class="nav-title " :class="item.posClass" v-for="(item,index) in navbar" :key="index">
            <span>{{item.name}}</span>
        </div>
    </header-com>
    <div class="main-content">
        <left-wrap>
            <h3 slot="title" class="title">组织架构</h3>
            <div slot="content">
                <tree :data="treeData"/>
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
            <div slot="authContent" class="query">
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

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </right-wrap>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@/components/common/management/HeaderCom'
import LeftWrap from '@/components/common/management/LeftWrap'
import RightWrap from '@/components/common/management/RightWrap'
import Tree from '@/components/common/tree/Tree'
export default {
    data(){
        return{
           navbar:[{name:'资产管理',posClass:'first-pos'},{name:'合同管理'},{name:'资产交易'}],
           treeData:[
               {id:1,open: true,name: '财务管理-1',level: 0,checked: false,status:1,
                    children: [
                    {id:2,open: true,name: '财务套财-1',level: 1,checked: false,status:2,
                        children: [
                            {id:3,open: false, name: '套财类型维护-3', level: 2, checked: false,status:3,},
                            {id:4,open: false, name: '套财类型维护-4', level: 2, checked: false,status:3,},
                            {id:5,open: false, name: '套财类型维护-5', level: 2, checked: false,status:3,},
                            {id:6,open: false, name: '套财类型维护-6', level: 2, checked: false,status:3,},
                            {
                            id:7,open: false,name: '基础数据-7',level: 2,checked: false, status:2,
                                children: [
                                    {id:8,open: false,name: '套财类型维护-8',level: 3,checked: false,status:2,
                                        children: [
                                            {id:9,open: false, name: '套财类型维护-9', level: 4, checked: false,status:3,},
                                            {id:10,open: false, name: '套财类型维护-10', level: 4, checked: false,status:2,children:[
                                                {id:11,open: false, name: '套财类型维护-11', level: 5, checked: false,status:3},
                                            ]}
                                        ]
                                    }
                                ]
                            }
                        ]
                    }]
                }
            ],
            formInline: {
                user: '',
                region: ''
            }
        }
    },
    components:{
         HeaderCom,LeftWrap,RightWrap,Tree
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style lang='scss' scoped>
    .asset-managment{
        .main-content{
            width: 18.8rem;
            display: flex;
            margin: 0 auto;
            justify-content: space-between;
            margin-top: 0.3rem;
            .breadcrumb-nav{
                padding-left:25px;
                height: 0.64rem;
                margin-bottom: 0.23rem;
                .el-breadcrumb{
                line-height: 0.64rem;
                .isYellow{
                    color: #ffff00;
                }
                }
            }
            .title{
                height: .38rem;
                line-height: 0.38rem;
                text-align: center;
                color: #ffffff;
                font-size: 0.15rem;
            }
        }
        
    }
    .el-input__inner{
        height: 28px;
    }
</style>