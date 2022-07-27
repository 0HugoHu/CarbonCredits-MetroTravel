import Vue from "vue";

Vue.filter("priceDisplay", function(val) {
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
});
