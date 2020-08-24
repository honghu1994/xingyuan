<template>
  <div class="zhuanxingForm">
    <img src="../assets/images/top.png" alt class="topImg" />

    <h1>
      <img src="../assets/images/logo.png" alt />
      南山集体经济总览平台
    </h1>
    <p class="title">转型项目列表</p>
    <div class="content">
      <div class="contentwarp">
          
        <div class="inputbox">
          <!-- 报表类型 -->
          <div class="company">
            <span>报表类型</span>
           <template>
              <el-select v-model="value"   placeholder="请选择" class="choose-company01" @change="changeCate(value)" >
               <!-- <el-option >请选择</el-option> -->
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
          </div>
          <!-- 开始时间 -->
           <div class="use">
            <span>开始时间</span>
            <template>
             
              <div class="block" >
                 <!-- <span class="demonstration">开始时间</span> -->
                <el-date-picker
                   @change="changeData01(value01)" 
                class="choose-company02"
                    v-model="value01"
                     type="date"
                     value-format="yyyy-MM-dd"
                 placeholder="选择日期">
              </el-date-picker>
                 </div>
            </template>
             <img src="../assets/images/返回.png" alt @click="goback()" />
           
          
          </div>
          
          <!-- 结束时间 -->        
          <div class="category">
            <span>结束时间</span>
           <template>
               <div class="block" >
                 <!-- <span class="demonstration">开始时间</span> -->
                <el-date-picker
                 @change="changeData02(value02)" 
                class="choose-company02"
                    v-model="value02"
                     type="date"
                     value-format="yyyy-MM-dd"
                 placeholder="选择日期">
              </el-date-picker>
                 </div>
           </template>
          </div>
          <!-- 项目名称 -->
          <div class="asset">
            <span>项目名称</span>
            <el-input v-model="input01" class="input01" @input.native="changeName(input01)"></el-input>
             <button @click="toLook()">查看</button>
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
            <el-table-column prop="company_name" label="机构名称" width="250"></el-table-column>
            <el-table-column prop="support_type_name" label="扶持类别" width="120"></el-table-column>
            <el-table-column prop="subsidies" label="项目名称" width="400"></el-table-column>
            <el-table-column prop="project_status" label="项目情况" width="400"></el-table-column>
            <el-table-column prop="apply_money" label="申请金额" width="100"></el-table-column>
              <el-table-column prop="remarks" label="备注" ></el-table-column>
           
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
                "value": "101",
                "label": "项目申请表"
            },     
      ],
    

      // 总条数
      total: 0,
      pagenum: 1,
      value: "101",
      value01:'',
      value02:'',
      tableData:[],
      input: "",
      input01:''
    };
  },
  methods: {
    //查看的方法
    toLook(){
      this.pagenum=1;
     this.getData() 
    },
  
    //改变开始日期的方法
   changeData01(value01){
     this.value01=value01
     console.log(value01);
     
   },
   //改变结束日期的方法
   changeData02(value02){
     this.value02=value02
     console.log(value02);
     
   },
    // // 搜索项目名称的方法
    changeName(input01){
       this.input01=input01
      
      
    },
    goback() {
      this.$router.go(-1);
    },
    // 渲染表格数据的事件
    getData() {
      if(this.$route.query.company_id!=''){
        this.$axios
        .post("transformation/transformationList", {
          nowpage: this.pagenum,
          start_time:this.value01,
          end_time:this.value02,
          project_name:this.input01,
           company_id:this.$route.query.company_id,

        })
        .then(result => {
          if (result.data.code == 200) {
            this.tableData = result.data.data.transformationList;
            this.total = result.data.data.page.totalCount;
            // console.log(this.tableData);
            
          }
        });

      }else{
           this.$axios
        .post("transformation/transformationList", {
          nowpage: this.pagenum,
          start_time:this.value01,
          end_time:this.value02,     
          project_name:this.input01,
           torganization_id:this.$route.query.torganization_id
        })
        .then(result => {
          if (result.data.code == 200) {
            this.tableData = result.data.data.transformationList;
            this.total = result.data.data.page.totalCount;
            // console.log(this.tableData);
            
          }
        });

      }
      
    },
    // 分页
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

<style lang="less" >
.zhuanxingForm{
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
      //项目名称
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
      //结束时间
      .category {
           display: flex;
        align-items: center;
        margin-left: 30px;
        margin-right: 30px;
        span {
          margin-right: 10px;
        }
        .choose-company01 {
          width: 180px;
        }
      }
      //开始时间
      .use {
           align-items: center;
          display: flex;
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

}

.el-date-table{
    color: #606266!important;
    border:none;
}




</style>