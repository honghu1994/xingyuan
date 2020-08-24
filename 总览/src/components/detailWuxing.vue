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

          <h2 class="fl02">{{tableData.org_name}}>>无形资产类列表>>详情</h2>
          <img src="../assets/images/返回.png" alt @click="goback()" />
        </div>

        <!-- 表格 -->

        <table border="1" width="1780" height="650">
          <tbody>
            <!-- 定义表格的主体 -->
            <tr>
              <td>机构名称</td>

              <td>{{tableData.org_name}}</td>
             <td>资产性质</td>

              <td>{{tableData.assets_nature}}</td>
            </tr>

            <tr>
              <td>资产类别</td>

              <td>{{tableData.assets_type}}</td>
               <td>资产编号</td>

              <td>{{tableData.assets_number}}</td>
            </tr>


            <tr>
              <td>资产名称</td>

              <td>{{tableData.assets_name}}</td>
              <td>购建日期</td>
              <td>{{tableData.purchase_date}}</td>
            </tr>


            <tr>
              <td>预计使用年限</td>

              <td>{{tableData.service_life}}</td>
              <td>开始摊销日期</td>
              <td>{{tableData.amortization_date}}</td>
            </tr>
            <tr>
              <td>期初余额</td>

              <td>{{tableData.initial_balance}}</td>
              <td>期末余额</td>
              <td>{{tableData.final_balance}}</td>
            </tr>


            <tr>
              <td>累计摊销</td>

              <td>{{tableData.accumulated_amortization}}</td>
              <td>合同编号</td>
              <td>{{tableData.contract_number}}</td>
             
            </tr>


            <tr >
              <td>承包方</td>
              <td  >
               {{tableData.partyB_name}}
               
              </td>
              <td>承包方地址</td>
              <td  >
               {{tableData.partyB_address}}
               
              </td>
           
            </tr>


            <tr>
              <td>合同总标的</td>

              <td>{{tableData.general_objective}}</td>
              <td>合同开始日期</td>

              <td>{{tableData.start_date}}</td>
            </tr>
            <tr>
             
              <td>合同结束日期</td>
              <td>{{tableData.end_date}}</td>
              <td>交易状态</td>
              <td>{{tableData.transaction_status}}</td>
            </tr>


          

           


            <tr>
              <td>附件</td>

              <td></td>
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
       let assets_type=this.$route.query.assets_type
     
      this.$axios
        .post("assetes/selectAssetsDetail",{
          assets_id :assets_id,
            assets_type:assets_type

        }).then(result => {
           
            
            if(result.data.code==200){
              
            
              this.tableData=result.data.data.assetsDetail
              
            }
            
            
        })
    }
  },
  mounted() {
    this.getdetail()
  },
};
</script>

<style lang="less" scoped >
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
  height: 800px;
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

}
</style>