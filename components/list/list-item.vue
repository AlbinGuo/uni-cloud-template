<template>
	<view class="home">
		<list-scroll class="list-scroll" v-on="$listeners">
			<view>
				<list-card v-for="(item, index) in list"
					:key="index" 
					:item="item">
				</list-card>
			</view>
			<uni-load-more iconType="snow" v-if="list.length == 0 || list.length > 7" :status="load.loading"></uni-load-more>
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
			},
			load: {
				type: Object,
				default() {
					return {
						loading: 'loading'
					}
				}
			}
		},
		data(){
			return {
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.home {
		height: 100%;
	}
</style>