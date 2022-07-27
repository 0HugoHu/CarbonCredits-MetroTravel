import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/filters";

import VueAMap from "vue-amap";
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "782705e94b9e9d471b3448bc4d29b4f8",
  plugin: ["AMap.Scale", "AMap.Geolocation", "Geocoder", "AMap.LineSearch"],
  v: "1.4.15",
  uiVersion: "1.0.11"
});

import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
Vue.use(MuseUI);

import { Toast } from "vant";
Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
