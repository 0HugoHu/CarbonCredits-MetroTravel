<template>
  <div>
    <div
      style="margin-top:1vh;width:100%;background-color:#FAFAFA;height:9.8vw;"
    >
      <div
        style="position:absolute;margin-top:1.6vw;width:1.3vw;height:6vw;background-color:#009688;"
      ></div>
      <div style="position:absolute;margin-top:0.6vh" class="font2">
        实时地图
      </div>
    </div>
    <div id="map-container" class="amap-page-container">
      <el-amap
        ref="map"
        vid="amapDemo"
        :amap-manager="amapManager"
        :events="mapEvents"
        :center="center"
        :zoom="zoom"
        :plugin="plugin"
        class="amap-demo"
        :rotateEnable="true"
      >
      </el-amap>
    </div>
  </div>
</template>

<script>
import VueAMap from "vue-amap";

let amapManager = new VueAMap.AMapManager();
export default {
  data() {
    let self = this;
    return {
      center: [104.08786173, 30.66253265],
      amapManager,
      zoom: 15,
      lng: 0,
      lat: 0,
      loaded: false,
      mapEvents: {
        init(o) {
          o.setMapStyle("amap://styles/macaron");
        }
      },
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            }
          }
        }
      ]
    };
  }
};
</script>

<style>
#map-container {
  position: relative;
  overflow: hidden;
  border-radius: 2.7vw;
  margin: 0.5vh 2.7vw 0.5vh 2.7vw;
  box-shadow: 0 0 2vw #88888844;
}
</style>
