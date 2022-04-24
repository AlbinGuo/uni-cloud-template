<template>
	<view class="home">
		<list-scroll class="list-scroll">
			<view>
				<list-card mode="base"></list-card>
				<list-card mode="image"></list-card>
				<list-card mode="column"></list-card>
				<list-card mode="base"></list-card>
				<list-card mode="image"></list-card>
				<list-card mode="column"></list-card>
				<list-card mode="base"></list-card>
				
			</view>		
		</list-scroll>
	</view>
</template>

<script>
	export default {
		name: "list-item",
		data(){
			return {
			}
		}
	}
</script>

<style lang="scss">
	.home {
		height: 100%;
	}
</style>