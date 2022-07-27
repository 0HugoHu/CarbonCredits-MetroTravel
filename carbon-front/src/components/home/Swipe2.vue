<template>
  <mu-carousel style="width:100vw;height:20vh">
    <mu-carousel-item>
      <Imagev :src="carouselImg1"></Imagev>
    </mu-carousel-item>
    <mu-carousel-item>
      <Imagev :src="carouselImg2"></Imagev>
    </mu-carousel-item>
    <mu-carousel-item>
      <Imagev :src="carouselImg3"></Imagev>
    </mu-carousel-item>
    <mu-carousel-item>
      <Imagev :src="carouselImg4"></Imagev>
    </mu-carousel-item>
    <mu-carousel-item>
      <Imagev :src="carouselImg5"></Imagev>
    </mu-carousel-item>
  </mu-carousel>
</template>

<script>
import Imagev from "../utils/Image";

export default {
  data() {
    return {
      carouselImg1: "https://s2.ax1x.com/2020/01/29/1QQYb8.png",
      carouselImg2: "https://s2.ax1x.com/2020/01/29/1QQJDf.jpg",
      carouselImg3: "https://s2.ax1x.com/2020/01/29/1QQGKP.jpg",
      carouselImg4: "https://s2.ax1x.com/2020/01/29/1QQ1gI.jpg",
      carouselImg5: "https://s2.ax1x.com/2020/01/29/1QQNVS.jpg"
    };
  },
  components: {
    Imagev
  }
};
</script>

<style></style>
