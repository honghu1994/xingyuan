<template>
  <div>
    <img src="../assets/images/top.png" alt class="topImg" />




    <h1>
      <img src="../assets/images/logo.png" alt />
      南山集体经济总览平台
    </h1>
    <p class="title">合同列表</p>
    <div class="content">
      <div class="contentwarp">
         
        <div class="inputbox">
          <!-- 报表类型 -->
          <div class="company">
            <span>报表类型</span>
           <template>
              <el-select v-model="fidID" placeholder="请选择" class="choose-company01"  >
               <!-- <el-option >请选择</el-option> -->
                <el-option
                  v-for="item in options"
                  :key="item.fid"
                  :label="item.name"
                  :value="item.fid"
                ></el-option>
              </el-select>
            </template>
          </div>
          <!-- 合同类型 -->
           <div class="use" v-if="fidID=='101'">
            <span>合同类型</span>
            <template>
              <el-select v-model="value02" placeholder="请选择" class="choose-company02" @change="changeType(value02)">
                 <el-option >请选择</el-option>
                <el-option
                  v-for="item in options01"
                  :key="item.value"
                  :label="item.text"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
           
            <img src="../assets/images/返回.png" alt @click="goback()"  />
         
          </div>
           <div class="use">
           
           
            <img src="../assets/images/返回.png" alt @click="goback()"  />
         
          </div>
          <!-- 合同状态 -->        
          <div class="category" v-if="fidID=='101'">
            <span>合同状态</span>
            <template>
              <el-select v-model="value03" placeholder="请选择" class="choose-company01" @change="changeStatus(value03)" >
               <el-option >请选择</el-option>
                <el-option
                  v-for="item in options03"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
          </div>
          <!-- 合同名称 -->
          <div class="asset" v-if="fidID=='101'">
            <span>合同标的物名称</span>
            <el-input v-model="input01" class="input01" @input.native="changeName(input01)"></el-input>
             <button @click="toLook()">统计</button>
          </div>
        </div>
        <!-- 表格 -->
        <template v-if="fidID=='101'">
          <el-table
            :data="tableData"
            style="width: 100%"
            border
            class="tab-table"
            :header-cell-style="{
                'background-color': '#0b388c',
               'height':'50px',
               'color':'#fff',
              'text-align': 'center'}"
            :cell-style="{
            'height':'50px',
               'background-color': ' #1d2a6d!important',
               'color':'#fff',
                  'text-align': 'center'}"
               >
            <el-table-column type="index" label="序号" width="60"></el-table-column>
            <el-table-column prop="org_name" label="机构名称" width="180"></el-table-column>
            <el-table-column prop="contract_type" label="合同类型" width="100"></el-table-column>
            <el-table-column prop="contract_number" label="合同编号" width="150"></el-table-column>
            <el-table-column prop="contract_name" label="合同标的物名称" width="180"></el-table-column>
            <el-table-column prop="partyB_name" label="乙方名称" width="150"></el-table-column>
              <el-table-column prop="start_date" label="合同时间开始" width="120"></el-table-column>
            <el-table-column prop="end_date" label="合同结束时间" width="120"></el-table-column>
              <el-table-column prop="general_objective" label="合同总标的" width="150"></el-table-column>
            <el-table-column prop="annual_rent" label="年租金" width="100"></el-table-column>
            <el-table-column prop="rental_area" label="租赁面积" width="100"></el-table-column>
            <el-table-column prop="payment_method" label="付款方式" width="120"></el-table-column>
            <el-table-column prop="contract_status" label="合同状态" width="100"></el-table-column>
          
        
          
            <el-table-column prop="operate" label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small" width="150">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      

         <table border="1" width="1780" height="750" v-if="fidID=='102'" class="zsmytable">
          <tbody>
            <!-- 定义表格的主体 -->
            <tr>
              <td>机构名称</td>
              <td></td>
              <td>{{tableData03[0].organization_name}}</td>
             
            </tr>
            <tr>
              <td rowspan="5">合同宗数</td>
              <td>合计</td>
              <td>{{tableData03[4].contract_number}}</td>
            </tr>
            <tr>
             
              <td>未生效</td>
              <td>{{tableData03[3].contract_number}} </td>
            </tr>
            <tr>
            
              <td> 履行中</td>
              <td>{{tableData03[0].contract_number}} </td>
            </tr>
            <tr>
            
              <td>已完毕 </td>
              <td> {{tableData03[1].contract_number}} </td>
            </tr>
            <tr>
             
              <td>已终止</td>
              <td>{{tableData03[2].contract_number}}</td>
            </tr>
            <tr>
              <td rowspan="5">合同总标的 </td>
              <td> 合计</td>
              <td>{{tableData03[4].contract_totalTarget}} </td>
            </tr>
            <tr>
              
              <td>未生效</td>
              <td>{{tableData03[3].contract_totalTarget}}</td>
            </tr>
            <tr>
             
              <td>履行中</td>
              <td>{{tableData03[0].contract_totalTarget}}</td>
            </tr>
            <tr>
            
              <td>已完毕</td>
              <td>{{tableData03[1].contract_totalTarget}}</td>
            </tr>
            <tr>
            
              <td>已终止</td>
              <td>{{tableData03[2].contract_totalTarget}}</td>
            </tr>
            <tr>
              <td rowspan="5">累计收款 </td>
              <td> 合计</td>
              <td> {{tableData03[4].accumulate_receivables}}</td>
            </tr>
            <tr>
             
              <td>未生效</td>
              <td> {{tableData03[3].accumulate_receivables}}</td>
            </tr>
            <tr>
             
              <td>履行中 </td>
              <td>{{tableData03[0].accumulate_receivables}} </td>
            </tr>
            <tr>
             
              <td> 已完毕</td>
              <td>{{tableData03[1].accumulate_receivables}} </td>
            </tr>
            <tr>
             
              <td>已终止 </td>
              <td>{{tableData03[2].accumulate_receivables}}  </td>
            </tr>
            <tr>
              <td rowspan="5">累计欠款 </td>
              <td> 合计</td>
              <td>{{tableData03[4].accumulated_arrears}} </td>
            </tr>
            <tr>
             
              <td>未生效 </td>
              <td> {{tableData03[3].accumulated_arrears}}</td>
            </tr>
            <tr>
              
              <td>履行中 </td>
              <td> {{tableData03[0].accumulated_arrears}}</td>
            </tr>
            <tr>
             
              <td> 已完毕</td>
              <td>{{tableData03[1].accumulated_arrears}} </td>
            </tr>
            <tr>
             
              <td> 已终止</td>
              <td> {{tableData03[2].accumulated_arrears}} </td>
            </tr>
         
          </tbody>
        </table>


        <template v-if="fidID=='103'">
          <el-table
           v-loading="loading"
            :data="tableData02"
            style="width: 100%"
            border
            class="tab-table"
            :header-cell-style="{
                'background-color': '#0b388c',
               'height':'50px',
               'color':'#fff',
              'text-align': 'center'}"
            :cell-style="{
            'height':'50px',
               'background-color': ' #1d2a6d!important',
               'color':'#fff',
                  'text-align': 'center'}"
               >
            <el-table-column type="index" label="序号" width="60"></el-table-column>
            <el-table-column prop="org_name" label="单位名称" width="350"></el-table-column>
            <el-table-column prop="contract_count" label="合同宗数" width="200"></el-table-column>
            <el-table-column prop="objective_sum" label="合同总标的" width="250"></el-table-column>
            <el-table-column prop="max_objective" label="最大标的金额" width="250"></el-table-column>
            <el-table-column prop="receivables_count" label="合同收款宗数" width="150"></el-table-column>
              <el-table-column prop="receivables_sum" label="累计收款" width="150"></el-table-column>
            <el-table-column prop="arrears_count" label="合同欠款宗数" width="150"></el-table-column>
              <el-table-column prop="arrears_sum" label="累计欠款" ></el-table-column>
         
          </el-table>
        </template>
        <el-pagination
        v-if="fidID=='101'"
          :current-page="pagenum"
          @current-change="handleCurrentChange"
          class="page"
          background
          layout="prev, pager, next,total"
          :total="total"
        ></el-pagination>
        <el-pagination
        v-if="fidID=='103'"
          :current-page="pagenum"
          @current-change="handleCurrentChange02"
          class="page"
          background
          layout="prev, pager, next,total"
          :total="total02"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        fidID:'101',
      // 资产类型
      options: [
       {		
                "fid": "101",
                "name": "合同台账"
            },
            {
                "fid": "102",
                "name": "合同统计表"
            },
            {
                "fid": "103",
                "name": "在管合同统计表"
            }
      ],
      options01: [
        {
          value: "土地出租",
          label: "土地出租"
        },
        {
          value: "厂房租赁",
          label: "厂房租赁"
        } ,   
        {
          value: "农田租赁",
          label: "农田租赁"
        } ,     
        {
          value: "写字楼租赁",
          label: "写字楼租赁"
        }      
      ],
      options03: [
        {
          value: "履行中",
          label: "履行中"
        },
        {
          value: "已完毕",
          label: "已完毕"
        },
       

      ],

      // 总条数
      total: 0,
      total02: 0,
      pagenum: 1,
      pagenum02: 1,
      value: "",
      value03:'',
      value02:'',
      tableData:[],
      tableData02:[],
      tableData03:[],
      input01:'',
       loading: true
    };
  },
  watch: {
    fidID:function(){
      this.value03='',
      this.value02=''
       this.pagenum=1
       this.getData();
       this.pagenum02=1;
       this.getData02();
       this.getData03();
      
    }
  },
  methods: {
    //查看的方法
    toLook(){
      this.pagenum=1,
     this.getData() 
    },
 
    //搜索合同名称的方法
    changeName(input01){
       this.input01=input01
    },
   

    // // 切换合同状态的方法
    changeUse(value03){
      this.value03=value03
      
    },
    // // 切换合同类型的方法
    changeUse(value02){
      this.value02=value02
      
    },
  //跳转详情接口
       handleClick(val) {
       this.$router.push({
        path: "/detailHetong",
        query: {
          contract_enquiry_id: val.contract_enquiry_id,
        }
      });
    },

    goback() {
      this.$router.go(-1);
    },
    // 渲染表格数据的事件
    getData() {
       if(this.$route.query.company_id!=''){
          this.$axios
        .post("transaction/contract_ledger", {
          nowpage: this.pagenum,
          contract_status:this.value03,
          contract_type:this.value02,
          contract_name:this.input01,
         company_id:this.$route.query.company_id,
          
         
        })
        .then(result => {
          if (result.data.code == 200) {
           
            
            this.tableData = result.data.data.contract_ledger;
            this.options01=result.data.data.contractTypeList
           
              this.total = result.data.data.page.totalCount;

          }
        });

       }else{
           this.$axios
        .post("transaction/contract_ledger", {
          nowpage: this.pagenum,
          contract_status:this.value03,
          contract_type:this.value02,
          contract_name:this.input01,
           torganization_id:this.$route.query.torganization_id
          
         
        })
        .then(result => {
          if (result.data.code == 200) {
           
            
            this.tableData = result.data.data.contract_ledger;
            this.options01=result.data.data.contractTypeList
           
              this.total = result.data.data.page.totalCount;
              


          }
        });

       }

     
    },
    // 渲染表格3在管合同统计表格数据的事件
    getData02() {
      if(this.$route.query.company_id!=''){
           this.$axios
        .post("transaction/in_contract", {
           nowpage: this.pagenum02,
            company_id:this.$route.query.company_id,


        
        })
        .then(res => {
          if (res.data.code == 200) {
                
            this.tableData02 = res.data.data.in_contract;
           
              this.total02 = res.data.data.page.totalCount;
                this.loading=false

          }
        });
      }else{
           this.$axios
        .post("transaction/in_contract", {
           nowpage: this.pagenum02,
             torganization_id:this.$route.query.torganization_id


        
        })
        .then(res => {
          if (res.data.code == 200) {
                
            this.tableData02 = res.data.data.in_contract;
           
              this.total02 = res.data.data.page.totalCount;
                this.loading=false

          }
        });

      }
     
    },
//获取表格2的数据
getData03() {
      this.$axios
        .post("transaction/contract_statistics", {
           torganization_id:this.$route.query.torganization_id
        
        })
        .then(res => {
          if (res.data.code == 200) {                      
            this.tableData03 = res.data.data.contract_statistics;
         
           

          }
        });
    },

    // 点击页面跳转的方法
   
       handleCurrentChange(val) {
      this.pagenum = val;
      this.getData();
    },
       handleCurrentChange02(val02) {
          this.loading=true
      this.pagenum02 = val02;
      this.getData02();
    }
    
   
  },

  mounted() {
    this.getData();
  }
};
</script>

