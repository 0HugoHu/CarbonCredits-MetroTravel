import { loadHomePage } from "@/api/normal_shop";

export default {
  state: {
    myTickets: [],
    homeSections: [],
    homeRank: []
  },
  mutations: {
    setMyTickets(state, myTickets) {
      state.myTickets = myTickets;
    },
    setHomeSections(state, homeSections) {
      state.homeSections = homeSections;
    },
    setHomeRank(state, homeRank) {
      state.homeSections = homeRank;
    }
  },
  actions: {
    async loadTickets({ commit }) {
      commit("setMyTickets", [
        {
          title: "扶贫商品专项",
          type: "0",
          ddl: "2020年5月31日",
          prize: "5",
          addition: "支付满30元可用",
          valid: true
        },
        {
          title: "一点点奶茶",
          type: "1",
          ddl: "2020年6月1日",
          prize: "3",
          addition: "支付满10元可用",
          valid: true
        },
        {
          title: "爱奇艺1个月黄金会员",
          type: "2",
          ddl: "2020年4月31日",
          prize: "1个月",
          addition: "none",
          valid: true
        },
        {
          title: "中国电信10元话费券",
          type: "3",
          ddl: "2020年4月15日",
          prize: "10",
          addition: "none",
          valid: true
        },
        {
          title: "造铁路：随机一座车站",
          type: "4",
          ddl: "2020年4月30日",
          prize: "10",
          addition: "仅本人使用",
          valid: true
        },
        {
          title: "线上商城通用",
          type: "0",
          ddl: "2020年2月25日",
          prize: "6",
          addition: "支付满60元可用",
          valid: false
        },
        {
          title: "优酷1年黄金会员",
          type: "2",
          ddl: "2020年1月31日",
          prize: "1年",
          addition: "none",
          valid: false
        }
      ]);
    },
    async loadHomePage({ commit }) {}
  },
  namespaced: true
};
