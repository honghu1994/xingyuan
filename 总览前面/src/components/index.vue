<template>
  <div>
    <img src="../assets/images/top.png" alt class="topImg" />

    <h1>
      <img src="../assets/images/logo.png" alt />
      南山区集体经济总览平台
    </h1>
    <div class="time">
      时间:
      <span class="to">至</span>
      <template>
        <el-select v-model="value" placeholder="2019" class="choose" @change="changeTime(value)">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </template>
    </div>
    <div class="left">
      <!-- 资产总览 -->
      <div class="top" @click="toAssetDetail()">
        
        <img src="../assets/images/ktitle.png" alt class="ktitle" />
        <span>资产总览</span>
        <div class="zican">
          <div class="minileft">
            <img src="../assets/images/logo1.png" alt />
            <span>资产类</span>
          </div>
          <div class="minimiddle">
            <span>{{count1}}</span>
            <p>数量(个)</p>
          </div>
          <div class="miniright">
            <span>{{area1}}</span>
            <p>面积(万m²)</p>
          </div>
        </div>
        <div class="ziyuan">
          <div class="minileft">
            <img src="../assets/images/logo2.png" alt />
            <span>资源类</span>
          </div>
          <div class="minimiddle">
            <span>{{count2}}</span>
            <p>数量(个)</p>
          </div>
          <div class="miniright">
            <span>{{area2}}</span>
            <p>面积(万m²)</p>
          </div>
        </div>
      </div>
      <!-- 财务总览 -->
      <div class="money">
        <img src="../assets/images/ktitle.png" alt class="ktitle" />
        <span>财务总览</span>
        <div class="unit">
          单位
          <a href>:</a>
          万元
        </div>
        <!-- 净资总额 -->

        <!-- <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>-->

        <div class="total">
          <div class="totalprice">资产总额</div>
          <el-progress
            :text-inside="true"
            :stroke-width="24"
            :percentage="100"
            status="success"
            class="one"
            :show-text="false"
            color="#33adfd"
          ></el-progress>
          <a href>1266859.58</a>
        </div>
        <!-- 净资产 -->
        <div class="clean">
          <div class="totalprice">净资产</div>
          <el-progress
            :text-inside="true"
            :stroke-width="24"
            :percentage="65"
            status="success"
            class="one"
            :show-text="false"
            color="#688bfc"
          ></el-progress>
          <a href>297929.58</a>
        </div>
        <!-- 负债 -->
        <div class="minus">
          <div class="totalprice">负债</div>
          <el-progress
            :text-inside="true"
            :stroke-width="24"
            :percentage="50"
            status="success"
            class="one"
            :show-text="false"
            color="#9fe37d"
          ></el-progress>
          <a href>297929.58</a>
        </div>
      </div>
      <!-- 交易总览 -->
      <div class="businese">
        <img src="../assets/images/ktitle.png" alt class="ktitle" />
        <span class="jiaoyitotal">交易总览</span>
        <div></div>
        <template>
          <el-select
            v-model="value01"
            placeholder="2018"
            class="choose-index01"
            size="mini"
            @change="changeFirst(value01)"
          >
            <el-option
              v-for="item in options01"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>
        <div class="compare">同比</div>
        <template>
          <el-select v-model="value02" placeholder="2019" class="choose-index02" size="mini" 
           @change="changeSecond(value02)"
          > 
            <el-option
              v-for="item in options02"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>
        <div class="compare01">同比</div>
        <!-- 交易数 -->
        <div class="shang">
          <div class="round">
            <img src="../assets/images/需求数.png" alt />
          </div>
          <div class="jiaoyi">交易数</div>
          <!--  -->
          <div class="jiaoyi01">
            <div class="num">{{transaction_count}}</div>
            <div class="pen">笔</div>
          </div>
          <!-- <div class="base64"></div> -->
          <div class="img1">
            <img src="../assets/images/jiantou1.png" alt  v-if="parseInt(count_than)>=0" />
            <img src="../assets/images/jiantou11.png" alt  v-else-if='parseInt(count_than)<0' />
          </div>
          <div class="percent">{{count_than}}</div>
        </div>
        <!-- 交易金额 -->
        <div class="zhong">
          <div class="round">
            <img src="../assets/images/金额.png" alt />
          </div>
          <div class="jiaoyi">交易金额</div>
          <div class="jiaoyi01">
            <div class="num">{{transaction_money}}</div>
            <div class="pen">万元</div>
          </div>

          <div class="img1">
             <img src="../assets/images/jiantou2.png" alt  v-if="parseInt(money_than)>=0" />
            <img src="../assets/images/jiantou21.png" alt  v-else-if='parseInt(money_than)<0' />
          </div>
          <div class="percent">{{money_than}}</div>
        </div>
        <!-- 成交面积 -->
        <div class="xia">
          <div class="round">
            <img src="../assets/images/需求量.png" alt />
          </div>
          <div class="jiaoyi">成交面积</div>
          <div class="jiaoyi01">
            <div class="num">{{deal_area}}</div>
            <div class="pen">万m²</div>
          </div>
          <div class="img1">
             <img src="../assets/images/jiantou3.png" alt  v-if="parseInt(area_than)>=0" />
            <img src="../assets/images/jiantou31.png" alt  v-else-if='parseInt(area_than)<0' />
          </div>
          <div class="percent">{{area_than}}</div>
        </div>
      </div>
    </div>
    <!-- 中间区域 -->
    <div class="middle">
      <img src="../assets/images/mid2.png" alt @click="toDistrict()" />
      <!-- 四个logo -->
      <div class="fourlogo">
        <p>
          <a href class="a1">
            <img src="../assets/images/changfang.png" alt />
            <span>厂房</span>
          </a>
          <a href class="a2">
            <img src="../assets/images/shangpuchushou.png" alt />
            <span>商铺</span>
          </a>
        </p>
        <!-- 2个logo -->
        <p class="logo2">
          <a href class="a1">
            <img src="../assets/images/xiezilouchuzu.png" alt />
            <span>写字楼</span>
          </a>
          <a href class="a2">
            <img src="../assets/images/jia.png" alt />
            <span>住宅</span>
          </a>
        </p>
      </div>
    </div>
    <!-- 右边区域 -->
    <div class="right">
      <!-- 统筹总览 -->
      <div class="shang1">
        <img src="../assets/images/ktitle.png" alt class="ktitle" />
        <span class="sp01">统筹总览</span>
        <div class="shang">
          <div class="round">
            <img src="../assets/images/需求数.png" alt />
          </div>
          <div class="jiaoyi">需求数</div>
          <div class="num">{{require_count}}</div>
          <div class="pen">笔</div>
          <!-- <div class="base64"></div> -->
        </div>
        <!-- 交易金额 -->
        <div class="zhong">
          <div class="round">
            <img src="../assets/images/需求量.png" alt />
          </div>
          <div class="jiaoyi">需求量</div>
          <div class="num"> {{require_area}}</div>
          <div class="pen">万m²</div>
        </div>
        <!-- 成交面积 -->
        <div class="xia">
          <div class="round">
            <img src="../assets/images/需求量.png" alt />
          </div>
          <div class="jiaoyi">供应量</div>
          <div class="num">{{supply_area}}</div>
          <div class="pen">万m²</div>
        </div>
      </div>
      <!-- 证照总览 -->
      <div class="zhong1">
        <img src="../assets/images/ktitle.png" alt class="ktitle" />
        <span class="idcard">证照总览</span>
        <!-- 监督人员 -->
        <div class="people">
          <div class="imgBox">
            <img src="../assets/images/人数.png" alt />
          </div>
          <div class="txt">
            <div class="num2">{{personnel_count}}</div>
            <div class="peo">监督人员</div>
          </div>
        </div>

        <!-- 证照数量 -->
        <div class="card">
          <div class="imgBox">
            <img src="../assets/images/资质(1).png" alt />
          </div>
          <div class="txt">
            <div class="num2">{{licence_count}}</div>
            <div class="peo">证照人数</div>
          </div>
        </div>
        <!-- 证照审批 -->
        <div class="check">
          <div class="imgBox">
            <img src="../assets/images/授权.png" alt />
          </div>
          <div class="txt">
            <div class="num2">{{licence_appro_count}}</div>
            <div class="peo">证照审批</div>
          </div>
        </div>
      </div>
      <!-- 转型项目 -->
      <div class="xia1">
        <img src="../assets/images/ktitle.png" alt class="ktitle" />
        <span class="zhuanxin">转型项目</span>
        <!-- 三个转圈的圆 -->
        <div class="shang">
          <div class="jiaoyi">
            <div class="rotation autoRotate"></div>
            <div class="num3">{{apply_money1}}</div>
            <div class="price1">万元</div>
          </div>
          <div class="num">
            <div class="rotation autoRotate"></div>
            <div class="num3">{{apply_money2}}</div>
            <div class="price1">万元</div>
          </div>
          <div class="pen">
            <div class="rotation autoRotate"></div>
            <div class="num3">{{apply_money3}}</div>
            <div class="price1">万元</div>
          </div>
          <!-- <div class="base64"></div> -->
        </div>
        <!-- 3个文字 -->
        <div class="zhong">
          <div class="jiaoyi">转型升级与同富裕</div>
          <div class="num">异地发展</div>
          <div class="pen">智力支持</div>
        </div>
        <!-- 3个笔 -->
        <div class="xia">
          <div class="jiaoyi">{{transformation_count01}}笔</div>
          <div class="num">{{transformation_count02}}笔</div>
          <div class="pen">{{transformation_count03}}笔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { log } from 'util';
