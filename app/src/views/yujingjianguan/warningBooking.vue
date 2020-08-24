<template>
  <div class="booking">
    <header-top>
      <div slot="left">
        <img @click="$router.go(-1)" src="@/assets/img/back.png" />
      </div>
      <div slot="mid">预警登记</div>
    </header-top>
    <div class="content">
      <div class="title">
        <p class="lineht">股份公司</p>
        <p class="lineht">
          <span>预警分类</span>
          <template>
            <el-select v-model="value" placeholder="请选择" size="mini" class="choose">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </p>
        <p class="lineht">
          <span>预警项</span>
          <template>
            <el-select v-model="value02" placeholder="请选择" size="mini" class="choose02">
              <el-option
                v-for="item in options02"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </p>
        <p class="line"></p>
      </div>
      <div class="detail">
        <p class="lh01 margin">资产名称</p>
        <p class="lh01">关联资产</p>
        <p class="lh01">到期时间</p>
        <p class="lh01">地点
          <span class="address iconfont icon-jiantou">
           
          </span>
        </p>
        <p class="lh01">详情</p>
        <p class="lh01">附件</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/common/Header";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "资产预警"
        },
        {
          value: "选项2",
          label: "资金预警"
        },
        {
          value: "选项3",
          label: "交易预警"
        },
        {
          value: "选项4",
          label: "人员异动"
        }
      ],
      value: "",
      options02: [
        {
          value: "选项1",
          label: "即将到期物业"
        },
        {
          value: "选项2",
          label: "新增资产"
        },
        {
          value: "选项3",
          label: "资产变动"
        },
        {
          value: "选项4",
          label: "资产处置"
        }
      ],

      value02: ""
    };
  },
  components: {
    HeaderTop
  }
};
</script>

<style lang="less" scoped>
.booking {
  font-size: 16px;
  .content {
    .title {
      border-top: 0.6rem solid #fff;
      padding-left: 0.3rem;

      .lineht {
        line-height: 0.6rem;
      }
      .line {
        border-top: 1px solid black;
        margin-top: 0.1rem;
        padding-left: 0.3rem;
      }
    }
    .detail{
       padding-left: 0.3rem;
       .lh01{
         line-height: .8rem;
       }
       .margin{
         margin-top: .2rem;
       }
       .address{
       font-size: 16px;
       margin-left: 6rem;
     
         
       }
    }
    .choose {
      position: absolute;
      right: 2rem;
      width: 2.5rem;
     
    }
    .choose02 {
     position: absolute;
      right: 2rem;
      width: 2.5rem;
    }
  }
}
</style>