<template>
  <div style="background:#FFFFFF;height:12vh;width:auto;">
    <mu-grid-list
      class="gridlist-demo"
      :cols="4"
      style="margin-left:3.7vw; margin-top:0vh; margin-right:3.7vw;"
      :padding="0"
    >
      <mu-grid-tile>
        <mu-button
          icon
          replace
          to="/metro_building"
          color="#D2EDF700"
          class="grid-button"
        >
          <Imagev
            class="img"
            src="https://s2.ax1x.com/2020/01/29/1QrC1x.th.png"
          ></Imagev>
        </mu-button>
        <div style="background-color:#FAFAFA" class="button-text">造铁路</div>
      </mu-grid-tile>

      <mu-grid-tile>
        <mu-button
          icon
          replace
          to="/topic"
          color="#D2EDF700"
          class="grid-button"
        >
          <Imagev
            class="img"
            src="https://s2.ax1x.com/2020/01/29/1QrPc6.th.png"
          ></Imagev>
        </mu-button>
        <div class="button-text">话题墙</div>
      </mu-grid-tile>

      <mu-grid-tile>
        <mu-button icon replace to="/Me" color="#D2EDF700" class="grid-button">
          <Imagev
            class="img"
            src="https://s1.ax1x.com/2020/03/26/8z76FU.th.png"
          ></Imagev>
        </mu-button>
        <div class="button-text">植作物</div>
      </mu-grid-tile>

      <mu-grid-tile>
        <mu-button icon replace to="/Me" color="#D2EDF700" class="grid-button">
          <Imagev
            class="img"
            src="https://s2.ax1x.com/2020/01/29/1QrknO.th.png"
          ></Imagev>
        </mu-button>
        <div style="margin-left:0.7vw;" class="button-text">碳积分</div>
      </mu-grid-tile>
    </mu-grid-list>
  </div>
</template>

<script>
import { Grid, GridItem } from "vant";
import Imagev from "../utils/Image";

export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    Imagev
  },
  name: "Grid"
};
</script>

<style lang="scss" scoped>
.grid-button {
  width: 20vw;
  height: 20vw;
  margin-top: -0.5vh;
}
.button-text {
  color: #202020;
  font-size: 1.7vh;
  font-weight: 400;
  margin-top: -3.5vw;
}

.img {
  box-shadow: 0 0 0 #88888844;
}
</style>
