<template>
  <div class="asset-managment">
    <header-com>
        <div style="display:flex; margin-left:72px;">
            <div class="nav-title " @mouseover="type = 1" @mouseleave=" type = ''">
                <span @click="navBtn(1)" >资产管理</span>
                <div class="nav-dropDown" ref="nav-dropDown" v-if="type == 1">
                    <div class="nav-item" @click="assetsBtn(1)"><span class="iconfont icon-tubiao"></span>资产待办</div>
                    <div class="nav-item" @click="assetsBtn(2)"><span class="iconfont icon-tubiao"></span>资源类登记</div>
                    <div class="nav-item" @click="assetsBtn(3)"><span class="iconfont icon-tubiao"></span>固定资产类登记</div>
                    <div class="nav-item" @click="assetsBtn(4)"><span class="iconfont icon-tubiao"></span>投资类登记</div>
                    <div class="nav-item" @click="assetsBtn(5)"><span class="iconfont icon-tubiao"></span>无形资产类登记</div>
                    <div class="nav-item" @click="assetsBtn(6)"><span class="iconfont icon-tubiao"></span>其它资产类登记</div>
                    <div class="nav-item" @click="assetsBtn(7)"><span class="iconfont icon-tubiao"></span>资产报表</div>
                </div>
            </div>
            <div class="nav-title " @mouseover="type = 2" @mouseleave=" type = ''">
                <span @click="navBtn(2)" >合同管理</span>
                <div class="nav-dropDown" v-if="type == 2">
                    <div class="nav-item"><span class="iconfont icon-tubiao"></span>资产待办</div>
                    <div class="nav-item"><span class="iconfont icon-tubiao"></span>资源类登记</div>
                    <div class="nav-item"><span class="iconfont icon-tubiao"></span>固定资产类登记</div>
                    <div class="nav-item"><span class="iconfont icon-tubiao"></span>投资类资产类登记</div>
                    <div class="nav-item"><span class="iconfont icon-tubiao"></span>无形资产类登记</div>
                    <div class="nav-item"><span class="iconfont icon-tubiao"></span>其它资产类登记</div>
                </div>
            </div>
            <div class="nav-title " @click="navBtn(3)" @mouseover="type = 3" @mouseleave=" type = ''">
                <span >资产交易</span>
                <div class="nav-dropDown" v-if="type == 3">
                    <div class="nav-item"><span class="iconfont icon-tubiao"></span>资产待办</div>
                    <div class="nav-item"><span class="iconfont icon-tubiao"></span>资源类登记</div>
                    <div class="nav-item"><span class="iconfont icon-tubiao"></span>固定资产类登记</div>
                    <div class="nav-item"><span class="iconfont icon-tubiao"></span>投资类资产类登记</div>
                    <div class="nav-item"><span class="iconfont icon-tubiao"></span>无形资产类登记</div>
                    <div class="nav-item"><span class="iconfont icon-tubiao"></span>其它资产类登记</div>
                </div>
            </div>
        </div>
        
        
    </header-com>
    <router-view />
   
  </div>
</template>

<script>
import HeaderCom from '@/components/common/management/HeaderCom'
export default {
    data(){
        return{
            type:'',
            offBtn1:true,
            offBtn2:true,
            offBtn3:true,
        }
    },
    computed:{
        
    },
    components:{
         HeaderCom
    },
    methods: {
        assetsBtn(n){//资产管理下拉框
            if(n == 1){
                this.type = ''
                this.$router.push('/assetManagement/assetsDandle')
            }else if(n==2){
                this.type = ''
                this.$router.push('/assetManagement/resourcesRegister')
            }else if(n==3){
                this.type = ''
                this.$router.push('/assetManagement/fixedAssetsRegistration')
            }else if(n==4){
                this.type = ''
                this.$router.push('/assetManagement/investmentRegistration')
            }else if(n==5){
                this.type = ''
                this.$router.push('/assetManagement/noAssetsRegistration')
            }else if(n==6){
                this.type = ''
                this.$router.push('/assetManagement/otherAssetsRegistration')
            }else if(n==7){
                this.type = ''
                this.$router.push('/assetManagement/assetsReportForm')
            }
            
        },
        navBtn(n){
            // let navs = document.getElementsByClassName('nav-dropDown');
            // for(let i=){

            // }
            // if(n == 1){
              
            // }
            // else if(n == 2){
               
            // }
            // else if(n == 3){
               
            // }
        },
        
    }
}
</script>

<style lang='scss' scoped>
    .asset-managment{
        
        .nav-dropDown{
            position: absolute;
            left:0;
            top:46px;
            width:160px;
            text-align: left;
            box-sizing: border-box;
            
            color: #fff;
            background: rgba(8,86,161,0.6);
            z-index: 20;
            border: 1px solid #0A539E;
            // display: none;
            .nav-item{
                padding-left:10px;
                height:36px;
                line-height: 36px;
                .icon-tubiao{
                    color:#1DBAD0; 
                    font-size:14px;
                }
                &:hover{
                    background: rgb(187, 196, 197);
                }
            }
            // &:hover{
            //     display: block;
            // }
        }
        
    }
    // .nav-title:hover{
    //     .nav-dropDown{
    //         display: block;
    //     }
    // }

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