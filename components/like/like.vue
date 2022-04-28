<template>
	<view>
		<view class="collect" @click.stop="likeTap"></view>
	</view>
</template>

<script>
	export default {
		name:"like",
		data() {
			return {
				
			};
		},
		methods: {
			likeTap() {
				console.log('sssss')
			}
		}
	}
</script>

<style lang="scss">
	.collect {
		position: absolute;
		top: 0;
		right: 0;
		width: 40rpx;
		height: 40rpx;
		background-image: url("@/static/icon_uncollect.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
</style>