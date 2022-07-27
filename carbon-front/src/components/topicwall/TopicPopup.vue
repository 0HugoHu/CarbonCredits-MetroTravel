<template>
  <div>
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '95%' }"
    >
      <div>
        <!--顶部固定栏 --->
        <div
          style="position:fixed;top:4.5vh;left:0;width:100%;height:15vw;background:#fff;z-index:99;border-radius:5vw 5vw 0 0;border-bottom:0.5px solid #ddd"
        >
          <Imagev
            style="position:absolute;left:5vw;top:3.5vw"
            src="https://s2.ax1x.com/2020/03/07/3jrDmj.th.png"
            width="7.5vw"
            height="7.5vw"
          />
          <div
            style="text-align:left;margin-left:15vw;padding:3vw 0 0 0;margin-top:0vw;font-size: 6vw;color: #202020; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;margin-right: 5vw;"
          >
            话题
          </div>
          <Imagev
            @click.native="close"
            style="position:absolute;right:5vw;top:3.5vw"
            src="https://s2.ax1x.com/2020/02/22/3MVLTK.th.png"
            width="6.5vw"
            height="6.5vw"
          />
        </div>
        <!--标题 --->
        <div style="position:relative;margin-top:17vw;align:left">
          <div
            style="margin-left:6vw;text-align:left;margin-top:2.5vw;font-size: 5vw;color: #202020; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;margin-right: 5vw;"
          >
            {{ topic.title }}
          </div>
          <van-collapse v-model="activeNames" :border="false">
            <van-collapse-item title="展开详细内容" name="1">
              <!--展开详细内容 --->
              <div
                style="margin-left:3vw;text-align:left;font-size: 4vw;color: #202020; text-align: justify;margin-right: 3vw;"
              >
                {{ topic.description1 }}
              </div>
              <div
                style="margin-top:3vw;margin-left:3vw;text-align:left;font-size: 4vw;color: #202020; text-align: justify;margin-right: 3vw;"
              >
                {{ topic.description2 }}
              </div>
              <div
                style="margin-top:3vw;margin-left:3vw;text-align:left;font-size: 4vw;color: #202020; text-align: justify;margin-right: 3vw;"
              >
                {{ topic.description3 }}
              </div>
              <Imagev
                style="margin:3vw"
                :src="topic.img_url"
                width="auto"
                height="auto"
              />
            </van-collapse-item>
          </van-collapse>
          <mu-divider></mu-divider>
          <!--热门评论这几个字--->
          <div
            style="margin-top:5.5vw;width:100%;height:7.8vw;position:relative"
          >
            <div
              style="position:absolute;margin-top:1.6vw;width:1.3vw;height:6vw;background-color:#009688;"
            ></div>
            <div
              style="position:absolute;top:0.6vh;margin-left:1vw;left:5vw;font-size: 4.5vw;font-weight:bold;color: #202020; "
            >
              热门评论({{ topic.topComments.length }})
            </div>
          </div>
          <!--热门评论 循环卡片 --->
          <div class="hotlist-card">
            <div v-for="(item, i) in topic.topComments" :key="item.id">
              <CommentTop
                :msg="topic.topComments"
                :index="i"
                @click.native="copy(i)"
              />
            </div>
          </div>
          <!--最新评论这几个字 --->
          <div
            style="margin-top:5.5vw;width:100%;height:7.8vw;position:relative"
          >
            <div
              style="position:absolute;margin-top:1.6vw;width:1.3vw;height:6vw;background-color:#009688;"
            ></div>
            <div
              style="position:absolute;top:0.6vh;margin-left:1vw;left:5vw;font-size: 4.5vw;font-weight:bold;color: #202020; "
            >
              最新评论({{ topic.comments.length }})
            </div>
          </div>
          <!--最新评论 循环卡片 --->
          <div class="hotlist-card">
            <div v-for="(item, i) in topic.comments" :key="item.id">
              <Comment
                :msg="topic.comments"
                :index="i"
                @click.native="copy(i)"
              />
            </div>
          </div>
          <!--输入框 --->
        </div>
        <div
          id="input_bottom"
          style="padding:0 5vw 0 5vw;position:fixed;bottom:0;left:0;width:100vw;height:15vw;background:#fff;border-top:1px solid #ddd"
        >
          <Imagev
            v-if="image_show"
            @click.native="input_focus"
            style="margin-top:2.5vw"
            src="https://s2.ax1x.com/2020/03/08/3vxkpq.png"
            width="100vw"
            height="auto"
          />
          <van-field
            style="margin-top:3vw;border:0.3vw solid #00968899;border-radius:2.7vw;width:70vw;"
            v-model="message"
            center
            @focus="input_focus"
            @blur="input_blur"
            rows="5"
            maxlength="200"
            clearable
            border
            type="textarea"
            placeholder="来发表几句友善的评论吧"
          >
          </van-field>
          <div
            style="position:absolute;top:0;right:0;width:25vw;height:100%;background:#fff"
          >
            <van-button
              style="position:absolute;right:5vw;top:3.5vw;"
              size="small"
              type="primary"
              color="#009688"
              >发送</van-button
            >
          </div>
        </div>
        <div style="color:#202020;font-size:3.5vw;">
          翻到底啦~来发表几句自己的见解吧
        </div>
        <div style="width:100vw;height:10vh" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import Comment from "../topicwall/Comment";
import CommentTop from "../topicwall/CommentTop";
import Imagev from "../utils/Image";
import { Collapse, CollapseItem, Popup, Button, Field } from "vant";

import { mapState } from "vuex";

export default {
  components: {
    Comment,
    Imagev,
    CommentTop,
    [Button.name]: Button,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Popup.name]: Popup,
    [Field.name]: Field
  },
  methods: {
    close() {
      this.show = false;
    },
    input_focus() {
      var input_bottom = document.getElementById("input_bottom");
      input_bottom.style.height = "45vw";
      this.image_show = false;
    },
    input_blur() {
      var input_bottom = document.getElementById("input_bottom");
      input_bottom.style.height = "15vw";
      this.image_show = true;
    },
    //复制评论到剪切板
    copy() {}
  },
  data() {
    return {
      comment: String,
      image_show: true,
      message: "",
      activeNames: ["1"]
    };
  },
  computed: {
    show: {
      get() {
        return (
          this.$store.state.topic_wall.topicPopup &&
          this.$store.state.topic_wall.currentTopic != null
        );
      },
      set(value) {
        this.$store.commit("topic_wall/setTopicPopup", value);
      }
    },
    ...mapState({
      topic: state => state.topic_wall.currentTopic
    })
  }
};
</script>

<style lang="scss" scoped></style>
