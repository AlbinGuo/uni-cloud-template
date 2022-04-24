<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll-box">
				<view class="tab-scroll-box-item" @click="clickTab(item, index)"
									:class="{active: activeIndex === index}"
									v-for="(item, index) in list" :key="index">
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
			},
			tabIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				activeIndex: 0
			};
		},
		watch: {
			tabIndex(newVal, oldVal) {
				this.activeIndex = newVal
			}
		},
		methods: { 
			clickTab(item, index){
				this.activeIndex = index
				// 向父组件传递事件
				this.$emit("tab", {
					data: item, 
					index: index
				})
			}
		}
	}
</script>

<style lang="scss">
	.tab{
		width: 750rpx;
		border-bottom: 1px $mk-base-color solid;
		box-sizing: border-box;
		display: flex;
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
				.active {
					color: $mk-base-color;
				}
				.tab-scroll-box-item {
					flex-shrink: 0;
					padding: 0 20rpx;
					font-size: 28rpx;
				}
			}
		}		
		.icon-setting-box{
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 20rpx;
			
			.icon-setting {
				width: 40rpx;
				height: 40rpx;
				background-image: url("@/static/icon_list.png");
				background-size: cover;
			
			}
			
		}
		
	}
	
</style>