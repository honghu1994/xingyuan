<template>
  <div id="app">
    <!-- <login /> -->
    <router-view/>
  </div>
</template>

<script>
// import Login from './views/login/Login.vue'
export default {
  name: 'App',
  components:{
    // Login
  }
}
</script>

<style lang='scss'>

  body,html{
    width: 100%;
    height: 100%;
    margin:0;
    padding:0;

  }
  input,button,img,h3,input,section,ul,li,p{
    margin:0;padding: 0;
  }
  #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background: url("assets/images/bg.png") no-repeat;
  background-size: 100% 100%;
  /* background-size: 100% 100%; */
  /* background: #0c1c3d; */
  overflow: scroll;
  /* min-width: 1200px;
  max-width: 1920px; */
  margin: 0 auto;
  box-sizing: border-box;
}
.el-breadcrumb__inner, .el-breadcrumb__inner.is-link{
  color: #fff;
}
.el-message{
  font-size: 18px;
}
.authority,.asset-managment{
  font-size: 14px;
  width: 100%;
  height: 100%;
  background: url("./assets/images/bg4.png") no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  .nav-title{
    background: url("./assets/images/authority/tab.png") no-repeat;
    width: 142px;
    // border: 1px solid red;
    height: 46px;
    line-height: 48px;
    text-align: center;
    cursor: pointer;
    position: relative;
    span{
      color: #ffffff;
      font-size: 0.16rem;
    }
  }
  .first-pos{
    margin-left: 60px;
  }
  .main-content{
    width: 18.8rem;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: 0.3rem;
    .breadcrumb-nav{
      padding-left:25px;
      height: 0.64rem;
      // margin-bottom: 0.23rem;
      .el-breadcrumb{
        line-height: 0.64rem;
        .isYellow{
          color: #ffff00;
        }
      }
    }
  }
}
// tree
.el-tree-node:focus > .el-tree-node__content {
  background-color:transparent !important;
  color: #ffff00;
}
.el-tree{
  background-color:none !important;
   color: #fff;
}
.el-tree-node__content:hover .el-tree-node__expand-icon{
  background-color:transparent !important;
}
.el-tree-node__content:hover{
  background-color:transparent !important;
 
}
.el-tree-node:focus>.el-tree-node__content{
   background-color:transparent !important;
   color: #ffff00;
}
.el-tree--highlight-current .el-tree-node.is-checked > .el-tree-node__content {
    background-color: transparent!important;
     color:#ffff00;
   }
  .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
    background-color: transparent!important;
     color:#ffff00;  
  }
  // input
  .el-input__inner{
    background: transparent!important;
    color: #fff!important;
    height: 40px;
  }
  .query .el-input__inner{
    height: 36px;
  }
  input{
    background: transparent!important;
    color: #fff;
  }
  .el-form-item__label{
    color: #fff;
  }
  .el-date-editor .el-range-separator{
    color: #fff;
  }
  .el-date-editor .el-range-input{
    color: #fff;
  }
  // table 内容背景色
  .el-table, .el-table__expanded-cell {
    background-color: transparent;
}
// 
// el-table th, .el-table tr {
//     background-color: transparent;
// }
//table 线景色
.el-table td, .el-table th.is-leaf,.el-table--border, .el-table--group{
  border-color: #3760AF; 
}
.el-table--border::after, .el-table--group::after, .el-table::before{
  background-color: #3760AF;
}
.el-table__fixed-right::before, .el-table__fixed::before{
  background-color: transparent;
  
}
// 左边插槽
.main-content{
    width: 18.8rem;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: 0.3rem;
    .breadcrumb-nav{
        padding-left:25px;
        // height: 0.64rem;
        // margin-bottom: 0.23rem;
        .el-breadcrumb{
            // line-height: 0.64rem;
        .isYellow{
            color: #ffff00;
        }
        }
    }
    .title{
        height: .38rem;
        line-height: 0.38rem;
        text-align: center;
        color: #ffffff;
        font-size: 0.15rem;
    }
}
</style>
