<template>
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      弹框
  </el-dialog>
</template>

<script>
export default {
    props:{
        isShow:{
            type:Boolean,
            default: false
        }
    },
    data(){
        return{

        }
    }
}
</script>
<style lang='scss' scoped>

</style>