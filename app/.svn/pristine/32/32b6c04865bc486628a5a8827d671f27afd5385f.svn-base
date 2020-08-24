<template>
  <div class="require-reg">
      <header-top>
          <div slot="left">
              <img @click="$router.go(-1)" src="@/assets/img/back.png">
          </div>
          <div slot="mid">详情</div>
      </header-top>

      <div class="content">
          <div class="item">
              <div class="left">需求类型</div>
              <div class="mid">{{demandInformationData.landUseType}}</div>
          </div>
          <div class="item">
              <div class="left">面积</div>
              <div class="mid">{{demandInformationData.maxArea}}㎡</div>
          </div>
          <div class="item" @click="assetsLocation">
              <div class="left">位置</div>
              <div class="mid">{{demandInformationData.address}}</div>
              <div class="right"><span class="iconfont icon-jiantou"></span></div>
          </div>
          <!-- <div class="item">
              <div class="left">面积</div>
              <div class="mid">1000</div>
          </div> -->
          <!-- <div class="item">
              <div class="left">用途</div>
              <div class="mid">{{demandInformationData.landUseType}}</div>
          </div> -->
          <div class="item">
              <div class="left">公司名称</div>
              <div class="mid">{{demandInformationData.tenantUnitName}}</div>
          </div>
          <div class="item">
              <div class="left">所属行业</div>
              <div class="mid">{{demandInformationData.typeName}}</div>
          </div>
          <div class="item">
              <div class="left">联系人</div>
              <div class="mid">{{demandInformationData.contacts}}</div>
          </div>
          <div class="item">
              <div class="left">联系电话</div>
              <div class="mid">{{demandInformationData.contactNumber}}</div>
          </div>
          <div class="attachment">
              <div style="padding-left:10px;font-size:0.32rem;padding-top:10px;">附件</div>
              <div style="display:flex; padding-left:20px; padding-top:10px;">
                  <div style=" width:80px;height:80px;background:#ddd; margin-right:10px;"></div>
                  <div style=" width:80px;height:80px;background:#ddd;"></div>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
import HeaderTop from '@/common/Header'
import Scroll from '@/common/Scroll'
export default {
    name:'RequireRegister',
    data(){
        return{
            id:this.$route.query.id,
            demandInformationData:{}
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        assetsLocation(){
            this.$router.push({name:'AssetLocation',params:{name:this.demandInformationData.address,lat:this.demandInformationData.latitude,lon:this.demandInformationData.longitude}})
        },
        getDemandInformationById(){
            this.$http.post('demandRegistration/getDemandInformationById',{id:this.id}).then(res=>{
                // console.log(res)
                if(res.data.code == 200){
                    this.demandInformationData = res.data.data
                }
            })
        }
    },
    mounted(){
       this.getDemandInformationById() 
    }
}
</script>

<style lang='less' scoped>
    .require-reg{
        
        .item{
            font-size: 0.3rem;
            display: flex;
            height: 46px;
            border-bottom: 1px solid #f1f1f1;
            align-items: center;
            color:#333;
            .left{
                width: 100px;
                text-align: left;
                box-sizing: border-box;
                padding-left:10px;
            }
            .mid{
                flex:1;
                text-align: left;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .right{
                line-height: 46px;
                font-size: 30px;
                padding-right: 10px;
            }
        }
    }
</style>