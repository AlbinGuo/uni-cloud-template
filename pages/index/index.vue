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
			this.getLabel()
		},
		// tabbar点击触发
		onTabItemTap(option) {
			console.log(option)
		},
		methods: {
			getLabel() {
				const _this = this
				uniCloud.callFunction({
					name: 'get_label'
				}).then((res) => {
					const {result} = res
					console.log('result==',result.data)
					_this.tabList = result.data
				})
			}
		}
	}
</script>

<style lang="scss">
	$width: 200rpx;
	
	
</style>
