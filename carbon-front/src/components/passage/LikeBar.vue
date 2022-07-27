<template>
  <div style="width:100vw;height:auto;position:relative">
      <transition name="slide-fade">
        <div v-if="show" style="font-size:3.5vw;color:#f44336;position:absolute;font-weight:bold;top:-2vw;left:35vw">+{{my_likes}}</div>
      </transition>
      <div @click="like" style="margin-top:3vw;float:left;margin-left:25vw;border-radius:1vw;border:1px solid #aaa;width:auto;padding:1.5vw 3.5vw 1.5vw 3.5vw">
          <Imagev style="float:left;margin-top:0.5vw;" src="https://s2.ax1x.com/2020/03/08/3xTDHI.th.png" width="4vw" height="4vw"/>
          <div style="float:left;color:#f44336;font-size:3.5vw;margin-left:2vw;font-weight:bold">{{likes}}</div>
      </div>
      <div ref="button" @click="open = !open" style="margin-top:3vw;float:right;margin-right:25vw;border-radius:1vw;border:1px solid #aaa;width:auto;padding:1.5vw 3.5vw 1.5vw 3.5vw">
          <Imagev style="float:left;margin-top:0.5vw;" src="https://s2.ax1x.com/2020/02/22/3MVLTK.th.png" width="4vw" height="4vw"/>
          <div style="float:left;color:#202020;font-size:3.5vw;margin-left:2vw;font-weight:bold">不喜欢</div>
      </div>
      <mu-popover placement="bottom" style="width:65vw" :cover="false" :open.sync="open" :trigger="trigger">
        <div style="align:left;">
            <div style="width:auto;color:#202020;font-size:4vw;margin:3vw;margin-bottom:0">请选择原因：</div>
            <mu-button flat @click="dislike" style="border:1px solid #ddd;border-radius:1vw;margin:3vw;">
                内容无趣
            </mu-button>
            <mu-button flat @click="dislike" style="border:1px solid #ddd;border-radius:1vw;margin:3vw;">
                标题党
            </mu-button>
            <mu-button flat @click="dislike" style="border:1px solid #ddd;border-radius:1vw;margin:3vw;margin-top:0">
                质量低下
            </mu-button>
            <mu-button flat @click="dislike" style="border:1px solid #ddd;border-radius:1vw;margin:3vw;margin-top:0">
                其他
            </mu-button>
        </div>
    </mu-popover>
  </div>
</template>

<script>
import Imagev from "../utils/Image"
import Vue from 'vue';
import { List } from 'vant';
Vue.use(List);
export default {
    name:"LikeBar",
    components:{
        Imagev,
    },
    data(){
        return{
            likes:0,
            open: false,
            trigger: null,
            passage: {},
            id:Number,
            my_likes:0,
            show:false,
        }
    },
    props:{
    },
    mounted(){
        this.$store.dispatch("home/loadAll");
        for (const passage of this.$store.state.home.newsItems) {
            if (passage.id.toString() === this.$route.params.id) {
                this.passage = passage;
            }
        }
        this.id=this.passage.id;
        this.trigger = this.$refs.button;
        var myDate = new Date();
        var random = parseInt(Math.random() * 6+5);
        if (this.id==1){
            this.likes=parseInt((myDate.getHours()-8)*1800+myDate.getMinutes()*30+myDate.getSeconds()*0.5+random);
        }else if (this.id==2){
            this.likes=parseInt((myDate.getHours()-8)*1000+myDate.getMinutes()*30+myDate.getSeconds()*0.5+random);
        }else if (this.id==3){
            this.likes=parseInt((myDate.getHours()-8)*500+myDate.getMinutes()*30+myDate.getSeconds()*0.5+random);
        }else if (this.id==4){
            this.likes=parseInt((myDate.getHours()-8)*700+myDate.getMinutes()*30+myDate.getSeconds()*0.5+random);
        }else{
            this.likes=parseInt((myDate.getHours()-8)*200+myDate.getMinutes()*30+myDate.getSeconds()*0.5+random);
        }
    },
    methods:{
        dislike(){
            this.$toast.success("将减少该类内容推荐");
            this.open = !this.open;
        },
        //Vibration接口用于在浏览器中发出命令，使得设备振动。
        like(){
            this.my_likes++;
            this.likes++;
            this.show=true;
            
            navigator.vibrate = navigator.vibrate
                    || navigator.webkitVibrate
                    || navigator.mozVibrate
                    || navigator.msVibrate;

            if (navigator.vibrate) {
                // 支持
                console.log("支持设备震动！");
                navigator.vibrate([35]);
            }
            
            let _this=this
            setTimeout(function(){_this.show=false;}, 1000);
        }
    }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(-10px);
  opacity: 0;
}
</style>