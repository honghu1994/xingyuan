<template>
    <div id="message-dynamic">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">工作动态</div>
        </header-top>
        <div class="message-dynamic">
            <div class="dynamic-item" @click="goDynamicDetail()">
                <h4>南山区国资局</h4>
                <span>1小时前</span>
                <p class="item-p">区国资局举办2019年举办股份合作公司土地开发与城市更新项目商讨会</p>
                <div class="item-content">
                    <img src="@/assets/img/gz_pic1.png" alt="">
                    <p>
                        2019年5月5日下午3时，区国资局在XX会议室召开股份合作公司土地开发与城市更新项目商讨会
                    </p>
                </div>
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
        goDynamicDetail(){
            this.$router.push('/xiaoxi/dynamicDetail')
        }
    }
}
</script>

<style lang='less' scoped>
    .message-dynamic{
        padding: 0 10px;
        .dynamic-item{
            padding: 12px 0;
            font-size: 15px;
            border-bottom: 1px solid #ddd;
            color: #666;
            h4{
                font-size: 16px;
                color: #000;
            }
            span{
                display: block;
                line-height: 30px;
            }
            .item-p{
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                line-height: 30px;
            }
            .item-content{
                background: #eee;
                padding: 10px;
                display: flex;
                align-items: center;
                font-size: 14px;
                img{
                    width: 100px;
                    height: 78px;
                    margin-right: 8px;
                }
                p{

                }
            }
        }
    }
</style>