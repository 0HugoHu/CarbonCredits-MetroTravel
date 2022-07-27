<template>
  <van-notice-bar
    color="#009688"
    background="#B2DFDB"
    left-icon="info-o"
    mode="closeable"
  >
    {{ msg }}
  </van-notice-bar>
</template>

<script>
import { NoticeBar } from "vant";

export default {
  components: {
    [NoticeBar.name]: NoticeBar
  },
  name: "NoticeBar",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped></style>
