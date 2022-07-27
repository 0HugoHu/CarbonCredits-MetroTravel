import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "主页",
    component: Home,
    meta: { navShow: true }
  },
  {
    path: "/me",
    name: "我的",
    component: () => import(/* webpackChunkName: "credit" */ "../views/Me.vue"),
    meta: { navShow: true }
  },
  {
    path: "/credit",
    name: "积分",
    component: () => import(/* webpackChunkName: "me" */ "../views/Credit.vue"),
    meta: { navShow: true }
  },
  {
    path: "/metro_building",
    name: "造地铁",
    component: () =>
      import(
        /* webpackChunkName: "metroBuilding" */ "../views/MetroBuilding.vue"
      ),
    meta: { navShow: false }
  },
  {
    path: "/help",
    name: "完整帮助",
    component: () =>
      import(/* webpackChunkName: "helpfull" */ "../views/HelpFull.vue"),
    meta: { navShow: false }
  },
  {
    path: "/passage/:id",
    name: "文章",
    component: () =>
      import(
        /* webpackChunkName: "passagereading" */ "../views/PassageReading.vue"
      ),
    meta: { navShow: false }
  },
  {
    path: "/topic",
    name: "话题墙",
    component: () =>
      import(
        /* webpackChunkName: "topic" */ "../views/TopicWall.vue"
      ),
    meta: { navShow: false }
  },
  {
    path: "/plant_market",
    name: "领养植物",
    component: () =>
      import(
        /* webpackChunkName: "plant_market" */ "../views/Market/PlantMarket/PlantMarketHome.vue"
      ),
    meta: { navShow: false }
  },
  {
    path: "/normal_market",
    name: "积分商城",
    redirect: "/normal_market/home",
    component: () =>
      import(
        /* webpackChunkName: "normal_market" */ "../views/Market/NormalMarket/NormalMarketHome.vue"
      ),
    children: [
      {
        path: "home",
        component: () =>
          import(
            /* webpackChunkName: "normal_market" */ "../views/Market/NormalMarket/HomePage.vue"
          ),
        meta: { title: "首页" }
      },
      {
        path: "category",
        component: () =>
          import(
            /* webpackChunkName: "normal_market_category" */ "../views/Market/NormalMarket/Category.vue"
          ),
        meta: { title: "商品分类" }
      },
      {
        path: "cart",
        component: () =>
          import(
            /* webpackChunkName: "normal_market_cart" */ "../views/Market/NormalMarket/ShoppingCart.vue"
          ),
        meta: { title: "购物车" }
      },
      {
        path: "orders",
        component: () =>
          import(
            /* webpackChunkName: "normal_market_orders" */ "../views/Market/NormalMarket/OrderList.vue"
          ),
        meta: { title: "订单" }
      },
      {
        path: "item_detail/:id",
        component: () =>
          import(
            /* webpackChunkName: "normal_market_item_detail" */ "../views/Market/NormalMarket/ItemDetail.vue"
          ),
        meta: { title: "商品详情", hideNav: true }
      },
      {
        path: "kefu",
        component: () =>
          import(
            /* webpackChunkName: "normal_market_item_detail_kefu" */ "../components/utils/KefuTemplate.vue"
          ),
        meta: { title: "客服", hideNav: true }
      },
    ],
    meta: { navShow: false }
  },
  {
    path: "/exchange_market",
    name: "兑换商城",
    redirect: "/exchange_market/home",
    component: () =>
      import(
        /* webpackChunkName: "exchange_market" */ "../views/Market/ExchangeMarket/ExchangeMarketHome.vue"
      ),
    children: [
      {
        path: "home",
        component: () =>
          import(
            /* webpackChunkName: "exchange_market" */ "../views/Market/ExchangeMarket/HomePage.vue"
          ),
        meta: { title: "首页" }
      },
      {
        path: "wallet",
        component: () =>
          import(
            /* webpackChunkName: "exchange_market_wallet" */ "../views/Market/ExchangeMarket/Wallet.vue"
          ),
        meta: { title: "我的卡包" }
      },
      {
        path: "item_detail/:id",
        component: () =>
          import(
            /* webpackChunkName: "exchange_market_item_detail" */ "../views/Market/ExchangeMarket/ItemDetail.vue"
          ),
        meta: { title: "商品详情", hideNav: true }
      },
      {
        path: "kefu",
        component: () =>
          import(
            /* webpackChunkName: "exchange_market_item_detail_kefu" */ "../components/utils/KefuTemplate.vue"
          ),
        meta: { title: "客服", hideNav: true }
      },
    ],
    meta: { navShow: false }
  },
  {
    path: "/feedback",
    name: "反馈",
    component: () =>
      import(
        /* webpackChunkName: "feedback" */ "../views/Feedback.vue"
      ),
    meta: { navShow: false }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
