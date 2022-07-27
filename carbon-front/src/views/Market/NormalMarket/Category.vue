<template>
  <div>
    <!-- 从这里开始是左侧tab-->
    <div
      style="width:25vw;height:90vh;float:left;background:#f6f6f6;position:fixed;"
    >
      <div class="selector-tab" @click="select_tab(1)" id="ctab1" flat>
        热销商品
      </div>
      <div class="selector-tab" @click="select_tab(2)" id="ctab2" flat>
        扶贫专项
      </div>
      <div class="selector-tab" @click="select_tab(3)" id="ctab3" flat>
        蔬果
      </div>
      <div class="selector-tab" @click="select_tab(4)" id="ctab4" flat>
        零食
      </div>
      <div class="selector-tab" @click="select_tab(5)" id="ctab5" flat>
        纪念品
      </div>
      <div class="selector-tab" @click="select_tab(6)" id="ctab6" flat>
        特产
      </div>
    </div>
    <div
      v-if="click_num == 1"
      style="position:fixed;height:3vh;width:1.2vw;left:0;top:8.5vh;background:#FF7611"
    ></div>
    <div
      v-if="click_num == 2"
      style="position:fixed;height:3vh;width:1.2vw;left:0;top:16.5vh;background:#FF7611"
    ></div>
    <div
      v-if="click_num == 3"
      style="position:fixed;height:3vh;width:1.2vw;left:0;top:24.5vh;background:#FF7611"
    ></div>
    <div
      v-if="click_num == 4"
      style="position:fixed;height:3vh;width:1.2vw;left:0;top:32.5vh;background:#FF7611"
    ></div>
    <div
      v-if="click_num == 5"
      style="position:fixed;height:3vh;width:1.2vw;left:0;top:40.5vh;background:#FF7611"
    ></div>
    <div
      v-if="click_num == 6"
      style="position:fixed;height:3vh;width:1.2vw;left:0;top:48.5vh;background:#FF7611"
    ></div>

    <!-- 从这里开始是点击左侧不同tab，右侧显示的内容-->
    <div
      style="background:#fff;left:25vw;width:75vw;position:absolute;float:left;height:90vh"
    >
      <van-grid :column-num="2" :gutter="0">
        <van-grid-item v-for="item in items" :key="item._id">
          <div style="position:relative">
            <ItemCard :item="item"></ItemCard>
            <mu-button
              flat
              style="float:left;filter:alpha(opacity=100); opacity:100;border-radius:2.7vw 2.7vw 0 0;width:30vw;height:47vw;position:absolute;left:0;top:0"
              @click="gotoItem(item._id)"
              color="#9E9E9E"
            ></mu-button>
          </div>
        </van-grid-item>
      </van-grid>
      <br /><br /><br />
    </div>
  </div>
</template>

<script>
import ItemCard from "@/components/market/normal/ItemCard";
import { Grid, GridItem } from "vant";

import { getItemsInCategory } from "@/api/normal_shop";

export default {
  data() {
    return {
      click_num: 1,
      color: "#737373",
      items: []
    };
  },
  name: "Selector",
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    ItemCard
  },
  mounted() {
    this.select_tab(1);
  },
  methods: {
    async select_tab(num) {
      this.click_num = num;
      this.items = await getItemsInCategory(num);
    },
    gotoItem(id) {
      this.$router.push(`/normal_market/item_detail/${id}`);
    }
  },
  watch: {
    click_num: {
      handler: function(val, oldval) {
        var oldid = "ctab" + oldval;
        var newid = "ctab" + val;
        var tabold = document.getElementById(oldid);
        var tabnew = document.getElementById(newid);
        tabold.style.color = "#737373";
        tabold.style.fontWeight = "400";
        tabold.style.backgroundColor = "#f6f6f6";
        tabnew.style.color = "#202020";
        tabnew.style.fontWeight = "bold";
        tabnew.style.backgroundColor = "#fff";
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.selector-tab {
  font-size: 4vw;
  height: 8vh;
  width: 25vw;
  letter-spacing: 0.2vw;
  text-align: center;
  line-height: 8vh;
}
</style>
