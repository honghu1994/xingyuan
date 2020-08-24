<template>
  <div class="map">
         <header-top>
      <div slot="left">
        <img @click="$router.go(-1)" src="@/assets/img/back.png" />
      </div>
      <div slot="mid">资产位置</div>
    </header-top>
    <div class="title">
       {{mapData.name}}

    </div>
    <div id="allmap">

    </div>
  </div>
</template>

<script>
import HeaderTop from "@/common/Header";
export default {
    data() {
        return {
            mapData:this.$route.params
        }
    },
components: {
    HeaderTop
  },
  methods: {
      getMap(){
        //    var map = new BMap.Map("allmap");
        //   var new_point = new BMap.Point(113.957943, 22.553001);
        //   map.centerAndZoom(new_point, 17);
        //   map.enableScrollWheelZoom(true);
        //   map.clearOverlays();
        //   var marker = new BMap.Marker(new_point); // 创建标注
        //   map.addOverlay(marker); // 将标注添加到地图中
        //   map.panTo(new_point);
        //   map.enableScrollWheelZoom(true)
         var map = new window.BMap.Map("allmap", { enableMapClick: false }); // 创建地图实例，禁止点击地图底图
        map.enableScrollWheelZoom(); //禁止双击缩放
         var point = new window.BMap.Point(this.mapData.lon, this.mapData.lat);
        map.centerAndZoom(point, 13); 
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);  
         var label = new BMap.Label(this.mapData.name, {
            offset: new BMap.Size(-5, 25)
          });
           marker.setLabel(label);
             map.addControl(
            new window.BMap.MapTypeControl({
              mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
            })
          );
      }
  },
  mounted() {
      this.getMap()
  },
}
</script>

<style lang='less' scoped>
.map{
    overflow: hidden;
    .title{
        font-size: 20px;
        font-weight: bold;
        margin-left: .6rem;
        margin-top: 2rem;

    }
      #allmap {
          margin-left: .3rem;
       width: 100%;
        height: 9rem;
        background-color: pink;
      }
}

</style>