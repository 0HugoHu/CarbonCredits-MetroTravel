<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
    <div v-show="$route.meta.navShow" id="nav-shadow" />
    <bottom-nav v-show="$route.meta.navShow" />
  </div>
</template>

<script>
import BottomNav from "./components/utils/BottomNav";

export default {
  components: {
    BottomNav
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Microsoft YaHei","MicrosoftJhengHei",STHeiti,MingLiu,"Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav {
  padding: 8vw;

  a {
    font-weight: bold;
  }
}
#nav-shadow {
  position: fixed;
  bottom: 49px;
  width: 100vw;
  height: 0.54vw;
  background: #ffffff;
  box-shadow: rgb(170, 170, 170,0.568) 0 -0.27vw 1.9vw;
}

#bottom-shadow {
  position: fixed;
  top: 6vh;
  width: 100vw;
  height: 0.54vw;
  background: #ffffff;
  box-shadow: rgba(170, 170, 170, 0.568) 0 1vw 1vw;
}

#top-shadow {
  position: fixed;
  top: 6vh;
  width: 100vw;
  height: 0.54vw;
  background: #ffffff;
  box-shadow: rgba(170, 170, 170, 0.568) 0 1vw 1vw;
}
</style>
