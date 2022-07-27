import axios from "@/utils/axios";

import { find, filter } from "lodash-es";

let mockItems1 = require("./normal_market_mock_item_1.json");

function _findMockItem(id) {
  return find(mockItems1, { _id: id });
}

function mockItem(id, title, titleImage, price, discount = null) {
  return {
    _id: id,
    title,
    titleImage,
    price,
    discount
  };
}

export async function getItemsInCategory(cat_id) {
  const list1 = [
    "这是一个苹果",
    "嗯，平安果",
    "但是",
    "它却和其它",
    "普通苹果",
    "长得一模一样。这是为什么呢？",
    "",
    "",
    "",
    "",
    ""
  ];
  const list2 = [
    "https://s2.ax1x.com/2020/02/05/1rfsUI.th.png",
    "https://s2.ax1x.com/2020/02/05/1r4T3V.th.png",
    "https://s2.ax1x.com/2020/02/05/1r4o90.th.png",
    "https://s2.ax1x.com/2020/02/05/1r45hq.th.png",
    "https://s2.ax1x.com/2020/02/05/1rfBbd.th.png",
    "https://s2.ax1x.com/2020/02/05/1r2g8U.th.png"
  ];

  // let items = list1.map((title, index) => {
  //   return mockItem(index, title, list2[index] || "", {
  //     money: 25,
  //     credit: 10
  //   });
  // });

  return filter(mockItems1, { categoryId: cat_id });
}

export async function getItemDetail(id) {
  return _findMockItem(id);
}

export async function loadHomePage() {
  let mockData = {
    hot_prize: [
      [{ money: 69.4 }, { money: 57.8 }],
      [{ money: 70, credit: 20 }, null],
      [{ money: 12.54 }, null],
      [{ money: 35 }, { money: 25, credit: 15 }]
    ], //两个一组，前为价格，后为原价，原价为0时不显示原价
    hot_img: [
      "https://s2.ax1x.com/2020/02/05/1r2g8U.th.png",
      "https://s2.ax1x.com/2020/02/05/1r2cCT.th.png",
      "https://s2.ax1x.com/2020/02/05/1r2y5V.th.png",
      "https://s2.ax1x.com/2020/02/04/1BGq9U.th.png"
    ],
    hot_title: [
      "郫都区三流大学",
      "2019全新教师资格证",
      "驾照代扣分（点击详询QQ）",
      "特价野味"
    ],
    new_img: [
      "https://s2.ax1x.com/2020/02/05/1r4T3V.th.png",
      "https://s2.ax1x.com/2020/02/05/1r4o90.th.png",
      "https://s2.ax1x.com/2020/02/05/1r45hq.th.png",
      "https://s2.ax1x.com/2020/02/05/1rfsUI.th.png"
    ],
    new_prize: [
      [{ money: 69.4 }, null],
      [{ money: 70, credit: 20 }, null],
      [{ money: 12.54 }, null],
      [{ money: 35 }, null]
    ],
    new_title: [
      "世界二流大学",
      "两个字",
      "小米神奇的葫芦屏特别限购版",
      "优雅的一只鸟"
    ]
  };
  return {
    featuredItems: [
      {
        text: ["第二件半价", "优选犀浦苹果"],
        imageUrl: "https://s2.ax1x.com/2020/02/23/3lTuMd.th.png"
      },
      {
        text: ["交大的牛肉", "最低7折"],
        imageUrl: "https://s2.ax1x.com/2020/02/23/3lT4dx.th.png"
      },
      {
        text: ["这是一个苹果", "总之很便宜"],
        imageUrl: "https://s2.ax1x.com/2020/02/23/3lThe1.th.png"
      }
    ],
    hotItems: mockData.hot_title.map((title, index) =>
      mockItem(
        index,
        title,
        mockData.hot_img[index],
        mockData.hot_prize[index][0],
        mockData.hot_prize[index][1]
      )
    ),
    latestItems: mockData.new_title.map((title, index) =>
      mockItem(
        index,
        title,
        mockData.new_img[index],
        mockData.new_prize[index][0],
        mockData.new_prize[index][1]
      )
    )
  };
}

export async function loadRecommendedCards() {
  return [
    {
      title: "一起来领养蔬果吧！",
      subtitle: "领养的蔬果成熟后可送货上门",
      href: "/plant_market",
      backgroundUrl: "https://s2.ax1x.com/2020/02/04/1DtqzT.png",
      contents: [
        {
          imageUrl: "https://s2.ax1x.com/2020/02/05/1rfsUI.th.png",
          price: "250积分",
          title: "苹果"
        },
        {
          imageUrl: "https://s2.ax1x.com/2020/02/05/1rfBbd.th.png",
          price: "300积分",
          title: "胡萝卜"
        },
        {
          imageUrl: "https://s2.ax1x.com/2020/02/05/1rf0DH.th.png",
          price: "200积分",
          title: "玉米"
        }
      ]
    },
    {
      title: "实体商品商城",
      subtitle: "参与扶贫项目，购买特价商品",
      href: "/normal_market",
      backgroundUrl: "https://s2.ax1x.com/2020/02/04/1DtV5q.png",
      contents: [
        {
          imageUrl: "https://s2.ax1x.com/2020/02/05/1r2g8U.th.png",
          price: "50积分+3元",
          title: "盐源苹果"
        },
        {
          imageUrl: "https://s2.ax1x.com/2020/02/05/1r2y5V.th.png",
          price: "30积分+4元",
          title: "资中血橙"
        },
        {
          imageUrl: "https://s2.ax1x.com/2020/02/05/1r2cCT.th.png",
          price: "90积分+20元",
          title: "阆中牛肉"
        }
      ]
    },
    {
      title: "虚拟商品兑换",
      subtitle: "兑换游戏道具、各大视频会员及话费充值卡",
      href: "/exchange_market",
      backgroundUrl: "https://s2.ax1x.com/2020/02/04/1DJZes.png",
      contents: [
        {
          imageUrl: "https://s2.ax1x.com/2020/02/05/1r4T3V.th.png",
          price: "10积分起",
          title: "活动道具"
        },
        {
          imageUrl: "https://s2.ax1x.com/2020/02/05/1r4o90.th.png",
          price: "500积分起",
          title: "视频会员"
        },
        {
          imageUrl: "https://s2.ax1x.com/2020/02/05/1r45hq.th.png",
          price: "600积分起",
          title: "话费充值"
        }
      ]
    }
  ];
}
