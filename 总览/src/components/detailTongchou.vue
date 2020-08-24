<template>
  <div>
    <img src="../assets/images/top.png" alt class="topImg" />

    <h1>
      <img src="../assets/images/logo.png" alt />
      南山集体经济总览平台
    </h1>
    <div class="content">
      <div class="contentwarp">
        <div class="inputbox">

          <h2 class="fl02">{{tableData.org_name}}>>固定资产列表>>详情</h2>
          <img src="../assets/images/返回.png" alt @click="goback()" />
        </div>

        <!-- 表格 -->

        <table border="1" width="1780" height="850">
          <tbody>
            <!-- 定义表格的主体 -->
            <tr>
              <td>资产名称</td>

              <td>{{tableData.assets_name}}</td>
              <td>资产编号</td>
              <td>{{tableData.assets_number}}</td>
            </tr>

            <tr>
              <td>资产类别</td>

              <td>{{tableData.assets_type}}</td>
              <td>所属机构</td>
              <td>{{tableData.org_name}}</td>
            </tr>


            <tr>
              <td>资产性质</td>

              <td>{{tableData.assets_nature}}</td>
              <td>资产用途</td>
              <td>{{tableData.assets_use}}</td>
            </tr>


            <tr>
              <td>交易面积(m²)</td>

              <td>{{tableData.transaction_area}}</td>
              <td>建筑面积(m²)</td>
              <td>{{tableData.built_area}}</td>
            </tr>


            <tr>
              <td>占地面积(m²)</td>

              <td>{{tableData.area_covered}}</td>
              <td>资产现状</td>
              <td>{{tableData.assets_status_quo}}</td>
             
            </tr>


            <tr >
              <td>坐落地址</td>
              <td  >
               {{tableData.location_address}}
               
              </td>
              <td></td>
               <td></td>
            </tr>


            <tr>
              <td>使用年限</td>

              <td>{{tableData.service_life}}</td>
              <td>购置日期</td>
              <td>{{tableData.purchase_date}}</td>
            </tr>


            <tr>
              <td>资产原值(元)</td>

              <td>{{tableData.assets_value}}</td>
              <td>累计折旧(元)</td>
              <td>{{tableData.accumulated_depreciation}}</td>
            </tr>


            <tr>
              <td>资产净值(元)</td>

              <td>{{tableData.net_assets_value}}</td>
              <td>开始折旧日期</td>
              <td>{{tableData.commencement_date}}</td>
            </tr>


            <tr>
              <td>当前合同</td>

              <td>{{tableData.current_contract}}</td>
              <td></td>
              <td></td>
            </tr>


            <tr>
              <td>经营开发类型</td>

              <td>{{tableData.business_types}}</td>
              <td>经营开发原因</td>
              <td>{{tableData.business_reasons}}</td>
            </tr>


            <tr>
              <td>单元号</td>

              <td>{{tableData.unit_number}}</td>
              <td>地籍号</td>
              <td>{{tableData.cadastral_number}}</td>
            </tr>


            <tr>
              <td>宗地系列号</td>

              <td>{{tableData.zongdi_series_number}}</td>
              <td>附属资源号</td>
              <td>{{tableData.subsidiary_resource_number}}</td>
            </tr>


            <tr>
              <td>房产所有权证号</td>

              <td>{{tableData.real_estate_warrant_number}}</td>
              <td>房产所有权人</td>
              <td>{{tableData.property_owner}}</td>
            </tr>


            <tr>
              <td>土地使用权证号</td>

              <td>{{tableData.land_use_warrant_number}}</td>
              <td>土地使用权人</td>
              <td>{{tableData.land_user}}</td>
            </tr>


            <tr>
              <td>土地所有权证号</td>

              <td>{{tableData.land_title_certificate_number}}</td>
              <td>土地所有权人</td>
              <td>{{tableData.land_owner}}</td>
            </tr>


            <tr>
              <td>楼层</td>

              <td>{{tableData.floor}}</td>
              <td>建筑结构</td>
              <td>{{tableData.building_structure}}</td>
            </tr>


            <tr>
              <td>启用日期</td>

              <td>{{tableData.startup_date}}</td>
              <td>资产是否自用</td>
              <td>{{tableData.assets_is_no}}</td>
            </tr>


            <tr>
              <td>坐标信息</td>

              <td>{{tableData.coordinate_information}}</td>
              <td></td>
              <td></td>
            </tr>


            <tr>
              <td>备注</td>

              <td>{{tableData.remarks}}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>附件</td>

              <td><img :src="imgUrl" alt=""></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import imgUrl from "../assets/images/logo.png"
export default {
  data() {
    return {
      // 资产类型
     transaction_area:'',
      value: "",
      tableData: {},
      input: "",
      assets_id:'',
      assets_type:'',
      imgUrl:imgUrl,
      // 表格里面的数据

    };
  },
  methods: {
    // 返回上一步的事件
    goback() {
      this.$router.go(-1);
    },
    getdetail(){
      let assets_id=this.$route.query.assets_id;

      this.$axios
        .post("overall/assetSupplyDetail",{
          assets_id :assets_id,
      
        }).then(result => {
          
           
            
            if(result.data.code==200){
                  
                     
              this.tableData=result.data.data.selectAssetsDetail
              
            }
            
            
        })
    }
  },
  mounted() {
   this.getdetail()
  },
};
</script>

<style lang="less" scoped>
body {
  background: url("../assets/images/bg.jpg");
  position: relative;
  padding-bottom: 30px;
}
.topImg {
  width: 100%;
}
h1 {
  color: #fff;
  margin-top: 25px;
  font-size: 34px;
  position: absolute;
  left: 50%;
  margin-left: -230px;
  top: -5px;
}
.fl02{
  float: left;
  margin-bottom: 20px;
  font-size: 24px;


}
.content {
  width: 100%;
  height: 1050px;
  box-sizing: border-box;
  padding: 20px;

  .contentwarp {
    width: 100%;
    // height: 100%;

    box-sizing: border-box;
    padding: 40px;
    border: 1px solid #48c1ff;
    margin-top: 40px;
    .inputbox {
      color: #fff;
      font-size: 24px;
      //   background-color: pink;

      padding-bottom: 30px;
      text-align: center;
      position: relative;
      img {
        position: absolute;
        width: 32px;
        top: 0px;
        right: 0px;
        margin-right: 30px;
      }
    }
    .tab-table {
      // margin-top: 40px;

      margin-bottom: 40px;
      .el-table__header tr,
      .el-table__header th {
        padding: 0;
        height: 10px;
      }
      .el-table__body tr,
      .el-table__body td {
        padding: 0;
        height: 10px;
      }
    }
    .page {
      text-align: center;
    }
  }
}
table {
  border-collapse: collapse;
  border: 1px solid #80e2fe;
  color: #fff;
  text-align: center;
  // .td-left {
  //   text-align: left;
  //   line-height: 20px;
  // }
  // .tr-btn {
  //   position: relative;

  //   // .btn1 {
  //   //   float: right;

  //   //   // width: 150px;
  //   //   padding: 3px 10px;
  //   //   margin-right: 100px;
  //   // }
  // }
}
</style>