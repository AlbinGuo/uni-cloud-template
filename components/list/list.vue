<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
		<swiper-item class="swiper-item" v-for="(item, index) in tabList" :key="index">
			<list-item :list="list"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import ListItem from "@/components/list/list-item.vue"
	export default {
		name:"list",
		components: {
			ListItem
		},
		props: {
			tabList: {
				type: Array,
				default() {
					return []
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				list: []
			};
		},
		created() {
			this.getList('前端开发')
		},
		methods: {
			change(e) {
				const {current} = e.detail
				console.log('tabList', this.tabList[current].name)
				this.getList(this.tabList[current].name)
				this.$emit("change", current)
			},
		async getList(name){
				try{
					const list = await this.$api.getList({name})
					this.list = list.data
				}catch(e){
					console.error(e)
				}
			}
		}
	}
</script>

<style lang="scss">
.home-swiper {
	height: 100%;
	.swiper-item {
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;
		.list-scroll {
			height: 100%;
		}
	}
}
</style>