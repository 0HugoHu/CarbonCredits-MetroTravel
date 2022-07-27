<template>
  <div
    style="width:42.5vw;height:62.5vw;background:#fff;position:relative;border-radius:1vw;overflow:hidden;box-shadow: 0 0 1vw #88888833;"
  >
    <Imagev
      :src="item.titleImage"
      width="42.5vw"
      height="42.5vw"
      style="position:absolute;left:0;top:0;border-radius:1vw;overeflow:hidden"
    ></Imagev>
    <div
      v-if="item.discount"
      style="border-radius:1vw 0 1vw 0;padding:0vw 1vw 0vw 2vw;color:#fff;position:absolute;left:0;top:0;font-size:3.5vw;background: linear-gradient(to right, #FB694A, #FF9A4F);width:auto;height:auto"
    >
      限时特价
    </div>
    <div
      style="position:absolute;left:2vw;text-align:left;margin-right:2vw;top:43vw;font-weight:bold;font-size:4vw;color:#202020;"
    >
      {{ item.title }}
    </div>
    <div style="position:absolute;left:2vw;bottom:2vw;">
      <div style="float:left;font-weight:bold;font-size:4vw;color:#f44336;">
        {{ (item.discount ? item.discount : item.price) | priceDisplay }}
      </div>
      <div
        v-if="item.discount"
        style="float:left;margin-top:1vw;margin-left:1vw;font-size:3vw;color:#808080;text-decoration:line-through"
      >
        {{ item.price | priceDisplay }}
      </div>
    </div>
    <Imager
      style="position:absolute;right:2vw;bottom:2vw;background:#ff7611;width:7vw;height:7vw;padding:1vw 1.5vw 1vw 1vw"
      src="https://s2.ax1x.com/2020/02/22/3MXRtx.th.png"
    >
    </Imager>
  </div>
</template>

<script>
import Imagev from "../../utils/Image";
import Imager from "../../utils/ImageRound";
export default {
  components: {
    Imagev,
    Imager
  },
  props: {
    item: Object
  },
  name: "CommodityCard"
};
</script>

<style></style>
