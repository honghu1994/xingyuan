<template>
    <div class="receive-mail">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">草稿箱</div>
        </header-top>
        <div class="receive-info">
            <div class="receive-item" @click="emailDetailBtn">
                <!-- <p class="icon-img">
                    <span></span>      
                </p> -->
                <span style=" font-size:40px; color:#ddd;margin-top:8px; " class='iconfont icon-yonghu'></span>  
                <div class="wrap">
                    <div class="item-title" >
                        <div style="display:flex;align-items: center;">
                            <!-- <span class="isShowLeft"></span> -->
                            <h4>环信</h4>
                        </div>
                        <span>9-9</span>
                    </div>
                    <p>开发者必看</p>
                    <p>点击这里查看更多信息</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
export default {
    components:{
        HeaderTop
    },
    methods:{
        emailDetailBtn(){
            this.$router.push('/emailList/receiveMailDetail')
        }
    }
}
</script>

<style lang='less' scoped>
    .receive-item{
        padding-left: 8px;
        font-size: 13px;
        padding-top: 6px;
        padding-bottom: 6px;
        display: flex;
        .icon-img{
            line-height: 62px;
            width: 60px;
            span{
                border: 1px solid #ccc;
                display: inline-block;
                width: 50px;
                height: 50px;
                line-height: 50px;
                border-radius: 50%;
                text-align: center;
            }
        }
        .wrap{
            border-bottom: 1px solid #ddd;
            flex: 1;
            padding-left:10px;
            h4{
                line-height: 22px;
                color: #000;
                font-size: 15px;
                font-weight: normal;

            }
            p{
                line-height: 20px;
            }
            p:nth-of-type(1){
                color: #333;
            }
            p:nth-of-type(2){
                color: #666;
            }
            .item-title{
                padding-right: 10px;
                display:flex;
                justify-content: space-between;
                align-items: center;
                .isShowLeft{
                    display: inline-block;
                    width:12px;
                    height: 12px;
                    background:aqua;
                    border-radius: 50%;
                    margin-right: 3px;
                }
                span{
                    font-size: 15px;
                }
            }
        }
    }
</style>