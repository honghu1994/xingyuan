<template>
  <div class="fixedAssets">
    <header-top>
      <div slot="left">
        <img @click="$router.go(-1)" src="@/assets/img/back.png" />
      </div>
      <div slot="mid">资产信息</div>
    </header-top>
  
    <div class="zstext-content">
    
    
      <div class="zschoose">
       
        <el-select v-model="subordinate" placeholder="请选择" size="large"  class="choose">
        <el-option
          
          v-for="item in companyData"
         :key="item.subordinate"
         :label="item.company_name"
         :value="item.subordinate">
        </el-option>
       </el-select>
     

      </div>
      
    <!-- tab栏切换 -->
      <div class="mytabs zsul">
        <template>
          <el-tabs v-model="activeName" class="zsmytabs" >
          <el-tab-pane label="土地使用权" name="first">
             <ul >

              <li  class="zsli"  @click='toDetail(item.assets_id)' v-for="(item) in officeData" :key="item.assets_id">
                <h1 class="zsh1 ">{{item.assets_name}}</h1>
                <p class=" zstwo">
                  <span style="marginRight:.1.5rem">{{item.assets_nature}}</span>
                  <span style="color:#0000ff">{{item.assets_category}}</span>
                  <span style="marginLeft:.2rem" v-if="item.transaction_status==0">尚未交易</span>
                  <span style="marginLeft:.2rem" v-if="item.transaction_status==2">交易中</span>
                  <span style="marginLeft:.2rem" v-if="item.transaction_status==3">完成交易</span>
                 
                  <!-- <span style="marginLeft:.2rem">{{item.transaction_status}}</span> -->
                  <span>建筑面积（m²）：{{item.built_area}}</span>
                </p>
                <p class="zs-last zstwo"></p>
                <p  class="zsfont">
                  <span style="marginRight:.5rem">{{item.street_name}}</span>
                  <span style="color:#9b8dfe">{{item.company_name}}</span>
                </p>
              </li>
             
            </ul>
      
          
          </el-tab-pane>
         <el-tab-pane label="商标权" name="second">
            <ul >

              <li  class="zsli"  @click='toDetail(item.assets_id)' v-for="(item) in factoryData" :key="item.assets_id">
                <h1 class="zsh1 ">{{item.assets_name}}</h1>
                <p class=" zstwo">
                  <span style="marginRight:.1.5rem">{{item.assets_nature}}</span>
                  <span style="color:#0000ff">{{item.assets_category}}</span>
                  <span style="marginLeft:.2rem" v-if="item.transaction_status==0">尚未交易</span>
                  <span style="marginLeft:.2rem" v-if="item.transaction_status==2">交易中</span>
                  <span style="marginLeft:.2rem" v-if="item.transaction_status==3">完成交易</span>
                 
                  <!-- <span style="marginLeft:.2rem">{{item.transaction_status}}</span> -->
                  <span>建筑面积（m²）：{{item.built_area}}</span>
                </p>
                <p class="zs-last zstwo"></p>
                <p  class="zsfont">
                  <span style="marginRight:.5rem">{{item.street_name}}</span>
                  <span style="color:#9b8dfe">{{item.company_name}}</span>
                </p>
              </li>
             
            </ul>
         </el-tab-pane>
         <el-tab-pane label="专利权" name="third">
              <ul >

              <li  class="zsli"  @click='toDetail(item.assets_id)' v-for="(item) in storyData" :key="item.assets_id">
                <h1 class="zsh1 ">{{item.assets_name}}</h1>
                <p class=" zstwo">
                  <span style="marginRight:.1.5rem">{{item.assets_nature}}</span>
                  <span style="color:#0000ff">{{item.assets_category}}</span>
                  <span style="marginLeft:.2rem" v-if="item.transaction_status==0">尚未交易</span>
                  <span style="marginLeft:.2rem" v-if="item.transaction_status==2">交易中</span>
                  <span style="marginLeft:.2rem" v-if="item.transaction_status==3">完成交易</span>
                 
                  <!-- <span style="marginLeft:.2rem">{{item.transaction_status}}</span> -->
                  <span>建筑面积（m²）：{{item.built_area}}</span>
                </p>
                <p class="zs-last zstwo"></p>
                <p  class="zsfont">
                  <span style="marginRight:.5rem">{{item.street_name}}</span>
                  <span style="color:#9b8dfe">{{item.company_name}}</span>
                </p>
              </li>
             
            </ul>
         </el-tab-pane>
          <el-tab-pane label="其他" name="fourth">
                 <ul >

              <li  class="zsli"  @click='toDetail(item.assets_id)' v-for="(item) in dormData" :key="item.assets_id">
                <h1 class="zsh1 ">{{item.assets_name}}</h1>
                <p class=" zstwo">
                  <span style="marginRight:.1.5rem">{{item.assets_nature}}</span>
                  <span style="color:#0000ff">{{item.assets_category}}</span>
                  <span style="marginLeft:.2rem" v-if="item.transaction_status==0">尚未交易</span>
                  <span style="marginLeft:.2rem" v-if="item.transaction_status==2">交易中</span>
                  <span style="marginLeft:.2rem" v-if="item.transaction_status==3">完成交易</span>
                 
                  <!-- <span style="marginLeft:.2rem">{{item.transaction_status}}</span> -->
                  <span>建筑面积（m²）：{{item.built_area}}</span>
                </p>
                <p class="zs-last zstwo"></p>
                <p  class="zsfont">
                  <span style="marginRight:.5rem">{{item.street_name}}</span>
                  <span style="color:#9b8dfe">{{item.company_name}}</span>
                </p>
              </li>
             
            </ul>
          </el-tab-pane>
          
         </el-tabs>
      </template>

       
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/common/Header";

