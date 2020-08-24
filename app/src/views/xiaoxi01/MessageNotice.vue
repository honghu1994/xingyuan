<template>
    <div class="message-notice">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">通知</div>
        </header-top>
        <div class="message-content">
            <scroll
                class="scroll-content"
                ref="scroll"
                :probe-type='3'
                :pull-up-load="true"
                @pullingup='loadMore'
            >
                <div class="message-item" @click="messageDetail(item.id,item.type)" v-for="item in messageNotificationList" :key="item.id">
                    <p class="title">{{item.title}}</p>
                    <p class="soueceInfo"><span>{{item.informationSources}}</span><span>{{item.time}}</span></p>
                    <span class="circularShow" v-show="item.type == 1"></span>
                </div>
             <!-- <div class="message-item">
                <p class="title">关于召开大新实业股份有限公司2019年第二次股东大会的通知</p>
                <div class="img-wrap">
                    <img src="@/assets/img/gz_pic1.png" alt="">
                    <img src="@/assets/img/gz_pic2.png" alt="">
                    <img src="@/assets/img/gz_pic1.png" alt="">
                </div>
                <p><span>大新实业股份有限公司</span>7分钟前</p>
            </div> -->
            <p v-if="isShowMessage" style="text-align:center;color:#666; height:20px;margin-top:5px;font-size:13px;">没有更多数据</p>
            </scroll>
        </div>
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
import Scroll from '@/common/Scroll'
export default {
    data(){
        return{
            nowPage:0,
            pagesCount:1,
            isShowMessage:false,
            userCode:this.$store.state.loginInfo.sessionVal.uSER_ID,
            messageNotificationList:[]
        }
    },
    components:{
        HeaderTop,Scroll
    },
    methods:{
        messageDetail(id,type){
            this.$router.push({path:'/xiaoxi/messageNoticeDetail',query:{id:id,type:type}})
        },
        getMessageNotificationListPage(){
            this.nowPage = this.nowPage + 1
            this.$http.post('messageNotification/getMessageNotificationListPage',{
                nowPage:this.nowPage,
                userCode:this.userCode}).then(res=>{
                    console.log(res)
                    if(res.data.code == 200){
                        // this.messageNotificationList = res.data.data.data
                        this.messageNotificationList.push(...res.data.data.data)
                        this.pagesCount = res.data.data.pageUtil.pageCount
                        setTimeout(()=>{
                            this.$refs.scroll.refresh()
                            this.$refs.scroll.finishPullUp()
                        }, 100);
                    }
            })
        },
        loadMore(){
            // console.log('加载更多')
            console.log(this.nowPage)
            console.log(this.pagesCount)
            if( this.nowPage >= this.pagesCount ){
                this.isShowMessage = true
                return
            }
            this.getMessageNotificationListPage()
        },
    },
    mounted(){
        this.getMessageNotificationListPage()
    }
}
</script>

<style lang='less' scoped>
    .message-content{
        padding: 0 10px;
        font-size: 15px;
        box-sizing: border-box;
        .message-item{
            padding: 12px 0;
            border-bottom: 1px solid #ddd;
            position: relative;
            .title{
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            p{
                width: 100%;
                line-height: 26px;
                span{
                    margin-right:16px;
                }
            }
            img{
                width: 2rem;
                height: 1.52rem;
            }
            .soueceInfo{
                display: flex;
                justify-content: space-between;
            }
            .circularShow{
                position: absolute;
                width: 8px;
                height: 8px;
                background-color: red;
                border-radius: 50%;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        
    }
    .scroll-content{
        overflow: hidden;
        position: absolute;
        top: 1.18rem;
        bottom: 50px;
        left:0;
        right:0;
        border-top: 1px solid #ddd;
        padding:0 10px;

    }
</style>