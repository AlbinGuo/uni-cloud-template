<template>
	<view class="content">
		<!-- 状态栏 -->
		<!-- 搜索框 -->
		<!-- 导航栏 -->
		<nav-bar></nav-bar>
		<tab :list="tabList"></tab>
		<!-- <view v-for="item in 100">
			hello - {{item}}
		</view> -->
	</view>
</template>

<script>
	//easyCom
	import NavBar from "@/components/navbar/index"
	import Tab from "@/components/tab/index"
	export default {
		components:{
			NavBar,
			Tab
		},
		data() {
			return {
				tabList: []
			}
		},
		onLoad() {
			this.getList()
			this.getLabel()
		},
		// tabbar点击触发
		onTabItemTap(option) {
			console.log(option)
		},
		methods: {
			async getList() {
				try{
					const res = await this.$api.getList({
						name: 'login'
					})
					this.tabList = res.data
				}catch(e){
					console.error('login err',e)
				}
			},
			async getLabel() {
				try{
					const res = await this.$api.getLabel({
						name: 'get_label'
					})
					this.tabList = res.data
				}catch(e){
					console.error('getLabel',e)
				}
			}
		}
	}
</script>

<style lang="scss">
	$width: 200rpx;
	
	
</style>
