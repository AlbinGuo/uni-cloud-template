<template>
	<view class="home">
		<!-- 状态栏 -->
		<!-- 搜索框 -->
		<!-- 导航栏 -->
		<nav-bar></nav-bar>
		<view>
			<tab :list="tabList" @tab="tab" :tabIndex="tabIndex"></tab>
		</view>		
		<view class="home-list">
			<list :tab-list="tabList" @change="change" :activeIndex="activeIndex"></list>
		</view>
		
	</view>
</template>

<script>
	//easyCom
	import NavBar from "@/components/navbar/index"
	import Tab from "@/components/tab/index"
	import ListScroll from "@/components/list-scroll/list-scroll.vue"
	import ListCard from "@/components/list-card/list-card.vue"
	import List from "@/components/list/list.vue"
	export default {
		components:{
			NavBar,
			Tab
		},
		data() {
			return {
				tabList: [],
				tabIndex: 0,
				activeIndex: 0
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
			change(current) {
				this.tabIndex = current
			},
			tab({data, index}) {
				this.activeIndex = index
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
					const {data} = res
					data.unshift({
						name: '全部'
					})
					this.tabList = data
					console.error('this.tabList',this.tabList)
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
		// border: 1px blueviolet solid;
		overflow: hidden;
		.home-list {
			flex: 1;
			height: 100%;
			box-sizing: border-box;
		}
	}
	
</style>
