<template>
	<view class="scroll">
		<scroll-view class="list-scroll" scroll-y @scrolltolower="loadingMore">
			<view>
				<slot></slot>	
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"list-scroll",
		data() {
			return {
				
			};
		},
		methods: {
			loadingMore() {
				this.$emit('loadMore')
			}
		}
	}
</script>

<style lang="scss">
.scroll {
		flex: 1;
		box-sizing: border-box;
		overflow: hidden;
		.list-scroll {
			height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>