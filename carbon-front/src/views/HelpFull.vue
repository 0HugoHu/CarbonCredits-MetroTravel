<template>
  <div style="width:100vw;height:auto;">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button @click="back" icon slot="left">
        <Imagev src="https://s2.ax1x.com/2020/02/07/1cv9r4.th.png"></Imagev>
      </mu-button>
      碳积分完全攻略
      <mu-button icon slot="right">
        <Imagev src="https://s2.ax1x.com/2020/02/04/1Dp6X9.th.png"></Imagev>
      </mu-button>
    </mu-appbar>
  </div>
</template>

<script>
import Imagev from "../components/utils/Image";

export default {
  components: {
    Imagev
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style></style>
