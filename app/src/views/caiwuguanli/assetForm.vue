<template>
  <div class="assetForm">
    <header-top>
      <div slot="left">
        <img @click="$router.go(-1)" src="@/assets/img/back.png" />
      </div>
      <div slot="mid">资产负债表</div>
    </header-top>
    <div class="title">
      <span class="company">大新实业股份有限公司</span>
      <span>2019-10</span>
    </div>
    <div class="table">
      <table>
        <tr>
          <th>资产负债表</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>流动资产</th>
          <td>货币资金</td>
          <td>68,776,678.92</td>
        </tr>
        <tr>
          <th></th>
          <td>交易性金融资产</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>应收票据</td>
          <td>0.00</td>
        </tr>
         <tr>
          <th></th>
          <td>应收账款</td>
          <td>3,903,963.81</td>
        </tr>
        <tr>
          <th></th>
          <td>预付款项</td>
          <td>0.00</td>
        </tr>
        
       
        <tr>
          <th></th>
          <td>应收利息</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>应收股利</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>其他应收款</td>
          <td>48,592,463.23</td>
        </tr>
        <tr>
          <th></th>
          <td>存货</td>
          <td>0205,753.82</td>
        </tr>
        <tr>
          <th></th>
          <td>一年内到期的非流动资产</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>其他流动资产</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>流动资产合计</td>
          <td>121,478,859.78</td>
        </tr>
        <tr>
          <th>非流动资产</th>
          <td>可供出售金融资产</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>持有至到期投资</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>长期应收款</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>长期股权投资</td>
          <td>12,835,296.78</td>
        </tr>
        <tr>
          <th></th>
          <td>投资性房地产</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>固定资产</td>
          <td>1,286,084,411.28</td>
        </tr>
        <tr>
          <th></th>
          <td>减：固定资产折旧</td>
          <td>186,799,803.43</td>
        </tr>
        <tr>
          <th></th>
          <td>固定资产净值</td>
          <td>1,099,284,607.85</td>
        </tr>
        <tr>
          <th></th>
          <td>在建工程</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>工程物资</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>固定资产清理</td>
          <td>11,832.70</td>
        </tr>
        <tr>
          <th></th>
          <td>生产性生物资产</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>油气资产</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>无形资产</td>
          <td>12,081,771.18</td>
        </tr>
        <tr>
          <th></th>
          <td>商誉</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>长期待摊费用</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>递延所得税资产</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>其他非流动资产</td>
          <td>0.00</td>
        </tr>
        <tr>
          <th></th>
          <td>非流动资产合计</td>
          <td>34,526.84</td>
        </tr>
         <tr>
          <th>负债合计</th>
          <td></td>
          <td>359,790,892.48</td>
        </tr>
         <tr>
          <th>所有者权益（或股
              <br>
              东权益）</th>
          <td>实收资本（或股本）</td>
          <td>54,320,000.00</td>
        </tr>
         <tr>
          <th></th>
          <td>资本公积</td>
          <td>766,539,652.96</td>
        </tr>
         <tr>
          <th></th>
          <td>减：库存股</td>
          <td>0.00</td>
        </tr>
         <tr>
          <th></th>
          <td>盈余公积</td>
          <td>13,005,209.92</td>
        </tr>
         <tr>
          <th></th>
          <td>未分配利润</td>
          <td>52,036,612.93</td>
        </tr>
         <tr>
          <th></th>
          <td>其中：本年利润</td>
          <td>52,236,803.10</td>
        </tr>
         <tr>
          <th></th>
          <td>所有者权益（或股东权
              <br>
              益）合计</td>
          <td>885,901,475.81</td>
        </tr>
         <tr>
          <th>负债和所有者权益
              <br>
              （或股东权益）总
              <br>
              计</th>
          <td></td>
          <td>1,245,692,368.29</td>
        </tr>

      
      </table>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/common/Header";
export default {
  data() {
    return {};
  },
  components: {
    HeaderTop
  }
};
</script>

<style  lang="less" scoped>
.assetForm {
  .title {
    border-top: 0.2rem solid #e9e9e9;
  font-size: 18px;
    padding-left: 0.4rem;
    .company {
      color: #6f77fe;
      margin-right: 0.8rem;
    }
  }
  .table{
     padding-left: .2rem;
     padding-right: .2rem;
      margin-top: .3rem;
     display: flex;
     font-size: 13px;
    
     text-align: center;
     justify-content: center;
  }
  table,
  th,
  td {
    border: 1px solid grey;
    border-collapse: collapse;
    padding: .1rem .1rem;
  }
}
</style>