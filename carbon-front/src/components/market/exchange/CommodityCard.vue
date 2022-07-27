<template>
  <div
    style="width:25vw;height:50vw;background:#fff;position:relative;border-radius:1vw;overflow:hidden;box-shadow: 0 0 1vw #88888833;"
    >
    <Imagev
      :src="item.titleImage"
      width="25vw"
      height="25vw"
      style="position:absolute;left:0;top:0;border-radius:1vw;overeflow:hidden"
    ></Imagev>
    <div
      v-if="true"
      style="border-radius:1vw 0 1vw 0;padding:0vw 1vw 0vw 2vw;color:#fff;position:absolute;left:0;top:0;font-size:3.5vw;background: linear-gradient(to right, #FB694A, #FF9A4F);width:auto;height:auto"
    >
      第{{index+1}}名
    </div>
    <div
      style="text-align:left;margin-top:27vw;margin-left:1vw;margin-right:1vw;font-weight:bold;font-size:3.5vw;color:#202020;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;">
      {{ item.title }}
    </div>
    <div style="position:absolute;left:1vw;top:33vw;">
      <div style="float:left;font-weight:bold;font-size:3.5vw;color:#f44336;">
        {{ (item.discount ? item.discount : item.price) | priceDisplay }}
      </div>
      <div
        v-if="item.discount"
        style="float:left;margin-top:0.5vw;margin-left:1vw;font-size:3vw;color:#808080;text-decoration:line-through"
      >
        {{ item.price | priceDisplay }}
      </div>
    </div>
    <div
        style="position:absolute;left:2.5vw;bottom:1vw;width:80%;height:7vw;font-size:3.5vw;padding:1vw;border-radius:1vw;color:rgb(255,118,17);background:rgba(255,118,17,0.07)">
        兑换
    </div>
  </div>
</template>

<script>
import Imagev from "../../utils/Image";
import Imager from "../../utils/ImageRound";
import BScroll from 'better-scroll'
export default {
  components: {
    Imagev,
    Imager,
  },
  props: {
    item: Object,
    index: Number,
  },
  name: "CommodityCard"
};
</script>

<style>

</style>
