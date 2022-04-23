<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view class="status_bar" :style="{height: statusBarHeight+'rpx'}"></view>
			<view class="navbar-fixed-search" @click="">
				<view class="navbar-fixed-search_icon"></view>
				<view class="navbar-fixed-search_text">
					uniapp、vue
				</view>
			</view>
		</view>
		<view style="height:90rpx;"></view>
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
			console.log('info:', info)
			this.statusBarHeight = info.statusBarHeight * 2; // 2px = 1rpx
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
					line-height: 60rpx;
					padding-left: 40rpx;
				}
			}
		}
		
	}
</style>