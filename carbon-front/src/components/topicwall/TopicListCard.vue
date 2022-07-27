<template>
  <div :id="gernerateId(index)" style="position:relative;height:18vw">
      <Imager v-if="img_show" :src="img_src" width="4.7vw" height="4.7vw" style="float:left;margin:3vw;margin-top:3.6vw;margin-right:1vw;"></Imager>
      <div v-if="!img_show" style="font-size: 3.5vw;color:#fff;text-align: top;background:#01579B;width:4.7vw;height:4.7vw;border-radius:50%;float:left;margin:3vw;margin-top:3.6vw;margin-right:1vw;">{{index+1}}</div>
      <div style="position:absolute;text-align:left;left:10vw;top:2.5vw;font-size: 4.5vw;color: #202020; text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;margin-right: 2.7vw;">
          {{msg[index].title}}
      </div>
      <div style="position:absolute;text-align:left;left:10vw;bottom:2.5vw;right:5vw;font-size: 3.5vw;color: #616161;margin-right: 2.7vw;">
          {{msg[index].hot_index}}万热度
      </div>
      <div :id="gernerateId2(index)" style="position:absolute;text-align:right;right:5vw;bottom:2.5vw;font-size: 3.5vw;color:#616161;">
          {{this.distance}}km
      </div>
      <mu-divider style="margin-left:10vw"></mu-divider>
  </div>
</template>

<script>
import Imager from "../utils/ImageRound";

export default {
    name:"TopicListCard",
    props:{
        msg:Array,
        index:0,
    },
    components:{
        Imager,
    },
    data(){
        return{
            distance:"0",
            img_src:"https://s2.ax1x.com/2020/03/07/3X49jP.th.png",
            img_show:false,
        }
    },
    mounted(){
        if (this.index==0){
            this.img_show=true;
            this.img_src="https://s2.ax1x.com/2020/03/07/3Xz6PI.th.png";
        }else if (this.index==1){
            this.img_show=true;
            this.img_src="https://s2.ax1x.com/2020/03/07/3XzgRP.th.png";
        }else if (this.index==2){
            this.img_show=true;
            this.img_src="https://s2.ax1x.com/2020/03/07/3XzcGt.th.png";
        }else{
            this.img_show=false;
        }

        if (this.msg[this.index].title.length>=18){
            var id="item_"+this.index;
            var bg = document.getElementById(id);
            bg.style.height="26vw";
        }
        //需要获取到当前位置
        var pos_x=30.7641440000;
        var pos_y=103.9865650000;
        var distance=Math.sqrt(Math.pow((this.msg[this.index].position_x-pos_x)*100,2)+Math.pow((this.msg[this.index].position_y-pos_x)*110,2)).toFixed(2);
        if (distance>99){
            this.distance="大于99";
        }else{
            this.distance=distance;
            if (distance<3){
                var id="dis_"+this.index;
                var dis = document.getElementById(id);
                dis.style.color="#009688";
            }
        }
    },
    methods:{
        gernerateId: function (index){
            return "item_" +this.index
        },
        gernerateId2: function (index){
            return "dis_" +this.index
        }
    },
}
</script>

<style>

</style>