<template>
  <div id="bg0" style="position:relative;height:18vw">
    <Imagev
      src="https://s2.ax1x.com/2020/03/07/3X49jP.th.png"
      width="5.5vw"
      height="5.5vw"
      style="float:left;margin:2.5vw;margin-top:3vw;margin-right:1vw;"
    />
    <div
      style="position:absolute;text-align:left;left:10vw;top:2.5vw;font-size: 4.5vw;color: #202020; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;margin-right: 2.7vw;"
    >
      {{ msg.title }}
    </div>
    <div
      style="position:absolute;text-align:left;left:10vw;bottom:2.5vw;right:5vw;font-size: 3.5vw;color: #616161;margin-right: 2.7vw;"
    >
      {{ msg.hot_index }}万热度
    </div>
    <div
      id="dis0"
      style="position:absolute;text-align:right;right:5vw;bottom:2.5vw;font-size: 3.5vw;color:#616161;"
    >
      {{ this.distance }}km
    </div>
  </div>
</template>

<script>
import Imagev from "../utils/Image";

export default {
  name: "TopicCard",
  props: {
    msg: Object
  },
  components: {
    Imagev
  },
  data() {
    return {
      distance: "0"
    };
  },
  mounted() {
    if (this.msg.title.length >= 18) {
      var bg = document.getElementById("bg0");
      bg.style.height = "26vw";
    }
    //需要获取到当前位置
    var pos_x = 30.764144;
    var pos_y = 103.986565;
    var distance = Math.sqrt(
      Math.pow((this.msg.position_x - pos_x) * 100, 2) +
        Math.pow((this.msg.position_y - pos_y) * 110, 2)
    ).toFixed(2);
    if (distance > 99) {
      this.distance = "大于99";
    } else {
      this.distance = distance;
      if (distance < 3) {
        var dis = document.getElementById("dis0");
        dis.style.color = "#009688";
      }
    }
  }
};
</script>

<style></style>
