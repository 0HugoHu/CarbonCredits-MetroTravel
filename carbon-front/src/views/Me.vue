<template>
  <div>
    <div class="front">
      <Imagev class="bg" src="https://s2.ax1x.com/2020/01/27/1nWYkQ.md.png" />
      <Imager
        class="head"
        width="16vw"
        style="border-style: solid; border-width: 0.27vw;border-color:white"
        :src="BasicData.Icon"
      />
      <Imagev
        class="setting-icon"
        src="https://s2.ax1x.com/2020/01/27/1nbjiV.th.png"
        width="6.7vw"
      />
      <font class="name">{{ BasicData.Name }}</font>
      <div class="priority">
        <Imagev
          class="priority-img"
          src="https://s2.ax1x.com/2020/01/27/1nHs7q.th.png"
          width="4vw"
        />
        <font class="priority-text">{{ BasicData.Priority }}</font>
      </div>
      <div class="checkin" @click="Goto_Checkin">
        <Imagev
          class="checkin-icon"
          src="https://s2.ax1x.com/2020/01/27/1nX0wd.th.png"
          width="8.5vw"
        />
        <br />
        <font class="checkin-text"> 签到</font>
      </div>
      <div class="firstcard">
        <Grid2
          style="padding-left:2.7vw;padding-right:2.7vw;"
          :text1="BasicData.CoinToday"
          :text2="BasicData.CoinTotal"
          :text3="BasicData.CarbonSave"
          :text4="BasicData.Ranking"
        />
        <div>
          <van-divider
            :hairline="false"
            :style="{
              color: '#E0E0E0',
              borderColor: '#E0E0E0',
              margin: '0 10%'
            }"
          />
        </div>
        <Grid3 style="margin-top:3.2vw;" class="firstcard-button" />
      </div>
    </div>
    <div class="secondcard">
      <Imagev
        width="8vw"
        class="item-icon"
        src="https://s2.ax1x.com/2020/01/27/1ulucV.th.png"
      />
      <font class="item-text">碳积分记录</font>
      <font v-if="Info.Info_Record" class="item-info">{{
        Info.Info_Record_Num
      }}</font>
      <Imagev
        width="8vw"
        class="item-go"
        src="https://s2.ax1x.com/2020/01/27/1ulhDS.th.png"
      />
      <mu-button
        flat
        round
        style="filter:alpha(opacity=100); opacity:100;width:100%;height:100%;"
        @click.native="Goto_Record"
        class="click"
        color="#9E9E9E"
      ></mu-button>
    </div>
    <div class="thirdcard">
      <mu-button
        flat
        round
        style="position:absolute;left:0;top:0%;filter:alpha(opacity=100); opacity:100;width:100%;height:26%;"
        @click="Goto_Ranking"
        class="click"
        color="#9E9E9E"
      ></mu-button>
      <mu-button
        flat
        round
        style="position:absolute;left:0;top:25%;filter:alpha(opacity=100); opacity:100;width:100%;height:25%;"
        to="/Help"
        class="click"
        color="#9E9E9E"
      ></mu-button>
      <mu-button
        flat
        round
        style="position:absolute;left:0;top:50%;filter:alpha(opacity=100); opacity:100;width:100%;height:25%;"
        to="/feedback"
        class="click"
        color="#9E9E9E"
      ></mu-button>
      <mu-button
        flat
        round
        style="position:absolute;left:0;top:75%;filter:alpha(opacity=100); opacity:100;width:100%;height:25%;"
        @click="Goto_About"
        class="click"
        color="#9E9E9E"
      ></mu-button>

      <Imagev
        width="7.2vw"
        style="top:8%"
        class="item-icon2"
        src="https://s2.ax1x.com/2020/01/27/1ulKXT.th.png"
      />
      <font style="top:9%" class="item-text2">每日排名</font>
      <font v-if="Info.Info_Ranking" style="top:10%" class="item-info2">{{
        Info.Info_Ranking_Num
      }}</font>
      <Imagev
        width="8vw"
        style="top:7%"
        class="item-go2"
        src="https://s2.ax1x.com/2020/01/27/1ulhDS.th.png"
      />

      <van-divider
        :hairline="false"
        style="position:absolute;top:19%;left:18%;width:77%"
      />

      <Imagev
        width="7.2vw"
        style="top:33%"
        class="item-icon2"
        src="https://s2.ax1x.com/2020/01/27/1ulQnU.th.png"
      />
      <font style="top:34%" class="item-text2">帮助</font>
      <font v-if="Info.Info_Help" style="top:35%" class="item-info2">{{
        Info.Info_Help_Num
      }}</font>
      <Imagev
        width="8vw"
        style="top:32%"
        class="item-go2"
        src="https://s2.ax1x.com/2020/01/27/1ulhDS.th.png"
      />

      <van-divider
        :hairline="false"
        style="position:absolute;top:44%;left:18%;width:77%"
      />

      <Imagev
        width="7.2vw"
        style="top:57%"
        class="item-icon2"
        src="https://s2.ax1x.com/2020/01/27/1ullBF.th.png"
      />
      <font style="top:58%" class="item-text2">意见反馈</font>
      <font v-if="Info.Info_Feedback" style="top:59%" class="item-info2">{{
        Info.Info_Feedback_Num
      }}</font>
      <Imagev
        width="8vw"
        style="top:56%"
        class="item-go2"
        src="https://s2.ax1x.com/2020/01/27/1ulhDS.th.png"
      />

      <van-divider
        :hairline="false"
        style="position:absolute;top:68%;left:18%;width:77%"
      />

      <Imagev
        width="7.2vw"
        style="top:80%"
        class="item-icon2"
        src="https://s2.ax1x.com/2020/01/27/1uNMTK.th.png"
      />
      <font style="top:81%" class="item-text2">关于</font>
      <font v-if="Info.Info_About" style="top:82%" class="item-info2">{{
        Info.Info_About_Num
      }}</font>
      <Imagev
        width="8vw"
        style="top:79%"
        class="item-go2"
        src="https://s2.ax1x.com/2020/01/27/1ulhDS.th.png"
      />
    </div>
    <van-popup
      close-icon="https://s2.ax1x.com/2020/01/27/1uNMTK.th.png"
      style="border-radius:2.7vw"
      v-model="checkin">
      <PopupView2 
        v-on:close="closeCheckin"
        title="签到成功" subtitle="" text="连续签到可以获得更多碳积分哦" link="" button_text="我知道了" goto="" img1="https://s2.ax1x.com/2020/01/29/1QrknO.th.png" des1="碳积分 +10" />
    </van-popup>
    <van-popup
      close-icon="https://s2.ax1x.com/2020/01/27/1uNMTK.th.png"
      style="border-radius:2.7vw"
      v-model="about">
      <PopupView2 
        v-on:close="closeAbout"
        title="关于本应用" subtitle="@2020 LeedsHighFlyingBirds" text="软件开发人员：秦梓鑫、程宇辉、胡亚东、梁明皓、姜永哲" link="" button_text="确定" goto="" img1="https://s2.ax1x.com/2020/01/29/1QrknO.th.png" des1="A01 碳积分" />
    </van-popup>
  </div>
