<template>
  <div style="position:relative;width:80vw;height:50vh;background:#fff">
    <div style="position:absolute;width:80vw;height:9.9vw;">
      <Imagev
        width="80vw"
        height="15vh"
        style="position:absolute;left:0;top:0;"
        src="https://s2.ax1x.com/2020/02/06/1yjZjJ.png"
      ></Imagev>
      <div
        style="width:80vw;height:15vh;position:absolute;left:0;top:0;background:#00000033;">
      </div>

      <div class="popup2-title">{{ title }}</div>
      <div class="popup2-subtitle">{{ subtitle }}</div>
      <div class="popup2-text">{{ text }}</div>
      <mu-button
        flat
        round
        style="position:absolute;top:10vh;left:0;width:80vw;height:10vw;filter:alpha(opacity=100); opacity:100;border-radius:2.7vw"
        :to="link"
        color="#00000000"
      ></mu-button>
      <mu-button
        @click.native="close"
        color="#009688"
        style="border-radius:2.7vw;width:25vw;height:10vw;left:27.5vw;position:absolute;margin-top:43vh;"
        >{{ button_text }}</mu-button
      >
      <Imagev
        class="popup2-img1"
        width="12vw"
        height="12vw"
        :src="img1"
      ></Imagev>
      <div class="popup2-des1">{{ des1 }}</div>
    </div>
  </div>
</template>

<script>
import Imagev from "../utils/Image";
export default {
  props: {
    title: String,
    text: String,
    subtitle: String,
    link: String,
    img1: String,
    des1: String,
    button_text: String,
    goto: String
  },
  components: {
    Imagev
  },
  methods: {
    close() {
      this.$emit("close", false);
    }
  }
};
</script>

<style>
.popup2-title {
  font-size: 3vh;
  width: 80vw;
  color: #ffffffff;
  font-family: Tahoma, Arial, "Hiragino Sans GB", "simsun", sans-serif;
  font-weight: 700;
  position: absolute;
  top: 4.5vh;
}

.popup2-subtitle {
  font-size: 3vw;
  width: 80vw;
  color: #ffffffcc;
  font-family: Tahoma, Arial, "Hiragino Sans GB", "simsun", sans-serif;
  position: absolute;
  letter-spacing: 0.27vw;
  text-decoration: underline;
  top: 10vh;
}

.popup2-text {
  font-size: 4vw;
  width: 100%;
  text-align: center;
  color: #444444;
  top: 32vh;
  position: absolute;
  padding:0 12vw 0 12vw;
}

.popup2-img1 {
  position: absolute;
  margin: 4.7vw;
  top: 18vh;
  left: 10vw;
  border-radius: 2.7vw;
  overflow: hidden;
}


.popup2-des1 {
  color: #202020;
  position: absolute;
  margin: 4.7vw;
  margin-right: 10vw;
  top: 18.5vh;
  left: 37vw;
  font-size: 6vw;
  text-indent: -1.7em;
  font-weight: bold;
  text-align: justify;
  text-align-last: left;
}


.popup2-negative {
  font-size: 3.5vw;
  width: 15vw;
  color: #0000008e;
  font-family: Tahoma, Arial, "Hiragino Sans GB", "simsun", sans-serif;
  position: absolute;
  letter-spacing: 0.27vw;
  text-decoration: underline;
  font-weight: 400;
  top: 45vh;
  left: 57vw;
}
</style>
