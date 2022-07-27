<template>
  <div style="position:relative">
    <CardView2
      style="position:absolute"
      :coin_num="BasicData.CoinTotal"
      :id="BasicData.Id"
      :expend="BasicData.Expend"
      :icon="BasicData.Icon"
      :name="BasicData.Name"
    ></CardView2>
    <div
      style="position:absolute;top:48vw;;width:100%;background-color:#FAFAFA;height:9.9vw;"
    >
      <div
        style="margin-top:1.6vw;width:1.3vw;height:6.1vw;background-color:#009688;"
      ></div>
      <font class="credit-font"> 积分商城</font>
    </div>
    <div style="position:absolute;top:57.4vw;margin-bottom: 64px;">
      <CardView3
        style="margin-bottom: 16px;"
        v-for="(card, i) in cards"
        :key="i"
        :card="card"
      ></CardView3>
    </div>
  </div>
</template>

<script>
import CardView2 from "../components/credit/CardView2";
import CardView3 from "../components/credit/CardView3";

import { loadRecommendedCards } from "@/api/normal_shop";

export default {
  components: {
    CardView2,
    CardView3
  },
  data() {
    return {
      BasicData: {
        Name: "未登录",
        Id: "SW-2020-9534-1376",
        Priority: "普通用户",
        CoinToday: "0",
        CoinTotal: "0.00",
        CarbonSave: "0.0kg",
        Ranking: "--.-%",
        Expend: "您还没有碳积分消费记录呢",
        Icon: "https://s2.ax1x.com/2020/01/26/1mgijO.th.png"
      },
      cards: []
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      this.cards = await loadRecommendedCards();
    }
  }
};
</script>

<style>
.credit-font {
  font-size: 4.5vw;
  color: #444444;
  font-family: Tahoma, Arial, "Hiragino Sans GB", "simsun", sans-serif;
  font-weight: bold;
  position: absolute;
  left: 5.3vw;
  top: 10%;
}
</style>
