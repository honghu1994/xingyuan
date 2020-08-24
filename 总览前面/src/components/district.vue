<template>
  <div>
    <img src="../assets/images/top.png" alt class="topImg" />
    <h1>
      <img src="../assets/images/logo.png" alt />
      南山区集体经济总览平台
    </h1>
    <div class="top">
      <div class="time">
        时间:
        <span>至</span>
        <template>
          <el-select v-model="value001" placeholder="2019"  class="choose-dis">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>
      </div>
      <div class="nanshan">南山区</div>
      <div class="street">
        街道办:
        <template>
          <el-select v-model="streetID" placeholder="请选择"  class="choose-dis02">
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
          <el-select v-model="companyID" placeholder="请选择" class="choose-dis03">
            <el-option
              v-for="item in companyList"
              :key="item.company_code"
              :label="item.company_name"
              :value="item.company_code"
            ></el-option>
          </el-select>
        </template>
      </div>
      <!-- 盒子点击事件 -->
      <button @click="toStreet()">查看</button>
    </div>
    <!-- 地图盒子 -->
    <div style="width:100%;height:900px;" id="allmap"></div>
    <div class="fourlogo">
      <p>
        <strong class="a1" @click="Changfclick">
          <img src="../assets/images/cpicon.png" alt v-show="downIcon" />
          <img src="../assets/images/changfang.png" alt v-show="!downIcon" class="img01"  style="width:25px;margin-right: 8px"/>

          <span>厂房</span>
        </strong>

        <strong class="a2" @click="Shangpclick">
          <img src="@/assets/images/spicon.png" alt v-show="downIcon2" />
          <img src="@/assets/images/shangpuchushou.png" alt v-show="!downIcon2"  style="width:25px;margin-right: 8px"/>
          <span>商铺</span>
        </strong>
      </p>
      <!-- 2个logo -->
      <p class="logo2">
        <strong class="a1" @click="Xieziclick">
          <img src="@/assets/images/xzlpicon.png" alt v-show="downIcon3" />
          <img src="@/assets/images/xiezilouchuzu.png" alt v-show="!downIcon3"  style="width:25px;margin-right: 8px"/>
          <span>写字楼</span>
        </strong>
        <strong class="a2" @click="Zhuzclick">
          <img src="@/assets/images/zzpicon.png" alt v-show="downIcon4" />
          <img src="@/assets/images/jia.png" alt v-show="!downIcon4" style="width:25px;margin-right: 8px"/>
          <span>住宅</span>
        </strong>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
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
        }
      ],
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
      companyList:[],
      mapdata: [],
      value: "",
      value001:'',
      value002:'',
      downIcon: true,
      downIcon2: true,
      downIcon3: true,
      downIcon4: true,
      streetID:'',
      companyID:'',
      pointCollection: true,
      pointCollection02: true,
      pointCollection03: true,
      pointCollection04: true,
    };
  },

  mounted() {
   
    
    this.getmap();
    this.getStreet();

   
  },
  watch: {
    streetID:function(streetID){
      this.companyID=""
      this.getCompany()
      this.streetID=streetID;
      this.getmap()
    },
    companyID:function(companyID){

      
      this.companyID=companyID
      this.getmap()
    }
  },
  methods: {
 

    //下拉框获取公司数据
    getCompany(){
       this.$axios
        .post("assetes/assetsMapOverview", {
          torganization_id:this.streetID
        })
        .then(result => {
          
          
          if (result.data.code == 200) {
            this.companyList=result.data.data.company
          
          }
        });
    },
    // 下拉框获取街道数据
    getStreet(){
      
       this.$axios
        .post("assetes/assetsMapOverview", {
       
        })
        .then(result => {
          
          
          if (result.data.code == 200) {
            this.streetList=result.data.data.jurisdiction
           
            
           
          }
        });
    },


    Changfclick: function() {
      this.downIcon = !this.downIcon;
      this.pointCollection=!this.pointCollection
      this.getmap()
     
    },
    Shangpclick: function() {
      this.downIcon2 = !this.downIcon2;
       this.pointCollection02=!this.pointCollection02
      this.getmap()
    },
    Xieziclick: function() {
      this.downIcon3 = !this.downIcon3;
        this.pointCollection03=!this.pointCollection03
      this.getmap()
    },
    Zhuzclick: function() {
      this.downIcon4 = !this.downIcon4;
      this.pointCollection04=!this.pointCollection04
      this.getmap()
    },
    //这几个地方加this
    toStreet() {
       this.$router.push({
        path: "/street",
        query: {
          streetID: this.streetID
        
        }
      });
    },
    getmap() {
      this.$axios.post("assetes/assetsMapOverview",{
         torganization_id:this.streetID,
         company_id:this.companyID
      }).then(res => {
        
        this.mapdata = res.data.data.assetsMapOverview;

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

        var point = new window.BMap.Point(113.957943, 22.553001);
        map.centerAndZoom(point, 13); // 初始化地图，设置中心点坐标和地图级别 // 初始化地图,设置中心点坐标和地图级别

        

         let markerArr = this.mapdata;

        // 厂房的图标点集合
        let markerArr01 = markerArr
          .filter((value, index) => value.assets_category == "201")
          .splice(0, 150);

        for (var i = 0; i < markerArr01.length; i++) {
          var p0 = markerArr01[i].longitude;
          var p1 = markerArr01[i].latitude;

          var point = new window.BMap.Point(p0, p1);
          var marker = new BMap.Marker(point); // 创建标注

          var myIcon = new BMap.Icon(
            require("../assets/images/cpicon.png"),
            new BMap.Size(30, 30)
          );
          var pointCollection = new BMap.Marker(point, { icon: myIcon }); // 创建标注
           if(this.pointCollection){
          map.addOverlay(pointCollection);
        }

        }
       
        //商铺的图标点集合
        let markerArr02 = markerArr
          .filter((value, index) => value.assets_category == "203")
          .splice(0, 150);
        for (var i = 0; i < markerArr02.length; i++) {
          var p0 = markerArr02[i].longitude;
          var p1 = markerArr02[i].latitude;

          var point = new window.BMap.Point(p0, p1);
          var marker = new BMap.Marker(point); // 创建标注

          var myIcon = new BMap.Icon(
            require("../assets/images/spicon.png"),
            new BMap.Size(30, 30)
          );
          var pointCollection02 = new BMap.Marker(point, { icon: myIcon }); // 创建标注
         if(this.pointCollection02){
          map.addOverlay(pointCollection02);
        }

        }
         //写字楼的图标点集合
        let markerArr03 = markerArr
          .filter((value, index) => value.assets_category == "205")
          .splice(0, 150);
        for (var i = 0; i < markerArr03.length; i++) {
          var p0 = markerArr03[i].longitude;
          var p1 = markerArr03[i].latitude;

          var point = new window.BMap.Point(p0, p1);
          var marker = new BMap.Marker(point); // 创建标注

          var myIcon = new BMap.Icon(
            require("../assets/images/xzlpicon.png"),
            new BMap.Size(30, 30)
          );
          var pointCollection03 = new BMap.Marker(point, { icon: myIcon }); // 创建标注
         if(this.pointCollection03){
          map.addOverlay(pointCollection03);
        }
        }
         //住宅的图标点集合
        let markerArr04 = markerArr
          .filter((value, index) => value.assets_category == "106")
          .splice(0, 150);

        for (var i = 0; i < markerArr04.length; i++) {
          var p0 = markerArr04[i].longitude;
          var p1 = markerArr04[i].latitude;

          var point = new window.BMap.Point(p0, p1);
          var marker = new BMap.Marker(point); // 创建标注

          var myIcon = new BMap.Icon(
            require("../assets/images/zzpicon.png"),
            new BMap.Size(30, 30)
          );
          var pointCollection04 = new BMap.Marker(point, { icon: myIcon }); // 创建标注
         if(this.pointCollection04){
          map.addOverlay(pointCollection04);
        }
        }

       
        // 公司的点(需要写死公司名字太长了,保留简称2位)
        var companyArr = [
          {
            company_id: 4,
            subordinate: "D440305101001",
            introduce: null,
            company_name: "大新",
            latitude: "22.537688",
            company_code: "ff808081565920fc015659292e5a0004",
            ORG_CODE_3: "D440305101",
            longitude: "113.922877"
          },
          {
            company_id: 11,
            subordinate: "D440305101002",
            introduce: null,
            company_name: "南头城",
            latitude: "22.548474",
            company_code: "ff808081565920fc01565929fd8c0005",
            ORG_CODE_3: "D440305101",
            longitude: "113.930454"
          },
          {
            company_id: 25,
            subordinate: "D440305101003",
            introduce: null,
            company_name: "田夏",
            latitude: "22.5388",
            company_code: "ff808081565920fc0156592aba000006",
            ORG_CODE_3: "D440305101",
            longitude: "113.932623"
          },
          {
            company_id: 52,
            subordinate: "D440305102001",
            introduce: null,
            company_name: "北头",
            latitude: "22.526768",
            company_code: "ff808081565920fc0156592bf7410008",
            ORG_CODE_3: "D440305102",
            longitude: "113.921615"
          },
          {
            company_id: 57,
            subordinate: "D440305102002",
            introduce: null,
            company_name: "南山荔源",
            latitude: "22.521091",
            company_code: "ff808081565920fc0156592caafc0009",
            ORG_CODE_3: "D440305102",
            longitude: "113.919698"
          },
          {
            company_id: 65,
            subordinate: "D440305102003",
            introduce: null,
            company_name: "南岗",
            latitude: "22.527624",
            company_code: "ff808081565920fc0156592d1453000a",
            ORG_CODE_3: "D440305102",
            longitude: "113.930643"
          },
          {
            company_id: 75,
            subordinate: "D440305102004",
            introduce: null,
            company_name: "南源",
            latitude: "22.521177",
            company_code: "ff808081565920fc0156592d9784000b",
            ORG_CODE_3: "D440305102",
            longitude: "113.918337"
          },
          {
            company_id: 78,
            subordinate: "D440305102005",
            introduce: null,
            company_name: "向南",
            latitude: "22.528568",
            company_code: "ff808081565920fc0156592e0c25000c",
            ORG_CODE_3: "D440305102",
            longitude: "113.926129"
          },
          {
            company_id: 87,
            subordinate: "D440305103001",
            introduce: null,
            company_name: "百旺",
            latitude: "22.628282",
            company_code: "ff808081565920fc0156592fa6c9000e",
            ORG_CODE_3: "D440305103",
            longitude: "113.945962"
          },
          {
            company_id: 92,
            subordinate: "D440305103002",
            introduce: null,
            company_name: "大勘",
            latitude: "22.608075",
            company_code: "ff808081565920fc0156593021fa000f",
            ORG_CODE_3: "D440305103",
            longitude: "113.957397"
          },
          {
            company_id: 96,
            subordinate: "D440305103003",
            introduce: null,
            company_name: "丽新",
            latitude: "22.539568",
            company_code: "ff808081565920fc01565930ad150010",
            ORG_CODE_3: "D440305103",
            longitude: "113.974368"
          },
          {
            company_id: 101,
            subordinate: "D440305103004",
            introduce: null,
            company_name: "麻磡",
            latitude: "22.58194",
            company_code: "ff808081565920fc0156593192250011",
            ORG_CODE_3: "D440305103",
            longitude: "113.95742"
          },
          {
            company_id: 103,
            subordinate: "D440305104001",
            introduce: null,
            company_name: "白石洲",
            latitude: "22.550294",
            company_code: "ff808081565920fc01565932dd200013",
            ORG_CODE_3: "D440305104",
            longitude: "113.97564"
          },
          {
            company_id: 105,
            subordinate: "D440305105001",
            introduce: null,
            company_name: "蛇口",
            latitude: "22.49472",
            company_code: "ff808081565920fc0156593434a80015",
            ORG_CODE_3: "D440305105",
            longitude: "113.933585"
          },
          {
            company_id: 106,
            subordinate: "D440305105002",
            introduce: null,
            company_name: "蛇口海湾",
            latitude: "22.498215",
            company_code: "ff808081565920fc0156593475d30016",
            ORG_CODE_3: "D440305105",
            longitude: "113.937768"
          },
          {
            company_id: 107,
            subordinate: "D440305105003",
            introduce: null,
            company_name: "蛇口南水",
            latitude: "22.494144",
            company_code: "ff808081565920fc01565934cee80017",
            ORG_CODE_3: "D440305105",
            longitude: "113.930901"
          },
          {
            company_id: 108,
            subordinate: "D440305105004",
            introduce: null,
            company_name: "蛇口湾厦",
            latitude: "22.495193",
            company_code: "ff808081565920fc01565935568e0018",
            ORG_CODE_3: "D440305105",
            longitude: "113.940134"
          },
          {
            company_id: 111,
            subordinate: "D440305105005",
            introduce: null,
            company_name: "蛇口渔二",
            latitude: "22.49078",
            company_code: "ff808081565920fc015659363a8a0019",
            ORG_CODE_3: "D440305105",
            longitude: "113.937018"
          },
          {
            company_id: 114,
            subordinate: "D440305105006",
            introduce: null,
            company_name: "蛇口渔一",
            latitude: "22.489503",
            company_code: "ff808081565920fc0156593668d2001a",
            ORG_CODE_3: "D440305105",
            longitude: "113.937045"
          },
          {
            company_id: 116,
            subordinate: "D440305106001",
            introduce: null,
            company_name: "蛇口赤湾",
            latitude: "22.495495",
            company_code: "ff808081565920fc015659382e2e001c",
            ORG_CODE_3: "D440305106",
            longitude: "113.926303"
          },
          {
            company_id: 117,
            subordinate: "D440305106002",
            introduce: null,
            company_name: "蛇口水湾源华",
            latitude: "22.497116",
            company_code: "ff808081565920fc015659389df8001d",
            ORG_CODE_3: "D440305106",
            longitude: "113.925139"
          },
          {
            company_id: 121,
            subordinate: "D440305107001",
            introduce: null,
            company_name: "大冲",
            latitude: "22.547524",
            company_code: "ff808081565920fc01565939987e001f",
            ORG_CODE_3: "D440305107",
            longitude: "113.960106"
          },
          {
            company_id: 129,
            subordinate: "D440305107002",
            introduce: null,
            company_name: "蛇口后海",
            latitude: "22.516104",
            company_code: "ff808081565920fc01565939e81f0020",
            ORG_CODE_3: "D440305107",
            longitude: "113.938567"
          },
          {
            company_id: 131,
            subordinate: "D440305108001",
            introduce: null,
            company_name: "常源",
            latitude: "22.604197",
            company_code: "ff808081565920fc0156593b083f0022",
            ORG_CODE_3: "D440305108",
            longitude: "114.018097"
          },
          {
            company_id: 135,
            subordinate: "D440305108002",
            introduce: null,
            company_name: "福光",
            latitude: "22.595692",
            company_code: "ff808081565920fc0156593b6b660023",
            ORG_CODE_3: "D440305108",
            longitude: "113.999433"
          },
          {
            company_id: 142,
            subordinate: "D440305108003",
            introduce: null,
            company_name: "龙井",
            latitude: "22.56596",
            company_code: "ff808081565920fc0156593bb3440024",
            ORG_CODE_3: "D440305108",
            longitude: "113.978814"
          },
          {
            company_id: 145,
            subordinate: "D440305108004",
            introduce: null,
            company_name: "平山",
            latitude: "22.586637",
            company_code: "ff808081565920fc0156593bfc530025",
            ORG_CODE_3: "D440305108",
            longitude: "113.968844"
          },
          {
            company_id: 152,
            subordinate: "D440305108005",
            introduce: null,
            company_name: "塘朗",
            latitude: "22.596945",
            company_code: "ff808081565920fc0156593c4c170026",
            ORG_CODE_3: "D440305108",
            longitude: "113.994211"
          },
          {
            company_id: 159,
            subordinate: "D440305108006",
            introduce: null,
            company_name: "珠光",
            latitude: "22.58066",
            company_code: "ff808081565920fc0156593cbacd0027",
            ORG_CODE_3: "D440305108",
            longitude: "113.96404"
          }
        ];

        for (var i = 0; i < companyArr.length; i++) {
          var p0 = companyArr[i].longitude;
          var p1 = companyArr[i].latitude;

          var point = new window.BMap.Point(p0, p1);
          var marker = new BMap.Marker(point); // 创建标注

          map.addOverlay(marker); // 将标注添加到地图中
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
           marker.setTop(true);
          marker.setLabel(label);
          
        }

         // 街道的点集合
        let streetArr = res.data.data.jurisdiction;
         
        for (var i = 0; i < streetArr.length; i++) {
          var p0 = streetArr[i].longitude;
          var p1 = streetArr[i].latitude;

          var point = new window.BMap.Point(p0, p1);
          
          var myIcon = new BMap.Icon(
            require("../assets/images/a-dw.png"),
            new BMap.Size(30, 30)
          );
          var marker = new BMap.Marker(point,{icon:myIcon}); // 创建标注
         
	       
          map.addOverlay(marker); // 将标注添加到地图中

          //  marker.setAnimation(BMAP_ANIMATION_BOUNCE);
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
           marker.setTop(true);
          marker.setLabel(label);
        
        }
        map.addControl(
          new window.BMap.MapTypeControl({
            mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
          })
        );

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
              strokeColor: "#64adf4",
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

<style lang="less" scoped>
.top {
  display: flex;
  margin-top: -20px;
  .time {
    span {
      margin-left: 24px;
    }
    .choose-dis {
      margin-left: 24px;
      margin-right: 210px;
      width: 100px;
      input {
        border: 1px solid #0ab3fa !important;
        background-color: #1d2a6d !important;
      }
    }
  }
  .nanshan {
    font-size: 26px;
    color: #fff;
    font-weight: bold;
    margin-right: 695px;
  }
  .street {
    color: #45c2ff;
    font-size: 20px;
    .choose-dis02 {
      margin-left: 15px;
      margin-right: 23px;

      width: 170px;
    }
  }
  .company {
    color: #45c2ff;
    font-size: 20px;
    .choose-dis03 {
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
#allmap {
  margin-top: 30px;
}
.fourlogo {
  background-color: pink;
  width: 250px;
  height: 100px;
  position: absolute;
  left: 1070px;

  top: 770px;

  background-color: #102162;
  border-radius: 5px;
  opacity: 0.6;
  padding: 10px 0;
  z-index: 9999;
  p {
 
    padding: 10px;
    margin: 5px 25px 5px 25px;
    .a1 {
     
      float: left;
      img {
        margin-right: 2px;
        width: 35px;
       
      }

      span {
        color: #fff;
      }
    }
    .a2 {
      float: right;
     
      img {
        margin-right: 2px;
        width: 35px;
       
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
</style>