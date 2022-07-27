<template>
  <van-grid
    :border="false"
    :gutter="0"
    :column-num="2"
    icon-size="0"
    :clickable="false"
    style="margin-top:1.3vw"
  >
    <van-grid-item>
      <font class="me-font">今日碳积分</font>
      <font class="font2" style="margin-top:1vw">{{ text1 }}</font>
    </van-grid-item>
    <van-grid-item>
      <font class="me-font">累计碳积分</font>
      <font class="font2" style="margin-top:1vw">{{ text2 }}</font>
    </van-grid-item>
    <van-grid-item style="margin-top:-4vw">
      <font class="me-font">减排CO2</font>
      <font class="font3" style="margin-top:1vw">{{ text3 }}</font>
    </van-grid-item>
    <van-grid-item style="margin-top:-4vw">
      <font class="me-font">累计排名</font>
      <font class="font4" style="margin-top:1vw">{{ text4 }}</font>
    </van-grid-item>
  </van-grid>
</template>

<script>
import { Grid, GridItem } from "vant";

export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  name: "Grid2",
  props: {
    text1: String,
    text2: String,
    text3: String,
    text4: String
  }
};
</script>

<style lang="scss" scoped>
.me-font {
  color: #858f9b;
  font-size: 4.3vw;
  font-weight: 400;
  text-align:center;
}

.font2 {
  color: #4e716f;
  font-size: 5.3vw;
  font-weight: bold;
  margin-top: 2.6vw;
}

.font3 {
  color: #4e716f;
  font-size: 5.3vw;
  font-weight: bold;
  margin-top: 2.6vw;
}

.font4 {
  color: #4e716f;
  font-size: 5.3vw;
  font-weight: bold;
  margin-top: 2.6vw;
}

.van-grid-item__content{
  padding:0;
}
</style>
