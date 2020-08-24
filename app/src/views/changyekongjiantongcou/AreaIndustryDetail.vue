<template>
    <div class="area-industry">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">片区产业指引</div>
        </header-top>
        <div class="area-industry-content">
            <h4>{{appPlanningGuidelines.address}}</h4>
            <div class="area-item">
                <p>规划指引</p>
                <p>{{appPlanningGuidelines.areaplan}}</p>
            </div>
            <div class="area-item">
                <p>重点产业</p>
                <p>{{appPlanningGuidelines.focus_industry}}</p>
            </div>
            <div class="area-item">
                <p>细分领域</p>
                <p>{{appPlanningGuidelines.subdivision}}</p>
            </div>
            <div class="area-item">
                <p>核心方向</p>
                <p>{{appPlanningGuidelines.core}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'

export default {
    data(){
        return{
            appPlanningGuidelines:{},
            id:this.$route.query.area_id
        }
    },
    components:{
        HeaderTop
    },
    methods: {
        getAppPlanningGuidelines(){
            this.$http.post('app_module2/getAppPlanningGuidelines',{area_id:this.id}).then(res=>{
                // console.log(res)
                if(res.data.code == 200){
                    this.appPlanningGuidelines = res.data.data.pd
                }
            })
        },
        
    },
    mounted(){
        this.getAppPlanningGuidelines()
    }
}
</script>

<style lang='less' scoped>
    .area-industry{
        position: absolute;
        left: 0;
        right:0;
        bottom:0;
        top:0;
        z-index: 100;
        background-color: #fff;
    }
    .area-industry-content{
        padding: 0 10px;
        font-size: 0.32rem;
        h4{
            height: 40px;
            line-height: 40px;
            padding-top: 10px;
            font-size: 0.34rem;
        }
        .area-item{
            border-bottom: 1px solid #ddd;
            padding-bottom:6px;
            p{
               &:nth-of-type(1){
                   font-size: 0.34rem;
                   color: #000;
                   height: 36px;
                   line-height: 36px;
               } 
               &:nth-of-type(2){
                   color: #333;
                   line-height: 22px;
               } 
            }
        }
    }
</style>