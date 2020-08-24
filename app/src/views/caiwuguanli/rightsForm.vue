<template>
  <div class="profitForm">
      <header-top>
      <div slot="left">
        <img @click="$router.go(-1)" src="@/assets/img/back.png" />
      </div>
      <div slot="mid">股东权益分配</div>
    </header-top>
    <div class="title">
      <span class="company">大新实业股份有限公司</span>
      <span>2019-10</span>
    </div>
    <div class="head">
         <span>实际分红情况统计表</span>
    </div>
   
    <div class="table">
        
      <table>
        <tr>
          <th>实际分红股东人数</th>
          <td></td>
          <td>XX</td>
         
          
        </tr>
        <tr>
          <th>在世合作股股东人数</th>
          <td></td>
          <td>XX</td>
          
        </tr>
        <tr>
          <th>在世募集股股东人数</th>
          <td></td>
          <td>XX</td>
          
        </tr>
        <tr>
          <th>继承合作股股东人数</th>
          <td>有投票权</td>
          <td>XX</td>
          
        </tr>
        <tr>
            <th></th>
            <td>仅分红权</td>
            <td>XX</td>
            
        </tr>
        <tr>
            <th>继承募集股股东人数</th>
            <td>有投票权</td>
            <td>XX</td>
            
        </tr>
        <tr>
            <th></th>
            <td>仅分红权</td>
            <td>XX</td>
            
        </tr>
        <tr>
            <th>新出生股东人数</th>
            <td>有投票权</td>
            <td>XX</td>
            
        </tr>
        <tr>
            <th></th>
            <td>仅分红权</td>
            <td>XX</td>
            
        </tr>
        <tr>
            <th>娶入（入赘）股东人数</th>
            <td></td>
            <td>XX</td>
            
        </tr>
        <tr>
            <th></th>
            <td></td>
            <td>xx</td>
            
        </tr>
        <tr>
            <th>法院判决但未备案股东人数</th>
            <td></td>
            <td>XX</td>
            
        </tr>
        <tr>
            <th></th>
            <td></td>
            <td>XX</td>
            
        </tr>

       
        
       
  
      
       

      
      </table>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/common/Header";
export default {
    data() {
        return {
            
        }
    },
      components: {
    HeaderTop
  },

}
</script>

<style  lang="less" scoped>
.profitForm{
     .title {
    border-top: 0.2rem solid #e9e9e9;
    font-size: 18px;
    padding-left: 0.4rem;
    .company {
      color: #6f77fe;
      margin-right: 0.8rem;
    }
  }
  .head{
       display: flex;
       font-size: 16px;
        justify-content: center;
        margin-top: .3rem;
  }
   .table{
      margin-top: .3rem;
     display: flex;
     border-bottom: 0.2rem solid #fff;
     font-size: 14px;
      padding-left: .2rem;
     padding-right: .2rem;
     
     
    
     text-align: center;
     justify-content: center;
  }
  table,th{
    border: 1px solid grey;
    border-collapse: collapse;
    padding: .1rem .3rem;
  }
 
  td{
      border: 1px solid grey;
    border-collapse: collapse;
    padding: .1rem .4rem;
  }

}

</style>