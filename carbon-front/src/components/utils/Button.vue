<template>
  <van-button
    :to="url"
    :color="color"
    style="border-radius:2.7vw;box-shadow: 0 0 1.9vw #88888866;"
    :type="type"
    >{{ text }}</van-button
  >
</template>

<script>
import { Button } from "vant";

export default {
  components: {
    [Button.name]: Button
  },
  name: "Button",
  props: {
    text: String,
    type: String,
    color: String,
    url: String
  }
};
</script>

<style lang="scss" scoped></style>
