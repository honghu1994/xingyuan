<template>
  <div class="wrapper" ref="wrapper">
    <div class="content2" style="">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      scroll:null,
    }
  },
  mounted(){
    // 1.创建BScroll对象
    // this.$nextTick(()=>{
    //   this.getBScroll()
    // })
    setTimeout(this.getBScroll(),20)
  },
  created(){
    // this.$nextTick(()=>{
    //   this.getBScroll()
    // })
  },
  methods:{
    getBScroll(){
      if(!this.scroll){
        this.scroll = new BScroll(this.$refs.wrapper,{
          click:true,
          probeType:this.probeType,//
          pullUpLoad:this.pullUpLoad,//此参数监听滚动到底部
        })
      }else{
        this.scroll.refresh();
      }
      console.log(this.scroll)
      // 2.监听滚动的位置
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll',(position) => {
        // console.log(position)
        this.$emit('scroll',position)
      })
      }
      // 3.监听scroll滚动到底部，上拉事件
       if(this.pullUpLoad){
         this.scroll.on('pullingUp',()=>{
         // console.log('上拉加载更多')
         this.$emit('pullingup')
       })
       }
    },
    // 滚动到指定位置
    scrollTo(x,y,t=300){
      this.scroll && this.scroll.scrollTo(x,y,t)
    },
    // 完成上拉加载更多之后
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    // 刷新
    refresh(){
      console.log(222222)
      console.log(this.scroll)
      this.scroll && this.scroll.refresh()
    },
    getScrollY(){
     return this.scroll ? this.scroll.y:0
    }
  }
}
</script>
<style lang="less" scoped>
  .wrapper{
    // height:100vh;
    // overflow: hidden;
  }
    .content2{
        // overflow: hidden;
        // position: absolute;
        // top: 1.18rem;
        // bottom: 50px;
        // left:0;
        // right:0;
        // border-top: 1px solid #ddd;
        // padding:0 10px;
        // height: 100%;

    }
</style>
<!--<template>
  <div class="wrapper" ref="scroll">
    <div class="content2">
      <slot></slot>
    </div>
  </div>
</template>
<script>-->
//     import BScroll from 'better-scroll'    
//     export default {
//         mounted(){
//             setTimeout(()=>{
//                  this._initScroll()
//             },20)
//         },
//         props:{
//             probeType:{
//                 type:Number,
//                 default:1
//             },
//             /**
//              * 是否实时监听滚动
//              */
//             listenScroll: {
//                 type: Boolean,
//                 default: false
//             },
//             /**
//              * 点击列表是否派发click事件
//              */
//             click:{
//                 type:Boolean,
//                 default:true
//             },
//             /**
//              * 列表数据
//              */
//             data:{
//                 type:Array,
//                 default:null
//             },
//             refreshDelay:{
//                 type:Number,
//                 default:20
//             },
//             /**
//              * 列表向上滚动加载
//              */
//             pullup:{
//                 type:Boolean,
//                 default:false
//             },
//             beforeScroll:{
//                 type:Boolean,
//                 default:false
//             }
//         },
//         methods:{
//             _initScroll(){
//                 if(!this.$refs.scroll){
//                     return;
//                 }
//                 this.scroll = new BScroll(this.$refs.scroll,{
//                     probeType:this.probeType,
//                     mouseWheel: true,
//                     disableMouse: false ,//启用鼠标拖动
//                     disableTouch: false, //启用手指触摸
//                     click:this.click
//                 })
//                 if(this.listenScroll){
//                     let that=this;
//                     this.scroll.on('scroll',(pos)=>{
//                         that.$emit('scroll',pos);
//                     })
//                 }
//                 if(this.pullup){
//                     this.scroll.on('scrollEnd',()=>{
//                         if(this.scroll.y<=(this.scroll.maxScrollY+40)){
//                             this.$emit('scrollToEnd')
//                         }
//                     })
//                 }
//                 if(this.beforeScroll){
//                     this.scroll.on('beforeScrollStart',()=>{
//                         this.$emit('beforeScroll')
//                     })
//                 }
//                 // console.log(this.scroll)
//             },
//             refresh(){
//               console.log( this.scroll)
//                 this.scroll&&this.scroll.refresh();
//             },
//             enable(){
//                 this.scroll&&this.scroll.enable();
//             },
//             disable(){
//                 this.scroll&&this.scroll.disable();
//             },
//             scrollTo(){
//                 this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments);
//             },
//             scrollToElement(){
//                 this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments);
//             }
//         },
//         watch:{
//             data(){
//                 setTimeout(()=>{
//                     this.refresh();
//                 },this.refreshDelay)
//             }
//         }
//     }
// </script>