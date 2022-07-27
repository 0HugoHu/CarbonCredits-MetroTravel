<template>
  <div class="credit-card1" style="">
    <Imagev
      :src="card.backgroundUrl"
      style="width:100%;overflow:hidden;height:26.7vw;border-radius:2.7vw 2.7vw 0 0;"
    ></Imagev>
    <font class="credit-title">{{ card.title }}</font>
    <font class="credit-subtitle">{{ card.subtitle }}</font>
    <Imagev
      :src="card.contents[0].imageUrl"
      width="21.3vw"
      height="21.3vw"
      class="credit-obj1-bg"
    ></Imagev>
    <Imagev
      :src="card.contents[1].imageUrl"
      width="21.3vw"
      height="21.3vw"
      class="credit-obj2-bg"
    ></Imagev>
    <Imagev
      :src="card.contents[2].imageUrl"
      width="21.3vw"
      height="21.3vw"
      class="credit-obj3-bg"
    ></Imagev>
    <font class="credit-obj1-description">{{ card.contents[0].title }}</font>
    <font class="credit-obj2-description">{{ card.contents[1].title }}</font>
    <font class="credit-obj3-description">{{ card.contents[2].title }}</font>
    <font class="credit-obj1-price">{{ card.contents[0].price }}</font>
    <font class="credit-obj2-price">{{ card.contents[1].price }}</font>
    <font class="credit-obj3-price">{{ card.contents[2].price }}</font>
    <font class="credit-more">更多></font>
    <mu-button
      flat
      round
      style="position:absolute;top:0;left:0;width:100%;height:100%;filter:alpha(opacity=100); opacity:100;border-radius:2.7vw"
      :to="card.href"
      color="#9E9E9E"
  ></mu-button>
  </div>
</template>

<script>
import Imagev from "../utils/Image";
export default {
  components: {
    Imagev
  },
  props: {
    card: Object
  }
};
</script>

<style lang="scss">
.credit-card1 {
  box-shadow: 0 0 1.9vw #88888844;
  background: #ffffff;
  margin-left: 5vw;
  position: relative;
  width: 90vw;
  height: 56vw;
  border-radius: 2.7vw;
}

.credit-title {
  position: absolute;
  top: 2.7vw;
  left: 4.4vw;
  color: #ffffffee;
  font-size: 4.8vw;
  font-weight: 400;
  letter-spacing: 0.53vw;
}

.credit-subtitle {
  position: absolute;
  top: 12vw;
  left: 4.4vw;
  color: #ffffffbb;
  font-size: 3.2vw;
  font-weight: 400;
  letter-spacing: 0.27vw;
}

.credit-obj1-bg {
  position: absolute;
  top: 20vw;
  left: 4.4vw;
  border-radius: 1.3vw;
  overflow: hidden;
}

.credit-obj2-bg {
  position: absolute;
  top: 20vw;
  left: 34.4vw;
  border-radius: 1.3vw;
  overflow: hidden;
}

.credit-obj3-bg {
  position: absolute;
  top: 20vw;
  left: 64.4vw;
  border-radius: 1.3vw;
  overflow: hidden;
}

.credit-obj1-description {
  color: #646464;
  top: 42.7vw;
  left: 4.4vw;
  margin-left: 0.53vw;
  font-size: 4vw;
  position: absolute;
}

.credit-obj2-description {
  color: #646464;
  top: 42.7vw;
  left: 34.4vw;
  margin-left: 0.53vw;
  font-size: 4vw;
  position: absolute;
}

.credit-obj3-description {
  color: #646464;
  top: 42.7vw;
  left: 64.4vw;
  margin-left: 0.53vw;
  font-size: 4vw;
  position: absolute;
}

.credit-obj1-price {
  color: #f46a36;
  top: 48vw;
  left: 4.4vw;
  margin-left: 0.53vw;
  font-size: 3.7vw;
  position: absolute;
}

.credit-obj2-price {
  color: #f46a36;
  top: 48vw;
  left: 34.4vw;
  margin-left: 0.53vw;
  font-size: 3.7vw;
  position: absolute;
}

.credit-obj3-price {
  color: #f46a36;
  top: 48vw;
  left: 64.4vw;
  margin-left: 0.53vw;
  font-size: 3.7vw;
  position: absolute;
}

.credit-more {
  position: absolute;
  top: 3.5vw;
  right: 4.4vw;
  background: #ffffffee;
  padding: 0.27vw 1.6vw 0.27vw 1.6vw;
  border-radius: 2.7vw;
  font-weight: 500;
  color: #646464;
}
</style>
