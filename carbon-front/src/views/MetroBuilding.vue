<template>
  <div>
    <div id="amap-game" class="amap-page-container"></div>
    <div id="game-overlay-bottom">
      <div class="game-control" @click="toggleEditMode">
        <div class="game-control__button"></div>
        <div class="game-control__text">编辑</div>
      </div>
      <div class="game-control" @click="popups.inventory = true">
        <div class="game-control__button"></div>
        <div class="game-control__text">库存</div>
      </div>
      <div class="game-control">
        <div class="game-control__button"></div>
        <div class="game-control__text">购买</div>
      </div>
      <div class="game-control">
        <div class="game-control__button"></div>
        <div class="game-control__text">任务</div>
      </div>
      <div class="game-control">
        <div class="game-control__button"></div>
        <div class="game-control__text">图鉴</div>
      </div>
    </div>
    <van-popup v-model="popups.inventory" closeable>
      <popup-container title="库存">
        <inventory-popup />
      </popup-container>
    </van-popup>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from "vue-amap";
import { Popup } from "vant";
import InventoryPopup from "@/components/metro_building/Inventory.vue";
import PopupContainer from "@/components/metro_building/PopupContainer.vue";

let map = null;
let lines = [];

let markers = [];
let polylines = [];

function pathBetweenStation(start, end, path) {
  let startPos = start.location;
  let endPos = end.location;

  let startIdx = -1;
  let endIdx = -1;

  for (let idx in path) {
    let pos = path[idx];
    if (window.AMap.GeometryUtil.distance(pos, startPos) === 0) {
      startIdx = parseInt(idx);
    }
    if (window.AMap.GeometryUtil.distance(pos, endPos) === 0) {
      endIdx = parseInt(idx);
    }
  }
  if (startIdx >= 0 && endIdx >= 0) {
    return path.slice(startIdx, 1 + endIdx);
  } else {
    return [];
  }
}

export default {
  components: {
    [Popup.name]: Popup,
    InventoryPopup,
    PopupContainer
  },
  data: function() {
    return {
      editMode: false,
      openedRange: [[[0, 4]], [[0, 1]], [[0, 5]]],
      popups: {
        inventory: false
      }
    };
  },

  methods: {
    // common init
    async initMap() {
      await lazyAMapApiLoaderInstance.load();
      map = new window.AMap.Map("amap-game", {
        resizeEnable: true,
        rotateEnable: true,
        pitchEnable: true,
        zoom: 17,

        expandZoomRange: true,
        zooms: [3, 20],
        center: [120.298995, 31.57732]
      });

      await this.initData();
      this.initNormalMode();
    },
    async initData() {
      let lineSearch = new window.AMap.LineSearch({
        pageIndex: 1,
        city: "成都",
        pageSize: 1,
        extensions: "all"
      });

      lines.push(
        await this.searchLine(lineSearch, 1),
        await this.searchLine(lineSearch, 2),
        await this.searchLine(lineSearch, 3),
        await this.searchLine(lineSearch, 7)
      );
    },
    searchLine(lineSearch, lineNum) {
      return new Promise((resolve, reject) => {
        lineSearch.search(`地铁${lineNum}号线`, (status, result) => {
          if (status === "complete" && result.info === "OK") {
            let line = result.lineInfo[0];
            resolve(line);
          } else {
            reject(result);
          }
        });
      });
    },
    // common init end
    // normal mode
    initNormalMode() {
      this.drawOpened();
      map.setFitView();
    },
    drawOpened(withMarker = true) {
      for (const line_idx in lines) {
        let line = lines[line_idx];
        for (const range of this.openedRange[line_idx] || []) {
          let path = pathBetweenStation(
            line.via_stops[range[0]],
            line.via_stops[range[1]],
            line.path
          );

          let polyline = new window.AMap.Polyline({
            map,
            path,

            strokeColor: "#09f", //线颜色
            strokeOpacity: 0.8, //线透明度
            isOutline: true,
            outlineColor: "white",
            strokeWeight: 6 //线宽
          });

          polylines.push(polyline);

          if (withMarker) {
            let marker = new window.AMap.Marker({
              map,
              position: path[0],
              icon: "https://webapi.amap.com/images/car.png",
              offset: new window.AMap.Pixel(-26, -13),
              autoRotation: true,
              angle: -90
            });

            markers.push(marker);

            let path_rev = path.slice(0).reverse();
            marker.moveAlong(path.concat(path_rev), 2000, k => k, true);
          }
        }
      }
    },
    // normal mode end
    // edit mode
    initEditMode() {
      this.drawAllLines();
      this.drawOpened(false);
    },
    drawAllLines() {
      for (const line_idx in lines) {
        let line = lines[line_idx];
        let path = line.path;

        let polyline = new window.AMap.Polyline({
          map,
          path,

          strokeColor: "#ccc", //线颜色
          strokeOpacity: 0.8, //线透明度
          isOutline: true,
          outlineColor: "white",
          strokeWeight: 6 //线宽
        });

        polylines.push(polyline);
      }
    },
    toggleEditMode() {
      this.editMode = !this.editMode;
      map.clearMap();
      if (this.editMode) {
        this.initEditMode();
      } else {
        this.initNormalMode();
      }
    }
  },

  mounted() {
    this.initMap();
  }
};
</script>

<style lang="scss">
.amap-container {
  z-index: 1;
  height: 100vh;
  width: 100vw;
  resize: both;
}
#game-overlay-bottom {
  z-index: 2;
  position: fixed;
  bottom: 16px;
  left: 16px;

  display: flex;
  flex-direction: row;

  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  border-radius: 8px;
}

.game-control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
}

.game-control__button {
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: red;
}

.game-control__text {
  font-size: 20px;
  color: white;
  font-weight: 400;
}

.van-popup {
  background: transparent;
}
</style>
