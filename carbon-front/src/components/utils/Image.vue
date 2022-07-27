<template>
  <van-image :width="width" :height="height" :fit="fit" :src="src" />
</template>

<script>
import { Image } from "vant";

export default {
  components: {
    [Image.name]: Image
  },
  name: "Imagev",
  props: {
    src: String,
    width: String,
    height: String,
    fit: String
  }
};
</script>
