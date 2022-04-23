<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view style="height:20rpx;"></view>
			<view class="navbar-fixed-search" @click="">
				<view class="navbar-fixed-search_icon"></view>
				<view class="navbar-fixed-search_text">
					uniapp、vue
				</view>
			</view>
		</view>
		<view style="height:80rpx;"></view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.navbar {
		&-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 750rpx;
			height: 80rpx;
			background-color: $mk-base-color;
			display: flex;
			flex-direction: row;
			align-items: center;
			&-search {
				display: flex;
				flex-flow: row nowrap;
				justify-content: center;
				background-color: white;
				width: 600rpx;
				margin: 0 auto;
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