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

          <h2 class="fl02">大新实业股份有限公司>>合同列表>>详情</h2>
          <img src="../assets/images/返回.png" alt @click="goback()" />
        </div>

        <!-- 表格 -->

        <table border="1" width="1780" height="650">
          <tbody>
            <!-- 定义表格的主体 -->
            <tr>
              <td>机构名称</td>

              <td>{{tableData.org_name}}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>合同类型</td>

              <td>{{tableData.contract_type}}</td>
              <td>合同编号</td>
              <td>{{tableData.contract_number}}</td>
            </tr>
            <tr>
              <td>合同标的物名称</td>

              <td>{{tableData.contract_name}}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>乙方名称</td>

              <td>{{tableData.partyB_name}}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>合同起止时间</td>

              <td>{{tableData.contract_start_end_date}}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>合同时间开始</td>

              <td>{{tableData.start_date}}</td>
              <td>合同结束时间</td>
              <td>{{tableData.end_date}}</td>
            </tr>
            <tr>
              <td>签订日期</td>

              <td>{{tableData.identification_date}}</td>
              <td>登记日期</td>
              <td>{{tableData.registration_date}}</td>
            </tr>
            <tr>
              <td>合同总标的</td>

              <td>{{tableData.general_objective}}</td>
              <td>本年应收款</td>
              <td>{{tableData.receivables_year}}</td>
            </tr>
            <tr>
              <td>本年已收款</td>

              <td>{{tableData.payments_year}}</td>
              <td>本年未收款</td>
              <td>{{tableData.unpaid_year}}</td>
            </tr>
            <tr>
              <td>累计应收款</td>

              <td>{{tableData.accumulated_receipts}}</td>
              <td>累计已收款</td>
              <td>{{tableData.accumulated_receivables}}</td>
            </tr>
            <tr>
              <td>累计未收款</td>

              <td>{{tableData.accumulated_unpaid}}</td>
              <td>年租金</td>
              <td>{{tableData.annual_rent}}</td>
            </tr>
            <tr>
              <td>租赁面积</td>

              <td>{{tableData.rental_area}}</td>
              <td>付款方式</td>
              <td>{{tableData.payment_method}}</td>
            </tr>
            <tr>
              <td>押金</td>

              <td>{{tableData.deposit}}</td>
              <td>合同状态</td>
              <td>{{tableData.contract_status}}</td>
            </tr>
            <tr>
              <td>附件</td>

              <td>{{contractEnclosure[0].file_name}},{{contractEnclosure[1].file_name}}</td>
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
      contract_enquiry_id:'',
     //附件
     contractEnclosure:''

    };
  },
  methods: {
    // 返回上一步的事件
    goback() {
      this.$router.go(-1);
    },
    getdetail(){
      let contract_enquiry_id=this.$route.query.contract_enquiry_id;
     
      this.$axios
        .post("transaction/contract_detail",{
         contract_enquiry_id:contract_enquiry_id
        }).then(result => {
          
            
            if(result.data.code==200){
           
            
           
              this.tableData=result.data.data.contract_detail
              this.contractEnclosure=result.data.data.contractEnclosure
              
              
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
  height: 850px;
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