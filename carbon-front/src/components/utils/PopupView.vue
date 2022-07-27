<template>
  <div style="position:relative;width:80vw;height:50vh;">
    <div style="position:absolute;width:80vw;height:9.9vw;">
      <Imagev
        width="80vw"
        height="15vh"
        style="position:absolute;left:0;top:0;"
        src="https://s2.ax1x.com/2020/02/06/1yjZjJ.png"
      ></Imagev>
      <div
        style="width:80vw;height:15vh;position:absolute;left:0;top:0;background:#00000033"
      ></div>

      <div class="popup-title">{{ title }}</div>
      <div class="popup-subtitle">{{ subtitle }}</div>
      <div class="popup-text">{{ text }}</div>
      <mu-button
        flat
        round
        style="position:absolute;top:10vh;left:0;width:80vw;height:10vw;filter:alpha(opacity=100); opacity:100;border-radius:2.7vw"
        :to="link"
        color="#00000000"
      ></mu-button>
      <mu-button
        @click="close"
        color="#009688"
        style="border-radius:2.7vw;width:25vw;height:10vw;left:27.5vw;position:absolute;margin-top:43vh;"
        >{{ button_text }}</mu-button
      >
      <Imagev
        class="popup-img1"
        width="12vw"
        height="12vw"
        :src="img1"
      ></Imagev>
      <Imagev
        class="popup-img2"
        width="12vw"
        height="12vw"
        :src="img2"
      ></Imagev>
      <Imagev
        class="popup-img3"
        width="12vw"
        height="12vw"
        :src="img3"
      ></Imagev>

      <div class="popup-des1">{{ des1 }}</div>
      <div class="popup-des2">{{ des2 }}</div>
      <div class="popup-des3">{{ des3 }}</div>
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
    img2: String,
    img3: String,
    des1: String,
    des2: String,
    des3: String,
    button_text: String
  },
  components: {
    Imagev
  },
  methods: {
    close() {
      this.$emit("closePopup", false);
    }
  }
};
</script>

<style>
.popup-title {
  font-size: 2.5vh;
  width: 80vw;
  color: #ffffffff;
  font-family: Tahoma, Arial, "Hiragino Sans GB", "simsun", sans-serif;
  font-weight: 700;
  position: absolute;
  top: 4.5vh;
}

.popup-subtitle {
  font-size: 3vw;
  width: 80vw;
  color: #ffffffcc;
  font-family: Tahoma, Arial, "Hiragino Sans GB", "simsun", sans-serif;
  position: absolute;
  letter-spacing: 0.27vw;
  text-decoration: underline;
  top: 10vh;
}

.popup-text {
  font-size: 4vw;
  margin: 4.7vw;
  width: auto;
  text-align: justify;
  text-align-last: left;
  color: #444444;
  top: 15vh;
  position: absolute;
}

.popup-img1 {
  position: absolute;
  margin: 4.7vw;
  top: 15vh;
  left: 5vw;
  border-radius: 2.7vw;
  overflow: hidden;
}
.popup-img2 {
  position: absolute;
  margin: 4.7vw;
  top: 23vh;
  left: 5vw;
  border-radius: 2.7vw;
  overflow: hidden;
}
.popup-img3 {
  position: absolute;
  margin: 4.7vw;
  top: 31vh;
  left: 5vw;
  border-radius: 2.7vw;
  overflow: hidden;
}

.popup-des1 {
  color: #444444;
  position: absolute;
  margin: 4.7vw;
  margin-right: 10vw;
  top: 15.3vh;
  left: 29vw;
  font-size: 4vw;
  text-indent: -1.7em;
  text-align: justify;
  text-align-last: left;
}

.popup-des2 {
  color: #444444;
  position: absolute;
  margin: 4.7vw;
  margin-right: 10vw;
  top: 23.3vh;
  left: 29vw;
  font-size: 4vw;
  text-indent: -1.7em;
  text-align: justify;
  text-align-last: left;
}

.popup-des3 {
  color: #444444;
  position: absolute;
  margin: 4.7vw;
  margin-right: 10vw;
  top: 31.3vh;
  left: 29vw;
  font-size: 4vw;
  text-indent: -1.7em;
  text-align: justify;
  text-align-last: left;
}
</style>
