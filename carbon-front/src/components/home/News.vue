<template>
  <div>
    <div style="position:relative;margin-top:4vw;height:6.8vw">
      <div
        style="position:absolute;margin-top:1.1vw;width:1.3vw;height:6vw;background-color:#009688"
      ></div>
      <font class="font"> 热点资讯</font>
    </div>
    <div v-for="item in news" :key="item.id" align="left">
      <CardView :item="item"></CardView>
    </div>
  </div>
</template>

<script>
import CardView from "../home/CardView";

export default {
  components: {
    CardView
  },
  props: {
    news: Array
  }
};
</script>
