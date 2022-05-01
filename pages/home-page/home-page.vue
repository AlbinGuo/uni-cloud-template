<template>
	<view class="search-wrap">
		<view class="status_bar">  
		</view>
		<nav-bar :isSearch="true"></nav-bar>
		<view class="search-wrap-record">
			<view class="search-wrap-record-head">
				<text class="history">搜索历史</text>
				<text class="clear" @click="clearAll">清空</text>
			</view>
			<view class="search-wrap-record-tags" v-if="historyList.length > 0">
				<view class="tag" v-for="(item,index) in historyList">
					<view class="wrap">
						<text class="index">{{index}}</text>
						<text class="cnt">内瓤</text>
					</view>
				</view>
			</view>
			<view class="nodata" v-else>
				暂无搜索历史
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				// 手机状态栏高度
				statusBarHeight: 0,
				historyList: [1]
			}
		},
		created() {
			// 获取手机系统信息
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight * 4; // 2px = 1rpx
			// 获取微信胶囊信息 h5 app mp-alipay不支持
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// #endif
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			clearAll() {
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
