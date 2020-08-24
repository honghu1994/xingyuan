<template>
  <div class="zsDetail">
    <header-top>
      <div slot="left">
        <img @click="$router.go(-1)" src="@/assets/img/back.png" />
      </div>
      <div slot="mid">资产详情</div>
    </header-top>
    <div class="zstab">
      <van-tabs v-model="activeName" class='zsmyvant' title-active-color='#6f77fe' color='#6f77fe'>
        <van-tab title="基本信息" name="a" class="zsfont">
          <div class="form">
            <div class="title">
               <p style="lineHeight: 0.8rem">
                   <span class="zstop">{{mydata.assets_name}}</span>
                   
               </p>
               <p style="marginBottom:0.2rem">
                  {{mydata.company_name}}
                   <span style="color:#7477fe">土地所有者</span>
               </p>

            </div>
            <div class="content">
                <p class="border">
                    <span style=" marginRight: 0.5rem;">资产性质:</span>
                   <span> {{mydata.assets_nature }}</span>
                </p>
                
                <p class="border">
                    <span style=" marginRight: 0.5rem;">资产编号:</span>
                     <span>{{mydata.assets_number}}</span>
                </p>
                <p class="border">
                    <span style=" marginRight: 0.5rem;">购建日期:</span>
                    <span>{{mydata.purchase_date}}</span>
                </p>
               
                <p class="border">
                    <span style=" marginRight: 0.5rem;">开始摊销日期:</span>
                      <span>{{mydata.amortization_date}}</span>
                  
                </p>
                <p class="border">
                    <span style=" marginRight: 0.5rem;">期初余额:</span>
                    <span>{{mydata.initial_balance}}</span>
                    
                </p>
                <p class="border">
                    <span style=" marginRight: 0.5rem;">期末余额:</span>
                   <span>{{mydata.final_balance}}</span>
                   
                </p>
               
                 <p class="border">
                    <span style=" marginRight: 0.5rem;">累计摊销:</span>
                    <span>{{mydata.accumulated_amortization}}</span>
                   
                    
                </p>
                
                <p class="accessory">
                   
                    <span class="float"> 附件:</span>
                    <img class="assetImg" src="../../assets/img/u6.jpg" alt="" style=" marginRight: 0.2rem;">
                    <img class="assetImg" src="../../assets/img/u6.jpg" alt="">
                </p>
            </div>
           
          </div>
        </van-tab>
        <van-tab title="其他信息" name="b" class="zsfont">
             <div class="form">
            <div class="title">
               <p style="lineHeight: 0.8rem">
                   <span class="zstop">{{mydata.assets_name}}</span>
                   
               </p>
               <p style="marginBottom:0.2rem">
                     {{mydata.company_name}}
                   <span style="color:#7477fe">土地所有者</span>
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
         mydata:
        {"transaction_area": '',
        "land_use_warrant_number": '',
        "transaction_status": '',
        "land_title_certificate_number": '',
        "latitude": '',
        "business_types": '',
        "cadastral_number": '',
        "amortization_date": '',
        "unit_number": '',
        "built_area": '',
        "land_owner": '',
        "model": '',
        "area_covered": '',
        "floor": '',
        "assets_number": '',
        "longitude": '',
        "building_structure": '',
        "certification_area": '',
        "location_address": '',
            "subsidiary_resource_number": '',
            "assets_id": '',
            "coordinate_information": '',
            "unit_measurement": '',
            "assets_nature": '',
            "accumulated_amortization": '',
            "land_user": '',
            "zongdi_series_number": '',
            "real_estate_warrant_number": '',
            "final_balance": '',
            "land_use_status": '',
            "investment_cost": '',
            "business_reasons": '',
            "startup_date": '',
            "assets_status_quo": '',
            "all_attributes": '',
            "investment_life": '',
            "property_owner": '',
            "purchase_date": '',
            "remarks": '',
            "initial_balance": '',
            "assets_name": '',
            
        },
        latitude:'',
        longitude:''
    };
  },
  components: {
    HeaderTop
  },
   mounted() {
   
      
    this.getData();
  },
  methods: {
        toMap(location_address) {
             this.$router.push({
             path: "/map",
                query: {
                 location_address:location_address
        
             }
                 });
          },
      getData(){
          	this.$http
        		.post("app_module2/getAssetsJointStockCompanyById",{
          			assets_id:this.$route.query.assets_id
        				}).then(result => {
            
            
            if(result.data.code==200){
          
            this.mydata=result.data.data.pd
         
            
        
					}
			})
      }

}
}
</script>

<style lang='less' scoped>
.zsDetail {
    .zsfont{
        font-size: 16px;
    }
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
            font-size: 18px;
            margin-right: .4rem;
           
           
           
        }
    

      }
      .content{
          .border{
              border-bottom: 1px solid #e9e9e9;
               padding-left: .3rem;
               line-height: .9rem;
              .add{
                  font-size: 18px;
              }
          }
          .noborder{
                padding-left: .3rem;
               line-height: 1rem;
          }
          .accessory{
              padding-left: .3rem;
              margin-top: .4rem;
              .assetImg{
              width: 2.45rem;
             
            
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
  .zsmargin{
      margin-right: .6rem;
  }
 
  
}
 .zsmyvant/deep/.van-tab{
      font-size: 18px;
  }
</style>