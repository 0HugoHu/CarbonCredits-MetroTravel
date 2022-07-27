<template>
  <div class="game-popup-container">
    <div class="game-popup-container__title">
      <span>{{ title }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { Icon } from "vant";

export default {
  components: {
    [Icon.name]: Icon
  },
  props: ["title"]
};
</script>

<style lang="scss">
.game-popup-container {
  min-height: 40vh;
  max-height: 70vh;
  width: 90vw;
  border-radius: 16px;
  background: white;

  &:after {
    content: "";
    clear: both;
    display: table;
  }
}

.game-popup-container__title {
  border-bottom: 1px solid #ddd;
  padding: 16px 0 6px 0;
  font-size: 24px;
}

.game-popup-tabs {
  float: left;
  border-right: 1px solid #ccc;
  width: 30%;
  height: 100%;
  overflow-y: scroll;
  max-height: 50vh;

  button {
    display: block;
    background-color: inherit;
    color: black;
    padding: 22px 16px;
    width: 100%;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;
    transition: 0.3s;
  }
  button.active {
    background-color: #f1f1f1;
  }
}
</style>
