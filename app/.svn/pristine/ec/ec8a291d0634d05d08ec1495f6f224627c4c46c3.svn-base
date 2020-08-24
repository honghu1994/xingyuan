<template>
  <div class="map">
         <header-top>
           <div slot="left">
          <img @click="$router.go(-1)" src="@/assets/img/back.png" />
          </div>
            <div slot="mid">资产位置</div>
    </header-top>
    <div class="title">
       {{this.$route.query.assets_name}}

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

        }
    },
    mounted() {




    },
components: {
    HeaderTop
  },
  methods: {
      getMap(){



         var map = new window.BMap.Map("allmap", { enableMapClick: false }); // 创建地图实例，禁止点击地图底图
        map.enableScrollWheelZoom(); //禁止双击缩放
         var point = new window.BMap.Point(113.957943, 22.553001);
         //开启缩放功能
          map.enableScrollWheelZoom(); 
        map.centerAndZoom(point, 13);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
       
        //  var label = new BMap.Label('大新大厦', {
        //     offset: new BMap.Size(-5, 25)
        //   });
        //    marker.setLabel(label);
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

        font-size: 16px;
        font-weight: bold;
        margin-left: .2rem;
        margin-top: 1.5rem;
        margin-bottom: .5em;

    }
      #allmap {
        margin-left: .2rem;
        width: 95%;
        height: 9.5rem;

      }
}

</style>
