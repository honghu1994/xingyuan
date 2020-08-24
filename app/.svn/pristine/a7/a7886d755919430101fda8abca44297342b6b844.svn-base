<template>
  <div class="zsDetail">
    <header-top>
      <div slot="left">
        <img @click="$router.go(-1)" src="@/assets/img/back.png" />
      </div>
      <div slot="mid">资产详情</div>
    </header-top>
    <div class="zstab">
      <van-tabs v-model="activeName">
        <van-tab title="基本信息" name="a">
          <div class="form">
            <div class="title">
               <p style="lineHeight: 0.8rem">
                   <span class="zstop">{{basicInfo.assets_name}}</span>
                   <span style="color:#7477fe" v-if="basicInfo.transaction_status == 0 ">待交易</span> 
                   <span style="color:#7477fe" v-if="basicInfo.transaction_status == 2 ">交易中</span> 
                   <span style="color:#7477fe" v-if="basicInfo.transaction_status == 3 ">已交易</span> 
               </p>
               <p style="marginBottom:0.2rem">
                   {{basicInfo.company_name}}
               </p>

            </div>
            <div class="content">
                <p class="border">
                    <span style=" marginRight: 0.5rem;">资产编号:</span>
                    <span>{{basicInfo.assets_number}}</span>
                </p>
                <p class="border">
                    <span style=" marginRight: 0.5rem;">资产名称:</span>
                    <span>{{basicInfo.assets_name}} </span>
                </p>
                <div class="border mapPlace"  @click="toMap()">
                    <div>
                        <span style=" marginRight: 0.5rem;">坐落地址:</span>
                        <span>{{basicInfo.location_address}} </span>
                    </div>
                    <span class="add" style="margin-right:10px;">></span>
                </div>
                <p class="border">
                    <span style=" marginRight: 0.5rem;">资产类型:</span>
                    <span>{{basicInfo.name}} </span>
                </p>
                <p class="border">
                    <span style=" marginRight: 0.5rem;">建筑面积:</span>
                    <span>{{basicInfo.built_area}}㎡ </span>
                </p>
                <p class="noborder">
                    <span style=" marginRight: 0.5rem;">交易面积:</span>
                    <span>{{basicInfo.transaction_area}}㎡ </span>
                </p>
                <p class="accessory">
                   
                    <span class="float"> 附件:</span>
                    <img class="assetImg" src="../../assets/img/u6.jpg" alt="" style=" marginRight: 0.4rem;">
                    <img class="assetImg" src="../../assets/img/u6.jpg" alt="">
                </p>
            </div>
           
          </div>
        </van-tab>
        <van-tab title="其他信息" name="b">
            <div class="form">
            <div class="title">
               <p style="lineHeight: 0.8rem">
                   <span class="zstop">{{basicInfo.assets_name}}</span>
                   <span style="color:#7477fe" v-if="basicInfo.transaction_status == 0 ">待交易</span> 
                   <span style="color:#7477fe" v-if="basicInfo.transaction_status == 2 ">交易中</span> 
                   <span style="color:#7477fe" v-if="basicInfo.transaction_status == 3 ">已交易</span> 
               </p>
               <p style="marginBottom:0.2rem">
                   {{basicInfo.company_name}}
               </p>

            </div>
            <div class="content">
                <p class="otherborder">
                    <span >经营开发类型:{{basicInfo.business_types}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >经营开发原因:{{basicInfo.business_reasons}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >单元号:{{basicInfo.unit_number}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >地籍号:{{basicInfo.cadastral_number}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >宗地系列号:{{basicInfo.zongdi_series_number}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >附属资源号:{{basicInfo.subsidiary_resource_number}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >房产所有权证号:{{basicInfo.real_estate_warrant_number}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >房产所有人:{{basicInfo.property_owner}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >土地使用权证号:{{basicInfo.land_use_warrant_number}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >土地使用权人:{{basicInfo.land_user}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >土地所有权证号:{{basicInfo.land_title_certificate_number}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >土地所有权人:{{basicInfo.land_owner}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >楼层:{{basicInfo.floor}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >土建筑结构:{{basicInfo.building_structure}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >计量单位:{{basicInfo.unit_measurement}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >型号:{{basicInfo.model}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >启用日期:{{basicInfo.startup_date}}</span>
                   
                </p>
                <p class="otherborder">
                    <span >坐标信息:{{basicInfo.coordinate_information}}</span>
                   
                </p>
               
              
                <p class="remark">
                   
                    <span > 备注:</span>
                    <span>{{basicInfo.remarks}}</span>
                  
                </p>
            </div>
           
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/common/Header";
export default {
    data() {
        return {
            activeName:'',
            basicInfo:{},
            id:this.$route.query.assets_id
        };
    },
    components: {
        HeaderTop
    },
    methods: {
        toMap(){
            this.$router.push({name:'BasicMap',params:{lon:this.basicInfo.longitude,lat:this.basicInfo.latitude,name:this.basicInfo.assets_name}});
        },
        getTradedAssetsById(){
                this.$http.post('app_module2/getTradedAssetsById',{assets_id:1000}).then(res=>{ //this.id
                    console.log(res)
                    if(res.data.code == 200){
                        this.basicInfo = res.data.data.pd
                        console.log(this.basicInfo)
                    }
                })
        }
    },
    mounted(){
        this.getTradedAssetsById()
    }
};
</script>

<style lang='less' scoped>
.zsDetail {
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background: #fff;
    z-index: 100;
    overflow-y: auto;
  .zstab {
    border-top: 0.2rem solid #e9e9e9;
    // border-bottom: 0.2rem solid #e9e9e9;
  }
  .form{
       border-top: 0.2rem solid #e9e9e9;
      padding-left: .3rem;
      .title{
          border-bottom: 1px solid #e9e9e9;
        .zstop{
            font-weight: bold;
            font-size: 16px;
            margin-right: .4rem;
           
           
           
        }
    

      }
      .content{
          .border{
              border-bottom: 1px solid #e9e9e9;
               padding-left: .3rem;
               line-height: 1rem;
              .add{
                  font-size: 20px;
              }
          }
          .mapPlace{
              display: flex;
              justify-content: space-between;
          }
          .noborder{
                padding-left: .3rem;
               line-height: 1rem;
          }
          .accessory{
              padding-left: .3rem;
              .assetImg{
              width: 2.5rem;
             
            
          }
          .float{
            float: left;
            margin-right: .5rem;
          }


          }
          

      }

  }
  .otherborder{
       border-bottom: 1px solid #e9e9e9;
               padding-left: .3rem;
               line-height: .6rem;
  }
  .remark{
      line-height: 1rem;
       padding-left: .3rem;
  }
}
</style>