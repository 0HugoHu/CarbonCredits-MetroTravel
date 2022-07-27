<template>
  <div class="swiper-inner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(url, index) in images" :key="index"
        ><Imagev class="img" lazy-load :src="url"
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { Lazyload } from "vant";
import Vue from "vue";
import Imagev from "../../utils/Image";
Vue.use(Lazyload);
export default {
  components: {
    swiper,
    swiperSlide,
    Imagev
  },
  props: {
    msg: String
  },
  name: "Swipe",
  data() {
    return {
      images: [
        "https://s2.ax1x.com/2020/01/29/1QQYb8.png",
        "https://s2.ax1x.com/2020/01/29/1QQJDf.jpg",
        "https://s2.ax1x.com/2020/01/29/1QQGKP.jpg",
        "https://s2.ax1x.com/2020/01/29/1QQ1gI.jpg",
        "https://s2.ax1x.com/2020/01/29/1QQNVS.jpg"
      ],
      /* API 详见 https://swiperjs.com/api/#parameters */
      swiperOption: {
        effect: "fade",
        initialSlide: 1,
        centeredSlides: true,
        slidesPerView: "auto",
        slidesOffsetBefore: 0,
        speed: 700,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      }
    };
  },
  mounted() {
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.swiper-inner {
  width: 100vw;
  height: 20vh;
  margin-top:10px;
  margin-bottom: 10px;
}
.swiper-container{
  height: 20vh;
}
.swiper-slide {
  background-position: center;
  background-size: fill;
}
.img {
  border-radius: 2.7vw;
  overflow: auto;
  margin-left: 5vw;
  margin-right:5vw;
  width:auto;
  height: 20vh;
}
</style>
