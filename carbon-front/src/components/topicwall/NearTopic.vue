<template>
  <div v-if="nearTopic != null" style="position:relative;">
    <div
      style="margin-top:0vh;width:100%;background-color:#FAFAFA;height:7.8vw;"
    >
      <div
        style="position:absolute;margin-top:1.6vw;width:1.3vw;height:6vw;background-color:#009688;"
      ></div>
      <div style="position:absolute;margin-top:0.6vh" class="font2">
        离我最近
      </div>
    </div>
    <div @click="to_neartopic" class="neartopic-card">
      <TopicCard :msg="nearTopic" />
    </div>
  </div>
</template>

<script>
import TopicCard from "../topicwall/TopicCard";

import { mapState } from "vuex";

export default {
  name: "NearTopic",
  components: {
    TopicCard
  },
  methods: {
    to_neartopic() {
      this.$store.dispatch("topic_wall/showTopicPopup", this.nearTopic);
    }
  },
  computed: {
    ...mapState({
      nearTopic: state => state.topic_wall.nearestTopic
    })
  },
  mounted() {}
};
</script>

<style>
.neartopic-card {
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
