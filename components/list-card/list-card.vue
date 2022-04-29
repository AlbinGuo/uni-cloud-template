<template>
	<view @click="open">
		<!-- 视频 -->
		<!-- #ifndef APP-PLUS -->
		<view class="list-card" v-if="item.mode === 'video'">
			<view class="list-card-video">
				<video id="myVideo" 
					:src="item.videoUrl"
					@error="videoErrorCallback"
					></video>
				<view class="card-item-content" style="margin-left: 10rpx;">
					<view class="card-item-content-title" style="margin: 16rpx 0;">
						<text>{{item.title}}</text>
						<like :item="item"></like>
					</view>
					<view class="card-item-content-tag">
						<view class="card-item-content-tag-text">
							<view class="card-item-content-tag-text-item">
								{{item.classify}}
							</view>
						</view>
						<text class="card-item-content-tag-readcount">
							{{item.browse_count}}浏览
						</text>
					</view>
				</view>
			</view>
		</view>
		<!-- #endif -->
		
		<view class="list-card" v-if="item.mode === 'base'">
			<view class="card-item-img">
				<image lazy-load="../../static/icon_home.png" :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="card-item-content" style="margin-left: 10rpx;">
				<view class="card-item-content-title">
					<text>{{item.title}}</text>
					<like :item="item"></like>
				</view>
				<view class="card-item-content-tag">
					<view class="card-item-content-tag-text">
						<view class="card-item-content-tag-text-item">
							{{item.classify}}
						</view>
					</view>
					<text class="card-item-content-tag-readcount">
						{{item.browse_count}}浏览
					</text>
				</view>
			</view>
		</view>
		
		<!-- 多图模式 -->
		<view class="list-card mode-column" v-if="item.mode === 'column'">
			<view class="card-item-content">
				<view class="card-item-content-title">
					<text>{{item.title}}</text>
					<like :item="item"></like>
				</view>
				<view class="listcard-image">
					<view class="card-item-img" v-if="index < 3" v-for="(cover,index) in item.cover" :key="index">
						<image :src="cover" mode="aspectFill"></image>
					</view>
				</view>
				<view class="card-item-content-tag">
					<view class="card-item-content-tag-text">
						<view class="card-item-content-tag-text-item">
							{{item.classify}}
						</view>
					</view>
					<text class="card-item-content-tag-readcount">
						{{item.browse_count}}浏览
					</text>
				</view>
			</view>
		</view>
		
		<!-- 大图模式 -->
		<view class="list-card mode-column" v-if="item.mode === 'image'">
			<view class="card-item-content">
				<view class="listcard-image">
					<view class="card-item-img">
						<image lazy-load="../../static/07-01.png" :src="item.cover[0]" mode="aspectFill"></image>
					</view>
				</view>
				<view class="card-item-content-title">
					<text>{{item.title}}</text>
					<like :item="item"></like>
				</view>
				<view class="card-item-content-tag">
					<view class="card-item-content-tag-text">
						<view class="card-item-content-tag-text-item">
							{{item.classify}}
						</view>
					</view>
					<text class="card-item-content-tag-readcount">
						{{item.browse_count}}浏览
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"list-card",
		props: {
			mode: {
				type: String,
				default: "base"
			},
			item: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		data() {
			return { 
				
			};
		},
		methods: {
			open() {
				console.log('open')
			},
			videoErrorCallback(){
				
			}
		}
	}
</script>

<style lang="scss">
.list-card {
	display: flex;
	flex-direction: row;
	padding: 30rpx 2rpx;
	margin: 0 28rpx;
	border-radius: 4rpx;
	box-sizing: border-box;
	border-bottom: 1px solid #eceaea8a;
	&-video {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.card-item-img {
		width: 160rpx;
		height: 160rpx;
		box-shadow: 0 0px 11px #231f1f40;
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
		.card-item-content-title {
			position: relative;
			font-size: 32rpx;
			line-height: 1.2;
			margin-bottom: 10rpx;
			padding-right: 70rpx;
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
	
	&.mode-column {
		.listcard-image {
			width: 100%;
			padding-left: 0%;
			display: flex;
			flex-direction: row;
			width: 100%;
			margin: 20rpx 0;
			.card-item-img {
				flex: 1;
				margin-left: 20rpx;
				border-radius: 10rpx;
				overflow: hidden;
				&:first-child {
					margin-left: 0;
				}
				image {
					width: 100%;
					height: 100%;
				}
			}
			
		}
	}
}
</style>