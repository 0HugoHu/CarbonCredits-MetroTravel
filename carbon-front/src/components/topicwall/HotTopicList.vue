<template>
  <div style="width:100vw;height:100vh;">
    <div
      style="margin-top:1vh;width:100%;background-color:#FAFAFA;height:7.8vw;"
    >
      <div
        style="position:absolute;margin-top:1.6vw;width:1.3vw;height:6vw;background-color:#009688;"
      ></div>
      <div style="position:absolute;margin-top:0.6vh" class="font2">
        每日榜单
      </div>
    </div>
    <div class="hotlist-card">
      <div v-for="(item, i) in topicList" :key="item.id">
        <TopicListCard
          :msg="topicList"
          :index="i"
          @click.native="hot_detail(item)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TopicListCard from "../topicwall/TopicListCard";
import { mapState } from "vuex";

export default {
  name: "HotTopicList",
  components: {
    TopicListCard
  },
  data() {
    return {
      show: false,
      id: 0
    };
  },
  inject: ["reload"],
  methods: {
    hot_detail(topic) {
    //   this.$store.dispatch("topic_wall/showTopicPopup", topic);
    }
  },
  computed: {
    ...mapState({
      topicList: state => state.topic_wall.hotTopics
    })
  }
};
</script>

<style>
.hotlist-card {
  background: #ffffff;
  position: relative;
  height: auto;
  width: auto;
  margin: 3.5vw 2.7vw 2.7vw 2.7vw;
  box-shadow: 0 0 1vw #88888844;
  overflow: hidden;
  border-radius: 2.7vw;
}
</style>
