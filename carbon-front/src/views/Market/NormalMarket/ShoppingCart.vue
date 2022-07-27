<template>
  <div>
    <div class="cart-page" style="padding-bottom:50px;">
      <van-swipe-cell
        v-for="entry in entries"
        :key="entry.item._id"
        class="cart-card-cell"
      >
        <div class="cart-card">
          <van-checkbox
            class="cart-card__checkbox"
            v-model="checked[entry.item._id]"
          ></van-checkbox>
          <van-card
            class="cart-card__card"
            :num="entry.count"
            :title="entry.item.title"
            :thumb="entry.item.titleImage"
          >
            <div slot="price" class="cart-card__price">
              {{ entry.item.price | priceDisplay }}
            </div>
          </van-card>
        </div>
        <van-button
          slot="right"
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="
            $store.dispatch('normal_market/cartRemoveItem', entry.item._id)
          "
        />
      </van-swipe-cell>
    </div>

    <van-submit-bar
      style="bottom: 50px; text-align: start;"
      :price="selectedPrice.money * 100"
      :tip="submitTip"
      tip-icon="info-o"
      button-text="提交订单"
      @submit="submit"
    />
  </div>
</template>

<script>
import { Card, Button, SwipeCell, Checkbox, SubmitBar } from "vant";
import { mapState } from "vuex";

export default {
  data() {
    return {
      checked: {}
    };
  },
  components: {
    [Card.name]: Card,
    [Button.name]: Button,
    [SwipeCell.name]: SwipeCell,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar
  },
  computed: {
    selectedPrice() {
      let money = 0;
      let credit = 0;

      for (let entry of this.entries) {
        if (this.checked[entry.item._id] === true) {
          money += (entry.item.price.money || 0) * entry.count;
          credit += (entry.item.price.credit || 0) * entry.count;
        }
      }

      return {
        money,
        credit
      };
    },
    submitTip() {
      if (this.selectedPrice.credit > 0) {
        return `还需支付 ${this.selectedPrice.credit} 碳积分`;
      } else {
        return "";
      }
    },
    ...mapState({
      entries: state => state.normal_market.cart
    })
  },
  methods: {
    submit() {}
  }
};
</script>

<style>
.cart-page {
  text-align: start;
}
.cart-card-cell {
  margin: 1em 0;
}
.cart-card {
  width: 100%;
  margin: 0;
  display: flex;
  background-color: white;
}
.cart-card__card {
  background-color: white;
}
.cart-card__price {
  font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;
  font-weight: 500;
  font-size: 16px;
}
.cart-card__checkbox {
  padding: 0 0.5rem;
}
.delete-button {
  height: 100%;
}
</style>
