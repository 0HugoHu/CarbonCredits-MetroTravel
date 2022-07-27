<template>
  <div style="position:relative;width:90vw;margin-left:5vw;">
    <Imagev
      class="ticket-img"
      :class="{
        'ticket-img-gray': !ticket.valid
      }"
      src="https://s1.ax1x.com/2020/03/26/Gpc3Is.png"
      width="90vw"
      height="auto"
      style="margin-top:5vw;"
    />
    <Imagev
      class="ticket-img"
      :class="{
        'ticket-img-gray': !ticket.valid
      }"
      :src="img"
      width="6vw"
      height="6vw"
      style="position:absolute;left:4.5vw;top:9vw;"
    />
    <div
      style="position:absolute;left:13vw;top:9.5vw;font-size:4vw;font-weight:bold"
    >
      {{ ticket.title }}
    </div>
    <div
      style="position:absolute;left:13vw;top:16vw;font-size:3vw;color:#808080"
    >
      截止日期：至{{ ticket.ddl }}
    </div>

    <div
      @click="info"
      style="position:absolute;left:13vw;bottom:3.5vw;font-size:3vw;color:#808080"
    >
      使用说明
    </div>
    <Imagev
      :class="{
        'ticket-img': 'true' == 'true',
        'ticket-img-gray': gray_mode == true
      }"
      @click.native="info"
      src="https://s1.ax1x.com/2020/03/26/Gp2PNd.th.png"
      width="3.2vw"
      height="3.2vw"
      style="position:absolute;left:26vw;bottom:4.1vw;"
    />

    <div
      @click="check"
      v-if="ticket.type == '1' || ticket.type == '2'"
      style="position:absolute;left:40vw;bottom:3.5vw;font-size:3vw;color:#808080"
    >
      查看券码
    </div>
    <Imagev
      :class="{
        'ticket-img': 'true' == 'true',
        'ticket-img-gray': gray_mode == true
      }"
      @click.native="check"
      v-if="ticket.type == '1' || ticket.type == '2'"
      src="https://s1.ax1x.com/2020/03/26/Gp2tDU.th.png"
      width="3.2vw"
      height="3.2vw"
      style="position:absolute;left:52vw;bottom:4.1vw;"
    />

    <div v-if="ticket.type != '2' && ticket.addition == 'none' ? true : false">
      <div
        style="position:absolute;left:65vw;top:15.5vw;font-size:5vw;color:#fff"
      >
        ￥
      </div>
      <div
        style="position:absolute;width:10vw;left:70vw;top:10vw;font-size:10vw;color:#fff"
      >
        {{ ticket.prize }}
      </div>
    </div>

    <div v-if="ticket.type != '2' && ticket.addition != 'none' ? true : false">
      <div
        style="position:absolute;left:65vw;top:13.5vw;font-size:5vw;color:#fff"
      >
        ￥
      </div>
      <div
        style="position:absolute;width:10vw;left:70vw;top:8vw;font-size:10vw;color:#fff"
      >
        {{ ticket.prize }}
      </div>
      <div
        style="position:absolute;left:62vw;top:22vw;width:25vw;font-size:3vw;color:#fff;line-height:4vw;"
      >
        {{ ticket.addition }}
      </div>
    </div>

    <div v-if="ticket.type == 2 ? true : false">
      <div
        style="position:absolute;width:25vw;left:62vw;top:12vw;font-size:8vw;color:#fff"
      >
        {{ ticket.prize }}
      </div>
    </div>

    <van-popup
      close-icon="https://s2.ax1x.com/2020/01/27/1uNMTK.th.png"
      style="border-radius:2.7vw"
      v-model="info_s"
    >
      <PopupViewinfo
        v-on:closePopup="closeInfo"
        title="关于卡券"
        subtitle="最终解释权归©LeedsHighFlyingBirds所有"
        text="这里是关于卡券的相关政策解说明解释"
        link=""
        button_text="我知道了"
      />
    </van-popup>

    <van-popup
      close-icon="https://s2.ax1x.com/2020/01/27/1uNMTK.th.png"
      style="border-radius:2.7vw"
      v-model="check_s"
    >
      <PopupViewcheck
        v-on:closePopup="closeCheck"
        title="兑换码"
        subtitle="请在需要使用时呈现此条码"
        link=""
        button_text="完成"
        img="https://s1.ax1x.com/2020/03/26/G9npU1.md.jpg"
      />
    </van-popup>
  </div>
</template>

<script>
import Imagev from "../../utils/Image";
import PopupViewinfo from "../exchange/PopupView_info";
import PopupViewcheck from "../exchange/PopupView_check";
import { Popup } from "vant";

export default {
  components: {
    Imagev,
    PopupViewinfo,
    PopupViewcheck,
    [Popup.name]: Popup
  },
  props: {
    ticket: Object
  },
  data() {
    return {
      img: "",
      info_s: false,
      check_s: false
    };
  },
  mounted() {
    var type = this.ticket.type;
    if (type == "0") {
      this.img = "https://s2.ax1x.com/2020/02/22/3MeQvd.th.png";
    } else if (type == "1") {
      this.img = "https://s1.ax1x.com/2020/03/26/Gp7xTx.th.png";
    } else if (type == "2") {
      this.img = "https://s1.ax1x.com/2020/03/26/GpHF6H.th.png";
    } else if (type == "3") {
      this.img = "https://s1.ax1x.com/2020/03/26/GpHcAx.th.png";
    } else if (type == "4") {
      this.img = "https://s1.ax1x.com/2020/03/26/GpHUhT.th.png";
    } else {
      this.img = "";
    }
  },
  methods: {
    info() {
      this.info_s = true;
    },
    check() {
      this.check_s = true;
    },
    closeInfo() {
      this.info_s = false;
    },
    closeCheck() {
      this.check_s = false;
    }
  }
};
</script>

<style>
.ticket-img-gray {
  -webkit-filter: grayscale(1); /* Webkit */
  filter: gray; /* IE6-9 */
  filter: grayscale(1); /* W3C */
}
</style>
