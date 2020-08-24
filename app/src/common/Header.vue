<template>
  <div>
      <div class="header">
        <div class="left" >
            <slot name="left" ></slot>
        </div>
        <div class="mid" >
            <slot name="mid" ></slot>
        </div>
        <div class="right" >
            <slot name="right" ></slot>
        </div>
    </div>
    <div style="margin-bottom:1.18rem; "></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
    .header{
        position: fixed;
        left: 0;
        top: 0;
        height: 1.18rem;
        z-index:100;
        background: #6f77fe;
        width: 100%;
        display: flex;
      /*  font-size: 0.46rem;*/
         font-size: 20px;
        // font-size: 30px;
        text-align: center;
        align-items: center;
        color: #fff;
        .left{
           width: 60px;
        }
        .mid{
            flex:1;
        }
        .right{
            width:80px;
        }
    }
</style>