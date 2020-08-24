<template>
  <div class="nest-link">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">{{name}}</div>
        </header-top>
        <div class="page-wrapper">
            <iframe id="content" :src="url"></iframe>
        </div>
  </div>
</template>

<script>
import HeaderTop from '@/common/Header'
export default {
    name:'NestLink',
    data(){
        return{
            url:'',
            name:''
        }
    },
    components:{
        HeaderTop
    },
    mounted(){
        this.url = this.$route.params.url
        this.name = this.$route.params.name
        console.log(this.$route.params.url)
    }
}
</script>

<style lang='less' scoped>
    .nest-link{
        width:100%;
        height:100vh;
        position: relative;
        .page-wrapper{
            position: absolute;
            top:1.18rem;
            left:0;
            right: 0;
            bottom:0;
            #content{
                width: 100%;
                height: 100%;
            }
        }
    }
    iframe {
        border-width:0; 
    }
</style>