export default {
  data() {
    return {
    
      othersData:[],
      dormData:[],
      storyData:[],
        factoryData:[],
        companyData:[],
        officeData:[],
        activeName: 'first',
        subordinate:'D440305101001',
         id:this.$store.state.loginInfo.sessionVal.organization_id,
        value: '',
        assets_id:''

            
    };
  },
  components: {
    HeaderTop
  },
  watch: {
    subordinate:function(subordinate){
      this.subordinate=subordinate
      this.getOffice()
      this.getFactory()
    this.getStory()
    this.getDorm()
    }
      
    
  },
  mounted() {
    this.getCompanyData();
    this.getOffice()
    this.getFactory()
    this.getStory()
    this.getDorm()
   
  },
  methods: {
   //获取土地使用权数据
    getOffice(){
      	this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage:'1',
                type:'4',
                assets_category:'218'

        				}).then(result => {
            
           
            if(result.data.code==200){

            
            this.officeData=result.data.data.dataList
           
            
           
             
    
					}
			})
    },
    //获取商标权数据
     getFactory(){
      	this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage:'1',
                type:'4',
                assets_category:'219'

        				}).then(result => {
            
           
            if(result.data.code==200){

              
             
              
            this.factoryData=result.data.data.dataList
          
            // console.log(this.officeData);
          
					}
			})
    },
    //获取专利权数据
     getStory(){
      	this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage:'1',
                type:'4',
                assets_category:'221'

        				}).then(result => {
            
           
            if(result.data.code==200){

              
             
              
            this.storyData=result.data.data.dataList
          
            // console.log(this.officeData);
          
					}
			})
    },
    //获取其他数据
    getDorm(){
      	this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage:'1',
                type:'4',
                assets_category:'102'

        				}).then(result => {
            
           
            if(result.data.code==200){

              
             
              
            this.dormData=result.data.data.dataList
          
            // console.log(this.officeData);
          
					}
			})
    },
    
    //获取公司数据
    getCompanyData(){
				this.$http
        		.post("app_module2/getStreetStockCompany",{
          			torganization_id:this.id
        				}).then(result => {
            
            
            if(result.data.code==200){
             this.companyData=result.data.data.pageList
    
					}
			})
      },
      // 去详情页
    toDetail(assets_id) {
       this.$router.push({
        path: "/invisibleDetail",
        query: {
          assets_id: assets_id
        
        }
      });
    },
  },
};
</script>

<style lang='less' scoped>


.fixedAssets {
  width: 100%;

li{
  list-style: none;
}
.zsfont{
  font-size: 16px;
  margin-bottom: .2rem;
}
.zschoose{
    top: 1.18rem;
    width: 100%;
    z-index: 99999;
 
    position: fixed;
     border-top: 0.2rem solid #e9e9e9;
    padding-left: .3rem;
    padding-right: .2rem;
  }


  .zstext-content {
    // border-top: 0.2rem solid #e9e9e9;
    .choose{
      width: 90%;
    }
    // padding-left: 0.1rem;
    .zs-select {
      width: 100%;
     
    }
    .zsul {
     padding-left: 0.3rem;
      margin-top: 2rem;
     
    }
  }
}

.zsli{
    border-bottom: .2rem solid #e9e9e9;
}
.zsh1{
    margin-top: .2rem;
    margin-bottom: .3rem;
        font-size: 18px;
    font-weight: normal;
}
.zs-last{
   
    border-top: 1px solid grey;
}
.zstwo{
    margin-bottom: .2rem;
    font-size: 14px;
}

.choose/deep/input.el-input__inner{
  font-size: 18px;
}
li.el-select-dropdown__item{
   font-size: 18px;
}


</style>