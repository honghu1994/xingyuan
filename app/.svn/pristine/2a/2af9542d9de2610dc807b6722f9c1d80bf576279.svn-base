<template>
    <div class="receive-mail">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">收件箱</div>
        </header-top>
        <div class="receive-info">
            <div class="receive-item" @click="emailDetailBtn" v-for='(item,index) in indexList' :key='index'>
                <!-- <p class="icon-img"> -->
                <span style=" font-size:40px; color:#ddd;margin-top:8px; " class='iconfont icon-yonghu'></span>   
                <!-- </p> -->
                <div class="wrap">
                    <div class="item-title" >
                        <div style="display:flex;align-items: center;">
                            <!-- <span class="isShowLeft"></span> -->
                            <h4>{{item.from}}</h4>
                        </div>
                        <span class=''>{{item.date}}</span>
                    </div>
                    <p  class='txt'>{{item.subject}}</p>
                    <p class='txt'>{{item.text}}</p>
                </div>
            </div>
        </div>
        <loading v-if='isShowLoading'></loading>
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
import Loading from '@/common/Loading'

export default {
    data(){
        return{
            id:this.$store.state.loginInfo.sessionVal.uSER_ID,
            indexList:[],
            isShowLoading:false
        }
    },
    components:{
        HeaderTop,Loading
    },
    methods:{
        emailDetailBtn(){
            this.$router.push('/emailList/receiveMailDetail')
        },
        getInbox(){
            this.isShowLoading=true
            this.$http.post('/app_module2/getInbox',{user_code:this.id}).then(res=>{
                console.log(res)
                if(res.data.code == 200){
                    this.isShowLoading=false
                    this.indexList = res.data.data.pdList
                }
            })
        },
        
    },
    mounted(){
        this.getInbox()
    }
}
</script>

<style lang='less' scoped>
    .receive-mail{
        width:100%;
        overflow:hidden;
        h4{
            width:4.3rem;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        .item-title{
            span{
                display:inline-block;
                text-align: right;
                width:1.6rem;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                // border: 1px solid red;
            }
        }
        .txt{
            width:6.2rem;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
    .receive-item{
        padding-left: 8px;
        font-size: 14px;
        padding-top: 6px;
        // padding-bottom: 6px;
        display: flex;

        // .icon-img{
        //     line-height: 62px;
        //     width: 60px;
        //     span{
        //         border: 1px solid #ccc;
        //         display: inline-block;
        //         width: 50px;
        //         height: 50px;
        //         line-height: 50px;
        //         border-radius: 50%;
        //         text-align: center;
        //     }
        // }
        .wrap{
            border-bottom: 1px solid #ddd;
            padding-bottom:8px;
            flex: 1;
            padding-left:10px;
            h4{
            line-height: 22px;
                color: #333;
            }
            p{
                line-height: 20px;
                font-size: 13px;
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
                
            }
        }
    }
    
</style>