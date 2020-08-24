<template>
  <div>
    <img src="../assets/images/top.png" alt class="topImg" />

    <h1>
      <img src="../assets/images/logo.png" alt />
      南山集体经济总览平台
    </h1>
    <div class="top01">
      <!-- 第一行 -->
      <div class="street">
        街道办:
        <template>
          <el-select v-model="streetID" placeholder="请选择" class="choose-street02">
             <!-- <el-option >请选择</el-option> -->
            <el-option
              v-for="item in streetList"
              :key="item.org_code"
              :label="item.assistant_name"
              :value="item.org_code"
            ></el-option>
          </el-select>
        </template>
      </div>
      <div class="company">
        股份公司:
        <template>
          <el-select v-model="companyID" placeholder="请选择" class="choose-street03">
             <!-- <el-option >请选择</el-option> -->
            <el-option
              v-for="item in companyList"
              :key="item.company_code"
              :label="item.company_name"
              :value="item.company_code"
            ></el-option>
          </el-select>
        </template>
      </div>
      <!-- 去地图详情页 -->
      <button @click="toBigMap()">查看</button>
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
      <div class="money"  @click="toCaiwuForm()">
        <img src="../assets/images/ktitle.png" alt class="ktitle" />
        <span>财务总览</span>
        <div class="unit">
          单位
          <a href>:</a>
          万元
        </div>
       

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
      <div class="businese" @click="toHetongForm()">
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
          <el-select
            v-model="value02"
            placeholder="2019"
            class="choose-index02"
            size="mini"
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
            <img src="../assets/images/jiantou1.png" alt v-if="parseInt(count_than)>=0" />
            <img src="../assets/images/jiantou11.png" alt v-else-if="parseInt(count_than)<0" />
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
            <img src="../assets/images/jiantou2.png" alt v-if="parseInt(money_than)>=0" />
            <img src="../assets/images/jiantou21.png" alt v-else-if="parseInt(money_than)<0" />
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
            <img src="../assets/images/jiantou3.png" alt v-if="parseInt(area_than)>=0" />
            <img src="../assets/images/jiantou31.png" alt v-else-if="parseInt(area_than)<0" />
          </div>
          <div class="percent">{{area_than}}</div>
        </div>
      </div>
    </div>
    <!-- 中间区域 -->

    <div class="map" id="allmap" style="width:700px;height:820px"></div>
    <!-- 四个logo -->
   
    <!-- 右边区域 -->
    <div class="right">
      <!-- 统筹总览 -->
      <div class="shang1" @click="toTongchouForm()">
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
          <div class="num">{{require_area}}</div>
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
      <div class="zhong1" @click="toLicenseForm()">
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

      <div class="xia1" @click="tozhuanxingForm()">
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
      transformation_count01: "",
      transformation_count02: "",
      transformation_count03: "",

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

    
    
      value: "",
     
      streetID: '',
      companyID: "",
      company_name:'',
      streetList: [
        {
          value: "选项1",
          label: "南头街道办"
        },
        {
          value: "选项2",
          label: "南山街道办"
        },
        {
          value: "选项3",
          label: "西丽街道办"
        },
        {
          value: "选项4",
          label: "沙河街道办"
        },
        {
          value: "选项5",
          label: "蛇口街道办"
        },
        {
          value: "选项6",
          label: "招商街道办"
        }
      ],
      companyList: [],
      value003: "",
      torganization_id: "",
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
        value01: "2018",
      value02: "2019"

     
     
    };
  },

  mounted() {
    // this.streetID=this.$route.query.streetID;
    this.getmap();
    this.getGoodsList();
    this.getStreet();
     this.getCompany();
    
  },
  watch: {
    streetID: function(streetID) {
     
      
      this.companyID = "";
      this.getCompany();
      this.streetID = streetID;
      this.getmap();
      this.$axios
        .post("assetes/assetsStatis", {
          torganization_id: streetID
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
          this.transformation_count01 =
            data.transformationStatis[2].transformation_count;
          this.transformation_count02 =
            data.transformationStatis[1].transformation_count;
          this.transformation_count03 =
            data.transformationStatis[0].transformation_count;

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
    },
    companyID: function(companyID) {
      this.companyID = companyID;
      this.getmap();
      this.$axios
        .post("assetes/assetsStatis", {
          torganization_id: this.streetID,
          company_id: companyID
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
          this.transformation_count01 =
            data.transformationStatis[2].transformation_count;
          this.transformation_count02 =
            data.transformationStatis[1].transformation_count;
          this.transformation_count03 =
            data.transformationStatis[0].transformation_count;

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
  },
  methods: {
    
           //去财务列表
    toCaiwuForm(){
      this.$router.push("/caiwuForm");
    },
    //去合同列表
   
     toHetongForm() {
       this.$router.push({
        path: "/hetongForm",
        query: {
          company_id: this.companyID,
          torganization_id:this.streetID
       
        }
      });
    },

    //去证照列表
    toLicenseForm() {
       this.$router.push({
        path: "/licenseForm",
        query: {
          company_id: this.companyID,
          torganization_id:this.streetID
       
        }
      });
    },

    //去转型列表
      tozhuanxingForm() {
       this.$router.push({
        path: "/zhuanxingForm",
        query: {
          company_id: this.companyID,
          torganization_id:this.streetID
       
        }
      });
    },

    //去统筹列表
     toTongchouForm() {
       this.$router.push({
        path: "/tongchouForm",
        query: {
          company_id: this.companyID,
          torganization_id:this.streetID
       
        }
      });
    },

    //去资产详情页
      toAssetDetail() {
       this.$router.push({
        path: "/companyDetail",
        query: {
          company_id: this.companyID,
          torganization_id:this.streetID
       
        }
      });
    },
    //去地图详情页
    
    toBigMap() {
      this.$router.push({
        path: "/homeMap",
        query: {
          streetID: this.streetID,
          companyID: this.companyID
        }
      });
    },

  
    //下拉框获取公司数据
    getCompany() {
      this.$axios
        .post("assetes/assetsMapOverview", {
          torganization_id: this.streetID
        })
        .then(result => {
          if (result.data.code == 200) {
            this.companyList = result.data.data.company;
          }
        });
    },
    // 下拉框获取街道数据
    getStreet() {
      this.$axios.post("assetes/assetsMapOverview", {}).then(result => {
        if (result.data.code == 200) {
          this.streetList = result.data.data.jurisdiction;
        }
      });
    },

    // 同比右边的下拉框
    changeSecond(value02) {
      this.value02 = value02;
      this.$axios
        .post("assetes/assetsStatis", {
          first_year: this.value01,
          last_year: value02,
          torganization_id: this.streetID
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
      this.value01 = value01;

      this.$axios
        .post("assetes/assetsStatis", {
          first_year: value01,
          last_year: this.value02,
          torganization_id: this.streetID
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

    // 第一次打开发的请求
    getGoodsList() {
      this.$axios.post("assetes/assetsStatis", {
        torganization_id: this.streetID,
          company_id: this.companyID
      }).then(result => {
        let data = result.data.data;

        // 资产总览
        this.count1 = data.assetsStatis[0].asset_count;
        this.count2 = data.assetsStatis[1].asset_count;
        this.area1 = data.assetsStatis[0].area;
        this.area2 = data.assetsStatis[1].area;

        //转型总览
        this.apply_money1 = data.transformationStatis[2].apply_money;
        this.apply_money2 = data.transformationStatis[1].apply_money;
        this.apply_money3 = data.transformationStatis[0].apply_money;
        this.transformation_count01 =
          data.transformationStatis[2].transformation_count;
        this.transformation_count02 =
          data.transformationStatis[1].transformation_count;
        this.transformation_count03 =
          data.transformationStatis[0].transformation_count;

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
    },
    getmap() {
      this.$axios
        .post("assetes/assetsMapOverview", {
          torganization_id: this.streetID.trim(),
          company_id: this.companyID,
          mapIsSubordinate:1,
        })
        .then(res => {
          console.log(res);
          
          this.mapdata = res.data.data.assetsMapOverview;
        //   console.log(res);
          

          var data = {
            name: "南山区",
            points:
              "113.87324, 22.51769;" +
              "113.876258, 22.505804;" +
              "113.875252, 22.504068;" +
              "113.874677, 22.502465;" +
              "113.875395, 22.499393;" +
              "113.883732, 22.474148;" +
              "113.891493, 22.460789;" +
              "113.893362, 22.461189;" +
              "113.892212, 22.473881;" +
              "113.888619, 22.478022;" +
              "113.891062, 22.481495;" +
              "113.89638, 22.479091;" +
              "113.89408, 22.476152;" +
              "113.894511, 22.472545;" +
              "113.896955, 22.47014;" +
              "113.897961, 22.470407;" +
              "113.89868, 22.468136;" +
              "113.898536, 22.466133;" +
              "113.897673, 22.465064;" +
              "113.897961, 22.461189;" +
              "113.895805, 22.458384;" +
              "113.896667, 22.450368;" +
              "113.897961, 22.449566;" +
              "113.907734, 22.460522;" +
              "113.906153, 22.469205;" +
              "113.908309, 22.47014;" +
              "113.910034, 22.468404;" +
              "113.91564, 22.471877;" +
              "113.913771, 22.475617;" +
              "113.914921, 22.477621;" +
              "113.917795, 22.473213;" +
              "113.921101, 22.472678;" +
              "113.923257, 22.472278;" +
              "113.921532, 22.473747;" +
              "113.924982, 22.476152;" +
              "113.92182, 22.47869;" +
              "113.92067, 22.480159;" +
              "113.92297, 22.480293;" +
              "113.925413, 22.480426;" +
              "113.924551, 22.482163;" +
              "113.924263, 22.483499;" +
              "113.928863, 22.483632;" +
              "113.9303, 22.484434;" +
              "113.930012, 22.488708;" +
              "113.933749, 22.487907;" +
              "113.932168, 22.485102;" +
              "113.93533, 22.481762;" +
              "113.942948, 22.481762;" +
              "113.943954, 22.484968;" +
              "113.945679, 22.486437;" +
              "113.947835, 22.485636;" +
              "113.950997, 22.486437;" +
              "113.952147, 22.487506;" +
              "113.950134, 22.489242;" +
              "113.955309, 22.487239;" +
              "113.964364, 22.492047;" +
              "113.961489, 22.496321;" +
              "113.963789, 22.512749;" +
              "113.964651, 22.521162;" +
              "114.002308, 22.526504;" +
              "114.004608, 22.537586;" +
              "114.000296, 22.550671;" +
              "114.005326, 22.556412;" +
              "114.003458, 22.561352;" +
              "114.009926, 22.563621;" +
              "114.010788, 22.581242;" +
              "114.026886, 22.587649;" +
              "114.03206, 22.595924;" +
              "114.02861, 22.609136;" +
              "114.019124, 22.614341;" +
              "114.007913, 22.632489;" +
              "114.001015, 22.632889;" +
              "113.993828, 22.644897;" +
              "113.979455, 22.645298;" +
              "113.968101, 22.651435;" +
              "113.965082, 22.658639;" +
              "113.945823, 22.656771;" +
              "113.936768, 22.640494;" +
              "113.937343, 22.627552;" +
              "113.93533, 22.622214;" +
              "113.936768, 22.613674;" +
              "113.933031, 22.606334;" +
              "113.932025, 22.600462;" +
              "113.928719, 22.596992;" +
              "113.931306, 22.592721;" +
              "113.931306, 22.592721;" +
              "113.931162, 22.592587;" +
              "113.931162, 22.581375;" +
              "113.923976, 22.573099;" +
              "113.920095, 22.565357;" +
              "113.911903, 22.557881;" +
              "113.896524, 22.542126;" +
              "113.89408, 22.532245;" +
              "113.87324, 22.518224;" +
              "113.873383, 22.51769;" +
              "113.873527, 22.517289;" +
              "113.873527, 22.517289;" +
              "113.873527, 22.517290"
          };
          var map = new window.BMap.Map("allmap", { enableMapClick: false }); // 创建地图实例，禁止点击地图底图
          map.enableScrollWheelZoom(); //禁止双击缩放
          var blist = [];
          var districtLoading = 0;
          addDistrict("南山区");

          function addDistrict(districtName) {
            //使用计数器来控制加载过程
            districtLoading++;
            var bdary = new window.BMap.Boundary();
            bdary.get(districtName, function(rs) {
              //获取行政区域
              var count = rs.boundaries.length; //行政区域的点有多少个
              if (count === 0) {
                alert("未能获取当前输入行政区域");
                return;
              }
              for (var i = 0; i < count; i++) {
                blist.push({ points: rs.boundaries[i], name: districtName });
              }
              //加载完成区域点后计数器-1
              districtLoading--;
              if (districtLoading == 0) {
                //全加载完成后画端点
                drawBoundary();
              }
            });
          }
      
        //  let CenterPoint01 = streetCenter.filter(
        //     (value, index) => value.org_code == this.streetID
        //   );
        
        //   var point = new window.BMap.Point(CenterPoint01[0].longitude, CenterPoint01[0].latitude);
          var point = new window.BMap.Point(113.955433,22.550981);

         
          map.centerAndZoom(point, 13); // 初始化地图，设置中心点坐标和地图级别 // 初始化地图,设置中心点坐标和地图级别

          let markerArr = this.mapdata;

         //公司的点
           let companyArr = res.data.data.company;

            for (var i = 0; i < companyArr.length; i++) {
            var p0 = companyArr[i].longitude;
            var p1 = companyArr[i].latitude;

            var point = new window.BMap.Point(p0, p1);
            var markers = new BMap.Marker(point); // 创建标注

            map.addOverlay(markers); // 将标注添加到地图中
            //  marker.setAnimation(BMAP_ANIMATION_BOUNCE);
            var label = new BMap.Label(companyArr[i].company_name, {
              offset: new BMap.Size(-8, 1)
            });
            label.setStyle({
              color: "#fff",
              border: "none",
              backgroundColor: "#044dc4",
              padding: "2px 5px",
              fontSize: "8px"
            });
             markers.setTop(true);
            markers.setLabel(label);
          
          }

        // 街道的点集合
           if(this.streetID==''){
                 let streetArr = res.data.data.jurisdiction;
                   for (var i = 0; i < streetArr.length; i++) {
            var p0 = streetArr[i].longitude;
            var p1 = streetArr[i].latitude;

            var point = new window.BMap.Point(p0, p1);

            var myIcon = new BMap.Icon(
            require("../assets/images/a-dw.png"),
            new BMap.Size(40, 40)
          );

          var markers = new BMap.Marker(point,{icon:myIcon}); // 创建标注
            map.addOverlay(markers); // 将标注添加到地图中

            var label = new BMap.Label(streetArr[i].org_name.slice(0, 2), {
              offset: new BMap.Size(-5, 25)
            });
            label.setStyle({
              color: "red",
              border: "none",
              padding: "0",
              fontWeight:'bold',
            fontSize: "18px",
              background: "rgba(0,0,0,0)"
            });
             markers.setTop(true);
            markers.setLabel(label);
           
          }


          map.addControl(
            new window.BMap.MapTypeControl({
              mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
            })
          );
          var style = [{
                  "featureType": "all",
                  "elementType": "labels.text.fill",
                  "stylers": {
                  "color": "#2da0c6",
                  "visibility": "off"
                  }
                }]
                // map.clearOverlays()
                map.setMapStyle({
                  styleJson:style
                });



           }else{
            
               
                let streetArr = res.data.data.jurisdiction.filter(
                    (value, index) => value.org_code == this.streetID
                )
                 for (var i = 0; i < streetArr.length; i++) {
            var p0 = streetArr[i].longitude;
            var p1 = streetArr[i].latitude;

            var point = new window.BMap.Point(p0, p1);

            var myIcon = new BMap.Icon(
            require("../assets/images/a-dw.png"),
            new BMap.Size(40, 40)
          );

          var markers = new BMap.Marker(point,{icon:myIcon}); // 创建标注
            map.addOverlay(markers); // 将标注添加到地图中

            var label = new BMap.Label(streetArr[i].org_name.slice(0, 2), {
              offset: new BMap.Size(-5, 25)
            });
            label.setStyle({
              color: "red",
              border: "none",
              padding: "0",
              fontWeight:'bold',
            fontSize: "18px",
              background: "rgba(0,0,0,0)"
            });
             markers.setTop(true);
            markers.setLabel(label);
           
          }
        //   地图混合
           map.addControl(
            new window.BMap.MapTypeControl({
              mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
            })
          );
          var style = [{
                  "featureType": "all",
                  "elementType": "labels.text.fill",
                  "stylers": {
                  "color": "#2da0c6",
                  "visibility": "off"
                  }
                }]
                // map.clearOverlays()
                map.setMapStyle({
                  styleJson:style
                });


        }
        //公司下面的资产
        if(this.companyID==""){
            return
        }else{
            let companyArr01 = res.data.data.assetsMapOverview;

            for (var i = 0; i < companyArr01.length; i++) {
            var p0 = companyArr01[i].longitude;
            var p1 = companyArr01[i].latitude;

            var point = new window.BMap.Point(p0, p1);
            var markers = new BMap.Marker(point); // 创建标注
            
            map.addOverlay(markers); // 将标注添加到地图中
            //  marker.setAnimation(BMAP_ANIMATION_BOUNCE);
            var label = new BMap.Label(companyArr01[i].assets_name, {
              offset: new BMap.Size(-8, 1)
            });
            label.setStyle({
              color: "#fff",
              border: "none",
              backgroundColor: "orange",
              padding: "2px 5px",
              fontSize: "8px"
            });
            //  markers.setTop(true);
            markers.setLabel(label);
          
          }
        }
        
           let  companySonArr = res.data.data.companySubordinate;
            
              
            for (var i = 0; i < companySonArr.length; i++) {
            var p0 = companySonArr[i].longitude;
            var p1 = companySonArr[i].latitude;

            var point = new window.BMap.Point(p0, p1);
            var markers = new BMap.Marker(point); // 创建标注

            map.addOverlay(markers); // 将标注添加到地图中
            //  marker.setAnimation(BMAP_ANIMATION_BOUNCE);
            var label = new BMap.Label(companySonArr[i].company_name, {
              offset: new BMap.Size(-8, 1)
            });
            label.setStyle({
              color: "#fff",
              border: "none",
              backgroundColor: "green",
              padding: "2px 5px",
              fontSize: "8px"
            });
            
            markers.setLabel(label);
          
          }


           
        


          function drawBoundary() {
            //包含所有区域的点数组
            var pointArray = [];
            var pNW = { lat: 59.0, lng: 73.0 };
            var pNE = { lat: 59.0, lng: 136.0 };
            var pSE = { lat: 3.0, lng: 136.0 };
            var pSW = { lat: 3.0, lng: 73.0 };
            //向数组中添加一次闭合多边形，并将西北角再加一次作为之后画闭合区域的起点
            var pArray = [];
            pArray.push(pNW);
            pArray.push(pSW);
            pArray.push(pSE);
            pArray.push(pNE);
            pArray.push(pNW);
            //循环添加各闭合区域
            for (var i = 0; i < blist.length; i++) {
              //添加显示用标签层
              var label = new window.BMap.Label(data.name, {
                offset: new window.BMap.Size(20, -10)
              });
              label.hide();
              map.addOverlay(label);

              //添加多边形层并显示
              var ply = new window.BMap.Polygon(data.points, {
                strokeWeight: 4,
                strokeColor: "#33adfd",
                fillOpacity: 0.1,
                fillColor: " #64adf4"
              }); //建立多边形覆盖物
              ply.name = data.name;
              ply.label = label;
              map.addOverlay(ply);

              //将点增加到视野范围内
              var path = ply.getPath();
              pointArray = pointArray.concat(path);
              //将闭合区域加到遮蔽层上，每次添加完后要再加一次西北角作为下次添加的起点和最后一次的终点
              pArray = pArray.concat(path);
              pArray.push(pArray[0]);
            }

            //限定显示区域，需要引用api库
            var boundply = new window.BMap.Polygon(pointArray);
            BMapLib.AreaRestriction.setBounds(map, boundply.getBounds());
          }
        });
    }
  }
};
</script>

<style  lang="less" scoped>
@import url("../assets/css/base.css");

body {
  // background-color: pink;

  background: url("../assets/images/bg.jpg") no-repeat;
  position: relative;
  padding-bottom: 30px;
}
a {
     text-decoration: none;
     color: #000;
 } 

/* 时间 */
.top01 {

  display: flex;
  margin-top: -20px;

  .street {
    color: #45c2ff;
    font-size: 20px;
    margin-left: 1240px;
    .choose-street02 {
      margin-left: 15px;
      margin-right: 23px;

      width: 170px;
    }
  }
  .company {
    color: #45c2ff;
    font-size: 20px;
    .choose-street03 {
      margin-left: 15px;
      width: 170px;
    }
  }
  button {

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

    background-image: url("../assets/images/kuang.png");
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
     &:hover{
      cursor:pointer;
      box-shadow: 0 0 10px #fff;
     }
    width: 543px;
    height: 262px;
    position: relative;

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

.map {
  position: absolute;
  left: 50%;
  margin-left: -350px;
  bottom: 0px;
  // top: 30px;
}


// 右边页面
.right {
  position: absolute;
  top: 140px;
  right: 20px;
  //
  // 统筹总览
  .shang1 {
     &:hover{
      cursor:pointer;
      box-shadow: 0 0 10px #fff;
     }
    width: 543px;
    height: 262px;
    margin-bottom: 20px;

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
     &:hover{
      cursor:pointer;
      box-shadow: 0 0 10px #fff;
     }
    width: 543px;
    height: 262px;
    margin-bottom: 20px;
    position: relative;
    background-image: url("../assets/images/kuang.png");
    z-index: 999;
    // display: flex;
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
     &:hover{
      cursor:pointer;
      box-shadow: 0 0 10px #fff;
     }
    width: 543px;
    height: 262px;

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
        text-align: center;
        margin-right: 60px;
        width: 100px;
        height: 18px;

        font-size: 18px;
        color: #9cde85;
      }
      .num {
        text-align: center;
        width: 100px;
        height: 18px;

        font-size: 18px;
        color: #4ddcf9;
        margin-right: 60px;
      }
      .pen {
        text-align: center;
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