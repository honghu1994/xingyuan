<template>
  <div>
    <img src="../assets/images/top.png" alt class="topImg" />
    <h1>
      <img src="../assets/images/logo.png" alt />
      南山集体经济总览平台
    </h1>
    
    <!-- 地图盒子 -->
     <img src="../assets/images/返回.png" alt @click="goback()"  class="zswdimg"/>
    <div style="width:100%;height:900px;" id="allmap"></div>
    <!-- 公司介绍 -->
    <div class="companyIntroduce" v-if="this.$route.query.companyID!=''">
        <div class="zstop">
          {{companyDetailList.company_name}}
        </div>
        <div class="zstop02"> 
          <div class="zsleft">
         
           {{companyDetailList.company_name}}于{{companyDetailList.establish_data}}在{{companyDetailList.registration_address}}注册成立公司,经营范围为
             {{companyDetailList.business_scope}}

       
            <!-- <br>
            <span class="zsdetail">详情</span> -->
          </div>
          <div class="zsright">
               
            <img src="../assets/images/u6.jpg" alt="" class="zsmyimg">
          </div>
        </div>
        <div class="zscompany">
          <p>公司概况</p>
          <p class='zsborder'></p>
          <p class="zslh zstop001">
            <span class="zsw"> 总资产: {{companyDetailList.total_assets}} </span>
            <span>总负债: {{companyDetailList.total_liabilities}}</span>
          </p>
            <p  class="zslh">
              <span  class="zsw">净资产:{{companyDetailList.net_assets}}</span>
              <span>物业总数:{{companyDetailList.assets_count}}件</span>

            </p>
            <p  class="zslh">股民人数:{{companyDetailList.investors_number}}人</p>
            <p  class="zslh">
              <a href="javascript:;" class="zsw zscolor"  @click="toAssets()">物业信息</a>
              <a href="javascript:;" class="zscolor" @click="toTongchou()" >可出租物业信息</a>
            </p>
            <p  class="zsmargin">下属机构列表</p>
            <p class="zsborder"></p>
            <p class="zscomjie">
              <span class="zsinbl">公司名称</span>
              <span class="zsinbl02">注册资本</span>
              <span  class="zsinbl03">法人</span>
            </p>
            <ul class="zsauto">
              <li  v-for="(item,index) in companySonList" :key='item.index' @click="showIns(index)">
                   <p class="zslhcom">
                    <span class="zsdian">
                    {{item.company_name}}
                
                     </span>
                    <span class="zsdian02"> {{item.legal_representative}}</span>
                   <span class="zsdian03">{{item.registered_capital}}</span>
                  </p>
              </li>
       
            </ul>
           
          
        </div>
    </div>
  
    <div class="show" v-if="this.$route.query.companyID!=''" v-show="isShow">
          <div class="myicon" @click="isShow=!isShow"><span  class="iconfont icon-cha"></span></div>
      <div class="baiwang">{{insData01}}</div>
      <div
        class="wenben"
      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{insData}}</div>
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
      companyDetailList:[],
      companySonList:[],
      mapdata: [],
      insData:[],
      insData01:[],
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
       isShow: false,
     

      
    };
  },

  mounted() {
   
    
    
    this.getmap();
    this.getStreet();
    this.getCompanyDetail();

   
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
    showIns(mindex){
      this.isShow=!this.isShow
     
        this.$axios
        .post("assetes/companyDetail", {

          company_id:this.$route.query.companyID
        })
        .then(result => {
          

          if (result.data.code == 200) {
            
            this.insData=result.data.data.companySubordinate[mindex].introduce
            this.insData01=result.data.data.companySubordinate[mindex].company_name

          }
        });
     
      
    },
    goback() {
      this.$router.go(-1);
    },
 
    //获取公司详情
    getCompanyDetail(){
        this.$axios
        .post("assetes/companyDetail", {

          company_id:this.$route.query.companyID
        })
        .then(result => {
          
          
          if (result.data.code == 200) {
        
          
            this.companyDetailList=result.data.data.companyDetail
            this.companySonList=result.data.data.companySubordinate
          

          }
        });
    },
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



    //去固定资产
    toAssets() {
       this.$router.push({
        path: "/companyDetail",
        query: {
          company_id: this.$route.query.companyID
        
        }
      });
    },
    //去统筹供应表
    toTongchou() {
       this.$router.push({
        path: "/tongchouForm",
        query: {
          company_id: this.$route.query.companyID
        
        }
      });
    },
    getmap() {
      this.$axios.post("assetes/assetsMapOverview",{
         torganization_id:this.$route.query.streetID,
         company_id:this.$route.query.companyID,
         mapIsSubordinate:1
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
        map.centerAndZoom(point, 13); // 初始化地图，设置中心点坐标和地图级别 // 初始化地图,设置中心点坐标和地图级
      
        //股份公司集合
      let companyArr = res.data.data.company;
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
           if(this.$route.query.streetID==''){
           
             
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
          )
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
                    (value, index) => value.org_code == this.$route.query.streetID
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
            //设置百度地图的显示层级
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
        if(this.$route.query.companyID==""){
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
            
            markers.setLabel(label);
          
          }
        }
        //子公司点集合

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

<style lang="less" scoped>
.show {
  position: absolute;
  bottom: 400px;
  left: 770px;
  width: 600px;
  height: 330px;
  background-color: #1a276e;
  padding: 30px 15px;
  opacity: 0.9;
  color: white;
  .myicon{
    position: absolute;
    top: 10px;
    right: 0px;
    width: 40px;
    height: 40px;
   
   
    .iconfont{
       cursor:pointer;
     
     font-size: 30px;

    }
  }
  .baiwang {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    border-bottom: 2px solid #718498;
  }
  .wenben {
    overflow: auto;
    width: 100%;
    // height: 190px;
    // background-color: pink;
    font-size: 16px;
    padding: 20px 15px;
    box-sizing: border-box;
    line-height: 30px;
  }
}
.zswdimg{
  position: absolute;
  
    width: 32px;
    top: 65px;
  right: 70px;

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
#allmap {
  margin-top: 20px;
}
.companyIntroduce{
   font-size: 18px;
  width: 550px;
  height: 700px;
  background-color: #fff;
  position: absolute;
  left: 30px;
  top: 150px;
  .zstop{
    width: 100%;
    height: 60px;
    background-color: #3986f8;
    font-size: 26px;
    color: #fff;
    text-align: center;
    line-height: 60px;
    margin-bottom: 30px;
    display: flex;
    justify-content:center;
    align-items:center;

  }
  .zstop02{
    
    width: 100%;
    height: 180px;
    position: relative;
  
    box-sizing: border-box;
    padding: 0 20px;
    .zsleft{
       font-size: 18px;
      text-indent:2em;
      width: 225px;
      height: 100%;
     
      overflow: auto;
   
    }
    .zsright{
       width: 50%;
      height: 180px;
      background-color: #f2f2f2;
     position: absolute;
     left: 260px;
     top: 0px;
   .zsmyimg{
     width: 100%;
     height: 100%;
   }


    }
  }
  .zscompany{
    padding: 0 20px;
    margin-top: 30px;
    .zsborder{
      border-top:  1px solid #cccccc;
      margin-top: 5px;
    }
    .zslh{
      line-height: 36px;
    }
    .zsw{
      width: 260px;
      // background-color: #fff;
      display: inline-block;
    }
    .zstop001{
      margin-top: 10px;
    }
    .zsmargin{
       margin-top: 10px;
    }
    .zsinbl{
      display: inline-block;
      width: 260px;
      background-color: #3986f8;
      text-align: center;
      padding: 5px 0;
        margin-right: 5px;
      
    }
    .zsinbl02{
      display: inline-block;
       text-align: center;
      padding: 5px 0;
      width: 120px;
      background-color: #3986f8;
      margin-right: 5px;
      
    }
    .zsinbl03{
       display: inline-block;
       text-align: center;
      padding: 5px 0;
      background-color: #3986f8;
       width: 120px;
    }
    .zscomjie{
      margin-top: 5px;
      color: #fff;
    }
    .zslhcom{
      line-height: 40px;
      display: flex;

    }
    .zsdian{
      display: inline-block;
      width: 260px;
       margin-right: 5px;
       overflow: hidden;
        white-space: nowrap; 
        text-overflow: ellipsis;
        line-height: 40px;

    }
    .zsdian02{
       width: 120px;
       display: inline-block;
       text-align: center;
        margin-right: 5px;
    }
    .zsdian03{
       width: 120px;
       display: inline-block;
       text-align: center;
      
    }
    .zscolor{
        color: #2f33ff;
    }
    .zsauto{

    cursor:pointer;
      overflow: auto;
      height: 120px;
     
    }
  }

}

</style>