<template>
  <div class="user-agreement">
    <header-top>
        <div slot="left">
            <img @click="$router.go(-1)" src="@/assets/img/back.png">
        </div>
        <div slot="mid">用户协议</div>
    </header-top>
    <scroll
      class="scroll-content"
      ref="scroll"
    >
      <h3>《用户使用协议》</h3>
      <p>
          1.特别提示
          为了更好地为您提供服务，请您仔细阅读这份协议。本协议是您与本应用就您登录本应用平台进行注册及使用等所涉及的全部行为所订立的权利义务规范。您在注册过程中点击“注册”等按钮、及注册后登录和使用时，均表明您已完全同意并接受本协议，愿意遵守本协议的各项规则、规范的全部内容，若不同意则可停止注册或使用本应用平台。
          <br/>
          2.服务内容
          阳光365服务平台是一套服务于股份合作公司的集体资产管理系统，对南山区内股份合作公司三资信息进行监督管理，建立健全科学、民主、规范的股份合作公司决策规程，落实股东知情权、参与权和监督权，保护股东合法权益，促进股份合作公司健康发展。
            <br/>
          3.保密义务
          用户有义务对平台数据严格保密，禁止对外泄露。用户有义务执行有效的安全措施和操作规程，保证数据的安全性。保密内容为涉及用户由阳光365服务平台获取的所有相关信息（包括资产信息、资源信息、财务信息、人员信息、内部公告等）。
            <br/>
          4.隐私保护
          本应用不对外公开或向第三方提供单个用户的注册资料及用户在使用网络服务时存储在本平台的非公开内容，但下列情况除外：
          (1)事先获得用户的明确授权；
          (2)根据有关的法律法规要求；
          (3)按照相关政府主管部门的要求；
          (4)为维护社会公众的利益。
          4.1本应用可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与本平台同等的保护用户隐私的责任，则本平台有权将用户的注册资料等信息提供给该第三方，并无须另行告知用户。
          4.2在不透露单个用户隐私资料的前提下，本应用有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。
          4.3为提高用户的使用感受和满意度，用户同意本应用将基于用户的操作行为对用户数据进行调查研究和分析，从而进一步优化服务。
            <br/>
          5.协议修改
            <br/>
          5.1本应用有权随时修改本协议的任何条款，一旦本协议的内容发生变动，本应用将会在本应用上公布修改之后的协议内容，若用户不同意上述修改，则可以选择停止使用本应用。本应用也可选择通过其他适当方式（比如系统通知）向用户通知修改内容。
            <br/>
          5.2如果不同意本应用对本协议相关条款所做的修改，用户有权停止使用本应用。如果用户继续使用本应用，则视为用户接受本应用对本协议相关条款所做的修改。
      </p>
    </scroll>

  </div>
</template>

<script>
import HeaderTop from '@/common/Header'
import Scroll from '@/common/Scroll'
export default {
  components:{
    HeaderTop,Scroll
  }
}
</script>

<style lang='less' scoped>
  h3{
    font-size: 16px;
    text-align: center;
    line-height: 30px;
  }
  p{
    line-height: 20px;
    font-size: 14px;
    padding:0 6px;
    color: #333;
  }
  .scroll-content{
    overflow: hidden;
    position: absolute;
    top: 1.18rem;
    bottom: 50px;
    left:0;
    right:0;
    border-top: 1px solid #ddd;
    padding:0 10px;
  }
</style>