<template>
	<view class="home">
		<list-scroll class="list-scroll">
			<view>
				<list-card v-for="(item, index) in list" :key="index" :item="item"></list-card>
			</view>		
		</list-scroll>
	</view>
</template>

<script>
	export default {
		name: "list-item",
		props: {
			list: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
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