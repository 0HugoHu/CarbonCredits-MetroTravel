<template>
  <div style="background:#fff;width:100vw;">
    <Swipe></Swipe>
    <div style="height:1.5vw;background:#f6f6f6;width:100vw" />
    <div
      v-if="featuredItems.length === 3"
      style="height:31vh;margin-bottom:5vw;width:100vw;background:#fff;position:relative"
    >
      <div
        style="float:left;margin-left:5vw;margin-top:2vw;font-size:4.5vw;font-weight:bold;color:#202020"
      >
        扶贫专区
      </div>
      <FeaturedArea :items="featuredItems" />
    </div>
    <div style="height:1.5vw;background:#f6f6f6;width:100vw" />
    <div
      style="height:140vw;margin-bottom:5vw;width:100vw;background:#fff;position:relative"
    >
      <div
        style="text-align:left;margin-left:5vw;margin-top:2vw;font-size:4.5vw;font-weight:bold;color:#202020"
      >
        热销商品
      </div>
      <div style="position:relative;width:100vw;">
        <CommodityCard
          v-for="item in hotItems"
          class="homepage-comcard"
          :item="item"
          :key="item._id"
        ></CommodityCard>
      </div>
    </div>

    <div style="height:1.5vw;background:#f6f6f6;width:100vw" />
    <div
      style="height:140vw;margin-bottom:5vw;width:100vw;background:#fff;position:relative"
    >
      <div
        style="text-align:left;margin-left:5vw;margin-top:2vw;font-size:4.5vw;font-weight:bold;color:#202020"
      >
        新鲜上架
      </div>
      <div style="position:relative;width:100vw;">
        <CommodityCard
          v-for="item in latestItems"
          class="homepage-comcard"
          :item="item"
          :key="item._id"
        ></CommodityCard>
      </div>
    </div>
    <div style="height:1.5vw;background:#f6f6f6;width:100vw" />
    <div style="height:15vw;background:#f6f6f6;width:100vw;line-height:15vw;">
      翻到底啦~
    </div>
    <div
      style="height:10vw;background:#f6f6f6;width:100vw;line-height:30vw;"
    ></div>
  </div>
</template>

<script>
import Swipe from "@/components/market/normal/Swipe";
import CommodityCard from "@/components/market/normal/CommodityCard";
import FeaturedArea from "@/components/market/normal/FeaturedArea";
import { loadHomePage } from "@/api/normal_shop";

export default {
  components: {
    Swipe,
    CommodityCard,
    FeaturedArea
  },
  name: "HomePage",
  mounted() {
    this.load();
  },
  data() {
    return {
      featuredItems: [],
      hotItems: [],
      latestItems: []
    };
  },
  methods: {
    async load() {
      const data = await loadHomePage();
      this.featuredItems = data.featuredItems;
      this.hotItems = data.hotItems;
      this.latestItems = data.latestItems;
    }
  }
};
</script>

<style>
.homepage-card {
  border-radius: 2.7vw;
  overflow: auto;
}
.homepage-fupin-title {
  font-weight: bold;
  color: #fff;
  font-size: 4vw;
  letter-spacing: 0.5vw;
}
.homepage-fupin-subtitle {
  color: #fff;
  font-size: 3.5vw;
  letter-spacing: 0.5vw;
}
.homepage-fupin-mark {
  border-radius: 2.7vw;
  background: rgba(0, 0, 0, 0.3);
  padding: 0vw 1vw 0 1vw;
  color: #fff;
  font-style: italic;
}
.homepage-img {
  border-radius: 2.7vw;
  overflow: auto;
}
.homepage-comcard {
  float: left;
  margin-top: 5vw;
  margin-left: 5vw;
}
</style>
