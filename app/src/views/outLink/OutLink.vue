<template>
  <div class="out-link">
    <header-top>
        <div slot="left">
            <img @click="$router.go(-1)" src="@/assets/img/back.png">
        </div>
        <div slot="mid">外部链接</div>
    </header-top>
    <div class="links">
        <!-- <div class="item" @click="$router.push({name:'NestLink',params:{url:'http://www.szns.gov.cn/ydmh/',name:'南山去政府官网'}})">
            <p>南山去政府官网</p>
            <span class="iconfont icon-jiantou"></span>
        </div> -->
        
        <!-- <div class="item" @click="$router.push({name:'NestLink',params:{url:'http://www.eoechina.com.cn/cn2016/mobilePages/index.html',name:'深圳市联合产权交易所'}})">
            <p>深圳市联合产权交易所</p>
            <span class="iconfont icon-jiantou"></span>
        </div> -->
        <a class="item" @click="jumpBtn">
            <p>南山区政府官网</p>
            <span class="iconfont icon-jiantou"></span>
        </a>
        <a href="http://www.eoechina.com.cn/cn2016/mobilePages/index.html" class="item">
            <p>深圳市联合产权交易所</p>
            <span class="iconfont icon-jiantou"></span>
         </a>
        <div class="item" @click="$router.push({path:'/scanQRCode'})">
            <p>南山原住民</p>
            <span class="iconfont icon-jiantou"></span>
        </div>
        
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/common/Header'
export default {
    name:'OutLink',
    data(){
        return{

        }
    },
    components:{
        HeaderTop
    },
    methods:{
        jumpBtn(){
            parent.location.href = 'http://www.szns.gov.cn/ydmh/'
        }
    }
}
</script>

<style lang='less' scoped>
    .links{
        font-size: 17px;
        .item{
            display: block;
            color: #333;
            height: 100px;
            width: 100%;
            border-bottom:1px solid #ddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:0 5px;
            box-sizing: border-box;
            span{
                font-size: 17px;
                color: #ccc;
            }
        }   
    }
</style>