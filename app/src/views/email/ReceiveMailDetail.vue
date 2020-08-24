<template>
    <div class="receive-mail">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">收件箱</div>
        </header-top>
        <div class="receive-detail-info">
            <h4>App</h4>
            <div class="detail-title">
                <p>510287246</p>
                <div @click="changeClick">
                    <span v-if="isShow" >显示详情</span>
                    <span v-else>隐藏详情</span>
                </div>
            </div>
           <div :class="{isHiden:isShow}">
                <div class="send-info">
                    <p>发件人:</p>
                    <div>
                        <p>510287246</p>
                        <span>510287246@qq.com</span>
                    </div>
                </div>
                <div class="send-info">
                    <p>收件人:</p>
                    <div>
                        <p>510287246</p>
                        <span>510287246@qq.com</span>
                    </div>
                </div>
                <div class="send-info">
                    <p>时间:</p>
                    <div>
                        <p>2019/11/8</p>
                    </div>
                </div>
                <div class="send-info">
                    <p>附件:</p>
                    <div>
                        <p>app功能介绍0909.pptx</p>
                    </div>
                </div>
           </div>
           <div class="attachment">
                <span class="attachment-icon">P</span>
                <div>
                    <!-- 下載 -->
                    <a href="" download="app功能介绍0909.pptx">app功能介绍0909.pptx</a><br>
                    <span>5.55M</span>
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
            isShow:true
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        changeClick(){
            this.isShow = !this.isShow
        }
    }
}
</script>

<style lang='less' scoped>
    .receive-mail{
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        background-color: #fff;
    }
    .receive-detail-info{
        font-size: 16px;
        padding: 0 10px;
        h4{
            height: 40px;
            line-height: 40px;
            font-size: 17px;
        }
        .detail-title{
            display: flex;
            justify-content: space-between;
            height: 30px;
            line-height: 30px;
            p{
                color: aqua;
                font-weight: bold;
            }
            span{
                color: blue;
            }
        }
        .isHiden{
            display: none;
        }
        .send-info{
            display: flex;
            margin-bottom: 6px;
            p{
                width:65px;
                text-align: right;
                padding: 8px 0;
            }
            div{
                p{
                    color: #333;
                    width:5rem;
                    text-align: left;
                    padding-left:8px;
                }
            }
            span{
                color: #333;
                padding-left:8px;
            }
        }
        .attachment{
            display: flex;
            background: #ddd;
            position: absolute;
            bottom: 10px;
            left: 0;
            width: 100%;
            padding: 4px;
            .attachment-icon{
                width: 40px;
                height: 40px;
                display: inline-block;
                background-color:burlywood;
                line-height: 40px;
                text-align: center;
                margin-right: 5px;
            }
            div{
                p{
                    color: #333;

                }
                span{
                    color: #666;
                }
            }
        }
    }
</style>