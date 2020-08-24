<template>
	<div class="zcfg">
		<header-top>
            <div slot="left">
                <img @click="$router.go(-1)" src="@/assets/img/back.png">
            </div>
            <div slot="mid">政策法规</div>
        </header-top>
		<section>
			<van-list v-model="loading" :finished="finished" finished-text="没有更多数据了" @load="onLoad"> 
				<div class="zcfg-item" @click="goPoliciesDetails(item.id)" v-for="item in policiesAllList" :key='item.id'>
					<h1>{{item.policyName}}</h1>
					<p>{{item.informationDate}}</p>
					<span class="circle" v-show="item.readerStatus == 0" >new</span>
				</div>
			</van-list>
		</section>
	</div>
</template>
<script>
	import HeaderTop from '@/common/Header'
	export default {
		data() {
			return {
				policiesAllList:[],
				nowpage:0,
				isShowMessage:false,
				user_id:this.$store.state.loginInfo.sessionVal.uSER_ID,
				 // vant
				loading: false,   //是否处于加载状态
				finished: false,  //是否已加载完所有数据
			}
		},
		components:{
			HeaderTop
		},
		methods: {
			hui1() {
				this.$router.go(-1);
			},
            goPoliciesDetails(id){
            	this.$router.push({path:'/zhengceXiangQing',query:{id:id}});
			},
			onLoad(){
				this.getPoliciesList()
			},
			getPoliciesList(){//列表
				this.loading = true
				this.nowpage = this.nowpage + 1
				this.$http.post('app_Module3/policiesList',{nowpage:this.nowpage,user_id:this.user_id}).then(res=>{
                console.log(res)
                if(res.data.code == 200){
					this.policiesAllList.push(...res.data.data.policiesList)
                    this.pagesCount = res.data.data.page.pageCount
					this.loading = false;   //数据请成功后
					if(this.nowpage >=this.pagesCount){
						this.finished = true;
					}
				}
            })
			},
		},
		mounted(){
			this.getPoliciesList()
		}	
	}
</script>
<style lang="less">
	.zcfg{
	section {
		width: 100%;
		.scroll-zcfg-content{
			overflow: hidden;
			position: absolute;
			top: 1.18rem;
			bottom: 50px;
			left:0;
			right:0;
			border-top: 8px solid #ddd;
			padding:0 10px;
		}
		.zcfg-item {
			border-bottom: 1/100rem solid lightgray;
			width: 95%;
			background:white;		
			margin-left:10/100rem;	
			padding-left: 20/100rem;
			padding-top:20/100rem;
			list-style-type: none;
			padding-bottom:10px;
			position: relative;
			.circle{
				position: absolute;
				// background: red;
				right:10px;
				top: 50%;
				transform: translateY(-50%);
				color: red;
				border-radius: 3px;
				height: 12px;
				line-height: 10px;
				border: 1px solid red;
			}
			h1{
				font-size: 15px;
				font-weight: normal;
			}
			p{
				font-size: 14px;
				font-weight: lighter;
				padding-top:25/100rem;
			}
		}
	}
}
	
</style>