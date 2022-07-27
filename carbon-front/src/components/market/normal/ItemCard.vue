<template>
  <div
    style="width:30vw;height:47vw;background:#fff;position:relative;border-radius:2.7vw;overflow:hidden;"
  >
    <Imagev
      :src="item.titleImage"
      width="30vw"
      height="30vw"
      style="position:absolute;left:0;top:0;border-radius:2.7vw;overeflow:hidden"
    ></Imagev>
    <div
      class="itemcard-title"
      style="position:absolute;left:2vw;margin-right:2vw;top:31vw;"
    >
      {{ item.title }}
    </div>
    <div style="position:absolute;left:2vw;bottom:0vw;">
      <div class="itemcard-prize" style="float:left;">
        {{ (item.discount ? item.discount : item.price) | priceFilter }}
      </div>
    </div>
  </div>
</template>

<script>
import Imagev from "../../utils/Image";
export default {
  components: {
    Imagev
  },
  filters: {
    priceFilter(val) {
      let price = "";
      if (val.money) {
        price += `￥${val.money}`;
        if (val.credit) {
          price += "+";
        }
      }
      if (val.credit) {
        price += `☪${val.credit}`;
      }
      return price;
    }
  },
  name: "ItemCard",
  props: {
    item: Object
  }
};
</script>

<style>
.itemcard-title {
  font-size: 4vw;
  text-align: left;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #202020;
  line-height: 4.5vw;
  font-weight: bold;
  font-family: "Microsoft YaHei";
}

.itemcard-prize {
  font-size: 4vw;
  text-align: left;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #f44336;
  font-weight: bold;
}
</style>
