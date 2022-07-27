<template>
  <div v-if="item">
    <van-image
      width="100vw"
      height="100vw"
      fit="cover"
      :src="item.titleImage"
    />
    <div class="item-base-info item-detail-block ">
      <div class="item-base-info__price">
        <span>{{ item.price | priceDisplay }}</span>
      </div>
      <div class="item-base-info__title">
        {{ item.title }}
      </div>
    </div>
    <van-cell-group title="商品信息" class="item-detail-info item-detail-block">
      <van-cell title="提供商" :value="item.detail.brand" />
    </van-cell-group>
    <div class="item-detail-desc">
      {{ item.detail.description }}
    </div>
    <van-image width="100vw" :src="item.detail.detailImage" />
    <van-cell-group
      title="其他信息"
      class="item-detail-info item-detail-block item-detail-block-bottom"
    >
      <van-cell title="兑换内容" :value="item.detail.manufacturer" />
      <van-cell title="截止时间" :value="item.detail.contents"></van-cell>
      <van-cell title="注意事项" :value="item.detail.additional"></van-cell>
    </van-cell-group>
    <div class="item-bottom-bar">
      <van-goods-action>
        <van-goods-action-icon to="/exchange_market/kefu" icon="chat-o" text="客服" />
        <van-goods-action-icon
          icon=""
          text=""
        />
        <van-goods-action-icon
          icon=""
          text=""
        />
        <van-goods-action-icon
          icon=""
          text=""
        />
        <van-goods-action-button
          type="danger"
          text="立即兑换"
          @click="buyNow"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import {
  Image,
  Cell,
  Tag,
  Icon,
  Button,
  CellGroup,
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon
} from "vant";
import { getItemDetail } from "@/api/normal_shop";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Tag.name]: Tag,
    [Icon.name]: Icon,
    [Image.name]: Image,
    [Button.name]: Button,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionButton.name]: GoodsActionButton,
    [GoodsActionIcon.name]: GoodsActionIcon
  },
  data() {
    return {
      item: null
    };
  },
  mounted() {
    (async () => {
      this.item = await getItemDetail(parseInt(this.$route.params.id));
    })();
  },
  methods: {
    addToCart() {
      this.$store.dispatch("normal_market/cartAddItem", this.item);
      this.$toast.success("已加入购物车");
    },
    buyNow() {}
  }
};
</script>

<style lang="scss">
.item-base-info {
  padding: 10px 20px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.item-detail-block {
  margin: 5px 0;
}

.item-base-info__price {
  font-weight: bold;
  color: red;
  font-size: 1.5rem;
}

.item-base-info__title {
  font-size: 1.1rem;
  text-align: start;
}

.item-detail-info {
  text-align: start;
}

.item-bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: auto;
  background: #ffffff;
  margin: 0;
  padding: 5px 10px;
}

.item-detail-desc {
  padding: 0 20px;
}

.item-detail-block-bottom {
  padding-bottom: 10vh;
}

.item-bottom-bar__buttons {
  float: right;
  button {
    margin-left: 16px;
  }
}
</style>
