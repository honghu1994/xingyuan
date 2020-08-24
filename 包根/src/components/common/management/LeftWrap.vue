<template>
  <div class="left-wrap">
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
  
export default {
  data(){
    return{
      
    }
  },
  components:{
    
  },
  methods:{
    calculateSelectFormResult: function () {
      // console.log(this.selectFormResult)
      var arr = []
      function f (obj) {
        for (var i in obj) {
          if (obj[i].checked) {
            // console.log(2)
            arr.push(obj[i].name)
          }
          if (obj[i].children) {
            // console.log(3)
            if (obj[i].children.length !== 0) {
              // console.log(4)
              f(obj[i].children)
            }
          }
        }
      }
      f(this.treeData)
      this.selectFormResult = arr
      console.log(this.selectFormResult)
    }
  },
  watch:{
    // 深度监听 treeDate的数据变化 用 deep
    treeData: {
      handler: function (newVal, oldVal) {
        this.calculateSelectFormResult()
      },
      deep: true
    }
  }
}
</script>

<style lang='scss' scoped>
  .left-wrap{
    background: url("../../../assets/images/authority/leftbox.png") no-repeat;
    background-size: 100% 100%;
    width: 3.07rem;
    // min-width: 280px;
    height: 800px;
    overflow: hidden;
    
  }

</style>