export default {
  name: "Index",
  data() {
    return {
      // 资产总览
      count1: "",
      area1: "",
      count2: "",
      area2: "",
      //转型总览
      apply_money1: "",
      apply_money2: "",
      apply_money3: "",
      transformation_count01:'',
      transformation_count02:'',
      transformation_count03:'',

      //证照总览
      personnel_count: "",
      licence_count: "",
      licence_appro_count: "",
      // 交易总览
      deal_area: "",
      area_than: "",
      transaction_count: "",
      count_than: "",
      transaction_money: "",
      money_than: "",
      // 统筹总览
      require_count: "",
      supply_area: "",
      require_area: "",

      options: [
        {
          value: "选项1",
          label: "2019"
        },
        {
          value: "选项2",
          label: "2018"
        },
        {
          value: "选项3",
          label: "2017"
        },
        {
          value: "选项4",
          label: "2016"
        },
        {
          value: "选项5",
          label: "2015"
        },
        {
          value: "选项7",
          label: "2014"
        },
        {
          value: "选项8",
          label: "2013"
        }
      ],
      options01: [
        {
          value: "2019",
          label: "2019"
        },
        {
          value: "2018",
          label: "2018"
        },
        {
          value: "2017",
          label: "2017"
        },
        {
          value: "2016",
          label: "2016"
        },
        {
          value: "2015",
          label: "2015"
        },
        {
          value: "2014",
          label: "2014"
        },
        {
          value: "2013",
          label: "2013"
        }
      ],
      options02: [
        {
          value: "2019",
          label: "2019"
        },
        {
          value: "2018",
          label: "2018"
        },
        {
          value: "2017",
          label: "2017"
        },
        {
          value: "2016",
          label: "2016"
        },
        {
          value: "2015",
          label: "2015"
        },
        {
          value: "2014",
          label: "2014"
        },
        {
          value: "2013",
          label: "2013"
        }
      ],
      value: "",
      value01: "2018",
      value02: "2019"
    };
  },

  mounted: function() {
    this.getGoodsList();
  },

  methods: {
    //去资产详情页
      toAssetDetail(){
        
        this.$router.push("/companyDetail");
      },
    toDistrict() {
      this.$router.push("/district");
    },
    // 同比右边的下拉框
    changeSecond(value02){
      this.value02=value02
       this.$axios
        .post("assetes/assetsStatis", {
          first_year: this.value01,
          last_year: value02,
          torganization_id: "D440305101",
          company_id: "ff808081565920fc015659292e5a0004"
        })
        .then(result => {
          let data = result.data.data;
          this.deal_area = data.firstTransaction.deal_area;
          this.area_than = data.firstTransaction.area_than;
          this.transaction_money = data.firstTransaction.transaction_money;
          this.money_than = data.firstTransaction.money_than;
          this.transaction_count = data.firstTransaction.transaction_count;
          this.count_than = data.firstTransaction.count_than;
        });
      
    },
    // 同比左边的下拉框
    changeFirst(value01) {
      this.value01=value01
      
      this.$axios
        .post("assetes/assetsStatis", {
          first_year: value01,
          last_year: this.value02,
          torganization_id: "D440305101",
          company_id: "ff808081565920fc015659292e5a0004"
        })
        .then(result => {
          let data = result.data.data;
          this.deal_area = data.firstTransaction.deal_area;
          this.area_than = data.firstTransaction.area_than;
          this.transaction_money = data.firstTransaction.transaction_money;
          this.money_than = data.firstTransaction.money_than;
          this.transaction_count = data.firstTransaction.transaction_count;
          this.count_than = data.firstTransaction.count_than;
        });
    },
    // 最上面的下拉框修改时间
    changeTime(value) {
      // ElementUI中获取select 的label值
      let obj = {};
      obj = this.options.find(item => {
        return item.value === value;
      });
       
      this.$axios
        .post("assetes/assetsStatis", {
          enter_year: obj.label,
          torganization_id: "",
          company_id: ""
        })
        .then(result => {
          let data = result.data.data;
          this.count1 = data.assetsStatis[0].asset_count;
          this.count2 = data.assetsStatis[1].asset_count;
          this.area1 = data.assetsStatis[0].area;
          this.area2 = data.assetsStatis[1].area;

          //转型总览
          this.apply_money1 = data.transformationStatis[2].apply_money;
          this.apply_money2 = data.transformationStatis[1].apply_money;
          this.apply_money3 = data.transformationStatis[0].apply_money;
           this.transformation_count01=data.transformationStatis[2].transformation_count
          this.transformation_count02=data.transformationStatis[1].transformation_count
          this.transformation_count03=data.transformationStatis[0].transformation_count


          //证照总览
          this.personnel_count = data.licencesStatis.personnel_count;
          this.licence_count = data.licencesStatis.licence_count;
          this.licence_appro_count = data.licencesStatis.licence_appro_count;

          // 统筹总览
          this.require_count = data.overallStatis.require_count;
          this.supply_area = data.overallStatis.supply_area;
          this.require_area = data.overallStatis.require_area;
        });
    },

    // 第一次打开发的请求
    getGoodsList() {
      this.$axios
        .post("assetes/assetsStatis", {
          enter_year: 2019,
          torganization_id: "",
          company_id: ""
        })
        .then(result => {
          let data = result.data.data;
          //  console.log(data);
          // 资产总览
          this.count1 = data.assetsStatis[0].asset_count;
          this.count2 = data.assetsStatis[1].asset_count;
          this.area1 = data.assetsStatis[0].area;
          this.area2 = data.assetsStatis[1].area;

          //转型总览
          this.apply_money1 = data.transformationStatis[2].apply_money;
          this.apply_money2 = data.transformationStatis[1].apply_money;
          this.apply_money3 = data.transformationStatis[0].apply_money;
          this.transformation_count01=data.transformationStatis[2].transformation_count
          this.transformation_count02=data.transformationStatis[1].transformation_count
          this.transformation_count03=data.transformationStatis[0].transformation_count

          //证照总览
          this.personnel_count = data.licencesStatis.personnel_count;
          this.licence_count = data.licencesStatis.licence_count;
          this.licence_appro_count = data.licencesStatis.licence_appro_count;
          // 交易总览
          this.deal_area = data.firstTransaction.deal_area;
          this.area_than = data.firstTransaction.area_than;
          this.transaction_money = data.firstTransaction.transaction_money;
          this.money_than = data.firstTransaction.money_than;
          this.transaction_count = data.firstTransaction.transaction_count;
          this.count_than = data.firstTransaction.count_than;
          // 统筹总览
          this.require_count = data.overallStatis.require_count;
          this.supply_area = data.overallStatis.supply_area;
          this.require_area = data.overallStatis.require_area;
        });
    }
  }
};
</script>