</template>
<script>
import Imagev from "../components/utils/Image";
import Imager from "../components/utils/ImageRound";
import Grid2 from "../components/me/Grid2";
import Grid3 from "../components/me/Grid3";
import PopupView2 from "../components/utils/PopupView2"
import { Divider } from "vant";
import Vue from 'vue';
import { Popup } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Popup);

export default {
  components: {
    Imagev,
    Imager,
    Grid2,
    Grid3,
    [Divider.name]: Divider,
    PopupView2,
  },
  data() {
    return {
      BasicData: {
        Name: "未登录",
        Id: "SW-2020-9534-1376",
        Priority: "普通用户Lv0",
        CoinToday: "0",
        CoinTotal: "0",
        CarbonSave: "0.0kg",
        Ranking: "--.-%",
        Expend: "您还没有碳积分消费记录呢",
        Icon: "https://s2.ax1x.com/2020/01/26/1mgijO.th.png"
      },
      Info: {
        Info_Record: false,
        Info_About: false,
        Info_Ranking: false,
        Info_Feedback: true,
        Info_Help: false,
        Info_Record_Num: 0,
        Info_About_Num: 0,
        Info_Ranking_Num: 0,
        Info_Feedback_Num: 3,
        Info_Help_Num: 0
      },
      Goto_Help: "/Help",
      about:false,
      checkin:false,
    };
  },
  methods:{
    Goto_About(){
      this.about=true;
    },
    closeAbout(){
      this.about=false;
    },
    Goto_Checkin(){
      this.checkin=true;
    },
    closeCheckin(){
      this.checkin=false;
    },
    Goto_Record(){
      Toast.fail("您还没有碳积分交易记录");
    },
    Goto_Ranking(){
      Toast.fail("当前功能还在开发中");
    },

  }
};
</script>

