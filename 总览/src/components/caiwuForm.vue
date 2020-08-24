<template>
  <div>
    <img src="../assets/images/top.png" alt class="topImg" />

    <h1>
      <img src="../assets/images/logo.png" alt />
      南山集体经济总览平台
    </h1>
    <p class="title">财务列表</p>
    <div class="content">
      <div class="contentwarp">
        <div class="inputbox">
          <!-- 报表类型 -->
          <div class="company">
            <span>财务报表</span>
            <template>
              <el-select
                v-model="fidID"
                placeholder="请选择"
                class="choose-company01"
                @change="changeCate(value)"
              >
                <!-- <el-option >请选择</el-option> -->
                <el-option
                  v-for="item in options"
                  :key="item.fid"
                  :label="item.name"
                  :value="item.fid"
                ></el-option>
              </el-select>
            </template>
            <!-- <button @click="toLook()">统计</button> -->
            <img src="../assets/images/返回.png" alt @click="goback()" />
          </div>
        </div>

        <!-- 表格 -->
        <table border="1" width="1780" height="1650" v-if="fidID=='101'">
          <tbody>
            <!-- 定义表格的主体 -->
            <tr>
              <td>资产</td>

              <td>行次</td>
              <td>年初数</td>
              <td>期末数</td>
              <td>
                负债和所有者权益
                <br />（或股东权益）
              </td>
              <td>行次</td>
              <td>年初数</td>
              <td>期末数</td>
            </tr>

            <tr>
              <td>流动资产</td>

              <td></td>
              <td></td>
              <td></td>
              <td>流动负债:</td>

              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>货币资金</td>

              <td>1</td>
              <td>27,053,313.96</td>
              <td>41,773,311.58</td>
              <td>短期借款</td>

              <td>68</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>短期投资</td>

              <td>2</td>
              <td>240.00</td>
              <td>240.00</td>
              <td>应付票据</td>

              <td>69</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>应收票据</td>

              <td>3</td>
              <td></td>
              <td></td>
              <td>应付账款</td>

              <td>70</td>
              <td>3,393,323.77</td>
              <td>3,643,853.66</td>
            </tr>
            <tr>
              <td>应该股利</td>

              <td>4</td>
              <td></td>
              <td></td>
              <td>预收账款</td>

              <td>71</td>
              <td>15,701,025.31</td>
              <td>3,547,059.48</td>
            </tr>
            <tr>
              <td>应收利息</td>

              <td>5</td>
              <td></td>
              <td></td>
              <td>应付工资</td>

              <td>72</td>
              <td>6,680,941.20</td>
              <td>8,227,846.20</td>
            </tr>
            <tr>
              <td>因收账款</td>

              <td>6</td>
              <td>6,162,330.06</td>
              <td>53,379,751.06</td>
              <td>应付福利费</td>

              <td>73</td>
              <td>2,920,256.23</td>
              <td>2,256,841.29</td>
            </tr>
            <tr>
              <td>其他应收款</td>

              <td>7</td>
              <td>451,534,302.20</td>
              <td>571,793,213.69</td>
              <td>应付股利</td>

              <td>74</td>
              <td>61,047.00</td>
              <td>61,047.00</td>
            </tr>
            <tr>
              <td>预付帐款</td>

              <td>8</td>
              <td>500,000.00</td>
              <td></td>
              <td>应交税金</td>

              <td>75</td>
              <td>11,530,821.07</td>
              <td>4,909,405.32</td>
            </tr>
            <tr>
              <td>应收补贴款</td>

              <td>9</td>
              <td></td>
              <td></td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>存货</td>

              <td>10</td>
              <td>220,265,469.87</td>
              <td>87,096,458.99</td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>待摊费用</td>

              <td>11</td>
              <td></td>
              <td></td>
              <td>其他应交款</td>

              <td>80</td>
              <td>2,999.37</td>
              <td>2,999.37</td>
            </tr>
            <tr>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
              <td>其他应付款</td>

              <td>81</td>
              <td>313,435,883.10</td>
              <td>378,814,556.75</td>
            </tr>
            <tr>
              <td></td>

              <td></td>
              <td></td>
              <td></td>

              <td>预提费用</td>

              <td>82</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>一年内到期的长期债权投资</td>
              <td>21</td>
              <td></td>
              <td></td>

              <td>预计负债</td>
              <td>83</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>其他流动资产</td>
              <td>24</td>
              <td></td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>一年内到期的长期负债</td>
              <td>86</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>流动资产合计</td>
              <td>31</td>
              <td></td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>长期投资：</td>
              <td></td>
              <td></td>
              <td></td>

              <td>其他流动负债</td>
              <td>90</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>长期股权投资</td>
              <td>32</td>
              <td>188,032,413.97</td>
              <td>185,184,413.97</td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>长期债权投资</td>
              <td>34</td>
              <td></td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>长期投资合计</td>
              <td>38</td>
              <td>188,032,413.97</td>
              <td>188,032,413.97</td>

              <td>流动负债合计</td>
              <td>100</td>
              <td>353,726,297.05</td>
              <td>401,463,609.07</td>
            </tr>
            <tr>
              <td>固定资产</td>
              <td></td>
              <td></td>
              <td></td>

              <td>长期负债</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>固定资产原价</td>
              <td>39</td>
              <td>534,686,247.87</td>
              <td>607,544,266.92</td>

              <td>长期借款</td>
              <td>101</td>
              <td>1,081,856,600.00</td>
              <td>1,194,057,605.50</td>
            </tr>
            <tr>
              <td>减：累计折旧</td>
              <td>40</td>
              <td>165,811,772.49</td>
              <td>183,840,681.63</td>

              <td>应付债券</td>
              <td>102</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>固定资产净值</td>
              <td>41</td>
              <td>368,874,475.38</td>
              <td>423,703,585.29</td>

              <td>长期应付款</td>
              <td>103</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>减：固定资产减值准备</td>
              <td>42</td>
              <td>-</td>
              <td></td>

              <td>专项应付款</td>
              <td>106</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>固定资产净额</td>
              <td>43</td>
              <td>-</td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>工程物资</td>
              <td>44</td>
              <td>-</td>
              <td></td>

              <td>其他长期负债</td>
              <td>108</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>在建工程</td>
              <td>45</td>
              <td>2,474,690.00</td>
              <td>2,474,690.00</td>

              <td>长期负债合计</td>
              <td>110</td>
              <td>1,081,856,600.00</td>
              <td>1,194,057,605.50</td>
            </tr>
            <tr>
              <td>固定资产清理</td>
              <td>46</td>
              <td>-</td>
              <td>-</td>

              <td>递延税项</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>递延税款贷项</td>
              <td>111</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>固定资产合计</td>
              <td>50</td>
              <td>371,349,165.38</td>
              <td>426,178,275.29</td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>无形资产及其他资产：</td>
              <td></td>
              <td></td>
              <td></td>

              <td>负债合计</td>
              <td>114</td>
              <td>1,435,582,897.05</td>
              <td>1,595,521,214.57</td>
            </tr>
            <tr>
              <td>无形资产</td>
              <td>51</td>
              <td></td>
              <td></td>

              <td>所有者权益（或股东权益）：</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>长期待摊费用</td>
              <td>52</td>
              <td>10,641,213.93</td>
              <td>6,684,278.28</td>

              <td>实收资本（或股本）</td>
              <td>115</td>
              <td>71,580,122.26</td>
              <td>71,580,122.26</td>
            </tr>
            <tr>
              <td>其他长期资产</td>
              <td>53</td>
              <td>15,130,000.00</td>
              <td>15,130,000.00</td>

              <td>减：已归还投资</td>
              <td>116</td>
              <td>#REF!</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>实收资本（或股本）净额</td>
              <td>117</td>
              <td>#REF!</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>资本公积</td>
              <td>118</td>
              <td>6,594,037.77</td>
              <td>6,594,037.77</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>盈余公积</td>
              <td>119</td>
              <td>2,100.29</td>
              <td>2,100.29</td>
            </tr>
            <tr>
              <td>无形资产及其他资产合计</td>
              <td>60</td>
              <td>25,771,213.93</td>
              <td>21,814,278.28</td>

              <td>其中：法定公益金</td>
              <td>120</td>
              <td>2,100.29</td>
              <td>2,100.29</td>
            </tr>
            <tr>
              <td>递延税项：</td>
              <td></td>
              <td></td>
              <td></td>

              <td>未分配利润</td>
              <td>121</td>
              <td>-223,090,708.00</td>
              <td>-286,477,532.03</td>
            </tr>
            <tr>
              <td>递延税款借项</td>
              <td>61</td>
              <td></td>
              <td></td>

              <td>递延税款借项</td>
              <td></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td>
                所有者权益
                <br />（或股东权益）合计
              </td>
              <td>122</td>
              <td>-144,914,447.68</td>
              <td>-208,301,271.71</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>资产总计</td>
              <td>67</td>
              <td>1,290,668,449.37</td>
              <td>1,387,219,942.86</td>

              <td>
                负债和所有者权益
                <br />（或股东权益）总计
              </td>
              <td>135</td>
              <td>1,290,668,449.37</td>
              <td>1,387,219,942.86</td>
            </tr>
          </tbody>
        </table>
        <div class="mybiaoge">
          <table border="1" width="1380" height="950" v-if="fidID=='102'" class="mytable">
            <tbody>
              <!-- 定义表格的主体 -->
              <tr>
                <td>项 目</td>
                <td>行 次</td>
                <td>上 年 累 计 数</td>
                <td>本 年 累 计 数</td>
              </tr>
              <tr>
                <td>一、主营业销售（营业）收入</td>
                <td>1</td>
                <td>346,258,531.41</td>
                <td>361,902,031.97</td>
              </tr>
              <tr>
                <td>减：销售（营业）成本</td>
                <td>2</td>
                <td>119,040,388.45</td>
                <td>107,329,702.32</td>
              </tr>
              <tr>
                <td>销售（营业）费用</td>
                <td>3</td>
                <td>2,045,100.21</td>
                <td>12,000.00</td>
              </tr>
              <tr>
                <td>销售（营业）税金及附加</td>
                <td>4</td>
                <td>19,461,417.14</td>
                <td>11,575,871.39</td>
              </tr>
              <tr>
                <td>二、主营业销售（营业）利润</td>
                <td>8</td>
                <td>205,711,625.61</td>
                <td>242,984,458.26</td>
              </tr>
              <tr>
                <td>加：其他销售（营业）收入</td>
                <td>9</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>减：其他销售（营业）支出（含税金及附加）</td>
                <td>10</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>管理费用</td>
                <td>11</td>
                <td>131,227,870.10</td>
                <td>148,087,118.81</td>
              </tr>
              <tr>
                <td>财务费用</td>
                <td>12</td>
                <td>38,580,730.90</td>
                <td>46,097,626.88</td>
              </tr>
              <tr>
                <td>汇兑损失（溢余为负）</td>
                <td>13</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>三、营业利润</td>
                <td>15</td>
                <td>35,903,024.61</td>
                <td>48,799,712.57</td>
              </tr>
              <tr>
                <td>加：投资收益</td>
                <td>16</td>
                <td>2,250,000.00</td>
                <td>134,593.89</td>
              </tr>
              <tr>
                <td>补贴收入</td>
                <td>17</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>营业外收入</td>
                <td>18</td>
                <td>7,836,220.11</td>
                <td>237,739.93</td>
              </tr>
              <tr>
                <td>减：营业外支出</td>
                <td>20</td>
                <td>747,491.96</td>
                <td>3,046,611.59</td>
              </tr>
              <tr>
                <td>加：以前年度损益调整</td>
                <td>21</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>四、利润总额</td>
                <td>24</td>
                <td>45,241,752.76</td>
                <td>46,125,434.80</td>
              </tr>
              <tr>
                <td>减：所得税</td>
                <td>25</td>
                <td>9,897,905.61</td>
                <td>11,531,358.70</td>
              </tr>
              <tr>
                <td>少数所有者（股东）损益</td>
                <td>26</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>五、净利润</td>
                <td>30</td>
                <td>35,343,847.15</td>
                <td>34,594,076.10</td>
              </tr>
              <tr>
                <td>附：按本企业占股比例计算的利润总额</td>
                <td>33</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <table border="1" width="1780" height="1050" v-if="fidID=='103'">
          <tbody>
            <tr>
              <td>项 目</td>
              <td>行次</td>
              <td>上期金额</td>
              <td>本期金额</td>

              <td>项 目</td>
              <td>行次</td>
              <td>上期金额</td>
              <td>本期金额</td>
            </tr>
            <tr>
              <td>一、经营活动产生的现金流量:</td>
              <td>1</td>
              <td>——</td>
              <td>——</td>

              <td>
                处置固定资产、无形资产和其他长期
                <br />资产所收回的现金净额
              </td>
              <td>30</td>
              <td></td>
              <td>250,000.00</td>
            </tr>
            <tr>
              <td>销售商品、提供劳务收到的现金</td>
              <td>2</td>
              <td>355,336,116.48</td>
              <td>312,903,509.97</td>

              <td>
                处置子公司及其他营业单位收
                <br />回的现金净额
              </td>
              <td>31</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>△客户存款和同业存放款项净增加额</td>
              <td>3</td>
              <td></td>
              <td></td>

              <td>收到其他与投资活动有关的现金</td>
              <td>32</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>△向中央银行借款净增加额</td>
              <td>4</td>
              <td></td>
              <td></td>

              <td>投资活动现金流入小计</td>
              <td>33</td>
              <td>2,250,000.00</td>
              <td>3,252,593.89</td>
            </tr>
            <tr>
              <td>△向其他金融机构拆入资金净增加额</td>
              <td>5</td>
              <td></td>
              <td></td>

              <td>
                购建固定资产、无形资产和其
                <br />他长期资产所支付的现金
              </td>
              <td>34</td>
              <td>11,502,179.23</td>
              <td>56,462,633.90</td>
            </tr>
            <tr>
              <td>△收到原保险合同保费取得的现金</td>
              <td>6</td>
              <td></td>
              <td></td>

              <td>投资支付的现金</td>
              <td>35</td>
              <td>3,228,892.00</td>
              <td></td>
            </tr>
            <tr>
              <td>△收到再保险业务现金净额</td>
              <td>7</td>
              <td></td>
              <td></td>

              <td>△质押贷款净增加额</td>
              <td>36</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>△保户储金及投资款净增加额</td>
              <td>8</td>
              <td></td>
              <td></td>

              <td>
                取得子公司及其他营业单位支
                <br />付的现金净额
              </td>
              <td>37</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>△处置交易性金融资产净增加额</td>
              <td>9</td>
              <td></td>
              <td></td>

              <td>支付其他与投资活动有关的现金</td>
              <td>38</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>△收取利息、手续费及佣金的现金</td>
              <td>10</td>
              <td></td>
              <td></td>

              <td>投资活动现金流出小计</td>
              <td>39</td>
              <td>14,731,071.23</td>
              <td>56,462,633.90</td>
            </tr>
            <tr>
              <td>△拆入资金净增加额</td>
              <td>11</td>
              <td></td>
              <td></td>

              <td>投资活动产生的现金流量净额</td>
              <td>40</td>
              <td>-12,481,071.23</td>
              <td>-53,210,040.01</td>
            </tr>
            <tr>
              <td>△回购业务资金净增加额</td>
              <td>12</td>
              <td></td>
              <td></td>

              <td>三、筹资活动产生的现金流量:</td>
              <td>41</td>
              <td>——</td>
              <td></td>
            </tr>
            <tr>
              <td>收到的税费返还</td>
              <td>13</td>
              <td></td>
              <td></td>

              <td>吸收投资收到的现金</td>
              <td>42</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>收到其他与经营活动有关的现金</td>
              <td>14</td>
              <td>418,080,602.21</td>
              <td>371,260,209.04</td>

              <td>
                其中：子公司吸收少数股东投
                <br />资收到的现金
              </td>
              <td>43</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>经营活动现金流入小计</td>
              <td>15</td>
              <td>773,416,718.69</td>
              <td>684,163,719.01</td>

              <td>取得借款所收到的现金</td>
              <td>44</td>
              <td>367,000,000.00</td>
              <td>775,246,300.00</td>
            </tr>
            <tr>
              <td>购买商品、接收劳务支付的现金</td>
              <td>16</td>
              <td>83,193,083.37</td>
              <td>106,829,702.32</td>

              <td>△发行债券收到的现金</td>
              <td>45</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>△客户贷款及垫款净增加额</td>
              <td>17</td>
              <td></td>
              <td></td>

              <td>收到其他与筹资活动有关的现金</td>
              <td>46</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>△存放中央银行和同业款项净增加额</td>
              <td>18</td>
              <td></td>
              <td></td>

              <td>筹资活动现金流入小计</td>
              <td>47</td>
              <td>367,000,000.00</td>
              <td>775,246,300.00</td>
            </tr>
            <tr>
              <td>△支付原保险合同赔付款项的现金</td>
              <td>19</td>
              <td></td>
              <td></td>

              <td>偿还债务所支付的现金</td>
              <td>48</td>
              <td>177,320,200.00</td>
              <td>663,045,294.50</td>
            </tr>
            <tr>
              <td>△支付利息、手续费及佣金的现金</td>
              <td>20</td>
              <td></td>
              <td></td>

              <td>
                分配股利、利润或偿付利息
                <br />所支付的现金
              </td>
              <td>49</td>
              <td>139,620,629.59</td>
              <td>168,314,234.48</td>
            </tr>
            <tr>
              <td>△支付保单红利的现金</td>
              <td>21</td>
              <td></td>
              <td></td>

              <td>
                其中：子公司支付给少数股东
                <br />的股利、利润
              </td>
              <td>50</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>支付给职工以及为职工支付的现金</td>
              <td>22</td>
              <td>53,184,514.54</td>
              <td>51,612,750.30</td>

              <td>支付其他与筹资活动有关的现金</td>
              <td>51</td>
              <td>6,000,000.00</td>
              <td></td>
            </tr>
            <tr>
              <td>支付的各项税费</td>
              <td>23</td>
              <td>50,992,310.76</td>
              <td>49,592,310.80</td>

              <td>筹资活动现金流出小计</td>
              <td>52</td>
              <td>322,940,829.59</td>
              <td>831,359,528.98</td>
            </tr>
            <tr>
              <td>支付其他与经营活动有关的现金</td>
              <td>24</td>
              <td>613,946,138.68</td>
              <td>352,085,688.98</td>

              <td>筹资活动产生的现金流量净额</td>
              <td>53</td>
              <td>44,059,170.41</td>
              <td>-56,113,228.98</td>
            </tr>
            <tr>
              <td>经营活动现金流出小计</td>
              <td>25</td>
              <td>801,316,047.35</td>
              <td>560,120,452.40</td>

              <td>
                四、汇率变动对现金及现金等
                <br />价物的影响
              </td>
              <td>54</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>经营活动产生的现金流量净额</td>
              <td>26</td>
              <td>-27,899,328.66</td>
              <td>124,043,266.61</td>

              <td>五、现金及现金等价物净增加额</td>
              <td>55</td>
              <td>3,678,770.52</td>
              <td>14,719,997.62</td>
            </tr>
            <tr>
              <td>二、投资活动产生的现金流量：</td>
              <td>27</td>
              <td>——</td>
              <td>——</td>

              <td>加：期初现金及现金等价物余额</td>
              <td>56</td>
              <td>23,374,543.44</td>
              <td>27,053,313.96</td>
            </tr>
            <tr>
              <td>收回投资收到的现金</td>
              <td>28</td>
              <td></td>
              <td></td>

              <td>六、期末现金及现金等价物余额</td>
              <td>57</td>
              <td>27,053,313.96</td>
              <td>41,773,311.58</td>
            </tr>
            <tr>
              <td>取得投资收益收到的现金</td>
              <td>29</td>
              <td>2,250,000.00</td>
              <td>3,002,593.89</td>

              <td></td>
              <td>58</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fidID: "101",
      // 资产类型
      options: [
        {
          fid: "101",
          name: "资产负债表"
        },
        {
          fid: "102",
          name: "利润表"
        },
        {
          fid: "103",
          name: "现金流量表"
        }
      ],

      // 总条数
      total: 0,
      pagenum: 1,
      value: "",
      value03: "",
      value02: "",
      tableData: [],
      input: "",
      input01: ""
    };
  },
  methods: {
    //查看的方法
    toLook() {
      this.getData();
    },
    //  切换资产类别的方法
    changeCate(value) {
      this.value = value;
    },
    //搜索资产名称的方法
    changeName(input01) {
      this.input01 = input01;
    },

    // // 搜索公司的方法
    changeCompany(input) {
      this.input = input;
    },
    // // 切换资产用途的方法
    changeUse(value01) {
      this.value01 = value01;
    },
    handleClick(val) {
      // console.log(val.assets_id);

      this.$router.push("/detail/" + val.assets_id);
    },
    goback() {
      this.$router.go(-1);
    },
    // 渲染表格数据的事件
    getData() {
      this.$axios
        .post("assetes/selectAssetsList", {
          nowpage: this.pagenum,
          category_id: this.value,
          assets_use: this.value01,
          company_name: this.input,
          assets_name: this.input01
        })
        .then(result => {
          if (result.data.code == 200) {
            this.tableData = result.data.data.assetsList;
            this.total = result.data.data.count;
            // console.log(this.tableData);
          }
        });
    },
    // 点击页面跳转的方法
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getData();
    }
  },

  mounted() {
    this.getData();
  }
};
</script>

