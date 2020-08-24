<template>
  <div class="scan-code">
      <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">南山原住民</div>
        </header-top>
        <div class="qr-code">
            <img src="@/assets/img/ma.png" alt="">
            <p>关注南山原住民公众号</p>
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
}
</script>

<style lang='less' scoped>
    .qr-code{
        position: absolute;
        left: 0;
        top: 1.18rem;
        bottom:0;
        right:0;
        img{
            width: 180px;
            height: 180px;
            position: absolute;
            left: 50%;
            top:40%;
            transform: translate(-50%,-50%)
        }
        p{
            position: absolute;
            left: 50%;
            top: 62%;
            transform: translate(-50%,-50%);
            font-size: 16px;
            width: 100%;
            text-align: center;
        }
    }
</style>