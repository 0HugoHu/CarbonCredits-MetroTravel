<template>
  <div style="background:#fafafa;position:relative">
    <Map style="width:100vw;height:20vh;" />
    <NearTopic id="near" style="width:100vw;margin-top:1vh" />
    <HotTopicList id="list" style="width:100vw;margin-top:0vh;" />
    <div
      style="z-index:9;width:100%;top:0;position:fixed;background:#fff;height:6vh;border-bottom: 1px solid #f6f6f6;"
    >
      <Imager
        width="6vw"
        height="6vw"
        src="https://s2.ax1x.com/2020/02/22/3MVLTK.th.png"
        style="position:absolute;left:5vw;top:1.7vh;opacity:0.5;"
      >
      </Imager>
      <div
        style="position:fixed;top:1.7vh;width:100vw;color:#202020;font-size:4.5vw;letter-spacing:0.5vw;"
      >
        话题墙
      </div>
      <mu-button
        :ripple="false"
        flat
        style="filter:alpha(opacity=100); opacity:100;position:fixed;left:0;top:0;height:6vh;width:20vw;"
        to="/"
      >
      </mu-button>
    </div>
    <mu-button
      :ripple="false"
      flat
      style="filter:alpha(opacity=100); opacity:100;position:fixed;left:0;top:0;height:6vh;width:20vw;"
      @click="$router.go(-1)"
    ></mu-button>
    <TopicPopup />
  </div>
</template>

<script>
import Map from "../components/topicwall/Map";
import NearTopic from "../components/topicwall/NearTopic";
import TopicPopup from "../components/topicwall/TopicPopup";
import HotTopicList from "../components/topicwall/HotTopicList";
import Imager from "../components/utils/ImageRound";
export default {
  components: {
    Map,
    NearTopic,
    HotTopicList,
    Imager,
    TopicPopup
  },
  mounted() {
    this.$store.dispatch("topic_wall/loadAll");
  }
};
</script>

<style></style>
