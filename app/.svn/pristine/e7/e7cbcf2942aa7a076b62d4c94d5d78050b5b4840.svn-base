<template>
    <div id="add-contact">
        <header-top>
                <div slot="left">
                    <img @click="$router.go(-1)" src="@/assets/img/back.png">
                </div>
                <div slot="mid">添加联系人</div>
                <div slot="right" style="font-size:14px;" @click="saveInfo">保存</div>
            </header-top>
            <div class="add-contact">
                <div class="add-contact-item" >
                    <span class="iconfont icon-yonghu"></span>
                    <van-field v-model="userName" placeholder="姓名" class="van-field-input" style=""/>
                </div>
                <div class="add-contact-item" >
                    <span class="iconfont icon-tianjia1"></span>
                    <van-field v-model="addEmail" placeholder="添加邮箱地址" class="van-field-input" style=""/>
                </div>
                <div class="add-contact-item" >
                    <van-field v-model="remark" placeholder="备注" class="van-field-input" style=""/>
                </div>
                <div style="height:15px; background:#ddd;"></div>
                <div class="add-contact-item" >
                    <span class="iconfont icon-tianjia1"></span>
                    <van-field v-model="addPhoneNum" placeholder="添加电话号码" class="van-field-input" style=""/>
                </div>
            </div>
    </div>
</template>

<script>
import HeaderTop from '@/common/Header'
export default {
    data(){
        return{
            userName:'',
            addEmail:'',
            remark:'',
            addPhoneNum:'',
            id:this.$store.state.loginInfo.sessionVal.uSER_ID
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        saveInfo(){
            this.$http.post('app_module2/addContacts',{
                name:this.userName,
                telephone:this.addPhoneNum,
                mailbox:this.addEmail,
                remarks:this.remark,
                user_id:this.id
                }).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>

<style lang='less' scoped>
    .iconfont{
        display: inline-block;
        width: 50px;
    }
    .icon-yonghu{
        
        color: #ddd;
        font-size: 40px;
    }
    .icon-tianjia1{
        font-size: 26px;
        color: aqua;
    }
    .add-contact{
        padding-top:20px;
    }
    .add-contact-item{
        display:flex;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ddd;
        padding-left:10px;
        .van-field-input{
            height:36px; line-height:26px; margin-top:12px;
        }
    }
</style>