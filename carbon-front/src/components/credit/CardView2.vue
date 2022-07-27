<template>
  <div class="base" style="position:relative;width:100%;height:auto">
    <Imagev
      class="background"
      style="position:absolute;left:0;margin:5%;border-radius:2.7vw;box-shadow: 0 0 1vw #88888899;height:40vw;width:90%;overflow:hidden;"
      src="https://s2.ax1x.com/2020/02/04/1BbEbF.png"
    ></Imagev>
    <font
      class="hint-text"
      style="color:#FFFFFF22;font-size:13.3vw;font-weight:700;position:absolute;top:6.7vw;left:12%;"
      >碳积分</font
    >
    <font
      class="Coin-num"
      style="color:#FFFFFF;font-size:8vw;font-weight:700;position:absolute;top:13.3vw;left:12%;"
      >{{ coin_num }}</font
    >
    <font
      class="Contribute"
      style="color:#FFFFFF;font-size:3.5vw;font-weight:200;position:absolute;top:36vw;letter-spacing:1.3vw;left:12%;"
      >{{ id }}</font
    >
    <font
      class="id"
      style="color:#FFFFFF;font-size:3.5vw;font-weight:200;position:absolute;top:29.3vw;left:12%;"
      >扶贫贡献：{{ expend }}</font
    >
    <img
      src="https://s2.ax1x.com/2020/01/21/1F7wGt.th.png"
      style="position:absolute;top:14.9vw;left:32%;width:8.5vw;height:8.5vw;"
    />
    <div
      style="width:25%;height:10.7vw;position:absolute;right:5%;top:13.3vw;background:#00000066"
    ></div>
    <Imager
      class="circle"
      :src="icon"
      style="width:10.4vw;height:10.4vw;position:absolute;top:13.3vw;right:25%;border-style: solid; border-width: 0.27vw;border-color:white"
    ></Imager>
    <font
      style="color:#FFFFFF;font-size:3.5vw;font-weight:200;position:absolute;top:16vw;right:7%;letter-spacing:0.27vw;"
      >{{ name }}</font
    >
    <Imagev
      @click.native="share"
      src="https://s2.ax1x.com/2020/02/04/1Dp6X9.th.png"
      style="width:3.5vw;height:3.5vw;position:absolute;right:8%;top:36.8vw;"
    ></Imagev>
    <Imagev
      src="https://s2.ax1x.com/2020/02/04/1DCrL9.th.png"
      style="width:4vw;height:4vw;position:absolute;right:15%;top:36.5vw;"
    ></Imagev>
    <mu-button
      flat
      round
      style="filter:alpha(opacity=100); opacity:100;"
      class="credit-share"
      color="#9E9E9E"
      @click="showPopup"
    ></mu-button>
    <van-popup
      close-icon="https://s2.ax1x.com/2020/01/27/1uNMTK.th.png"
      style="border-radius:2.7vw"
      v-model="show"
    >
      <PopupView
        v-on:closePopup="closePopup"
        button_text="我知道了"
        img1="https://s2.ax1x.com/2020/02/06/16UK4H.th.png"
        des1="1、您在积分商城购买扶贫专项商品。"
        img2="https://s2.ax1x.com/2020/02/06/16UuUe.th.png"
        des2="2、您的消费积攒到一定金额。"
        img3="https://s2.ax1x.com/2020/02/06/16UnED.th.png"
        des3="3、我们会使用具象化描述形容您的贡献。"
        title="什么是扶贫贡献？"
        subtitle="点击查看完整帮助"
        link="/Help"
      ></PopupView>
    </van-popup>
  </div>
</template>

<script>
import Imagev from "../utils/Image";
import Imager from "../utils/ImageRound";
import PopupView from "../utils/PopupView";
import { Popup } from "vant";

export default {
  components: {
    Imagev,
    Imager,
    PopupView,
    [Popup.name]: Popup
  },
  props: {
    coin_num: String,
    id: String,
    save: Number,
    expend: String,
    icon: String,
    name: String
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    closePopup() {
      this.show = false;
    },
    share(){
      this.$toast.success("已分享");
    }
  }
};
</script>

<style lang="scss">
.credit-share {
  width: 4vw;
  height: 4vw;
  position: absolute;
  right: 15%;
  top: 36.5vw;
}
</style>
