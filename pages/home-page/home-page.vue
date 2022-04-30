<template>
	<view class="search-wrap">
		<view class="search-wrap-input">
			<view class="arrow" @click="back">
				<uni-icons type="back" size="30" color="#fff"></uni-icons>
			</view>
			<view class="input">
				<input type="text" placeholder="请输入要搜索的内容">
			</view>
		</view>
		<view class="search-wrap-record">
			<view class="search-wrap-record-head">
				<text class="history">搜索历史</text>
				<text class="clear" @click="clearAll">清空</text>
			</view>
			<view class="search-wrap-record-tags">
				<view class="tag" v-for="(item,index) in 15">
					<view class="wrap">
						<text class="index">{{index}}</text>
						<text class="cnt">内瓤</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			clearAll() {
				console.log('clearAll====')
			}
		}
	}
</script>

<style lang="scss">
	.search-wrap {
		&-input {
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
</style>
