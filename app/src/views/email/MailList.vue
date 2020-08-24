<template>
    <div class="mail-list">
        <header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">通讯录</div>
            <div slot="right"><span class="iconfont icon-tianjia" style="font-size:24px; line-height:30px;" @click="$router.push('/emailList/addContact')"></span></div>
        </header-top>
        <div :class="{'index-bar-margin-bottom':hasIndexBarMarginBottom}" @touchMove='moveIndecBar' >
            <van-index-bar :index-list="indexList1" @select="selectIndexBar" highlight-color='#07c160' >
                <div v-for="(items,index) in indexList" :key="index">
                    <van-index-anchor style="font-size: 15px;" :index="items.region" ></van-index-anchor>
                    <van-checkbox-group v-model="result">
                        <div style="display:flex; margin-left:20px; border-bottom:1px solid #eee; padding: 4px 0" 
                            v-for="(item,i) in items.list" :key="i" >
                            <van-checkbox :name="item.mailbox" style="margin-right:5px;" @click='getMail()'></van-checkbox>
                            <span style=" font-size:36px; color:#ddd;" class='iconfont icon-yonghu'></span>
                            <div style="margin-left:10px;">
                                <!-- <van-cell :title="item.content" /> -->
                                <p style="line-height:19px;font-size: 15px; color:#333;">{{item.name}}</p>
                                <span style="line-height:19px;font-size: 14px; color:#666;">{{item.mailbox}}</span>
                            </div>
                        </div>
                    </van-checkbox-group>
                </div>
            </van-index-bar>
        </div>
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
import { IndexBar, IndexAnchor } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
export default {
    data(){
        return{
            indexList1:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            indexList: [],
            hasIndexBarMarginBottom:false,
            result: []
        }
    },
    components:{
        HeaderTop
    },

    methods:{
        getMail(){
            setTimeout(()=>{
                this.$store.commit('mailNum',JSON.stringify(this.result))
            },10)
        },
        selectIndexBar(){
            this.hasIndexBarMarginBottom = true
        },
        moveIndecBar(){
            this.hasIndexBarMarginBottom = fasle
        },
        getLetterList(){
            this.$http.post('app_module2/getLetter').then(res=>{
                console.log(res)
                if(res.data.code == 200){
                    this.indexList=res.data.data.datalist
                }
            })
        }
    },
    mounted(){
        this.getLetterList()
    }
}
</script>

<style lang='less' scoped>
    .mail-list{
        font-size: 15px;
        
        .icon-tianjia{
            font-size: 20px;
        }
        .index-bar-margin-bottom{
            margin-bottom:260px;
            
        }
        
    }
    
</style>