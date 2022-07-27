<template>
  <div style="position:relative;text-align:left;height:auto">
      <Imager style="margin-left:3vw;margin-top:3vw;" :src="msg[index].icon" width="10vw" height="10vw"/>
      <div style="position:absolute;left:16vw;top:3vw;color:#505050;font-size:3.5vw;">{{msg[index].username}}</div>
      <div style="position:absolute;left:16vw;top:8.5vw;color:#616161;font-size:3vw;">{{msg[index].date}}</div>
      <Imagev @click.native="like" style="position:absolute;right:3vw;top:0.5vw;margin-left:3vw;margin-top:5vw;" :src="thumb_url" width="4vw" height="4vw"/>
      <div :id="generateID(index)" style="position:absolute;right:9.5vw;top:5.2vw;color:#616161;font-size:3.5vw;">{{likes}}</div>
      <div style="margin-right:3vw;margin-left:16vw;margin-bottom:3vw;color:#202020;font-size:3.5vw;">{{msg[index].content}}</div>
      <mu-divider style="margin-left:16vw"></mu-divider>
  </div>
</template>

<script>
import Imager from "../utils/ImageRound"
import Imagev from "../utils/Image"
export default {
    name:"CommentTop",
    props:{
        msg:Array,
        index:Number
    },
    data(){
        return{
            thumb_url:"https://s2.ax1x.com/2020/03/07/3jqaaq.th.png",
            likes:0,
        }
    },
    components:{
        Imager,
        Imagev,
    },
    mounted(){
        this.likes=this.msg[this.index].likes;
    },
    methods:{
        like(){
            this.thumb_url="https://s2.ax1x.com/2020/03/09/898dJS.th.png";
            if (this.msg[this.index].likes==this.likes){
                this.likes++;
            }
            var id="like_"+this.index;
            var a = document.getElementById(id);
            a.style.color="#f44336";
            navigator.vibrate = navigator.vibrate
                    || navigator.webkitVibrate
                    || navigator.mozVibrate
                    || navigator.msVibrate;

            if (navigator.vibrate) {
                // 支持
                console.log("支持设备震动！");
                navigator.vibrate([35]);
            }
        },
        generateID(index){
            return "like_"+index;
        }
    }
}
</script>

<style>

</style>