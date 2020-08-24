<template>
  <div>
    <img src="../assets/images/top.png" alt class="topImg" />

    <h1>
      <img src="../assets/images/logo.png" alt />
      南山集体经济总览平台
    </h1>
    <p class="title">统筹列表</p>
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
          <!-- 资产性质 -->
           <div class="use" v-if="fidID==101">
            <span>资产性质</span>
            <template>
              <el-select v-model="value02" placeholder="请选择" class="choose-company02" @change="changeNature(value02)">
                 <el-option >请选择</el-option>
                <el-option
                  v-for="item in options01"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
           
            <img src="../assets/images/返回.png" alt @click="goback()" />
          </div>
           <div class="use" >
           
           
            <img src="../assets/images/返回.png" alt @click="goback()" />
          </div>
          <!-- 资产类别 -->        
          <div class="category">
            <span v-if="fidID==101">资产类别</span>
            <span v-if="fidID==102">需求类型</span>
            <template>
              <el-select v-model="value03" placeholder="请选择" class="choose-company01" @change="changeCate(value03)" >
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
          <!-- 资产名称 -->
          <div class="asset">
            <span v-if="fidID==101">资产名称</span>
            <span v-if="fidID==102">需求内容</span>

            <el-input v-model="input01" class="input01" @input.native="changeName(input01)"></el-input>
             <button @click="toLook()" v-if="fidID==101">统计</button>
             <button @click="toLook02()" v-if="fidID==102">统计</button>
          </div>
        </div>
        <!-- 表格 -->
        <template v-if="fidID==101">
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
            
            <el-table-column prop="company_name" label="机构名称" width="280"></el-table-column>
            <el-table-column prop="assets_nature" label="资产性质" width="120"></el-table-column>
            <el-table-column prop="assets_category" label="资产类别" width="150"></el-table-column>
            <el-table-column prop="assets_number" label="资产编号" width="190"></el-table-column>
            <el-table-column prop="assets_name" label="资产名称" width="350"></el-table-column>
              <el-table-column prop="transaction_area" label="交易面积(m²)" width="150"></el-table-column>
            <el-table-column prop="built_area" label="建筑面积" width="150"></el-table-column>
              <el-table-column prop="transaction_status" label="资产现状" width="150"></el-table-column>
               <el-table-column prop="operate" label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small" width="150">详情</el-button>
              </template>
            </el-table-column>
            
         
          
           

          </el-table>
        </template>
        <div>
        <template v-if="fidID==102">
          <el-table
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
            <el-table-column prop="demand_content" label="需求内容" width="150"></el-table-column>
            <el-table-column prop="assets_category" label="需求类型" width="100"></el-table-column>
            <el-table-column prop="area" label="面积" width="150"></el-table-column>
            <el-table-column prop="rent_seeking_address" label="位置" width="380"></el-table-column>
            <el-table-column prop="purpose" label="用途" width="150"></el-table-column>
              <el-table-column prop="partyB_name" label="公司名称" width="270"></el-table-column>
            <el-table-column prop="industry_type" label="所属行业" width="150"></el-table-column>
              <el-table-column prop="contacts" label="联系人"></el-table-column>
              <el-table-column prop="contact_number" label="联系方式" ></el-table-column>
             
          
            
          </el-table>
        </template>
        </div>
        <el-pagination
        v-if="fidID==101"
          :current-page="pagenum"
          @current-change="handleCurrentChange"
          class="page"
          background
          layout="prev, pager, next,total"
          :total="total"
        ></el-pagination>
        <el-pagination
        v-if="fidID==102"
          :current-page="pagenum02"
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
      // 资产类型
      options: [
       {		
                "fid": "101",
                "name": "资产供应表"
            },
            {
                "fid": "102",
                "name": "物业需求表"
            }
       
      
      ],
      options01: [
        {
          value: "经营性资产",
          label: "经营性资产"
        },
        {
          value: "非经营性资产",
          label: "非经营性资产"
        }      
      ],
      options03: [
        {
          value: "写字楼",
          label: "写字楼"
        },
        {
          value: "厂房",
          label: "厂房"
        },
        {
          value: "商铺",
          label: "商铺"
        },
        {
          value: "宿舍",
          label: "宿舍"
        },

      ],
      fidID:'101',
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
      input: "",
      input01:''
    };
  },
  watch: {
    fidID:function(){
       this.pagenum= 1,
      this.value03='';
      this.value02='';
       this.pagenum02= 1;
       this.getData02()

    }
  },
  methods: {
    //查看的方法
    toLook(){
       this.pagenum= 1,
     this.getData() 
    },
    //查看的方法
    toLook02(){
       this.pagenum02= 1,
     this.getData02() 
    },
       // 切换资产类别的方法
    changeCate(value03){
      this.value03=value03
      

    },
    //  切换资产性质的方法
    changeNature(value02){
     this.value02=value02
      
    },
    //搜索资产名称的方法
    changeName(input01){
       this.input01=input01
    },
   

    //跳转详情接口
       handleClick(val) {
       this.$router.push({
        path: "/detailTongchou",
        query: {
          assets_id: val.assets_id,
        }
      });
    },
    goback() {
      this.$router.go(-1);
    },
    // 渲染表格数据的事件
    getData() {
      this.$axios
        .post("overall/assetSupplyList", {
          nowpage: this.pagenum,
          assets_category:this.value03,
          assets_nature:this.value02,
          assets_name:this.input01,
            company_id:this.$route.query.company_id
        })
        .then(result => {
          if (result.data.code == 200) {
            this.tableData = result.data.data.assetSupplyList;
            this.total = result.data.data.page.totalCount;
         
          }
        });
    },
    //获取表二的数据
    getData02() {
      this.$axios
        .post("overall/propertyDemandList", {
          nowpage: this.pagenum02,
           assets_category:this.value03,
           demand_content:this.input01
           
        })
        .then(result => {
          if (result.data.code == 200) {
            this.tableData02 = result.data.data.propertyDemandList;
            this.total02 = result.data.data.page.totalCount;
         
          }
        });
    },
    // 分页
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getData();
    },
    handleCurrentChange02(val02) {
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