<style lang="less" scoped>
body {
  background: url("../assets/images/bg.jpg") no-repeat;
  position: relative;
  padding-bottom: 30px;
}
.zsmytable{
  margin-top: 40px;
  color: #fff;

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
  .title{
         color: #fff;
         font-size: 26px;
         float: left;
         margin-left: 60px;
        //  position: absolute;
        //  left: 0px;
        //  right: 0px;
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
      color: #48c1ff;

      padding-bottom: 30px;
      border-bottom: 1px solid #48c1ff;
      display: flex;
    //报表类型
      .company {
        display: flex;
        align-items: center;
        margin-right: 30px;       
        span {
          margin-right: 10px;
        }
        .choose-company01 {
          width: 180px;
        }
     
         
          
        
     
       
         
      }
      //资产名称
      .asset {
        display: flex;
        align-items: center;
        margin-right: 30px;
        
            button{
           margin-left: 20px;
         font-size: 16px;

            color: #fff;
           height: 40px;
          background-color: #1d2a6d;
          outline: none;
          border: 1px solid #48c2ee;
          padding: 0 10px;
          cursor: pointer;
           border-radius: 5px;
        }
        span {
          margin-right: 10px;
        }
        .input01 {
          width: 300px;
        }
      }
      //资产类别
      .category {
        margin-left: 30px;
        margin-right: 30px;
        span {
          margin-right: 10px;
        }
        .choose-company01 {
          width: 180px;
        }
      }
      //资产性质
      .use {
        span {
          margin-right: 10px;
        }
    
       
        .choose-company02 {
          width: 180px;
        }
      }
    }

    .tab-table {
      margin-top: 40px;

      margin-bottom: 40px;
      border-collapse: collapse;
    }
    .page {
      text-align: center;
    }
  }
}


</style>