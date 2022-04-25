<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
		<swiper-item class="swiper-item" v-for="(item, index) in tabList" :key="index">
			<list-item :list="cacheListData[index]"></list-item>
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
				list: [],
				cacheListData: {} // 缓存数据
			};
		},
		created() {
			
		},
		watch:{
			tabList(newVal, oldVal){
				if(newVal.length === 0)return
				this.getList(this.activeIndex)
			}
		},
		methods: {
			change(e) {
				const {current} = e.detail
				this.getList(current)
				this.$emit("change", current)
			},
		async getList(current){
				try{
					console.log('this.tabList===',this.tabList)
					const name = this.tabList[current].name;
					const list = await this.$api.getList({name})
					this.$set(this.cacheListData, current, list.data)
					this.cacheListData[current] = list.data
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