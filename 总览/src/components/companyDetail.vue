<template>
  <div>
    <img src="../assets/images/top.png" alt class="topImg" />

    <h1>
      <img src="../assets/images/logo.png" alt />
      南山集体经济总览平台
    </h1>
    <p class="title">资产列表</p>
    <div class="content">
      <div class="contentwarp">
         
        <div class="inputbox">
          <!-- 资产 -->
          <div class="company">
            <span>资产</span>
           <template>
              <el-select v-model="fidID" placeholder="请选择" class="choose-company01" @change="changeAssets(fidID)" >
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
           <div class="use">
            <span>资产性质</span>
            <template>
              <el-select v-model="value02" placeholder="请选择" class="choose-company02" @change="changeNature(value02)">
                 <el-option >请选择</el-option>
                <el-option
                  v-for="item in options02"
                  :key="item.assets_nature"
                  :label="item.label"
                  :value="item.assets_nature"
                ></el-option>
              </el-select>
            </template>
           
            <img src="../assets/images/返回.png" alt @click="goback()" />
          </div>
          <!-- 资产类别 -->        
          <div class="category">
            <span>资产类别</span>
            <template>
              <el-select v-model="value03" placeholder="请选择" class="choose-company01" @change="changeCate(value03)" >
               <el-option >请选择</el-option>
                <el-option
                  v-for="item in options03"
                  :key="item.fid"
                  :label="item.name"
                  :value="item.fid"
                ></el-option>
              </el-select>
            </template>
          </div>
          <!-- 资产名称 -->
          <div class="asset">
            <span>资产名称</span>
            <el-input v-model="input01" class="input01" @input.native="changeName(input01)"></el-input>
             <button @click="toLook()">统计</button>
          </div>
        </div>
        <!-- 表格 -->
        <template v-if="fidID=='2'">
          <el-table
           v-loading="loading"
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
            <el-table-column prop="company_name" label="机构名称" width="260"></el-table-column>
            <el-table-column prop="nature_name" label="资产性质" width="120"></el-table-column>
            
            <el-table-column prop="category_name" label="资产类别" width="100"></el-table-column>
            <el-table-column prop="assets_number" label="资产编号" width="180"></el-table-column>
            <el-table-column prop="assets_name" label="资产名称" width="220"></el-table-column>
          
            <el-table-column prop="transaction_area" label="交易面积(m²)" width="130"></el-table-column>
            <el-table-column prop="built_area" label="建筑面积(m²)" width="130"></el-table-column>
            <el-table-column prop="assets_status_quo" label="资产现状" width="100"></el-table-column>
            <el-table-column prop="partyB_name" label="承租方" width="160"></el-table-column>
            <el-table-column prop="start_date" label="合同开始日期" width="120"></el-table-column>
            <el-table-column prop="end_date" label="合同结束日期" width="120"></el-table-column>
          
          
        
          
            <el-table-column prop="operate" label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small" >详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <template v-if="fidID=='1'">
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
            <el-table-column prop="company_name" label="机构名称" width="240"></el-table-column>
         
            <el-table-column prop="nature_name" label="资产性质" width="150"></el-table-column>
            <el-table-column prop="category_name" label="资产类别" width="100"></el-table-column>
            <el-table-column prop="assets_number" label="资产编号" width="100"></el-table-column>
            <el-table-column prop="assets_name" label="资产名称" width="190"></el-table-column>
             <el-table-column prop="transaction_area" label="交易面积(m²)" width="130"></el-table-column>
            <el-table-column prop="area_covered" label="占地面积(m²)" width="130"></el-table-column>
            <el-table-column prop="location_address" label="坐落地址" width="230"></el-table-column>
           
           
            <el-table-column prop="partyB_name" label="承包方" width="100"></el-table-column>
            <el-table-column prop="start_date" label="合同开始日期" width="120"></el-table-column>
            <el-table-column prop="end_date" label="合同结束日期" width="120"></el-table-column>
          
        
          
            <el-table-column prop="operate" label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick02(scope.row)" type="text" size="small" width="150">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <template v-if="fidID=='3'">
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
            <el-table-column prop="company_name" label="机构名称" width="230"></el-table-column>
     
            <el-table-column prop="nature_name" label="资产性质" width="150"></el-table-column>
            <el-table-column prop="category_name" label="资产类别" width="180"></el-table-column>
            <el-table-column prop="assets_number" label="资产编号" width="160"></el-table-column>
                   <el-table-column prop="assets_name" label="资产名称" width="200"></el-table-column>
            <el-table-column prop="investment_life" label="投资年限" width="150"></el-table-column>
            <el-table-column prop="investment_cost" label="投资成本" width="150"></el-table-column>
            <el-table-column prop="investment_object" label="投资对象" width="100"></el-table-column>
            <el-table-column prop="general_objective" label="合同总标的" width="100"></el-table-column>
            <el-table-column prop="start_date" label="合同开始日期" width="100"></el-table-column>
            <el-table-column prop="end_date" label="合同结束日期" width="100"></el-table-column>
          
        
          
            <el-table-column prop="operate" label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick03(scope.row)" type="text" size="small" width="150">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <template v-if="fidID=='4'">
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
            <el-table-column prop="company_name" label="机构名称" width="230"></el-table-column>
     
            <el-table-column prop="nature_name" label="资产性质" width="150"></el-table-column>
            <el-table-column prop="category_name" label="资产类别" width="180"></el-table-column>
            <el-table-column prop="assets_number" label="资产编号" width="160"></el-table-column>
                   <el-table-column prop="assets_name" label="资产名称" width="200"></el-table-column>
            <el-table-column prop="purchase_date" label="购建日期" width="150"></el-table-column>
            <el-table-column prop="service_life" label="预计使用年限" width="150"></el-table-column>
            <el-table-column prop="amortization_date" label="开始摊销日期" width="130"></el-table-column>
            <el-table-column prop="initial_balance" label="期初余额" width="100"></el-table-column>
            <el-table-column prop="final_balance" label="期末余额" width="100"></el-table-column>
            <el-table-column prop="accumulated_amortization" label="累计摊销" width="100"></el-table-column>
        
          
            <el-table-column prop="operate" label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick04(scope.row)" type="text" size="small" width="150">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <template v-if="fidID=='5'">
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
            <el-table-column prop="company_name" label="机构名称" width="250"></el-table-column>    
            <el-table-column prop="nature_name" label="资产性质" width="150"></el-table-column>
            <el-table-column prop="category_name" label="资产类别" width="180"></el-table-column>
            <el-table-column prop="assets_number" label="资产编号" width="160"></el-table-column>
                   <el-table-column prop="assets_name" label="资产名称" width="200"></el-table-column>
            <el-table-column prop="purchase_date" label="购建日期" width="150"></el-table-column>
            <el-table-column prop="service_life" label="预计使用年限" width="120"></el-table-column>
            <el-table-column prop="number" label="数量" width="130"></el-table-column>
            <el-table-column prop="unit_price" label="单价" width="100"></el-table-column>
            <el-table-column prop="start_date" label="合同开始日期" width="100"></el-table-column>
            <el-table-column prop="end_date" label="合同结束日期" width="100"></el-table-column>
        
          
        
          
            <el-table-column prop="operate" label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick05(scope.row)" type="text" size="small" width="150">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <el-pagination
          :current-page="pagenum"
          @current-change="handleCurrentChange"
          class="page"
          background
          layout="prev, pager, next,total"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fidID:'2',
      // 资产类型
      options: [
       {		
                "fid": "2",
                "name": "固定资产类"
            },
            {
                "fid": "1",
                "name": "资源类"
            },
       {		
                "fid": "3",
                "name": "投资类"
            },
            {
                "fid": "4",
                "name": "无形资产类"
            },
            {
                "fid": "5",
                "name": "其他资产类"
            },
       
      
      ],
      options02: [
        {
          assets_nature: "20e768224fa246b595383b448e8d3567",
          label: "经营性资产"
        },
        {
          assets_nature: "3bff39c08e3a46d48dec4ba30e0cf414",
          label: "非经营性资产"
        }      
      ],
      options03: [
        {
          val: "写字楼",
          label: "写字楼"
        },
        {
          val: "厂房",
          label: "厂房"
        },
        {
          val: "商铺",
          label: "商铺"
        },
        {
          val: "宿舍",
          label: "宿舍"
        },

      ],

      // 总条数
      total: 0,
      pagenum: 1,
      value: "",
      value03:'',
      value02:'',
      tableData:[],
      input01:'',
        loading: true,
    };
  },
  watch: {
    fidID:function(){
      
      this.value02='',
        this.value03='',
        this.input01='',
        this.pagenum=1,

        this.getData();
        

    },

  },
  methods: {
    //查看的方法
    toLook(){

      this.pagenum=1,
     this.getData() 
    },
    //  切换资产的方法
    changeAssets(fidID){
     this.fidID=fidID
     
    },
    //  切换资产性质的方法
    changeNature(value02){
     this.value02=value02
    
     
      
    },
  // 切换资产类别的方法
    changeCate(value03){
     this.value03=value03
     
     
      
    },

     // 搜索资产名称的方法
    changeName(input01){
       this.input01=input01
     
    },
   
      //去无形资产类表
       handleClick04(val) {
       this.$router.push({
        path: "/detailWuxing",
        query: {
          assets_id: val.assets_id,
          assets_type:this.fidID
        
        }
      });
    },

      //去投资详情表

      handleClick05(val) {
       this.$router.push({
        path: "/detailOthers",
        query: {
          assets_id: val.assets_id,
          assets_type:this.fidID
        
        }
      });
    },
   
    //去投资详情表
     handleClick03(val) {
       this.$router.push({
        path: "/detailTouzi",
        query: {
          assets_id: val.assets_id,
          assets_type:this.fidID
        
        }
      });
    },
  
    //去资源详情表
     

     handleClick02(val) {
       this.$router.push({
        path: "/detailZiyuan",
        query: {
          assets_id: val.assets_id,
          assets_type:this.fidID
        
        }
      });
    },
    

      handleClick(val) {
       this.$router.push({
        path: "/detail",
        query: {
          assets_id: val.assets_id,
          assets_type:this.fidID
        
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
        .post("assetes/selectAssetsList", {
          nowpage: this.pagenum,
         assets_type:this.fidID,
         assets_nature:this.value02,
         category_id:this.value03,
         assets_name:this.input01,
         company_id:this.$route.query.company_id,
         
        //  torganization_id:this.$route.query.torganization_id
         
        })
        .then(result => {
          if (result.data.code == 200) {
            console.log(result);
            
            this.tableData = result.data.data.assetsList;
            this.total = result.data.data.count;
            this.options03=result.data.data.categoryList
            // rLoading.close();
           this.loading=false
         
            
            
          }
        });

      }else{
          this.$axios
        .post("assetes/selectAssetsList", {
          nowpage: this.pagenum,
         assets_type:this.fidID,
         assets_nature:this.value02,
         category_id:this.value03,
         assets_name:this.input01,
         torganization_id:this.$route.query.torganization_id
         
        })
        .then(result => {
          if (result.data.code == 200) {
            console.log(result);
            
            this.tableData = result.data.data.assetsList;
            this.total = result.data.data.count;
            this.options03=result.data.data.categoryList
            // rLoading.close();
           this.loading=false
         
            
            
          }
        });

      }
    
    },
    // 点击页面跳转的方法
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getData();
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