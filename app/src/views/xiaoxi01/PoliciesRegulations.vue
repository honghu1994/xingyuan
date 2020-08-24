<template>
    <div class="policies-regulations">
        <header-top>
                <div slot="left">
                    <img @click="$router.go(-1)" src="@/assets/img/back.png">
                </div>
                <div slot="mid">政策法规</div>
            </header-top>
            <div class="policies-content">
                <div class="policies-item" @click="goPoliciesDetail()">
                    <p>深圳市党镇机关内公务接待公务接待管理接待(深办发【2014】12号)</p>
                    <span>2018-11-23</span>
                </div>
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
        goPoliciesDetail(){
            this.$router.push('/xiaoxi/policiesRegulationsDetail')
        }
    }
}
</script>

<style lang='less' scoped>
    .policies-item{
        border-bottom: 1px solid #ddd;
        padding:10px 20px;
        p{  
            padding-top: 8px;
            line-height: 20px;
            font-size: 15px;
            font-weight: bold;
            color: #000;
        }
        span{
            display: block;
            padding-top: 6px;
            font-size: 14px;
            color: #666;
            
        }
    }
</style>