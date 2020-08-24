<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import Index from './components/index.vue'

export default {
  name: 'app',
  components: {
    // Index

  }
}
</script>

<style  lang="less">
// .el-table td, .el-table th.is-leaf,.el-table--border, .el-table--group{
//   border-color: red; 
// }
// .el-table--border::after, .el-table--group::after, .el-table::before{
//   background-color: red;
// }

input{
  color: #fff!important;
   border: 1px solid #0ab3fa!important;
    background-color: #1d2a6d!important;
}
// 解决element-ui的table表格控件表头与内容列不对齐问题
.el-table th.gutter{
    display: table-cell!important;
  }
// vue中百度地图api 去除左下角版权和文字
.BMap_cpyCtrl {
   display: none;
 }
.anchorBL {
   display: none;}

</style>
