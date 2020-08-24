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
                   <span class="zstop">大新大厦12层</span>
                   <span style="color:#7477fe">已租赁</span>
               </p>
               <p style="marginBottom:0.2rem">
                   深圳市大新实业股份有限公司
               </p>

            </div>
            <div class="content">
                <p class="border">
                    <span style=" marginRight: 0.5rem;">资产编号:</span>
                    <span>2018000010101</span>
                </p>
                <p class="border">
                    <span style=" marginRight: 0.5rem;">资产名称:</span>
                    <span>大新大厦12层 </span>
                </p>
                <p class="border">
                    <span style=" marginRight: 0.5rem;">坐落地址:</span>
                    <span>xxxxxx </span>
                    <span class="add" style=" marginLeft: 3rem" @click="toMap()">></span>
                </p>
                <p class="border">
                    <span style=" marginRight: 0.5rem;">资产类型:</span>
                    <span>办公楼 </span>
                </p>
                <p class="border">
                    <span style=" marginRight: 0.5rem;">建筑面积:</span>
                    <span>1900㎡ </span>
                </p>
                <p class="noborder">
                    <span style=" marginRight: 0.5rem;">交易面积:</span>
                    <span>1900㎡ </span>
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
                   <span class="zstop">大新大厦12层</span>
                   <span style="color:#7477fe">已租赁</span>
               </p>
               <p style="marginBottom:0.2rem">
                   深圳市大新实业股份有限公司
               </p>

            </div>
            <div class="content">
                <p class="otherborder">
                    <span >经营开发类型:</span>
                   
                </p>
                <p class="otherborder">
                    <span >经营开发原因:</span>
                   
                </p>
                <p class="otherborder">
                    <span >单元号:</span>
                   
                </p>
                <p class="otherborder">
                    <span >地籍号:</span>
                   
                </p>
                <p class="otherborder">
                    <span >宗地系列号:</span>
                   
                </p>
                <p class="otherborder">
                    <span >附属资源号:</span>
                   
                </p>
                <p class="otherborder">
                    <span >房产所有权证号:</span>
                   
                </p>
                <p class="otherborder">
                    <span >房产所有人:</span>
                   
                </p>
                <p class="otherborder">
                    <span >土地使用权证号:</span>
                   
                </p>
                <p class="otherborder">
                    <span >土地使用权人:</span>
                   
                </p>
                <p class="otherborder">
                    <span >土地所有权证号:</span>
                   
                </p>
                <p class="otherborder">
                    <span >土地所有权人:</span>
                   
                </p>
                <p class="otherborder">
                    <span >楼层:</span>
                   
                </p>
                <p class="otherborder">
                    <span >土建筑结构:</span>
                   
                </p>
                <p class="otherborder">
                    <span >计量单位:</span>
                   
                </p>
                <p class="otherborder">
                    <span >型号:</span>
                   
                </p>
                <p class="otherborder">
                    <span >启用日期:</span>
                   
                </p>
                <p class="otherborder">
                    <span >坐标信息:</span>
                   
                </p>
               
              
                <p class="remark">
                   
                    <span > 备注:</span>
                    <span>xxxxxxx</span>
                  
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
        activeName:''
    };
  },
  components: {
    HeaderTop
  },
  methods: {
      toMap(){
          this.$router.push('/map');
      }
  },
};
</script>

<style lang='less' scoped>
.zsDetail {
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