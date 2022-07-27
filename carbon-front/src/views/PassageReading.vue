<template>
  <div style="width:100vw;height:auto;background;">
    <div style="position:fixed;width:100vw;height:auto;z-index:999999">
      <Imagev
        id="headimg"
        style="position:fixed;top:0;left:0"
        :src="passage.imageUrl"
        width="100vw"
        height="250px"
      ></Imagev>
      <div
        id="headcolor"
        style="width:100vw;height:250px;background:#fff;position:fixed;top:0;opacity:0;"
      ></div>
      <mu-appbar
        id="toolbar"
        style="width: 100%;position:fixed;top:0;opacity:0;border-bottom:1px solid #ddd;"
        color="#fff"
        z-depth="0"
        textColor="#202020">
        <mu-button @click="back" icon slot="left">
          <Imagev src="https://s2.ax1x.com/2020/02/07/1cvCqJ.th.png" width="5vw" height="5vw" style=""></Imagev>
        </mu-button>
        <div style="color:#202020;font-size:4.5vw;font-weight:bold;" >热点资讯</div>
        <mu-button icon slot="right">
          <Imagev src="https://s2.ax1x.com/2020/03/08/3x2DHS.th.png" width="5vw" height="5vw" style=""></Imagev>
        </mu-button>
      </mu-appbar>
      <mu-button
        style="position:fixed;left:1vw;top:0.5vh;"
        @click="back"
        icon
        slot="left"
        ><Imagev src="https://s2.ax1x.com/2020/02/07/1cv9r4.th.png" width="5vw" height="5vw"></Imagev>
      </mu-button>
    </div>
    <div class="passage-title" style="margin-top:0" id="title">
      {{ passage.title }}
    </div>
    <font class="passage-author" style="margin-top:0.5vh" >
      {{passage.author}}</font>
    <font class="passage-time" style="margin-top:0.5vh" >
      {{passage.date}}</font>
    <mu-divider style="float:left;margin-top:0.5vh"></mu-divider>
    <br />
    <div
      class="passage-content"
      style="margin-top:1vh;"
      id="title"
      v-html="content"></div>

    <div style="width:100vw;height:1vh;"/>
    <LikeBar/>
    <div style="width:100vw;height:8vh;"/>
    <Relative :id="id" :news="$store.state.home.newsItems"/>
    <div style="width:100vw;height:5vw;"/>
    <Comment :comments="$store.state.home.newsComments[id-1]" />
    <div style="width:100vw;height:5vw;"/>
    <div style="font-size:3.5vw;color:#616161">没有更多评论啦，分享下你的看法吧</div>
    <div style="width:100vw;height:10vh;"/>
    <div id="input_bottom" style="padding:0 5vw 0 5vw;position:fixed;bottom:0;left:0;width:100vw;height:15vw;background:#fff;border-top:1px solid #ddd">
        <Imagev v-if="image_show" @click.native="input_focus" style="margin-top:2.5vw" src="https://s2.ax1x.com/2020/03/08/3vxkpq.png" width="100vw" height="auto"/>
        <van-field
          style="margin-top:3vw;border:0.3vw solid #00968899;border-radius:2.7vw;width:70vw;"
          v-model="message"
          center
          @focus="input_focus"
          @blur="input_blur"
          rows="5"
          maxlength="200"
          border
          clearable
          type="textarea"
          placeholder="来发表几句友善的评论吧">
      </van-field>
      <div style="position:absolute;top:0;right:0;width:25vw;height:100%;background:#fff">
          <van-button @click="send" style="position:absolute;right:5vw;top:3.5vw;z-index:999" size="small" type="primary" color="#009688">发送</van-button>
      </div>
  </div>
  </div>
</template>

<script>
import Imagev from "../components/utils/Image";
import LikeBar from "../components/passage/LikeBar";
import Relative from "../components/passage/RelativePassage"
import Comment from "../components/passage/Comment"
import { Field } from 'vant';
import { Button } from 'vant';
import Vue from 'vue';
Vue.use(Field);
Vue.use(Button);
export default {
  components: {
    Imagev,
    LikeBar,
    Relative,
    Comment,
  },
  methods: {
    back() {
      this.$router.replace("/");
    },
    input_focus(){
        var input_bottom=document.getElementById("input_bottom");
        input_bottom.style.height="45vw";
        this.image_show=false;
    },
    input_blur(){
        var input_bottom=document.getElementById("input_bottom");
        input_bottom.style.height="15vw";
        this.image_show=true;
        if (this.message!=""){ 
          this.$toast.success("评论将在审核后发布");
        }
    },
    send(){
        this.message="";
        this.$toast.success("评论将在审核后发布");
    }
  },
  data() {
    return {
      offsetTop: 0,
      content: "",
      passage: {},
      comments:{},
      id:Number,
      image_show:true,
      message:"",
    }
  },
  mounted() {
    this.$store.dispatch("home/loadAll");
    var toolbar = document.getElementById("toolbar");
    var headimg = document.getElementById("headimg");
    var headcolor = document.getElementById("headcolor");
    var title = document.getElementById("title");
    document.documentElement.scrollTop = 0;
    title.style.marginTop = 260 + "px";

    window.addEventListener(
      "scroll",
      () => {
        this.offsetTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        if (this.offsetTop > 0 && this.offsetTop <= 300) {
          toolbar.style.opacity = 0;
          let height = this.offsetTop / 300;
          headcolor.style.height = 250 * (1 - height) + "px";
          headcolor.style.opacity =
            height + height * (56 / 300) > 1 ? 1 : height + height * (56 / 300);
          if (250 * (1 - height) > 56) {
            headimg.style.height = 250 * (1 - height) + "px";
            headimg.style.opacity = 1 - height - height * (56 / 300);
          } else {
            headimg.style.height = 56 + "px";
            headcolor.style.height = 56 + "px";
            headimg.style.opacity = 0;
            headcolor.style.opacity = 1;
            toolbar.style.opacity = 1 - (250 * (1 - height)) / 56;
          }
          title.style.marginTop = 260 + this.offsetTop / 7 + "px";
        } else if (this.offsetTop == 0) {
          toolbar.style.opacity = 0;
          headimg.style.opacity = 100;
          headcolor.style.opacity = 0;
        } else {
          toolbar.style.opacity = 100;
          headimg.style.opacity = 0;
          headcolor.style.opacity = 0;
        }
      },
      true
    );
    for (const passage of this.$store.state.home.newsItems) {
      if (passage.id.toString() === this.$route.params.id) {
        this.passage = passage;
      }
    }
    this.id=this.passage.id;

    let temp = this.passage.content;
    this.content = "<p>" + temp.replace("&nbsp;", "</p><p>") + "</p>";
  }
};

function getStyle(parm1, parm2) {
  return parm1.currentStyle
    ? parm1.currentStyle[parm2]
    : getComputedStyle(parm1)[parm2]; //parm1,要改变的元素代替名;parm2,要改变的属性名
}
</script>

<style>
.passage-title {
  font-size: 6vw;
  color: #202020;
  margin-left: 5vw;
  margin-right: 5vw;
  text-align: left;
}

.passage-author {
  font-size: 4vw;
  text-align: left;
  float: left;
  margin-left: 5vw;
  color: #616161;
}

.passage-time {
  font-size: 4vw;
  text-align: left;
  float: left;
  margin-left: 5vw;
  color: #616161;
}

.passage-content {
  font-size: 4.5vw;
  color: #202020;
  margin-left: 5vw;
  margin-right: 5vw;
  text-align: justify;
}
</style>