<template>
	<view class="home">
		<!-- 状态栏 -->
		<!-- 搜索框 -->
		<!-- 导航栏 -->
		<nav-bar></nav-bar>
		<view>
			<tab :list="tabList" @tab="tab"></tab>
		</view>		
		<list-scroll>
			<view v-for="item in 10">
				<list-card></list-card>
			</view>		
		</list-scroll>
		
	</view>
</template>

<script>
	//easyCom
	import NavBar from "@/components/navbar/index"
	import Tab from "@/components/tab/index"
	import ListScroll from "@/components/list-scroll/list-scroll.vue"
	import ListCard from "../../components/list-card/list-card.vue"
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
			tab(data, index) {
				console.log(data, index)
			},
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
	page {
		height: 100%;
		display: flex;
	}
	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		border: 1px blueviolet solid;
		
	}
	
</style>
