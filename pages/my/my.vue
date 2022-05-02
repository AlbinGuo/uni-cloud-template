<template>
	<view class="wrap">
		<view class="wrap-header">
			<view class="wrap-header-bg">
				<image class="bg" src="../../static/bg.png" mode="aspectFill"></image>
			</view>
			<view class="wrap-header-avatar">
				<image class="img" src="../../static/07-01.png" mode="aspectFill"></image>
			</view>
			<view class="wrap-header-name">
				极客时间讲师团队
			</view>
			<view class="wrap-header-statics">
				<view class="wrap-header-statics-follow">
					<text class="desc">关注</text>
					<view class="count">
						325
					</view>
				</view>
				<view class="wrap-header-statics-fans">
					<text class="desc">粉丝</text>
					<view class="count">
						12
					</view>
				</view>
				<view class="wrap-header-statics-integration">
					<text class="desc">积分</text>
					<view class="count">
						203
					</view>
				</view>
			</view>
		</view>
		<view class="wrap-content">
			<view class="wrap-content-item" v-for="(item, index) in list" :key="index">
				<view class="wrap-content-item-icon">
					<uni-icons :type="item.icon" size="50upx" color="#aa55ff"></uni-icons>		
					<text class="desc">{{item.desc}}</text>
				</view>
				<view class="right-arrow">
					<uni-icons type="right" size="38upx" color="#aa55ff"></uni-icons>		
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						icon: 'contact-filled',
						desc: '我的文章'
					},
					{
						icon: 'help',
						desc: '意见反馈'
					}
				]
			}
		},
		// tabbar点击触发
		onTabItemTap(option) {
			console.log("my:",option)
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{
	}
	.desc{
		font-size: 30rpx;
	}
	.count{
		font-size: 28rpx;
		margin-top: 10rpx;
	}
	.wrap{
		&-header{
			position: relative;
			padding-top: 60rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			&-bg{
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				filter: blur(15rpx);
				z-index: -10;
				opacity: 0.8;
				.bg{
					width: 100%;
					height: 1005;
				}
			}
			&-avatar{
				.img{
					border-radius: 100rpx;
					width: 180rpx;
					height: 180rpx;
					box-shadow: 0px -1px 26px #353535fa;
				}
			}
			&-name{
				margin: 40rpx 0;
				font-size: 36rpx;
				font-weight: 600;
			}
			&-statics{
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				text-align: center;
			}
		}
		&-content{
			margin: 40rpx 0;
			&-item{
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				margin: 20rpx 0;
				padding: 30rpx;
				border-bottom: 1px solid #dcdcdc;
				&-icon{
					display: flex;
					align-items: center;
				}
				.desc{
					margin-left: 20rpx;
				}
				.right-arrow{
					
				}
			}
		}
		
	}
</style>
