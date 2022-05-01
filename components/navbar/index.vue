<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view class="status_bar" :style="{height: statusBarHeight+'rpx'}"></view>
			<view class="navbar-fixed-search" v-if="!isSearch" @click="open">
				<view class="navbar-fixed-search_icon"></view>
				<view class="navbar-fixed-search_text">
					搜你想搜的内容
				</view>
			</view>
			<view class="navbar-fixed-search" :class="{search: isSearch}" v-else>
				<view class="arrow" @click="back">
					<uni-icons type="back" size="30" color="#fff"></uni-icons>
				</view>
				<view class="search-cnt">
					<uni-icons class="ico" type="search" size="20" color="#333"></uni-icons>
					<input type="text" placeholder="搜索" v-model="searchContent" @input="inputChange">
				</view>
				<text class="text" @click="goSearch(searchContent)">搜索</text>
			</view>
		</view>
		<!-- <view class="search-wrap-input" v-else>
			<view class="arrow" @click="back">
				<uni-icons type="back" size="30" color="#fff"></uni-icons>
			</view>
			<view class="input">
				<input type="text" placeholder="请输入要搜索的内容" style="padding: 10rpx 0;font-size: 28rpx;">
			</view>
		</view> -->
		<!-- #ifndef H5 -->
		<view :style="{height: (statusBarHeight * 2) + 30 + 'rpx'}"></view>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<view style="height: 80rpx;"></view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		props: {
			isSearch: {
				type: Boolean,
				default: false
			}
		},
		data(){
			return {
				// 手机状态栏高度
				statusBarHeight: 0,
				searchContent: ''
			}
		},
		created() {
			// 获取手机系统信息
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight * 2; // 2px = 1rpx
			// 获取微信胶囊信息 h5 app mp-alipay不支持
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// #endif
			
		},
		methods: {
			inputChange(e) {
				const {value} = e.detail
				this.$emit('search', value)
			},
			goSearch() {
				this.$emit('search', this.searchContent)
			},
			open() {
				// if(!this.isSearch) return
				uni.navigateTo({
					url: '/pages/home-page/home-page'
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss">
	.navbar {
		.search-wrap-input {
			display: flex;
			justify-content: space-between;
			padding: 10rpx 20rpx;
			background-color: $mk-base-color;
			.arrow{
				margin: auto 0;
			}
			.input{
				flex: 1;
				margin: auto 10rpx;
				padding: 10rpx 20rpx;
				border-radius: 8rpx;
				background-color: $uni-bg-color;
			}
		}
		&-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			padding: 0 12px;
			box-sizing: border-box;
			background-color: $mk-base-color;
			display: flex;
			flex-direction: column;
			align-items: center;
			.search{
				width: 100%;
				display: flex;
				justify-content: space-between;
				border-radius: 4rpx;
				background-color: $mk-base-color;
				.search-cnt {
					display: flex;
					flex-direction: row;
					flex: 1;
					align-items: center;
					background-color: $uni-bg-color;
					border-radius: 8rpx;
					padding: 0 20rpx;
					margin: 0 16rpx;
					input {
						padding: 10rpx 20rpx;
						font-size: 28rpx;
					}
				}
				.text {
					font-size: 30rpx;
					color: #FFF;
				}
				
			}
			.status_bar {
			      width: 100%;
			      background-color: $mk-base-color;
			  }
			&-search {
				display: flex;
				flex-flow: row nowrap;
				justify-content: center;
				background-color: white;
				width: 90%;
				margin: 16rpx auto;
				border-radius: 30rpx;
				align-items: center;
				&_icon {
					width: 40rpx;
					height: 40rpx;
					background-image: url("@/static/icon_search.png");
					background-size: cover;
				}
				&_text {
					width: 460rpx;
					height: 60rpx;
					color: #7d7d7d;
					line-height: 60rpx;
					padding-left: 40rpx;
				}
			}
		}
		
	}
</style>