<template>
  <div class="fixedAssets">
    <header-top>
      <div slot="left">
        <img @click="$router.go(-1)" src="@/assets/img/back.png" />
      </div>
      <div slot="mid">资产列表</div>
    </header-top>
    <div class="zstext-content">
      <div class="zschoose">
      
        <el-select v-model="subordinate"   placeholder="请选择" size="large"  class="choose">
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
       
          <el-tabs v-model="activeName"   class="zsmytabs">
            <el-tab-pane label="写字楼" name="first">
             <ul  class="myul">
                  <van-pull-refresh v-model="pullLoading" @refresh="onRefresh">
                   <van-list v-model="loading" :finished="finished" finished-text="我是有底线的！" @load="onLoad">
                     <!-- <van-cell v-for="(item,index) in articlList" :key="index" :title="item.title" /> -->
                       <li  class="zsli"  @click='toDetail(item.assets_id)' v-for="(item,index) in officeData" :key="index" >
                         <h1 class="zsh1 ">{{item.assets_name}}</h1>
                          <p class=" zstwo">
                         <span style="marginRight:.1.5rem">{{item.assets_nature}}</span>
                         <span style="color:#0000ff">{{item.assets_category}}</span>
                         <span style="marginLeft:.2rem" v-if="item.transaction_status==0">尚未交易</span>
                         <span style="marginLeft:.2rem" v-if="item.transaction_status==2">交易中</span>
                        <span style="marginLeft:.2rem" v-if="item.transaction_status==3">完成交易</span>
                          <span>建筑面积（m²）：{{item.built_area}}</span>
                         </p>
                         <p class="zs-last zstwo"></p>
                         <p  class="zsfont">
                          <span style="marginRight:.5rem">{{item.street_name}}</span>
                          <span style="color:#9b8dfe">{{item.company_name}}</span>
                         </p>
                      </li>

                   </van-list>
                   </van-pull-refresh>
             </ul>
            </el-tab-pane>
             <el-tab-pane label="厂房" name="second">
               <ul >
                  <van-pull-refresh v-model="pullLoading" @refresh="onRefresh">
                   <van-list v-model="loading" :finished="finished" finished-text="我是有底线的！" @load="onLoad02">
              <li  class="zsli"  @click='toDetail(item.assets_id)' v-for="(item,index) in factoryData" :key="index">
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
                <p class="zsfont">
                  <span style="marginRight:.5rem">{{item.street_name}}</span>
                  <span style="color:#9b8dfe">{{item.company_name}}</span>
                </p>
              </li>
                </van-list>
                   </van-pull-refresh>
             
              </ul>
            </el-tab-pane>
             <el-tab-pane label="商铺" name="third">
              <ul >
                  <van-pull-refresh v-model="pullLoading" @refresh="onRefresh">

                   <van-list v-model="loading" :finished="finished" finished-text="我是有底线的！" @load="onLoad03">
              <li  class="zsli"  @click='toDetail(item.assets_id)' v-for="(item,index) in storyData" :key="index">
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
                 </van-list>
                   </van-pull-refresh>
             
              </ul>
             </el-tab-pane>
            <el-tab-pane label="宿舍" name="fourth">
                 <ul >
                     <van-pull-refresh v-model="pullLoading" @refresh="onRefresh">

                   <van-list v-model="loading" :finished="finished" finished-text="我是有底线的！" @load="onLoad04">
              <li  class="zsli"  @click='toDetail(item.assets_id)' v-for="(item,index) in dormData" :key="index">
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
                 </van-list>
                   </van-pull-refresh>
             
             </ul>
            </el-tab-pane>

            <el-tab-pane label="其他" name="fifth">
              <ul >
                  <van-pull-refresh v-model="pullLoading" @refresh="onRefresh">

                   <van-list v-model="loading" :finished="finished" finished-text="我是有底线的！" @load="onLoad05">
              <li  class="zsli"  @click='toDetail(item.assets_id)' v-for="(item,index) in othersData" :key="index">
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
                 </van-list>
                   </van-pull-refresh>
             
              </ul>
            </el-tab-pane>
         </el-tabs>
    
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
        assets_id:'',
         // 设置下拉的加载状态，默认为false
         loading: false,
         finished: false,
         pullLoading:false,
         nowPage:1,
         nowPage02:1,
         nowPage03:1,
         nowPage04:1,
         nowPage05:1,
     
    };
  },
  components: {
    HeaderTop
  },
  watch: {
    subordinate:function(subordinate){
      this.subordinate=subordinate
      // this.nowPage=1,
      this.getOffice()
      // this.nowPage02=1,
      this.getFactory()
      this.getStory()
      this.getDorm()
      this.getOthers()
      this.initialization()
    }
  },
  mounted() {
    // console.log(this.$store.state.loginInfo.sessionVal.organization_id);
    this.getCompanyData();
    this.getOffice()
    this.getFactory()
    this.getStory()
    this.getDorm()
    this.getOthers()
  },
  methods: {
      //下拉刷新
     onRefresh(){
       this.getOffice();
       this.pullLoading = false;
    },
    initialization(){
      this.officeData = [];
      this.nowpage = 1;
      this.loading = true;//下拉加载中
      this.finished = false;//下拉结束
      if(this.loading){
          this.onLoad();
      }
    },
    onLoad(){
      setTimeout(() => {
         this.nowPage+=1;
      	this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage: this.nowPage,
                type:'2',
                assets_category:'205'
        				}).then(result => {
            if(result.data.code==200){
             this.officeData.push(...result.data.data.dataList);
               let totalCount=result.data.data.PageUtil.totalCount
              if( this.officeData.length==totalCount){
                this.finished = true;
              }
          }
      });
       this.loading = false;
      }, 500);
    },
    onLoad02(){
      setTimeout(() => {
              this.nowPage02+=1;
        this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage: this.nowPage02,
                type:'2',
                assets_category:'201'
        				}).then(result => {
            if(result.data.code==200){
             this.factoryData.push(...result.data.data.dataList);
              let totalCount=result.data.data.PageUtil.totalCount
               if( this.factoryData.length==totalCount){
                this.finished = true;  
              }
          }   
      });      
      this.loading = false;
      }, 500);
    },
    onLoad03(){
      console.log('11111111');
      
      setTimeout(() => {
         this.nowPage03+=1;

        this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage: this.nowPage03,
                type:'2',
                assets_category:'203'

        				}).then(result => {
            
           
            if(result.data.code==200){
             
              
             this.storyData.push(...result.data.data.dataList);
              let totalCount=result.data.data.PageUtil.totalCount
            
              
               if( this.storyData.length==totalCount){
                this.finished = true;  
              }
    
          }   
      });      
      this.loading = false;
        
      }, 500);
       
    },
   
    onLoad04(){
      setTimeout(() => {
         this.nowPage04+=1;

        this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage: this.nowPage04,
                type:'2',
                assets_category:'206'

        				}).then(result => {
            
           
            if(result.data.code==200){
             
              
             this.dormData.push(...result.data.data.dataList);
              let totalCount=result.data.data.PageUtil.totalCount
               if( this.dormData.length==totalCount){
                this.finished = true;  
              }
    
          }   
      });      
      this.loading = false;
        
      }, 500);
       
    },
    onLoad05(){
      setTimeout(() => {
         this.nowPage05+=1;

        this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage: this.nowPage05,
                type:'2',
                assets_category:'102'

        				}).then(result => {
            
           
            if(result.data.code==200){
          
             
              
             this.othersData.push(...result.data.data.dataList);
              let totalCount=result.data.data.PageUtil.totalCount
            
              
              if( this.othersData.length==totalCount){
                this.finished = true;  
              }
    
          }   
      });      
      this.loading = false;
        
      }, 500);
       
    },
   
    getOffice(){
      	this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage:1,
                type:'2',
                assets_category:'205'

        				}).then(result => {

            if(result.data.code==200){

            this.officeData=result.data.data.dataList   

          }
   
      })
     
    },
    //获取厂房数据
     getFactory(){
      	this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage:'1',
                type:'2',
                assets_category:'201'

        				}).then(result => {
            
           
            if(result.data.code==200){

              
             
              
            this.factoryData=result.data.data.dataList
          
            
            
          
					}
			})
    },
    //获取商铺数据
     getStory(){
      	this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage:'1',
                type:'2',
                assets_category:'203'

        				}).then(result => {
            
           
            if(result.data.code==200){

              
             
              
            this.storyData=result.data.data.dataList
        
          
					}
			})
    },
    //获取宿舍数据
    getDorm(){
      	this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage:'1',
                type:'2',
                assets_category:'206'

        				}).then(result => {
            
           
            if(result.data.code==200){

            this.dormData=result.data.data.dataList
 
					}
			})
    },
    //获取其他数据
     getOthers(){
      	this.$http
        		.post("app_module2/getAssetsJointStockCompany",{
                torganization_id:this.subordinate,
                nowPage:'1',
                type:'2',
                assets_category:'102'

        				}).then(result => {
 
            if(result.data.code==200){
  
            this.othersData=result.data.data.dataList
  
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
        path: "/fixedDetail",
        query: {
          assets_id: assets_id
        
        }
      });
    },
  },
};
</script>

<style lang='less' scoped>

  // /deep/.el-tabs__header{
  //    position: fixed;
  // }
  // /deep/.el-tabs__content{
  //   margin-top: 5rem;
  // }
// /deep/.el-tabs__nav-scroll{
//     position: fixed;
// }
.fixedAssets {
  width: 100%;
  
// .myul{
//    margin-top: 1rem;
// }

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

    .choose{
      width: 90%;
      // font-size: 28px!important;
    }
    
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
//  .zsmytabs/deep/.el-tabs__item{
//    font-size: .31rem;
 
// }
.choose/deep/input.el-input__inner{
  font-size: 18px;
}
li.el-select-dropdown__item{
   font-size: 18px;
}


</style>