<template>
  <div>
      <div v-if="item_num==0" style="">
        <Imagev src="" width="" height="" style=""></Imagev>
        <div style="">购物车空空如也~</div>
        <div style="">快去选购一些宝贝吧</div>
      </div>
  </div>
</template>

<script>
import Imagev from "../../utils/Image"
export default {
    data(){
        return{
            item_num:0,
            item:{
                name:["2020最新版教师资格证100%正品行货","特价野味","这是一个小铃铛"],
                category:["全新无瑕疵","野山雀约200g一只","平安果大小"],
                num:["1","3","15"],
                prize:["69.4","30+☪20","5+☪10"],
            },
        }
    }
}
</script>

<style>

</style>