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
        <template>
        <el-select v-model="subordinate" placeholder="请选择" size="large"  class="choose">
        <el-option
          
          v-for="item in companyData"
         :key="item.subordinate"
         :label="item.company_name"
         :value="item.subordinate">
        </el-option>
       </el-select>
      </template>

      </div>
      
    <!-- tab栏切换 -->
      <div class="mytabs zsul">
        <template>
          <el-tabs v-model="activeName"   class="zsmytabs">
            <el-tab-pane label="写字楼" name="first">
              <scroll
                class="scroll-content"
                ref="scroll"
                :probe-type='3'
                :pull-up-load="true"
                @pullingup='loadMore'
              >
                <div  class="zsli"  @click='toDetail(item.assets_id)' v-for="(item,index) in officeData" :key="index">
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
                </div>
                <p v-if="isShowMessage" style="text-align:center;color:#666; height:20px;margin-top:5px;font-size:13px;">没有更多数据</p>
              </scroll>
            </el-tab-pane>
             <el-tab-pane label="厂房" name="second">
               <ul >

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
             
              </ul>
            </el-tab-pane>
             <el-tab-pane label="商铺" name="third">
              <ul >

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
             
              </ul>
             </el-tab-pane>
            <el-tab-pane label="宿舍" name="fourth">
                 <ul >

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
             
             </ul>
            </el-tab-pane>
              <el-tab-pane label="其他" name="fifth">
              <ul >

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
import Scroll from '@/common/Scroll'
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
      value: '',
      nowPage:0,
      assets_id:'',
      pagesCount:1,
      isShowMessage:false
    };
  },
  components: {
    HeaderTop,Scroll
  },
  watch: {
    subordinate:function(subordinate){
      this.subordinate=subordinate
      this.getOffice()
      this.getFactory()
      this.getStory()
      this.getDorm()
      this.getOthers()
    }
      
    
  },
  mounted() {
    this.getCompanyData();
    this.getOffice()
    this.getFactory()
    this.getStory()
    this.getDorm()
    this.getOthers()
  },
  methods: {
   
    getOffice(){
      this.nowPage = this.nowPage + 1
      this.$http
          .post("app_module2/getAssetsJointStockCompany",{
              torganization_id:this.subordinate,
              nowPage:this.nowPage,
              type:'2',
              assets_category:'205'
              }).then(result => {
                console.log(result)
          if(result.data.code==200){
            // this.officeData=result.data.data.dataList
            this.officeData.push(...result.data.data.dataList)
            this.pagesCount = result.data.data.PageUtil.pageCount
            setTimeout(()=>{
              this.$refs.scroll.refresh()
              this.$refs.scroll.finishPullUp()
            }, 100);
          }
			})
    },
    loadMore(){
      // console.log('加载更多')
      console.log(this.nowPage)
      console.log(this.pagesCount)
      if( this.nowPage >= this.pagesCount ){
          this.isShowMessage = true
          return
      }
      this.getWorkStatus()
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
          
            // console.log(this.officeData);
          
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
          
            // console.log(this.officeData);
          
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
          
            // console.log(this.officeData);
          
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
          
            // console.log(this.officeData);
          
					}
			})
    },
    //获取公司数据
    getCompanyData(){
				this.$http
        		.post("app_module2/getStreetStockCompany",{
          			torganization_id:'D440305'
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
    padding-left: .5rem;
    padding-right: .2rem;
  }
  .zstext-content {
      border-top: 0.2rem solid #e9e9e9;
    .choose{
      width: 100%;
      // font-size: 28px!important;
    }
    
    .zs-select {
      width: 100%;
    
    }
    .zsul {
      padding-left: 0.5rem;
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
.scroll-content{
  overflow: hidden;
  position: absolute;
  top: 1.18rem;
  bottom: 50px;
  left:0;
  right:0;
  border-top: 1px solid #ddd;
  padding:0 10px;
  border: 1px solid red;
}

</style>