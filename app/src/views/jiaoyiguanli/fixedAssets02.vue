<template>
  <div class="fixedAssets">
    <header-top>
      <div slot="left">
        <img @click="$router.go(-1)" src="@/assets/img/back.png" />
      </div>
      <div slot="mid">资产信息</div>
    </header-top>
  
    <div class="zstext-content">
      <article>
        <select>
          <option>筛选</option>
          <option>深圳市大新实业股份有限公司</option>
          <option>深圳市大冲实业股份有限公司</option>
          <option>深圳市南头实业股份有限公司</option>
        </select>
      </article>
    
      <div>
        <van-tabs v-model="activeName">
          <van-tab title="写字楼" name="a">
            <ul >
              <li class="zsli" @click='toDetail()'>
                <h1 class="zsh1 zsul">大新时代大厦写字楼12层</h1>
                <p class="zsul zstwo">
                  <span style="marginRight:.1.5rem">经营性资产</span>
                  <span style="color:#0000ff">写字楼</span>
                 
                  <span style="marginLeft:.2rem">已租赁</span>
                  <span>建筑面积（m²）：10094.77</span>
                </p>
                <p class="zs-last zstwo"></p>
                <p class="zsul">
                  <span style="marginRight:.5rem">南头街道</span>
                  <span style="color:#9b8dfe">深圳市大新实业股份有限公司</span>
                </p>
              </li>
              <li class="zsli">
                <h1 class="zsh1 zsul">大新时代大厦写字楼12层</h1>
                <p class="zsul zstwo">
                  <span style="marginRight:.1.5rem">经营性资产</span>
                  <span style="color:#0000ff">写字楼</span>
                 
                  <span style="marginLeft:.2rem">已租赁</span>
                  <span>建筑面积（m²）：10094.77</span>
                </p>
                <p class="zs-last zstwo"></p>
                <p class="zsul">
                  <span style="marginRight:.5rem">南头街道</span>
                  <span style="color:#9b8dfe">深圳市大新实业股份有限公司</span>
                </p>
              </li>
              <li class="zsli">
                <h1 class="zsh1 zsul">大新时代大厦写字楼12层</h1>
                <p class="zsul zstwo">
                  <span style="marginRight:.1.5rem">经营性资产</span>
                  <span style="color:#0000ff">写字楼</span>
                 
                  <span style="marginLeft:.2rem">已租赁</span>
                  <span>建筑面积（m²）：10094.77</span>
                </p>
                <p class="zs-last zstwo"></p>
                <p class="zsul">
                  <span style="marginRight:.5rem">南头街道</span>
                  <span style="color:#9b8dfe">深圳市大新实业股份有限公司</span>
                </p>
              </li>
            </ul>
          </van-tab>
          <van-tab title="厂房" name="b">
               <li class="zsli">
                <h1 class="zsh1 zsul">厂房12层</h1>
                <p class="zsul zstwo">
                  <span style="marginRight:.1.5rem">经营性资产</span>
                  <span style="color:#0000ff">写字楼</span>
                 
                  <span style="marginLeft:.2rem">已租赁</span>
                  <span>建筑面积（m²）：10094.77</span>
                </p>
                <p class="zs-last zstwo"></p>
                <p class="zsul">
                  <span style="marginRight:.5rem">南头街道</span>
                  <span style="color:#9b8dfe">深圳市大新实业股份有限公司</span>
                </p>
              </li>
          </van-tab>
          <van-tab title="商铺" name="c">
               <li class="zsli">
                <h1 class="zsh1 zsul">商铺12层</h1>
                <p class="zsul zstwo">
                  <span style="marginRight:.1.5rem">经营性资产</span>
                  <span style="color:#0000ff">写字楼</span>
                 
                  <span style="marginLeft:.2rem">已租赁</span>
                  <span>建筑面积（m²）：10094.77</span>
                </p>
                <p class="zs-last zstwo"></p>
                <p class="zsul">
                  <span style="marginRight:.5rem">南头街道</span>
                  <span style="color:#9b8dfe">深圳市大新实业股份有限公司</span>
                </p>
              </li>
          </van-tab>
          <van-tab title="宿舍" name="d">
               <li class="zsli">
                <h1 class="zsh1 zsul">宿舍12层</h1>
                <p class="zsul zstwo">
                  <span style="marginRight:.1.5rem">经营性资产</span>
                  <span style="color:#0000ff">写字楼</span>
                 
                  <span style="marginLeft:.2rem">已租赁</span>
                  <span>建筑面积（m²）：10094.77</span>
                </p>
                <p class="zs-last zstwo"></p>
                <p class="zsul">
                  <span style="marginRight:.5rem">南头街道</span>
                  <span style="color:#9b8dfe">深圳市大新实业股份有限公司</span>
                </p>
              </li>
          </van-tab>
          <van-tab title="其他" name="e">
               <li class="zsli">
                <h1 class="zsh1 zsul">其他</h1>
                <p class="zsul zstwo">
                  <span style="marginRight:.1.5rem">经营性资产</span>
                  <span style="color:#0000ff">写字楼</span>
                 
                  <span style="marginLeft:.2rem">已租赁</span>
                  <span>建筑面积（m²）：10094.77</span>
                </p>
                <p class="zs-last zstwo"></p>
                <p class="zsul">
                  <span style="marginRight:.5rem">南头街道</span>
                  <span style="color:#9b8dfe">深圳市大新实业股份有限公司</span>
                </p>
              </li>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/common/Header";
export default {
  data() {
    return {
      screeningType: 0,
      activeName:'',

      option2: [
        { text: "全部", value: 0 },
        { text: "深圳市大新实业股份有限公司", value: 1 },
        { text: "深圳市南头城实业股份有限公司", value: 2 },
        { text: "深圳市田厦实业股份有限公司", value: 3 }
      ]
    };
  },
  components: {
    HeaderTop
  },
  methods: {
    // 去详情页
    toDetail(){
      this.$router.push('/fixedDetail01');
    }
  },
};
</script>

<style lang='less' scoped>
@import url("../../assets/dist/base.css");
.fixedAssets {
  width: 100%;
 
  article {
    width: 100%;
    height: 80/100rem;

    select {
      width: 90%;
      height: 60/100rem;
      background: rgb(242, 242, 242);
      border: none;
      margin-left: 5%;
    }
  }
  .zstext-content {
    // padding-left: 0.1rem;
    .zs-select {
      width: 100%;
      background-color: pink;
    }
    .zsul {
      padding-left: 0.5rem;
     
    }
  }

.zsli{
    border-bottom: 5px solid #e9e9e9;
    padding-bottom: 25/100rem;
}
.zsh1{
    margin-bottom: .4rem;
}
.zs-last{
   
    border-top: 1px solid  gainsboro;
}
.zstwo{
    margin-bottom: .2rem;
}
/*.van-tabs__line {
    background-color:blue;
}*/


}
</style>