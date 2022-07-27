<template>
  <div >
    <div style="margin-top:1vh;width:100%;background-color:#FAFAFA;height:7.8vw;">
      <div style="position:absolute;margin-top:1.6vw;width:1.3vw;height:6vw;background-color:#009688;">
      </div>
      <div style="position:absolute;margin-top:0.6vh;" class="font2">
        精选评论
      </div>
    </div>
    <div class="hotlist-card">
        <div v-for="(item,i) in comments" :key="item.id">
            <CommentTop :msg="comments" :index=i @click.native="copy(i)" />
        </div>    
    </div>
  </div>
</template>

<script>
import CommentTop from "../topicwall/CommentTop";
export default {
    name:"Comment",
    components:{
        CommentTop,
    },
    props:{
        comments:Array
    },
    data(){
        return{

        }
    },
    mounted(){
        
    },
    methods:{
        copy(){
            
        }
    }
}
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