<template>
  <div style="">
      <div
        style="margin-top:1vh;width:100%;background-color:#FAFAFA;height:7.8vw;">
        <div
            style="position:absolute;margin-top:1.6vw;width:1.3vw;height:6vw;background-color:#009688;">
            </div>
        <div style="position:absolute;margin-top:0.6vh;" class="font2">
            相关推荐
      </div>
    </div>
    <div style="position:relative;text-align:left">
        <CardView v-if="!((this.id-1===0) || (this.id===0) || (this.id===5))" :item="news[0]"></CardView>
        <CardView v-if="!((this.id-1===1) || (this.id===1))" :item="news[1]"></CardView>
        <CardView v-if="!((this.id-1===2) || (this.id===2))" :item="news[2]"></CardView>
        <CardView v-if="!((this.id-1===3) || (this.id===3))" :item="news[3]"></CardView>
        <CardView v-if="!((this.id-1===4) || (this.id===4))" :item="news[4]"></CardView>
    </div>
  </div>
</template>

<script>
import CardView from "../passage/CardView";
export default {
    name:"Relative",
    props:{
        id:Number,
        news:Array,
    },
    data(){
        return{
        }
    },
    mounted(){
        console.log(this.id);
    },
    components:{
        CardView,
    },
    methods: {
		forId:function(index){
		    return "id_" +index
        },
    },
    
}
</script>

<style>

</style>