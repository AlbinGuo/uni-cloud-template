<template>
	<view>
		<view class="list-card" v-if="mode === 'base'">
			<view class="card-item-img">
				<image src="../../static/icon_home.png" mode="aspectFill"></image>
			</view>
			<view class="card-item-content" style="margin-left: 10rpx;">
				<view class="card-item-content-title">
					4月24日，在北京市新型冠状病毒肺炎疫情防控工作第313场新闻发布会上，朝阳区副区长杨蓓蓓介绍，截至24日16时，朝阳区新增确诊病例11名。其中一病例4月22日抗原检测阳性，4月23日确诊。
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
		
		<!-- 多图模式 -->
		<view class="list-card mode-column" v-if="mode === 'column'">
			<view class="card-item-content">
				<view class="card-item-content-title">
					4月24日晚，家乐福向记者表示，家乐福北京所有门店今晚延长营业时间，等所有顾客离店后才会闭店。
				</view>
				<view class="listcard-image">
					<view class="card-item-img" v-for="item in 3">
						<image src="../../static/icon_home_active.png" mode="aspectFill"></image>
					</view>
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
		
		<!-- 大图模式 -->
		<view class="list-card mode-column" v-if="mode === 'image'">
			<view class="card-item-content">
				<view class="listcard-image">
					<view class="card-item-img">
						<image src="../../static/07-01.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="card-item-content-title">
					今天早上9点多，位于拱墅区的世纪联华庆春店褪去了昨日的“高人气”，客流和平日相差不多，付款通道和门店外都没有排队现象，消费者的购物车也不像昨天那样满满当当。
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
	</view>
</template>

<script>
	export default {
		name:"list-card",
		props: {
			mode: {
				type: String,
				default: "base"
			}
		},
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
		.card-item-content-title {
			font-size: 32rpx;
			line-height: 1.2;
			margin-bottom: 10rpx;
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
		}
		.listcard-image {
			display: flex;
			flex-direction: row;
			width: 100%;
			height: 180rpx;
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