<template>
  <div class="zhuanxingForm">
    <img src="../assets/images/top.png" alt class="topImg" />

    <h1>
      <img src="../assets/images/logo.png" alt />
      南山集体经济总览平台
    </h1>
    <p class="title">证照列表</p>
      <img src="../assets/images/返回.png"   @click="goback()"  alt   class="zsimgmy02"/>
    <div class="content">
     
      <div class="contentwarp">
        
        <!-- <div class="zsdingwei"></div> -->
          
        <div class="inputbox">
          <!-- 报表类型 -->
          <div class="company">
            <span>报表类型</span>
           <template >
              <el-select v-model="fidID" placeholder="请选择" class="choose-company01" @change="changeCate(value)" >
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
          <!-- 开始时间 -->
           <div class="use" v-if="fidID==103">
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
           
           
          </div>
          <!-- 结束时间 -->        
          <div class="category" v-if="fidID==103">
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
          <!-- 姓名/证照 -->
          <div class="asset" >
            <span  v-if="fidID==101">姓名/证照</span>
            <span  v-if="fidID==102">姓名/证照</span>
            <span  v-if="fidID==104">姓名/证照</span>
            
            <span  v-if="fidID==103">姓名</span>
           

            <el-input v-model="input01" class="input01" @input.native="changeName(input01)"></el-input>
             <button @click="toLook()" v-if="fidID==101">查看</button>
             <button @click="toLook02()" v-if="fidID==102">查看</button>
             <button @click="toLook03()" v-if="fidID==104">查看</button>
             <button @click="toLook04()" v-if="fidID==103">查看</button>
             <button @click="return01()" class="mybutton" ></button>
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
            <el-table-column prop="org_name" label="机构名称" width="250"></el-table-column>
            <el-table-column prop="org_name_3" label="所属辖区" width="200"></el-table-column>
            <el-table-column prop="personnel_name" label="姓名" width="150"></el-table-column>
            <el-table-column prop="sex" label="性别" width="100"></el-table-column>
            <el-table-column prop="id_number" label="身份证号" width="120"></el-table-column>
              <el-table-column prop="post" label="职务"  width="100"></el-table-column>
              <el-table-column prop="contact_number" label="联系方式"  width="100"></el-table-column>
              <el-table-column prop="is_licence" label="有无证照"  width="100"></el-table-column>
              <el-table-column prop="gonwu" label="公务护照"  width="100"></el-table-column>
              <el-table-column prop="gangao" label="港澳通行证"  width="100"></el-table-column>
              <el-table-column prop="taiwan" label="台湾通行证"  width="100"></el-table-column>
              <el-table-column prop="yinsi" label="因私护照"  width="100"></el-table-column>
              <el-table-column prop="hongkong" label="香港身份证"  width="100"></el-table-column>
              <el-table-column prop="returnhome" label="回乡证"  ></el-table-column>
           
          </el-table>
        </template>
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
            <el-table-column prop="org_name" label="机构名称" width="350"></el-table-column>
            <el-table-column prop="torganization_name" label="所属辖区" width="200"></el-table-column>
             <el-table-column prop="post" label="职务"  width="200"></el-table-column>
            <el-table-column prop="personnel_name" label="姓名" width="200"></el-table-column>
           
            <el-table-column prop="licence_type" label="证照类型" width="200"></el-table-column>
             
              <el-table-column prop="license_number" label="证件编号"  width="200"></el-table-column>
              <el-table-column prop="certificate_valid" label="证件有效期"  width="150"></el-table-column>
              <el-table-column prop="receiving_status" label="领取状态"  width="150"></el-table-column>
              <el-table-column prop="license_status" label="证照状态"  ></el-table-column>
            
           
          </el-table>
        </template>
        <template v-if="fidID==103">
          <el-table
            :data="tableData04"
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
            <el-table-column prop="org_name" label="机构名称" width="280"></el-table-column>
            <el-table-column prop="torganization_name" label="所属辖区" width="200"></el-table-column>
             
            <el-table-column prop="personnel_name" label="姓名" width="100"></el-table-column>
            <el-table-column prop="sex" label="姓别" width="60"></el-table-column>
            <el-table-column prop="id_number" label="身份证号" width="200"></el-table-column>
           
            <el-table-column prop="post" label="职务" width="220"></el-table-column>
             
              <el-table-column prop="contact_number" label="联系方式"  width="200"></el-table-column>
              <el-table-column prop="createtime" label="申请时间"  width="150"></el-table-column>
              <el-table-column prop="exitAndEntry" label="出国(境)"  width="150"></el-table-column>
              <el-table-column prop="place" label="目的地"  ></el-table-column>
            
           
          </el-table>
        </template>
        <template v-if="fidID==104">
          <el-table
            :data="tableData03"
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
            <el-table-column prop="org_name" label="机构名称" width="250"></el-table-column>
            <el-table-column prop="torganization_name" label="所属辖区" width="200"></el-table-column>
             
            <el-table-column prop="personnel_name" label="姓名" width="100"></el-table-column>
            <el-table-column prop="sex" label="姓别" width="60"></el-table-column>
            <el-table-column prop="id_number" label="身份证号" width="200"></el-table-column>
           
            <el-table-column prop="post" label="职务" width="100"></el-table-column>
             
              <el-table-column prop="contact_number" label="联系方式"  width="100"></el-table-column>
              <el-table-column prop="license_number" label="证照编号"  width="100"></el-table-column>
              <el-table-column prop="license_name" label="证照名称"  width="100"></el-table-column>
              <el-table-column prop="collection_date" label="领出日期"  width="150"></el-table-column>
              <el-table-column prop="return_date" label="交回日期"  width="100"></el-table-column>
              <el-table-column prop="exitAndEntry" label="出国(境)"  width='100'></el-table-column>
              <el-table-column prop="place" label="目的地"  ></el-table-column>
            
           
          </el-table>
        </template>

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
        <el-pagination
         v-if="fidID==104"
          :current-page="pagenum03"
          @current-change="handleCurrentChange03"
          class="page"
          background
          layout="prev, pager, next,total"
          :total="total03"
        ></el-pagination>
        <el-pagination
         v-if="fidID==103"
          :current-page="pagenum04"
          @current-change="handleCurrentChange04"
          class="page"
          background
          layout="prev, pager, next,total"
          :total="total04"
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
                "name": "人员信息统计表"
            },     
            {		
                "fid": "102",
                "name": "证照列表"
            },     
            {		
                "fid": "103",
                "name": "出国境申请表"
            },     
            {		
                "fid": "104",
                "name": "出国境明细表"
            },     
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
      // 总条数
      total: 0,
      total02: 0,
      total03: 0,
      total04: 0,
      pagenum: 1,
      pagenum02: 1,
      pagenum03: 1,
      pagenum04: 1,
      value: "",
      value01:'',
      value02:'',
      tableData:[],
      tableData02:[],
      tableData03:[],
      tableData04:[],
      input01:''
    };
  },
  watch: {
    fidID:function(){
        this.pagenum=1;
        this.pagenum02=1;
        this.input01='';
        this.getData02();
        this.pagenum03=1;
        this.getData03();
        this.pagenum04=1;
        this.value01='';
        this.value02='';
        this.getData04();
    }
  },
  methods: {
    return01(){
       this.$router.go(-1);
    },
      goback() {
      this.$router.go(-1);
    },
   
    //查看的方法
    toLook(){
      this.pagenum=1;
     this.getData() 
    },
    toLook02(){
      this.pagenum02=1;
       this.getData02() 
    },
    toLook03(){
      this.pagenum04=1;
       this.getData03() 
    },

    toLook04(){
      this.pagenum03=1;
       this.getData04() 
    },
  
   //改变开始日期的方法
   changeData01(value01){
     this.value01=value01
     console.log(value01);
     
   },
   //改变开始日期的方法
   changeData02(value02){
     this.value02=value02
     console.log(value02);
     
   },
    // // 搜索公司的方法
    changeName(input01){
      
      
       this.input01=input01  
    },
   
 
 
    // 渲染表格数据的事件
    getData() {
        if(this.$route.query.company_id!=''){
           this.$axios
        .post("licences/personnelStatistics", {
           nowpage: this.pagenum,
         perOrlicence_name:this.input01,
          company_id:this.$route.query.company_id,

        })
        .then(result => {
          if (result.data.code == 200) {
            this.tableData = result.data.data.personnelStatistics;
            this.total = result.data.data.page.totalCount;        
          }
        });

        }else{
            this.$axios
        .post("licences/personnelStatistics", {
           nowpage: this.pagenum,
         perOrlicence_name:this.input01,
            torganization_id:this.$route.query.torganization_id

        })
        .then(result => {
          if (result.data.code == 200) {
            this.tableData = result.data.data.personnelStatistics;
            this.total = result.data.data.page.totalCount;        
          }
        });

        }
     
    },
    // 渲染表格2数据的事件
    getData02() {
      if(this.$route.query.company_id!=''){
         this.$axios
        .post("licences/licenceList", {
           nowpage: this.pagenum02,
         perOrlicence_name:this.input01,
          company_id:this.$route.query.company_id,


        })
        .then(result => {
          if (result.data.code == 200) {
            this.tableData02 = result.data.data.licenceList;
            this.total02 = result.data.data.page.totalCount;        
          }
        });

      }else{
         this.$axios
        .post("licences/licenceList", {
           nowpage: this.pagenum02,
         perOrlicence_name:this.input01,
           torganization_id:this.$route.query.torganization_id



        })
        .then(result => {
          if (result.data.code == 200) {
            this.tableData02 = result.data.data.licenceList;
            this.total02 = result.data.data.page.totalCount;        
          }
        });

      }
     
    },
    // 渲染表格4数据的事件
    getData03() {
      this.$axios
        .post("licences/exitAndEntryDetilList", {
           nowpage: this.pagenum03,
         perOrlicence_name:this.input01
        })
        .then(result => {
          if (result.data.code == 200) {
            this.tableData03 = result.data.data.exitAndEntryDetilList;
            this.total03 = result.data.data.page.totalCount;        
          }
        });
    },
    // 渲染表格3数据的事件
    getData04() {
       if(this.$route.query.company_id!=''){
             this.$axios
        .post("licences/exitAndEntryList", {
           nowpage: this.pagenum04,
         personnel_name:this.input01,
         queryTime_start:this.value01,
         queryTime_end:this.value02,
           company_id:this.$route.query.company_id,

        })
        .then(result => {
          if (result.data.code == 200) {
            this.tableData04 = result.data.data.exitAndEntryList;
            this.total04 = result.data.data.page.totalCount;        
          }
        });
       }else{
          this.$axios
        .post("licences/exitAndEntryList", {
           nowpage: this.pagenum04,
         personnel_name:this.input01,
         queryTime_start:this.value01,
         queryTime_end:this.value02,
          torganization_id:this.$route.query.torganization_id
        })
        .then(result => {
          if (result.data.code == 200) {
            this.tableData04 = result.data.data.exitAndEntryList;
            this.total04 = result.data.data.page.totalCount;        
          }
        });

       }

     
    },
    // 分页
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getData();
    },
    handleCurrentChange02(val02) {
      this.pagenum02 = val02;
      this.getData02();
    },
    handleCurrentChange03(val03) {
      this.pagenum03 = val03;
      this.getData03();
    },

    handleCurrentChange04(val04) {
      this.pagenum04 = val04;
      this.getData04();
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
.zsimgmy02{
  position: absolute;
        width: 32px;
        top: 190px;
        right:120px;

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
          .mybutton{
            width: 60px;
            height: 60px;
            position: absolute;
            right: 50px;
            opacity: 0;

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