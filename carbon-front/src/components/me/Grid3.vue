<template>
  <div style="position:relative;top:0;width:100%;height:13.3vw;">
    <mu-button  flat color="#7E57C2"
      style="border-radius:2.7vw;top:0;position:absolute;left:11vw;font-size:4.5vw">
      <Imagev style="margin-right:2vw" width="6.5vw" height="6.5vw" src="https://s1.ax1x.com/2020/03/26/8z7fyR.th.png"></Imagev>
      作物
    </mu-button>
    <mu-button to="/exchange_market/wallet" flat color="#ff7611"
      style="border-radius:2.7vw;top:0;position:absolute;right:11vw;font-size:4.5vw">
      <Imagev style="margin-right:1.5vw" width="7.5vw" height="7.5vw" src="https://s1.ax1x.com/2020/03/26/8zDv1e.th.png"></Imagev>
      卡包
    </mu-button>

  </div>
</template>

<script>
import Imagev from "../utils/Image";
export default {
  components: {
    Imagev,
  },
  name: "Grid3",
  props: {},
  methods:{
  }
};
</script>

<style lang="scss" scoped></style>