<style lang="less" scoped>
body {
  background: url("../assets/images/bg.jpg") no-repeat;
  position: relative;
  padding-bottom: 30px;
}

.topImg {
  width: 100%;
}
h1 {
  color: #fff;
  margin-top: 25px;
  font-size: 34px;
  position: absolute;
  left: 50%;
  margin-left: -230px;
  top: -5px;
}
.title {
  color: #fff;
  font-size: 26px;
  float: left;
  margin-left: 60px;
  //  position: absolute;
  //  left: 0px;
  //  right: 0px;
}
.content {
  width: 100%;
  height: 850px;
  box-sizing: border-box;
  padding: 20px;

  .contentwarp {
    width: 100%;
    // height: 100%;

    box-sizing: border-box;
    padding: 40px;
    border: 1px solid #48c1ff;
    margin-top: 40px;

    .inputbox {
      color: #48c1ff;

      padding-bottom: 30px;
      // border-bottom: 1px solid #48c1ff;
      display: flex;
      //报表类型
      .company {
        display: flex;
        align-items: center;
        margin-right: 30px;
        span {
          margin-right: 10px;
        }
        .choose-company01 {
          width: 180px;
        }
        button {
          margin-left: 20px;
          font-size: 16px;

          color: #fff;
          height: 40px;
          background-color: #1d2a6d;
          outline: none;
          border: 1px solid #48c2ee;
          padding: 0 10px;
          cursor: pointer;
          border-radius: 5px;
        }
      }
      //资产名称
      .asset {
        display: flex;
        align-items: center;
        margin-right: 30px;

        span {
          margin-right: 10px;
        }
        .input01 {
          width: 300px;
        }
      }
    }
   .mybiaoge{
     td{
  padding: 0px 80px;
}
    
  
}



    .mytable{
    
      margin: 0 auto
    }

    .tab-table {
        
      margin-top: 40px;

      margin-bottom: 40px;
      border-collapse: collapse;
    }
    .page {
      text-align: center;
    }
  }
}
</style>