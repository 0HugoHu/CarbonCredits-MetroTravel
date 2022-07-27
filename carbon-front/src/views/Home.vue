<template>
  <div>
    <NoticeBar
      v-if="$store.state.home.notice"
      :msg="$store.state.home.notice"
    />
    <Swipe2 style="margin-top:0vw;overflow：auto;"></Swipe2>
    <div
      style="margin-top:1vh;width:100%;background-color:#FAFAFA;height:7.8vw;"
    ><div
        style="position:absolute;margin-top:1.6vw;width:1.3vw;height:6vw;background-color:#009688;"
      ></div>
      <div style="position:absolute;margin-top:0.6vh" class="font2">
        快捷入口
      </div>
    </div>
    <ButtonGrid id="buttons-grid"></ButtonGrid>
    <RealtimeMap></RealtimeMap>
    <News :news="$store.state.home.newsItems"></News>
    <br /><br /><br />
  </div>
</template>

<script>
import NoticeBar from "../components/home/NoticeBar";
import Swipe2 from "../components/home/Swipe2";
import ButtonGrid from "../components/home/ButtonGrid";
import RealtimeMap from "../components/home/RealtimeMap";
import News from "../components/home/News";

export default {
  components: {
    NoticeBar,
    RealtimeMap,
    Swipe2,
    ButtonGrid,
    News
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("home/loadAll");
  }
};
</script>

<style>
#buttons-grid {
  background: #ffffff;
  position: relative;
  height: auto;
  width: auto;
  margin: 3.5vw 2.7vw 2.7vw 2.7vw;
  box-shadow: 0 0 1vw #88888844;
  overflow: hidden;
  border-radius: 2.7vw;
}

.amap-demo {
  height: 50vw;
  border-radius: 2.7vw;
}
.font {
  font-size: 4.5vw;
  color: #202020;
  font-family: Tahoma, Arial, "Hiragino Sans GB", "simsun", sans-serif;
  font-weight: bold;
  position: absolute;
  left: 5.3vw;
  top: 10%;
}

.font2 {
  font-size: 4.5vw;
  color: #202020;
  font-family: Tahoma, Arial, "Hiragino Sans GB", "simsun", sans-serif;
  font-weight: bold;
  left: 5.3vw;
}
</style>
