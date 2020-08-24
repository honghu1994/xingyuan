<template>
    <div class="dynamic-detail">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">动态详情</div>
        </header-top>
        <div class="dynamic-content-detail">
            <h4>广东省民政厅关于村(居)民委员会协助做好社会救助工作的指导意见</h4>
            <p class="from">信息来源:省集体资产办<span>提供日期:</span>2018-11-23</p>
            <div class="content-detail"></div>
        </div>
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
export default {
    data(){
        return{

        }
    },
    components:{
        HeaderTop
    },
    methods:{
        
    }
}
</script>

<style lang='less' scoped>
    .dynamic-content-detail{

        padding: 18px 10px 0 10px;
        h4{
            font-size: 15px;
            line-height: 26px;
            text-align: center;
        }
        .from{
            font-size: 14px;
            text-align: center;
            color: #666;
            padding-bottom: 20px;
        }
        .content-detail{
            font-size: 14px;
            color: #333;
        }
    }
</style>