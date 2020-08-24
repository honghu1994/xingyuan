<template>
  <div class="drop-down">
      <select v-model="value" @change="changeValue">
          <option value>请选择</option>
          <option v-for="item in dropDownArr" :value="item.value" :key="item.value">{{item.name}}</option>
      </select>
  </div>
</template>

<script>
export default {
    props:{
        dropDownArr:{
            type:Array,
            default(){
                return [{name:'',value:''}]
            }
        }
    },
    data(){
        return{
            value:'',
        }
    },
    methods:{
        changeValue(){
            // console.log(this.value)
            this.$emit('selectValue',this.value)
        }
    }
}
</script>

<style lang='less' scoped>
    .drop-down{
        width:100%;
        height: 30px;
        select{
            width: 100%;
            height: 30px;
            background:#eee;
            border:none;
            option{
                height: 28px;
                line-height: 28px;
            }
        }
    }
</style>