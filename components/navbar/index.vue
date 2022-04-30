<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view class="status_bar" :style="{height: statusBarHeight+'rpx'}"></view>
			<view class="navbar-fixed-search" @click="goSearchPage">
				<view class="navbar-fixed-search_icon"></view>
				<view class="navbar-fixed-search_text">
					搜你想搜的内容
				</view>
			</view>
		</view>
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
		data(){
			return {
				// 手机状态栏高度
				statusBarHeight: 0
			}
		},
		created() {
			// 获取手机系统信息
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight * 2; // 2px = 1rpx
			// 获取微信胶囊信息 h5 app mp-alipay不支持
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log(menuButtonInfo)
			// #endif
			
		},
		methods: {
			goSearchPage() {
				uni.navigateTo({
					url: '/pages/home-page/home-page'
				})
			}
		}
	}
</script>

<style lang="scss">
	.navbar {
		&-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 750rpx;
			// height: 200rpx;
			background-color: $mk-base-color;
			display: flex;
			flex-direction: column;
			align-items: center;
			.status_bar {
			      width: 750rpx;
			      background-color: $mk-base-color;
			  }
			&-search {
				display: flex;
				flex-flow: row nowrap;
				justify-content: center;
				background-color: white;
				width: 600rpx;
				margin: 10rpx auto;
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