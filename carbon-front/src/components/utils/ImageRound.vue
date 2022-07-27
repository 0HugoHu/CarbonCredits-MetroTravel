<template>
  <van-image round :width="width" :height="height" :fit="fit" :src="src" />
</template>

<script>
import { Image } from "vant";

export default {
  components: {
    [Image.name]: Image
  },
  name: "Imager",
  props: {
    src: String,
    width: String,
    height: String,
    fit: String
  }
};
</script>

<style lang="scss" scoped></style>
