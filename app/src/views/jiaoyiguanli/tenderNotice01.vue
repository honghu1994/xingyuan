<template>
  <div class="notice">
    <header-top>
      <div slot="left">
        <img @click="$router.go(-1)" src="@/assets/img/back.png" />
      </div>
      <div slot="mid">招标公告</div>
    </header-top>
    <div class="content">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多数据了" @load="onLoad">    
                <div class="li" style="height:60px;" @click="toTenderMessage(item.noticeId)" v-for="item in demandList" :key="item.noticeId">
                    <p class="pad">
                        <span class="font"> {{item.proName}}</span>
                        <span  class="font01">
                        <!-- {{item.proName}}元/月 -->
                        </span>
                    </p>
                    <p class="pad01">
                        <span style="color:#009999">数据来源</span>
                        <span style="marginLeft:.1rem">{{item.pubResource}}</span>
                    </p>
                    <p class="zsborder"></p>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/common/Header";
import Scroll from '@/common/Scroll'
export default {
    data() {
        return {
            demandList:[],
            nowPage:0,
            pagesCount:1,
            isShowMessage:false,
            // vant
            loading: false,   //是否处于加载状态
            finished: false,  //是否已加载完所有数据
            isLoading: false,   //是否处于下拉刷新状态
        };
    },
    components: {
        HeaderTop,Scroll
    },
    methods: {
        toTenderMessage(id){
            this.$router.push({path:'/tenderMessage01',query:{id:id}});
        },
        onLoad(){
            this.getDemandInformationList()
        },
        onRefresh(){
            this.isLoading = false;
        },
        getDemandInformationList(){//招标公告 
            this.loading = true
            this.nowPage = this.nowPage + 1
            console.log(this.nowPage)
            this.$http.post('biddingInformation/getBiddingInformationListPage',{nowPage:this.nowPage}).then(res=>{
                console.log(res)
                if(res.data.code == 200){
                    // this.demandList = res.data.data.data
                   setTimeout(()=>{
                        this.demandList.push(...res.data.data.data)
                        this.pagesCount = res.data.data.pageUtil.pageCount
                        this.loading = false;   //数据请成功后
                        if(this.nowPage >=this.pagesCount){
                            this.finished = true;
                        }
                   },20)
                    
                }
            })
        },
    },
    mounted(){
        this.getDemandInformationList()
    }
};
</script>

<style lang='less' scoped>
.notice{
    .content{
        // border-top: .2rem solid #e9e9e9;
        .li{
            margin-top: 6px;
           
        }
         .zsborder{
                   border-top: 1px solid #e9e9e9;
                   margin-top: 0.2rem;
                }
        .pad{
            padding-left: .3rem;
            // text-align: right;
        }
        .pad01{
            padding-left: .4rem;
            margin-top: .2rem;
            font-size: 14px;
            
        }
        .font{
           font-size: 15px;
            font-weight: bold;
            line-height: .5rem;
            text-align: left;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 100%;
            box-sizing: border-box;
        }
        .font01{
            font-size: 16px;
            float: right;
        }
    }
}
// .content{
//     // overflow: hidden;
//     position: absolute;
//     top: 1.18rem;
//     bottom: 50px;
//     left:0;
//     right:0;
//     border-top: 1px solid #ddd;
//     padding:0 10px;

// }
</style>