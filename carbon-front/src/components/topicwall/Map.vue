<template>
  <div>
    <div id="topic-map-container" class="topic-map-container">
      <el-amap
        ref="map"
        vid="amapDemo"
        :amap-manager="amapManager"
        :events="mapEvents"
        :center="center"
        :zoom="zoom"
        :plugin="plugin"
        class="amap-demo"
        :rotateEnable="true"
      >
      </el-amap>
    </div>
  </div>
</template>

<script>
import VueAMap from "vue-amap";

let amapManager = new VueAMap.AMapManager();
/*
let circleMarker = new VueAMap.Circle({
  center:this.center,
  map: this.map,
  radius:10,
  fillColor:"#FF4D50", //圆形填充颜色
  fillOpacity: 0.2, //填充透明度
  strokeWeight: 1 ,
  strokeColor:"#FF4D50", //线条颜色，为了保证感觉无线条，和填充颜色一致即可
  strokeOpacity: 0.2, //线条透明度，为了保证感觉无线条，和填充颜色透明度一致即可
  cursor:'pointer',
  zIndex:15,
  extData:"data-id"
})
AMap.event.addListener(circleMarker, "click", markerClickFire);
function markerClickFire(e) {
console.log(circleMarker.getExtData())
console.log(e.target.data)
}
let requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
let cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;
let that = this
function CircleShow(radius,level,color){
  this.radius = radius;
  this.level = new Number(level);
  this.color = color;
  if(Number.isNaN(this.level)){
    this.level = 1;
  }//至少1层
  if(!this.color || !this.color.fillColor){
    this.color = {
    fillColor:"blue",//默认蓝色
    fillOpacity:0.5  //默认初始透明度0.5
  }
}
//计算平均每段扩展距离的透明度
this.endOpacity = 0.1;    //终止透明度设置为0.1
this.speedOpacity = (this.color.fillOpacity - this.endOpacity)/this.radius; //每米的透明度
//先加一层白色的覆盖物，加在图片上表示覆盖范围
this.circle0 = new AMap.Circle({
map:that.map,
center:that.center,
radius:this.radius,
fillColor:"white",
fillOpacity: 0.2,
strokeWeight: 1 ,
strokeColor:"white",
strokeOpacity: 0.2
});
//按层数循环构造覆盖物，并加在图片上
this.circles = new Array();
for(let i=1; i< this.level; i++){
  let circle = new AMap.Circle({
  map:that.map,
  center:that.center,
  radius:0,
  fillColor:this.color.fillColor,
  fillOpacity: this.color.fillOpacity,
  strokeWeight: 1,
  strokeColor:this.color.fillColor,
  strokeOpacity: this.color.fillOpacity
  });
  this.circles.push(circle);
}
this.clock=new Array(this.level);
}
CircleShow.prototype.start = function (distance,t0){
let _self = this;
function animateStart(startTime,circle,index){
//计算时间差
  let time = new Date().getTime()-startTime;
  if(time<0){
    circle.setOptions({
    map:that.map,
    center:that.center,
    radius:0,
    fillColor:_self.color.fillColor,
    fillOpacity: _self.color.fillOpacity,
    strokeWeight: 1,
    strokeColor:_self.color.fillColor,
    strokeOpacity: _self.color.fillOpacity
    })
    // circle.setRadius(0);           //半径
    //  circle.setFillOpacity(_self.color.fillColor); //透明度
    //  circle.setStrokeOpacity(_self.color.fillOpacity); //透明度
    //如果未达到执行实现则直接等待
    _self.clock[index] = window.requestAnimationFrame(animateStart.bind(null,startTime,circle,index));
    return;
  }
  //计算当前半径
  //匀减速运动下，每隔t时间，应该扩散的半径:
  //r=r0*(2*t*t0-t*t)/t0
  //其中，r0为最终的扩散半径，即this.radius
  let r = Math.floor(_self.radius*(2*time/t0-time*time/t0/t0));
  let opacity = 0;
  if(time >= t0){
    //达到运行时间之后
    //设置圆形覆盖物的样式
    circle.setOptions({
    map:that.map,
    center:that.center,
    radius:_self.radius,
    fillColor:_self.color.fillColor,
    fillOpacity: _self.endOpacity,
    strokeWeight: 1,
    strokeColor:_self.color.fillColor,
    strokeOpacity: _self.endOpacity
    })
  // circle.setRadius(_self.radius);        //半径
  // circle.setFillOpacity(_self.endOpacity); //透明度
  // circle.setStrokeOpacity(_self.endOpacity); //透明度
  startTime = new Date().getTime() + distance;  //起始时间设置为当前时间加上1倍的时间间隔
  _self.clock[index] = window.requestAnimationFrame(animateStart.bind(null,startTime,circle,index));
  }else{
    //计算透明度
    let opacity = _self.color.fillOpacity -
    Number.parseFloat((_self.speedOpacity * r).toFixed(5)); //四舍五入小数点后5位
    //设置圆形覆盖物的样式
    circle.setOptions({
      map:that.map,
      center:that.center,
      radius:r,
      fillColor:_self.color.fillColor,
      fillOpacity: opacity,
      strokeWeight: 1,
      strokeColor:_self.color.fillColor,
      strokeOpacity: opacity
    })
  // circle.setRadius(r);       //半径
  // circle.setFillOpacity(opacity);    //透明度
  // circle.setStrokeOpacity(opacity);  //透明度
  _self.clock[index] = window.requestAnimationFrame(animateStart.bind(null,startTime,circle,index));
  }
}
//循环每一层执行动画
for (let [index,circle] of this.circles.entries()) {
  animateStart(new Date().getTime()+index*distance, circle, index);
}
}
//半径、层数、中心点、{填充颜色、初始透明度}
var circles = new CircleShow(40, 5, {fillColor:'#FF4D50',fillOpacity:0.5});
//参数：每一层播放的间隔时间、每一层扩散至最大所花费的总时间。
circles.start(1000,4000);
*/

export default {
  data() {
    let self = this;
    return {
      center: [104.08786173, 30.66253265],
      amapManager,
      zoom: 14,
      lng: 0,
      lat: 0,
      loaded: false,
      mapEvents: {
        init(o) {
          o.setMapStyle("amap://styles/whitesmoke");
        }
      },
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            }
          }
        }
      ]
    };
  },
  name: "Map"
};
</script>

<style>
.topic-map-container {
  position: relative;
  overflow: hidden;
  height: 20vh;
  margin-top: 5vh;
  margin-bottom: 1vh;
}
</style>
