<template>
  <div class="loading">
      <img src="../assets/img/loading1.gif" alt="">
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang='less' scoped>
    .loading{
        position: fixed;
        left: 0;
        top: 1.18rem;
        right:0;
        bottom: 50px;
        width: 100%;

        background: rgba(225, 225, 225, 0.6);
        z-index: 100;
        img{
            width: 50px;
            position: absolute;
            left: 50%;
            top:50%;
            transform: translate(-50%,-50%);
        }
    }
</style>