<style  lang="less" >
@import url("../assets/css/base.css");
body {
  // background-color: pink;

  background: url("../assets/images/bg.jpg") no-repeat;
  position: relative;
  padding-bottom: 30px;
}
/* 时间 */
.time {
  color: #45c2ff;
  margin-left: 30px;
  font-size: 18px;
  // height: 70px;
}
/* 至 */
.to {
  margin-right: 23px;
  margin-left: 20px;
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
/* 下拉框 */
.choose {
  width: 120px;
  height: 40px;

  input {
    border: 1px solid #0ab3fa !important;
    color: #fff;
    background-color: #1d2a6d !important;
  }
}
//左边部分
.topImg {
  width: 100%;
}
.left {
  margin-top: 20px;
  margin-left: 30px;

  .top {
    width: 543px;
    height: 262px;

    background-image: url("../assets/images/kuang.png");
    z-index: 999;
    margin-bottom: 20px;
     &:hover{
      cursor:pointer;
      box-shadow: 0 0 10px #fff;
     }

    span {
      margin-top: 5px;
      font-size: 28px;
      color: #fff;
      position: absolute;
      left: 230px;
    }
    .ktitle {
      margin-left: 15px;
    }

    .zican {
      width: 470px;
      height: 84px;
      border: 1px solid #0ab3ff;
      box-shadow: 0px 0px 10px #0ab3ff inset;
      margin-left: 23px;
      border-radius: 20px;
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      .minileft {
        img {
          margin-left: -60px;
          width: 55px;
        }
        span {
          font-size: 24px;
          margin-left: -85px;
          text-align: center;
          margin-top: 15px;
          // font-weight: 700;
        }
      }
      .minimiddle {
        // margin-left: 50px;
        // position: absolute;
        span {
          position: absolute;
          font-size: 30px;
          margin-top: -25px;
          left: 250px;
          // margin-right: 100px;
          color: #0ab3ff;
          font-weight: 700;
        }
        p {
          position: absolute;
          left: 250px;
          font-size: 18px;
          color: #fff;
          margin-top: 15px;
          margin-bottom: -10px;
          // margin-left: -10px;
        }
      }
      .miniright {
        text-align: center;
        span {
          position: absolute;
          font-size: 30px;
          left: 395px;
          margin-top: -25px;
          color: #0ab3ff;
          font-weight: 700;
        }
        p {
          font-size: 18px;
          color: #fff;
          position: absolute;
          margin-top: 15px;
          left: 400px;
        }
      }
    }
    .ziyuan {
      width: 470px;
      height: 84px;
      border: 1px solid #9de276;
      box-shadow: 0px 0px 10px #9de276 inset;
      margin-left: 23px;
      border-radius: 20px;
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      .minileft {
        img {
          margin-left: -60px;
          width: 55px;
        }
        span {
          font-size: 24px;
          margin-left: -85px;
          text-align: center;
          margin-top: 15px;
          // font-weight: 700;
        }
      }
      .minimiddle {
        // margin-left: 50px;
        // position: absolute;
        span {
          position: absolute;
          font-size: 30px;
          margin-top: -25px;
          left: 250px;
          // margin-right: 100px;
          color: #9de276;
          font-weight: 700;
        }
        p {
          position: absolute;
          left: 250px;
          font-size: 18px;
          color: #fff;
          margin-top: 15px;
          margin-bottom: -10px;
          // margin-left: -10px;
        }
      }
      .miniright {
        span {
          position: absolute;
          font-size: 30px;
          left: 395px;
          margin-top: -25px;
          color: #9de276;
          font-weight: 700;
        }
        p {
          font-size: 18px;
          color: #fff;
          position: absolute;
          margin-top: 15px;
          left: 400px;
        }
      }
    }
  }
  // 财务总览
  .money {
    width: 543px;
    height: 262px;
    position: relative;
    margin-bottom: 20px;
     &:hover{
      cursor:pointer;
      box-shadow: 0 0 10px #fff;
     }

    background-image: url("../assets/images/kuang.png");
    span {
      margin-top: 5px;
      font-size: 28px;
      color: #fff;
      position: absolute;
      left: 230px;
    }
    .ktitle {
      margin-left: 15px;
    }
    .unit {
      position: absolute;
      right: 30px;
      top: 25px;
      font-size: 18px;
      color: #fff;
      a {
        color: #fff;
      }
    }
    .total {
      position: relative;

      .totalprice {
        position: absolute;
        font-size: 26px;
        color: #fff;
        left: 43px;
        margin-top: 44px;
      }

      a {
        position: absolute;
        font-size: 24px;
        color: #fff;
        margin-top: 44px;
        right: 25px;
      }
      .one {
        height: 14px;
        width: 218px;
        position: absolute;
        left: 165px;
        margin-top: 44px;
        border-radius: 0 0 14px 14px;
      }
    }
    .clean {
      position: relative;

      .totalprice {
        position: absolute;
        font-size: 26px;
        color: #fff;
        left: 65px;
        margin-top: 96px;
      }

      a {
        position: absolute;
        font-size: 24px;
        color: #fff;
        margin-top: 96px;
        right: 25px;
      }
      .one {
        height: 14px;
        width: 218px;
        position: absolute;
        left: 165px;
        margin-top: 96px;
        border-radius: 0 0 14px 14px;
      }
    }
    // 负债
    .minus {
      position: relative;

      .totalprice {
        position: absolute;
        font-size: 26px;
        color: #fff;
        left: 85px;
        margin-top: 150px;
      }

      a {
        position: absolute;
        font-size: 24px;
        color: #fff;
        margin-top: 150px;
        right: 25px;
      }
      .one {
        height: 14px;
        width: 218px;
        position: absolute;
        left: 165px;
        margin-top: 150px;
        border-radius: 0 0 14px 14px;
      }
    }
  }
  // 交易总览
  .businese {
    width: 543px;
    height: 262px;
    position: relative;
     &:hover{
      cursor:pointer;
      box-shadow: 0 0 10px #fff;
     }

    background-image: url("../assets/images/kuang.png");
    .jiaoyitotal {
      margin-top: 5px;
      font-size: 28px;
      color: #fff;
      position: absolute;
      left: 230px;
    }
    .ktitle {
      margin-left: 15px;
    }
    .choose-index01 {
      width: 92px;
      height: 25px;
      position: absolute;
      left: 40px;
      margin-top: 15px;
      input {
        color: #fff;
      }
    }
    .compare {
      position: absolute;
      left: 145px;
      margin-top: 20px;
      font-size: 16px;
      color: #3da7f0;
    }
    .choose-index02 {
      width: 92px;
      height: 25px;
      position: absolute;
      left: 188px;
      margin-top: 15px;
      color: #fff;
      input {
        color: #fff;
      }
    }
    .compare01 {
      position: absolute;
      right: 42px;
      color: #fff;
      margin-top: 20px;
    }
    // 上
    .shang {
      margin-left: 36px;
      // background-color: pink;
      margin-top: 60px;
      display: flex;
      text-align: center;
      align-items: center;

      .round {
        width: 45px;
        height: 45px;
        background-color: #2fa7f9;
        border-radius: 50%;
        position: relative;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .jiaoyi {
        margin-left: 12px;
        margin-right: 16px;
        font-size: 20px;
        color: #fff;
      }
      .jiaoyi01 {
        width: 200px;
        height: 40px;
        // background-color: pink;
        line-height: 40px;
        .num {
          width: 160px;
          float: left;
          font-size: 22px;
          color: #32bbfc;
          text-align: right;
        }
        .pen {
          display: inline;
          font-size: 18px;

          color: #c0c9ff;
        }
      }

      .img1 {
        margin-left: 50px;
      }
      // .base64{
      //       display: block;
      //     margin-left: 20px;
      //     width: 28px;
      //     height: 30px;
      //    background-color: pink;
      //    z-index: 99999;
      //    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAAGXRFW…J/zggHah74v3mRxGXhuHL0TGS2nZWnI7Y5KtekK27/CzAASrSTN7AaR8wAAAAASUVORK5CYII=) no-repeat;
      // }
      .percent {
        margin-left: 12px;
        font-size: 24px;
        color: #0c98e0;
      }
    }
    // 交易金额
    .zhong {
      margin-left: 36px;
      // background-color: pink;
      margin-top: 10px;
      display: flex;
      text-align: center;
      align-items: center;

      .round {
        width: 45px;
        height: 45px;
        background-color: #6686fb;
        border-radius: 50%;
        position: relative;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .jiaoyi {
        margin-left: 12px;
        // margin-right: 13px;
        font-size: 20px;
        color: #fff;
      }
      .jiaoyi01 {
        width: 200px;
        height: 40px;
        // background-color: pink;
        line-height: 40px;
        .num {
          width: 160px;
          float: left;
          font-size: 22px;
          color: #6c8aff;
          text-align: right;
        }
        .pen {
          display: inline;
          font-size: 18px;

          color: #c0c9ff;
        }
      }
      .img1 {
        margin-left: 45px;
      }
      .percent {
        margin-left: 12px;
        font-size: 24px;
        color: #6686fb;
      }
    }
    // 成交面积
    .xia {
      margin-left: 36px;
      // background-color: pink;
      margin-top: 10px;
      display: flex;
      text-align: center;
      align-items: center;

      .round {
        width: 45px;
        height: 45px;
        background-color: #55a92b;
        border-radius: 50%;
        position: relative;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .jiaoyi {
        margin-left: 12px;
        margin-right: 28px;
        font-size: 20px;
        color: #fff;
      }
      .jiaoyi01 {
        width: 180px;
        height: 40px;
        // background-color: pink;
        line-height: 40px;
        .num {
          width: 130px;
          float: left;
          font-size: 22px;
          color: #32bbfc;
          text-align: right;
        }
        .pen {
          display: inline;
          font-size: 18px;

          color: #c0c9ff;
        }
      }
      .img1 {
        margin-left: 40px;
      }
      .percent {
        margin-left: 10px;
        font-size: 24px;
        color: #55a92b;
      }
    }
  }
}
.middle {
  position: absolute;
  left: 650px;
  top: 140px;
  img {
    height: 800px;
  }
  .fourlogo {
    background-color: pink;
    width: 250px;
    height: 100px;
    position: absolute;
    bottom: -30px;
    right: 45px;

    background-color: #102162;
    border-radius: 5px;
    opacity: 0.8;
    padding: 10px 0;
    p {
      // display: flex;
      // // align-items: center;
      //     justify-content: center;
      padding: 10px;
      margin: 5px 25px 5px 25px;
      .a1 {
        //  display: flex;
        //   justify-content: center;
        //   align-self: center;
        // margin-left: -40px;
        float: left;
        img {
          margin-right: 10px;
          width: 22px;
          height: 21px;
        }
        span {
          color: #fff;
        }
      }
      .a2 {
        float: right;
        // margin-right: -20px;
        img {
          margin-right: 10px;
          width: 22px;
          height: 21px;
        }
        span {
          color: #fff;
        }
      }
    }
    .logo2 {
      margin-top: 30px;
    }
  }
}
// 右边页面
.right {
  position: absolute;
  top: 140px;
  right: 20px;
  //
  // 统筹总览
  .shang1 {
    width: 543px;
    height: 262px;
    margin-bottom: 20px;
     &:hover{
      cursor:pointer;
      box-shadow: 0 0 10px #fff;
     }

    background-image: url("../assets/images/kuang.png");
    z-index: 999;
    .sp01 {
      margin-top: 5px;
      font-size: 28px;
      color: #fff;
      position: absolute;
      left: 230px;
    }
    .shang {
      margin-left: 65px;
      // background-color: pink;
      margin-top: 20px;
      display: flex;
      text-align: center;
      align-items: center;

      .round {
        width: 45px;
        height: 45px;
        background-color: #2fa7f9;
        border-radius: 50%;
        position: relative;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .jiaoyi {
        margin-left: 12px;
        margin-right: 152px;
        font-size: 20px;
        color: #fff;
      }
      .num {
        font-size: 22px;
        color: #32bbfc;
      }
      .pen {
        font-size: 18px;
        margin-left: 18px;
        color: #c0c9ff;
        // margin-right: 80px;
      }
    }
    // 交易金额
    .zhong {
      margin-left: 65px;
      // background-color: pink;
      margin-top: 20px;
      display: flex;
      text-align: center;
      align-items: center;

      .round {
        width: 45px;
        height: 45px;
        background-color: #6686fb;
        border-radius: 50%;
        position: relative;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .jiaoyi {
        margin-left: 12px;
        margin-right: 150px;
        font-size: 20px;
        color: #fff;
      }
      .num {
        font-size: 22px;
        color: #6686fb;
      }
      .pen {
        font-size: 18px;
        margin-left: 18px;
        color: #c0c9ff;
      }
    }
    // 成交面积
    .xia {
      margin-left: 65px;
      // background-color: pink;
      margin-top: 20px;
      display: flex;
      text-align: center;
      align-items: center;

      .round {
        width: 45px;
        height: 45px;
        background-color: #55a92b;
        border-radius: 50%;
        position: relative;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .jiaoyi {
        margin-left: 12px;
        margin-right: 150px;
        font-size: 20px;
        color: #fff;
      }
      .num {
        font-size: 22px;
        color: #55a92b;
      }
      .pen {
        font-size: 18px;
        margin-left: 18px;
        color: #c0c9ff;
      }
    }
  }
  //证照总览
  .zhong1 {
    width: 543px;
    height: 262px;
    margin-bottom: 20px;
    position: relative;
    background-image: url("../assets/images/kuang.png");
    z-index: 999;
     &:hover{
      cursor:pointer;
      box-shadow: 0 0 10px #fff;
     }
    
    .idcard {
      margin-top: 5px;
      font-size: 28px;
      color: #fff;
      position: absolute;
      left: 230px;
    }
    .people {
      // float: left;
      top: 85px;
      position: absolute;
      margin-left: 20px;
      // background-color: pink;
      border: 1px solid red;
      font-size: 16px;
      color: #fff;
      width: 160px;
      height: 120px;
      border: 1px solid #0ab3ff;
      box-shadow: 0px 0px 10px #0ab3ff inset;
      .imgBox {
        margin-top: 40px;
        margin-left: 10px;
        margin-right: 10px;
        float: left;
        img {
          width: 65px;
        }
      }
      .num2 {
        margin-top: 40px;
        // margin-right: 10px;
        font-size: 22px;
        margin-bottom: 15px;
      }
    }
    .card {
      top: 85px;
      left: 175px;
      position: absolute;
      margin-left: 20px;
      // background-color: pink;
      border: 1px solid red;
      font-size: 16px;
      color: #fff;
      width: 160px;
      height: 120px;
      border: 1px solid #0ab3ff;
      box-shadow: 0px 0px 10px #0ab3ff inset;
      .imgBox {
        margin-top: 40px;
        margin-left: 10px;
        margin-right: 10px;
        float: left;
        img {
          width: 65px;
        }
      }
      .num2 {
        margin-top: 40px;
        // margin-right: 10px;
        font-size: 22px;
        margin-bottom: 15px;
      }
    }
    .check {
      top: 85px;
      left: 350px;
      position: absolute;
      margin-left: 20px;
      // background-color: pink;
      border: 1px solid red;
      font-size: 16px;
      color: #fff;
      width: 160px;
      height: 120px;
      border: 1px solid #0ab3ff;
      box-shadow: 0px 0px 10px #0ab3ff inset;
      .imgBox {
        margin-top: 40px;
        margin-left: 10px;
        margin-right: 10px;
        float: left;
        img {
          width: 55px;
        }
      }
      .num2 {
        margin-top: 40px;
        // margin-right: 10px;
        font-size: 22px;
        margin-bottom: 15px;
      }
    }
  }
  //转型项目
  .xia1 {
    width: 543px;
    height: 262px;
     &:hover{
      cursor:pointer;
      box-shadow: 0 0 10px #fff;
     }

    background-image: url("../assets/images/kuang.png");
    z-index: 999;
    .zhuanxin {
      margin-top: 5px;
      font-size: 28px;
      color: #fff;
      position: absolute;
      left: 230px;
    }
    //
    .shang {
      margin-left: 65px;
      // background-color: pink;
      margin-top: 20px;
      display: flex;
      text-align: center;
      align-items: center;

      // 第一个圈
      .jiaoyi {
        margin-left: -12px;
        margin-right: 40px;
        font-size: 20px;
        color: #fff;
        position: relative;
        .rotation {
          width: 110px;
          height: 110px;
          // background-color: pink;
          background-image: url("../assets/images/zxy1.png");
        }
        .num3 {
          position: absolute;
          width: 80px;

          text-align: center;
          left: 16px;
          top: 50px;
          font-size: 18px;
          color: #9cde85;
        }
        .price1 {
          color: #9cde85;
          position: absolute;
          left: 37px;
          top: 80px;
          font-size: 16px;
        }
      }
      // 第二个圈
      .num {
        margin-left: 12px;
        margin-right: 40px;
        font-size: 20px;
        color: #fff;
        position: relative;
        .rotation {
          width: 110px;
          height: 110px;
          // background-color: pink;
          background-image: url("../assets/images/zxy2.png");
        }
        .num3 {
          position: absolute;
          width: 80px;

          text-align: center;
          left: 16px;
          top: 50px;
          font-size: 18px;
          color: #4ddcf9;
        }
        .price1 {
          color: #4ddcf9;
          position: absolute;
          left: 37px;
          top: 80px;
          font-size: 16px;
        }
      }
      // 第三个圆
      .pen {
        margin-left: 12px;
        margin-right: 152px;
        font-size: 20px;
        color: #fff;
        position: relative;

        .rotation {
          width: 110px;
          height: 110px;
          // background-color: pink;
          background-image: url("../assets/images/zxy3.png");
          transition: all 1s linear;
          &:hover {
            transform: rotate(360deg);
          }
        }

        .num3 {
          width: 80px;
          text-align: center;

          left: 16px;
          position: absolute;

          top: 50px;
          font-size: 18px;
          color: #5bb3f0;
        }
        .price1 {
          color: #5bb3f0;
          position: absolute;
          left: 37px;
          top: 80px;
          font-size: 16px;
        }
      }
    }
    .zhong {
      margin-left: 65px;
      // background-color: pink;
      margin-top: 20px;
      display: flex;
      text-align: center;
      align-items: center;

      .jiaoyi {
        margin-left: -12px;
        margin-right: 36px;
        font-size: 18px;
        color: #fff;
      }
      .num {
        font-size: 18px;
        color: #fff;
        margin-right: 76px;
      }
      .pen {
        font-size: 18px;
        margin-left: 18px;
        color: #fff;
      }
    }
    // 转型项目最下面三个笔
    .xia {
      margin-left: 65px;
      // background-color: pink;
      margin-top: 20px;
      display: flex;
      text-align: center;
      align-items: center;

      .jiaoyi {
        margin-left: 2px;
        text-align:center;
        margin-right: 60px;
        width: 100px;
        height: 18px;
       
        font-size: 18px;
        color: #9cde85;
      }
      .num {
        text-align:center;
         width: 100px;
        height: 18px;
      
        font-size: 18px;
        color: #4ddcf9;
        margin-right: 60px;
      }
      .pen {
         text-align:center;
         width: 100px;
        height: 18px;
       
        font-size: 18px;
        
        color: #5bb3f0;
      }
    }
  }
}
.autoRotate {
  animation-name: Rotate;
  animation-iteration-count: infinite;

  animation-timing-function: linear;
  animation-duration: 5s;
}
@keyframes Rotate {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>