<template>
  <div>
    <img src="../assets/images/top.png" alt class="topImg" />

    <h1>
      <img src="../assets/images/logo.png" alt />
      集体经济总览资产详情
    </h1>
    <div class="content">
      <div class="contentwarp">
        <div class="inputbox">
          <div class="company">
            <span>股份公司</span>
            <el-input v-model="input" class="input01" @input.native="changeCompany(input)"></el-input>
          </div>
          <!-- 资产名称 -->
          <div class="asset">
            <span>资产名称</span>
            <el-input v-model="input01" class="input01" @input.native="changeName(input01)"></el-input>
          </div>
          <div class="category">
            <span>资产类别</span>
            <template>
              <el-select v-model="value" placeholder="请选择" class="choose-company01" @change="changeCate(value)" >
               <el-option >请选择</el-option>
                <el-option
                  v-for="item in options"
                  :key="item.fid"
                  :label="item.name"
                  :value="item.fid"
                ></el-option>
              </el-select>
            </template>
          </div>
          <div class="use">
            <span>资产用途</span>
            <template>
              <el-select v-model="value01" placeholder="请选择" class="choose-company02" @change="changeUse(value01)">
                 <el-option >请选择</el-option>
                <el-option
                  v-for="item in options01"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
            <button @click="toLook()">查看</button>
            <img src="../assets/images/返回.png" alt @click="goback()" />
          </div>
        </div>
        <!-- 表格 -->
        <template>
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
            <el-table-column prop="company_name" label="所属股份公司" width="260"></el-table-column>
            <el-table-column prop="assets_name" label="资产名称" width="300"></el-table-column>
            <el-table-column prop="nature_name" label="资产性质" width="150"></el-table-column>
            <el-table-column prop="category_name" label="资产类别" width="180"></el-table-column>
            <el-table-column prop="assets_number" label="资产编号" width="160"></el-table-column>
            <el-table-column prop="assets_use" label="资产用途" width="150"></el-table-column>
            <el-table-column prop="area_covered" label="占地面积(m²)" width="150"></el-table-column>
            <el-table-column prop="transaction_area" label="交易面积(m²)" width="150"></el-table-column>
            <el-table-column prop="assets_status_quo" label="资产现状" width="150"></el-table-column>
            <el-table-column prop="operate" label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
      // 资产类型
      options: [
       {		
                "fid": "101",
                "name": "耕地"
            },
            {
                "fid": "102",
                "name": "其他"
            },
            {
                "fid": "103",
                "name": "林地"
            },
            {
                "fid": "105",
                "name": "水域及水利设施用地"
            },
            {
                "fid": "106",
                "name": "住宅用地"
            },
            {
                "fid": "107",
                "name": "公共管理与公共服务用地"
            },
            {
                "fid": "108",
                "name": "工矿仓储用地"
            },
            {
                "fid": "109",
                "name": "商服用地"
            },
            {
                "fid": "115",
                "name": "园地"
            },
            {
                "fid": "116",
                "name": "草地"
            },
            {
                "fid": "117",
                "name": "特殊用地"
            },
            {
                "fid": "118",
                "name": "交通运输用地"
            },
            {
                "fid": "119",
                "name": "商住两用"
            },
            {
                "fid": "226",
                "name": "酒店、旅店"
            },
            {
                "fid": "227",
                "name": "餐饮"
            },
            {
                "fid": "228",
                "name": "商场"
            },
            {
                "fid": "229",
                "name": "休闲会所"
            },
            {
                "fid": "201",
                "name": "厂房"
            },
            {
                "fid": "203",
                "name": "商铺"
            },
            {
                "fid": "204",
                "name": "市场"
            },
            {
                "fid": "205",
                "name": "办公楼"
            },
            {
                "fid": "206",
                "name": "宿舍"
            },
            {
                "fid": "208",
                "name": "临建物业"
            },
            {
                "fid": "209",
                "name": "公益公用设施"
            },
            {
                "fid": "212",
                "name": "交通工具"
            },
            {
                "fid": "214",
                "name": "办公设备"
            },
            {
                "fid": "213",
                "name": "股票投资"
            },
            {
                "fid": "215",
                "name": "债券投资"
            },
            {
                "fid": "216",
                "name": "企业投资"
            },
            {
                "fid": "218",
                "name": "土地使用权"
            },
            {
                "fid": "219",
                "name": "商标权"
            },
            {
                "fid": "221",
                "name": "专利权"
            },
            {
                "fid": "211",
                "name": "库存物资"
            },
            {
                "fid": "220",
                "name": "林木资产"
            }
      ],
      options01: [
        {
          value: "农业",
          label: "农业"
        },
        {
          value: "工业",
          label: "工业"
        },
        {
          value: "商业",
          label: "商业"
        },
        {
          value: "建设",
          label: "建设"
        },
        {
          value: "居住",
          label: "居住"
        },
        {
          value: "自用",
          label: "自用"
        },
        {
          value: "商住两用",
          label: "商住两用"
        }
      ],
      // 总条数
      total: 0,
      pagenum: 1,
      value: "",
      value01:'',
      tableData:[],
      input: "",
      input01:''
    };
  },
  methods: {
    //查看的方法
    toLook(){

     this.getData()
      
      
      
      
    },
    //  切换资产类别的方法
    changeCate(value){
     this.value=value
      
    },
    //搜索资产名称的方法
    changeName(input01){
       this.input01=input01
    },
   
    // // 搜索公司的方法
    changeCompany(input){
       this.input=input
      
      
    },
    // // 切换资产用途的方法
    changeUse(value01){
      this.value01=value01
      

    },
    handleClick(val) {
      // console.log(val.assets_id);

      this.$router.push("/detail/" + val.assets_id);
    },
    goback() {
      this.$router.go(-1);
    },
    // 渲染表格数据的事件
    getData() {
      this.$axios
        .post("assetes/selectAssetsList", {
          nowpage: this.pagenum,
          category_id:this.value,
          assets_use:this.value01,
          company_name:this.input,
          assets_name:this.input01
        })
        .then(result => {
          if (result.data.code == 200) {
            this.tableData = result.data.data.assetsList;
            this.total = result.data.data.count;
          }
        });
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

      .company {
        display: flex;
        align-items: center;
        margin-right: 30px;
        //             margin-right: 30px;
        // float: left;
        span {
          margin-right: 10px;
        }
        .input01 {
         
           .el-input__inner::-webkit-input-placeholder {
          color: #fff;
      }
         
          width: 250px;
        }
     
       
         
      }
      .asset {
        display: flex;
        align-items: center;
        margin-right: 30px;
        //             margin-right: 30px;
        // float: left;
        span {
          margin-right: 10px;
        }
        .input01 {
          width: 200px;
        }
      }
      .category {
        margin-right: 25px;
        span {
          margin-right: 10px;
        }
        .choose-company01 {
          width: 120px;
        }
      }
      .use {
        span {
          margin-right: 10px;
        }
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
        .choose-company02 {
          width: 120px;
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