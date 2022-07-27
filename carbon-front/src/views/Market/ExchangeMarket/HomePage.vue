<template>
  <div style="background:#fff;width:100vw;">
    <div class="recommand-wrap">
      <div
        style="text-align:left;margin-left:5vw;margin-top:2vw;font-size:4.5vw;font-weight:bold;color:#202020"
      >
        兑换排行榜
      </div>
      <div ref="wrapper" style="width:auto">
        <ul class="cont" ref="cont">
          <!-- 只加了这一个点击绑定-->
          <CommodityCard
            v-for="(item, i) in hotItems"
            @click.native="gotoItem(item._id)"
            class="homepage-comcard"
            :item="item"
            :index="i"
            :key="item._id"
          >
          </CommodityCard>
        </ul>
      </div>
    </div>

    <div
      v-for="section in sections"
      :key="section.title"
      style="height:140vw;margin-bottom:5vw;width:100vw;background:#fff;position:relative"
    >
      <div style="height:1.5vw;background:#f6f6f6;width:100vw" />
      <div
        style="text-align:left;margin-left:5vw;margin-top:2vw;font-size:4.5vw;font-weight:bold;color:#202020"
      >
        {{ section.title }}
      </div>
      <div style="position:relative;width:100vw;">
        <CommodityCard2
          v-for="item in latestItems"
          class="homepage-comcard"
          :item="item"
          :key="item._id"
        ></CommodityCard2>
      </div>
      <div style="height:1.5vw;background:#f6f6f6;width:100vw" />
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
import CommodityCard from "@/components/market/exchange/CommodityCard";
import CommodityCard2 from "@/components/market/exchange/CommodityCard2";
import { loadHomePage } from "@/api/normal_shop"; // TODO: 变为exchange_shop

export default {
  components: {
    CommodityCard,
    CommodityCard2
  },
  name: "HomePage",
  mounted() {
    this.load();
    // this.$nextTick(() => {
    //   let timer = setTimeout(() => {
    //     if (timer) {
    //       clearTimeout(timer);
    //       this.verScroll();
    //     }
    //   }, 0);
    // });
  },
  data() {
    return {
      sections: [
        {
          title: "游戏道具"
        },
        {
          title: "视频会员"
        },
        {
          title: "话费充值"
        }
      ],
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
    },
    // verScroll() {
    //   let width = this.recommendList.length * 110;
    //   this.$refs.cont.style.width = width + "px";
    //   this.$nextTick(() => {
    //     if (!this.scroll) {
    //       this.scroll = new BScroll(this.$refs.wrapper, {
    //         startX: 0,
    //         click: true,
    //         scrollX: true,
    //         scrollY: false,
    //         eventPassthrough: "vertical"
    //       });
    //     } else {
    //       this.scroll.refresh();
    //     }
    //   });
    // },
    gotoItem(id) {
      this.$router.push(`/exchange_market/item_detail/${id}`);
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
  margin-top: 5vw;
  margin-left: 5vw;
  position: relative;
  display: inline-block;
  margin: 2.5vw;
}

.recommand-wrap {
  background: #fff;
}
.cont {
  list-style: none;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  margin-left: 2vw;
}
</style>
