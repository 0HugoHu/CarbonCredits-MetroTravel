<template>
  <div class="imgcard">
    <div class="img">
      <img
        style="width:24vw;height:16vw;margin:2.7vw;border-radius:1.3vw;"
        v-bind:src="item.imageUrl"
      />
    </div>
    <div class="container">
      <div class="tagHolder">
        <a class="title" style="margin-left:2.7vw;">{{ item.title }}</a>
      </div>
      <br />
      <div style="position:relative;width:100%;top: 2.7vw;">
        <a class="author" style="left:12%" v-if="item.tags.length">
          {{ item.author }}
        </a>
        <a class="author" style="left:2.7vw" v-else>{{ item.author }}</a>
        <a
          class="news-tag"
          v-for="tag in tagItems"
          :key="tag.name"
          :style="{ borderColor: tag.color, color: tag.color }"
        >
          {{ tag.name }}
        </a>
        <a class="date" style="left:45%" v-if="item.tags.length">{{
          item.time
        }}</a>
        <a class="date" style="left:45%" v-else>{{ item.time }}</a>
      </div>
    </div>
    <mu-button
      flat
      round
      style="filter:alpha(opacity=100); opacity:100;border-radius:2.7vw"
      @click="click"
      class="click"
      color="#9E9E9E"
    ></mu-button>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    click() {
      this.$router.push({
        path: "/passage/" + this.item.id
      });
      this.reload();
    }
  },
  inject:['reload'],
  computed: {
    tagItems() {
      return (this.item.tags || []).map(tag => {
        let presetColors = {
          置顶: "#009688",
          热门: "#FF9406",
          最新: "#FF3852"
        };
        let color = presetColors[tag] || "";

        return {
          name: tag,
          color
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.click {
  height: 23.3vw;
  width: 100%;
}

div.imgcard {
  box-shadow: 0 0 1vw #88888844;
  height: 23.3vw;
  width: auto;
  margin-top: 2.7vw;
  border-radius: 2.7vw;
  margin-left: 2.7vw;
  margin-right: 2.7vw;
  position: relative;
  background: #ffffff;
}

div.container {
  padding: 0.54vw;
  border-radius: 2.7vw;
  width: 100%;
  height: 100%;
  margin-right: 29.3vw;
  position: absolute;
}

div.img {
  width: 29.3vw;
  height: 21.3vw;
  border-radius: 2.7vw;
  right: 0;
  top: 0;
  position: absolute;
}

a.title {
  font-size: 4.3vw;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: absolute;
  margin-right: 2.7vw;
  color: #202020;
}

a.content {
  font-size: 3.7vw;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color:#202020;
}

a.author {
  font-size: 2.7vw;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: absolute;
  color: #616161;
  top: 8vw;
}
a.date {
  font-size: 2.7vw;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: absolute;
  color: #616161;
  top: 8.2vw;
}
a.news-tag {
  font-size: 2.7vw;
  padding: 0.1em;
  margin-left: 2.7vw;
  position: absolute;
  top: 7.5vw;
  border-style: solid;
  border-width: 0.27vw;
  border-color: #009688;
  border-radius: 1.1vw;
}
div.tagHolder {
  position: absolute;
  top: 2.2vw;
  width: 70%;
  height: 13.3vw;
}
</style>
