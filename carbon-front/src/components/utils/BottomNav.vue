<template>
  <div
    style="position:fixed;bottom:0;width:100vw;height:auto;background:#FFFFFF;margin:0;padding:0;"
  >
    <van-tabbar route active-color="#009688" inactive-color="#7d7e80">
      <van-tabbar-item
        v-for="item in items"
        :key="item.href"
        replace
        :to="item.href"
      >
        <span>{{ item.text }}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? item.icons.active : item.icons.inactive"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      active: 0,
      items: [
        {
          text: "主页",
          href: "/",
          icons: {
            active: "https://s2.ax1x.com/2020/01/16/ljJR6U.th.png",
            inactive: "https://s2.ax1x.com/2020/01/16/ljJWXF.th.png"
          }
        },
        {
          text: "积分",
          href: "/credit",
          icons: {
            active: "https://s2.ax1x.com/2020/01/16/ljJ40J.th.png",
            inactive: "https://s2.ax1x.com/2020/01/16/ljJ579.th.png"
          }
        },
        {
          text: "我的",
          href: "/me",
          icons: {
            active: "https://s2.ax1x.com/2020/01/16/ljJokR.th.png",
            inactive: "https://s2.ax1x.com/2020/01/16/ljJ2lT.th.png"
          }
        }
      ]
    };
  }
};
</script>
