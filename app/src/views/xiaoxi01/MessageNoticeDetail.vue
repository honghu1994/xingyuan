<template>
    <div class="message-notice-detail">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">通知详情</div>
        </header-top>
        <div class="message-detail">
            <!-- <scroll
                class="scroll-content"
                ref="scroll"
            > -->
                <div class="message-item">
                    <p class="title">{{messageTitle}}</p>
                    <p class="soueceInfo"><span>{{messageSources}}</span><span>{{messageTime}}</span></p>
                </div>
                <div v-html="messageContent" class="content" id="contentWrap"></div>
            <!-- </scroll> -->
        </div>
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
import Scroll from '@/common/Scroll'
export default {
    data(){
        return{
            id:this.$route.query.id,
            type:this.$route.query.type,
            messageTitle:'',
            messageTime:'',
            messageContent:'',
            messageSources:'',
            userCode:this.$store.state.loginInfo.sessionVal.uSER_ID,
        }
    },
    components:{
        HeaderTop,Scroll
    },
    methods:{
        getMessageBoticeDetail(){
            this.$http.post('messageNotification/findById',{id:this.id}).then(res=>{
                if(res.data.code == 200){
                    this.messageTitle = res.data.data.title
                    this.messageTime = res.data.data.time
                    this.messageContent = res.data.data.content
                    this.messageSources = res.data.data.informationSources
                    let reg1 =new RegExp('<table','g')
                    let reg2 =new RegExp('</table>','g')
                    let str = this.messageContent.replace(reg1,"<div style='overflow-y:auto;'><table border='1'");
                    let str2 = str.replace(reg2,"</table></div>");
                    this.messageContent = str2
                }
            })
        },
        getSava(){
            this.$http.post('messageNotification/save',{relationId:this.id,userCode:this.userCode}).then(res=>{
                console.log(res)
            })
        }
    },
    created(){
        this.getMessageBoticeDetail()
        if(this.type == 1){
            this.getSava()
        }
    },
}
</script>

<style lang='less' scoped>
    .message-detail{
        padding: 0 10px;
        font-size: 15px;
        .message-item{
            border-bottom: 1px solid #ddd;
            padding: 12px 0;
            .title{
                font-weight: bold;
            }
            p{
                width: 100%;
                line-height: 20px;
                span{
                    margin-right:16px;
                }
            }
            .soueceInfo{
                display: flex;
                justify-content: space-between;
            }
        }
        
        .content{
            width: 100%;
            // overflow: hidden;
            overflow-y: auto;
        }
    }
    .scroll-content{
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        position: absolute;
        top: 1.18rem;
        bottom: 0px;
        // left:0;
        // right:0;
        border-top: 1px solid #ddd;
        padding:0 10px;

    }
    div::-webkit-scrollbar{
        display:none;
    }
</style>