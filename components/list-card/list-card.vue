<template>
	<view class="list-card">
		<view class="card-item-img">
			<image src="../../static/07-01.png" mode="aspectFill"></image>
		</view>
		<view class="card-item-content">
			<view class="card-item-content-title">
				大水水水水水水水水水水水水水水水大水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水
			</view>
			<view class="card-item-content-tag">
				<view class="card-item-content-tag-text">
					<view class="card-item-content-tag-text-item" v-for="item in 2">
						前端
					</view>
				</view>
				<text class="card-item-content-tag-readcount">
					250浏览
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"list-card",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.list-card {
	display: flex;
	flex-direction: row;
	padding: 10rpx;
	margin: 10rpx;
	border-radius: 5rpx;
	box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
	box-sizing: border-box;
	.card-item-img {
		width: 160rpx;
		height: 160rpx;
		border-radius: 10rpx;
		background-color: aqua;
		image {
			width: 100%;
			height: 100%;
			overflow: hidden;
			
		}
		
	}
	.card-item-content {
		flex: 1;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 20rpx;
		.card-item-content-title {
			font-size: 32rpx;
			line-height: 1.2;
			align-items: flex-start;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.card-item-content-tag {
			align-items: flex-end;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-size: 26rpx;
			.card-item-content-tag-text {
				display: flex;
				flex-direction: row;
				.card-item-content-tag-text-item {
					padding: 0 10rpx;
					margin-right: 10rpx;
					color: $mk-base-color;
					border: 1px $mk-base-color solid;
					border-radius: 30rpx;
				}
			}
			.card-item-content-tag-readcount {
				color: #999;
				line-height: 1.5;
			}
		}
	}
}
</style>