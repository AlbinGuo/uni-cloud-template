<template>
	<view class="search-wrap">
		<view class="status_bar">  
		</view>
		<nav-bar :isSearch="true" @search="goSearch"></nav-bar>
		<view class="search-wrap-record" v-if="isHistory">
			<view class="search-wrap-record-head">
				<text class="history">搜索历史</text>
				<text class="clear" @click="clearAll">清空</text>
			</view>
			<view class="search-wrap-record-tags" v-if="historyList.length > 0">
				<view class="tag" v-for="(item,index) in historyList">
					<view class="wrap">
						<text class="cnt">{{item.name}}</text>
					</view>
				</view>
			</view>
			<view class="nodata" v-else>
				暂无搜索历史
			</view>
		</view>
		<list-scroll class="list-scroll" v-else>
			<list-card :item="item" v-for="item in searchList" :key="item._id"></list-card>
		</list-scroll>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import NavBar from '@/components/navbar/index.vue'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				// 手机状态栏高度
				searchList: [],
				statusBarHeight: 0,
				isHistory: true
			}
		},
		onLoad() {
		},
		computed:{
			...mapState(['historyList'])
		},
		methods: {
			goSearch(val) {
				if(!val){
					clearTimeout(this.timer)
					this.marker = false
					this.getSearch(val)
					return
				}
				if(!this.marker){
					this.marker = true
					this.timer = setTimeout(() => {
						this.marker = false
						this.getSearch(val)
					},1000)
				}
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			clearAll() {
				// this.$store.dispatch('set_history', {
				// 	name: 'test'
				// })
			},
			tst(){ 
				this.$store.dispatch('set_history', {
					name: 'test'
				})
			},
			async getSearch(val){
				try{
					if(!val){
						this.searchList = []
						this.isHistory = true
						return
					}
					this.isHistory = false
					const list = await this.$api.get_search({
						value: val
					})
					const {data} = list
					this.searchList = data
				}catch(e){ 
					console.error(e) 
				}
			}
		}
	}
</script>

<style lang="scss">
	.status_bar {  
	    height: var(--status-bar-height);  
	    width: 100%;  
	    background: $mk-base-color;  
	} 
	.search-wrap {
		&-record {
			display: flex;
			flex-direction: column;
			padding: 0 20rpx;
			&-head {
				display: flex;
				justify-content: space-between;
				margin: 20rpx 0;
				.history {
					color: $mk-base-color;
				}
				.clear {
					color: $uni-color-green;
				}
			}
			&-tags {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				flex-wrap: wrap;
				padding: 10rpx 0;
				.tag {
					margin: 8rpx 10rpx;
					.wrap {
						border: 1px solid $uni-text-color-grey;
						border-radius: 30rpx;
						padding: 2rpx 14rpx;
						color: $uni-text-color-grey;
						.index {
							margin-right: 8rpx;
							font-size: 28rpx;
						}
						.cnt {
							font-size: 30rpx;
						}
					}
				}
			}
		}
	}
	.nodata {
		color: #999;
		text-align: center;
		padding:20rpx 0;
		margin-top: 80rpx;
		font-size: 28rpx;
	}
</style>
