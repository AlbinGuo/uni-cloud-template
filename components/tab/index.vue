<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll-box">
				<view class="tab-scroll-box-item" v-for="(item, index) in list" :key="index">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="icon-setting-box">
			<view class="icon-setting">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tab",
		props: {
			list: {
				type: Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				list: [
					{
						name: 'uni-app'
					},
					{
						name: 'Mysql数据库'
					},
					{
						name: 'Vue'
					},
					{
						name: '前端'
					},
					{
						name: '数据库'
					},
					{
						name: '后端'
					},
					{
						name: 'MongoDB'
					},
					{
						name: 'Javascript'
					}
				]
			};
		}
	}
</script>

<style lang="scss">
	.tab{
		display: flex;
		width: 750rpx;
		border-bottom: 1px $mk-base-color solid;
		// background-color: aqua;
		box-sizing: border-box;
		display: flex;
		flex: row;
		.tab-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.tab-scroll-box{
				display: flex;
				flex-direction: row;
				align-items: center;
				flex-wrap: nowrap;
				height: 80rpx;
				box-sizing: border-box;
				.tab-scroll-box-item {
					flex-shrink: 0;
					color: #333;
					padding: 0 20rpx;
					font-size: 28rpx;
				}
			}
		}		
		.icon-setting-box{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 20rpx;
			// box-shadow: -8px 0px 16px 1px #b73ede4f;
			.icon-setting {
				width: 40rpx;
				height: 40rpx;
				background-image: url("@/static/icon_list.png");
				background-size: cover;
			}
			
		}
		
	}
	
</style>