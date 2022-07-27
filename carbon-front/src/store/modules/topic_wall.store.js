export default {
  state: {
    hotTopics: [],
    nearestTopic: null,
    currentTopic: null,
    topicPopup: false
  },
  mutations: {
    setHotTopics(state, topics) {
      state.hotTopics = topics;
    },
    setNearestTopic(state, topic) {
      state.nearestTopic = topic;
    },
    setTopicPopup(state, value) {
      state.topicPopup = value;
    },
    setCurrentTopic(state, topic) {
      state.currentTopic = topic;
    }
  },
  actions: {
    showTopicPopup({ commit }, topic) {
      commit("setCurrentTopic", topic);
      commit("setTopicPopup", true);
    },
    async loadAll({ commit }) {
      commit("setNearestTopic", {
        title: "武汉居民向中央领导喊“不作为” 志愿者回应说法",
        description1:
          "3月6日下午，记者来到位于武汉市青山区本溪街与建设二路交叉口处的中建·开元公馆小区。此时，该小区唯一开放的西南门外，二三十名警察、保安及未穿制服的工作人员正在值守，严密盘查出入小区的人员。",
        description2:
          "本溪街上一位快递小哥说，与之前几天相比，开元公馆门口的安保明显加强，就连他收寄快递，都被盘问。",
        description3:
          "社区多个大门口的公示显示，中建开元公馆小区由中建三局物业公司负责管理，属于武汉市青山区红卫路街道翠园社区居委会，其书记兼主任为赵勇红，主持社区全面工作，同时还是翠园社区的网格长。",
        //预留三个描述段落
        img_url: "https://s2.ax1x.com/2020/03/07/3jWZRI.md.jpg",
        hot_index: 1.7, //热度指数，单位万
        id: 0,
        position_x: 30.762, //话题点中心坐标维度，经度
        position_y: 103.865,
        comments: [
          {
            username: "超甜的布丁",
            date: "31分钟前",
            content:
              "要在用心用情、保障群众生活上聚焦发力，从有向优、品种单一向丰富多彩、保供给向保供稳价上转变，在满足市民个性化需求上加大力度。",
            likes: 12,
            icon: "https://s2.ax1x.com/2020/03/07/3j7yMd.jpg"
          },
          {
            username: "我是口贲子",
            date: "3小时前",
            content: "垃圾zf，明着说一套背后做一套",
            likes: 3,
            icon: "https://s2.ax1x.com/2020/03/07/3j76sA.jpg"
          },
          {
            username: "山羊没有胡子",
            date: "7小时前",
            content:
              "我家还有蔬菜，今天还买了几包备用。社区配送有是有，但价格和质量都有问题，价格普遍高，质量也不好我和不少邻居都是靠自己网上团购解决。",
            likes: 131,
            icon: "https://s2.ax1x.com/2020/03/07/3j7cqI.jpg"
          },
          {
            username: "隔壁家的Li叔叔",
            date: "8小时前",
            content:
              "我在武汉，我们社区这些天还好吧，物业和志愿者挺热心的，什么都送到门口",
            likes: 14,
            icon: "https://s2.ax1x.com/2020/03/07/3j7hi8.jpg"
          },
          {
            username: "小可爱萱",
            date: "8小时前",
            content:
              "我们志愿者从第二天封城就开始送，1800多户，我们就这点儿人，搞都搞不赢。我们今天还是精神振奋的，把所有事做好，这些事听不见，看不见。",
            likes: 75,
            icon: "https://s2.ax1x.com/2020/03/07/3j75Rg.jpg"
          }
        ],
        topComments: [
          {
            username: "山羊没有胡子",
            date: "7小时前",
            content:
              "我家还有蔬菜，今天还买了几包备用。社区配送有是有，但价格和质量都有问题，价格普遍高，质量也不好我和不少邻居都是靠自己网上团购解决。",
            likes: 131,
            icon: "https://s2.ax1x.com/2020/03/07/3j7cqI.jpg"
          },
          {
            username: "小可爱萱",
            date: "8小时前",
            content:
              "我们志愿者从第二天封城就开始送，1800多户，我们就这点儿人，搞都搞不赢。我们今天还是精神振奋的，把所有事做好，这些事听不见，看不见。",
            likes: 75,
            icon: "https://s2.ax1x.com/2020/03/07/3j75Rg.jpg"
          }
        ]
      });
      commit("setHotTopics", [
        {
          title: "我觉得是演的",
          hot_index: 66,
          id: 0,
          img_url: "",
          position_x: 30.624,
          position_y: 104.02
        },
        {
          title: "转发多条图片消息 这个exercise2也没地方交啊",
          hot_index: 47,
          id: 1,
          img_url: "",
          position_x: 30.755,
          position_y: 103.986
        },
        {
          title: "发班群里",
          hot_index: 42,
          id: 2,
          img_url: "",
          position_x: 30.882,
          position_y: 103.987
        },
        {
          title: "别提qq 爬 妈的，我号没了",
          hot_index: 35,
          id: 3,
          img_url: "",
          position_x: 30.747,
          position_y: 103.992
        },
        {
          title: "我给你的啊",
          hot_index: 29,
          id: 4,
          img_url: "",
          position_x: 34.721,
          position_y: 103.985
        },
        {
          title: "我给你的？",
          hot_index: 17,
          id: 5,
          img_url: "",
          position_x: 30.699,
          position_y: 103.983
        },
        {
          title: "咋了",
          hot_index: 15,
          id: 6,
          img_url: "",
          position_x: 30.724,
          position_y: 103.99
        },
        {
          title: "可能是学费没交够",
          hot_index: 11,
          id: 7,
          img_url: "",
          position_x: 30.745,
          position_y: 103.987
        },
        {
          title: "利兹为啥没有这样的觉悟",
          hot_index: 9.6,
          id: 8,
          img_url: "",
          position_x: 30.742,
          position_y: 103.989
        },
        {
          title: "哈哈哈哈哈哈哈哈哈哈",
          hot_index: 8.3,
          id: 9,
          img_url: "",
          position_x: 31.699,
          position_y: 103.988
        }
      ]);
    }
  },
  namespaced: true
};
