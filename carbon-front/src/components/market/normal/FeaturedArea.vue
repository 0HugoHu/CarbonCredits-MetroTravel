<template>
  <div>
    <div style="position:absolute;top:6vh;left:5vw;">
      <Imagev
        class="homepage-card"
        fit="fill"
        src="https://s2.ax1x.com/2020/02/23/3lHSBR.th.png"
        width="35vw"
        height="25vh"
      ></Imagev>
    </div>
    <div class="homepage-card" style="position:absolute;top:6vh;left:45vw">
      <Imagev
        class="homepage-card"
        fit="fill"
        src="https://s2.ax1x.com/2020/02/23/3lW58A.th.png"
        width="50vw"
        height="11.5vh"
      ></Imagev>
    </div>
    <div class="homepage-card" style="position:absolute;top:19.5vh;left:45vw">
      <Imagev
        class="homepage-card"
        fit="fill"
        src="https://s2.ax1x.com/2020/02/23/3lWIgI.th.png"
        width="50vw"
        height="11.5vh"
      ></Imagev>
    </div>

    <div
      class="homepage-fupin-title"
      style="position:absolute;top:7vh;left:8vw;"
    >
      {{ items[0].text[0] }}
    </div>
    <div
      class="homepage-fupin-subtitle"
      style="position:absolute;top:9.5vh;left:8vw;"
    >
      {{ items[0].text[1] }}
    </div>
    <div
      class="homepage-fupin-mark"
      style="position:absolute;top:12.5vh;left:8vw;"
    >
      GO>
    </div>
    <div
      class="homepage-fupin-title"
      style="position:absolute;top:7vh;left:48vw;"
    >
      {{ items[1].text[0] }}
    </div>
    <div
      class="homepage-fupin-subtitle"
      style="position:absolute;top:9.5vh;left:48vw;"
    >
      {{ items[1].text[1] }}
    </div>
    <div
      class="homepage-fupin-mark"
      style="position:absolute;top:12.5vh;left:48vw;"
    >
      GO>
    </div>
    <div
      class="homepage-fupin-title"
      style="position:absolute;top:20.5vh;left:48vw;"
    >
      {{ items[2].text[0] }}
    </div>
    <div
      class="homepage-fupin-subtitle"
      style="position:absolute;top:23vh;left:48vw;"
    >
      {{ items[2].text[1] }}
    </div>
    <div
      class="homepage-fupin-mark"
      style="position:absolute;top:26vh;left:48vw;"
    >
      GO>
    </div>

    <Imagev
      :src="items[0].imageUrl"
      width="32vw"
      height="32vw"
      class="homepage-img"
      style="position:absolute;left:10vw;top:16vh"
    ></Imagev>
    <Imagev
      :src="items[1].imageUrl"
      width="32vw"
      height="25vw"
      class="homepage-img"
      style="position:absolute;left:66vw;top:8vh"
    ></Imagev>
    <Imagev
      :src="items[2].imageUrl"
      width="25vw"
      height="25vw"
      class="homepage-img"
      style="position:absolute;left:72vw;top:21vh"
    ></Imagev>
  </div>
</template>

<script>
import Imagev from "@/components/utils/Image";

export default {
  components: {
    Imagev
  },
  props: {
    items: Array
  }
};
</script>
