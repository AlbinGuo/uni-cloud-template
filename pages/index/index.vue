<template>
	<view class="content">
		<!-- 状态栏 -->
		<!-- 搜索框 -->
		<!-- 导航栏 -->
		<nav-bar></nav-bar>
		<tab></tab>
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
				
			}
		},
		onLoad() {
			
		},
		// tabbar点击触发
		onTabItemTap(option) {
			console.log(option)
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	$width: 200rpx;
	
	
</style>