<style lang="scss">
.front {
  position: relative;
  width: 100%;
  height: 50vw;
}

.bg {
  position: absolute;
  width: 100%;
  left: 0%;
  top: 0%;
  height: 50vw;
}

.setting-icon {
  position: absolute;
  top: 10%;
  right: 5%;
}

.head {
  position: absolute;
  left: 5%;
  top: 40%;
}

.name {
  font-size: 4.8vw;
  color: whitesmoke;
  position: absolute;
  left: 26%;
  top: 42%;
}

.priority {
  position: absolute;
  left: 26%;
  top: 58%;
  padding: 0.8vw;
  width: 27vw;
  height: 5.3vw;
  background: rgb(248, 231, 198);
  border-radius: 1.9vw;
}

.priority-img {
  position: absolute;
  top: 14%;
  left: 5%;
}

.priority-text {
  font-size: 3.2vw;
  bottom:5%;
  color: rgb(240, 180, 84);
  position: absolute;
  left: 27%;
}

.checkin {
  position: absolute;
  top: 42%;
  right: 5%;
}

.checkin-text {
  font-size: 3.7vw;
  color: whitesmoke;
}

.firstcard {
  position: absolute;
  height: 61.5vw;
  left: 5%;
  width: 90%;
  top: 80%;
  border-radius: 2.7vw;
  background-color: white;
  box-shadow: 0 0 1vw #88888844;
}

.secondcard {
  position: relative;
  height: 16vw;
  margin-left: 5%;
  width: 90%;
  margin-top: 55%;
  border-radius: 2.7vw;
  background-color: white;
  box-shadow: 0 0 1vw #88888844;
}

.thirdcard {
  position: relative;
  height: 64vw;
  margin-left: 5%;
  width: 90%;
  margin-top: 4vw;
  margin-bottom: 16vw;
  border-radius: 2.7vw;
  background-color: white;
  box-shadow: 0 0 1vw #88888844;
}

.item-icon {
  position: absolute;
  top: 25%;
  left: 5%;
}

.item-text {
  position: absolute;
  color: #202020;
  font-size: 4.3vw;
  font-weight: 500;
  left: 18%;
  top: 30%;
}

.item-info {
  position: absolute;
  right: 13%;
  top: 35%;
  color: #ffffff;
  padding: 0 1.6vw 0 1.6vw;
  font-size: 3.7vw;
  border-radius: 2.7vw;
  background-color: red;
}

.item-go {
  position: absolute;
  top: 25%;
  right: 3%;
}

.item-icon2 {
  position: absolute;
  left: 5%;
}

.item-text2 {
  position: absolute;
  color: #202020;
  font-size: 4.3vw;
  font-weight: 500;
  left: 18%;
}

.item-info2 {
  position: absolute;
  right: 13%;
  color: #ffffff;
  padding: 0 1.6vw 0 1.6vw;
  font-size: 3.7vw;
  border-radius: 2.7vw;
  background-color: red;
}

.item-go2 {
  position: absolute;
  right: 3%;
}
</style>
