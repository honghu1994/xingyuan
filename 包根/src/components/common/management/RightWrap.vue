<template>
  <div class="right-wrap">
    <slot name='breadcrumb'></slot>
    <slot name='authContent'></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  .right-wrap{
    background: url("../../../assets/images/authority/rightbox.png") no-repeat;
    background-size: 100% 100%;
    width: 15.6rem;
    height: 800px;
  }
</style>