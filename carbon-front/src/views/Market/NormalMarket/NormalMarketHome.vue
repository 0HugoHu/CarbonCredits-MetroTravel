<template>
  <div class="market-base" style="width:100vw;height:100vh;background:#f6f6f6">
    <div class="market-title-bar">
      <Imager
        width="6vw"
        height="6vw"
        src="https://s2.ax1x.com/2020/02/22/3MVLTK.th.png"
        style="position:absolute;left:5vw;top:1.7vh;opacity:0.5;"
      >
      </Imager>
      <div style="position:fixed;top:1.7vh;width:100vw;">
        {{ title }}
      </div>
      <mu-button
        :ripple="false"
        flat
        style="filter:alpha(opacity=100); opacity:100;position:fixed;left:0;top:0;height:6vh;width:20vw;"
        @click="back"
      ></mu-button>
    </div>

    <router-view style="padding-top: 6vh; padding-bottom: 50px;" />

    <div v-if="showNav" class="market-bottom-nav">
      <mu-button
        flat
        :ripple="true"
        to="/normal_market/home"
        class="market-bottom-nav__button"
      >
        首页
      </mu-button>
      <mu-button
        flat
        :ripple="true"
        to="/normal_market/category"
        class="market-bottom-nav__button"
      >
        分类
      </mu-button>
      <mu-button
        flat
        :ripple="true"
        to="/normal_market/cart"
        class="market-bottom-nav__button"
      >
        购物车
      </mu-button>
      <mu-button
        flat
        :ripple="true"
        to="/normal_market/orders"
        class="market-bottom-nav__button"
      >
        订单
      </mu-button>
    </div>
  </div>
</template>

<script>
import Imager from "../../../components/utils/ImageRound";
import router from '../../../router/index'
export default {
  components: {
    Imager
  },
  data() {
    return {};
  },
  computed: {
    title() {
      let title = "";
      this.$route.matched.forEach(record => {
        if (record.meta.title) {
          title = record.meta.title;
        }
      });
      return title;
    },
    showNav() {
      let showNav = true;
      this.$route.matched.forEach(record => {
        if (record.meta.hideNav) {
          showNav = false;
        }
      });
      return showNav;
    }
  },
  methods:{
    back(){
      if (this.$route.path=="/normal_market/home"||this.$route.path=="/normal_market/category"||this.$route.path=="/normal_market/cart"||this.$route.path=="/normal_market/orders"){
        this.$router.push('/credit');
      }else{
        this.$router.go(-1);
      }
      console.log(this.$route.path)
    }
  }
};
</script>

<style lang="scss">
.market-title-bar {
  z-index: 100;
  top: 0;
  position: fixed;
  width: 100%;
  color: #202020;
  background: #fff;
  height: 6vh;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  color: #202020;
  border-bottom: 1px solid #f6f6f6;
}
.market-bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 50px;
  background: #ffffff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  display: flex;
}
.market-bottom-nav__button {
  border-top: 1px solid #f6f6f6;
  color: #7d7e80;
  min-width: initial;
  flex-grow: 1;
  padding: 1em 0;
  height: 100%;
  &:not(:last-child) {
    border-right: 1px solid #f6f6f6;
  }
}
.market-bottom-nav__button.router-link-active {
  color: #ff7611;
}
</style>
