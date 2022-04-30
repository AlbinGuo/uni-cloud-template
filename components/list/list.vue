<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
		<swiper-item class="swiper-item" v-for="(item, index) in tabList" :key="index">
			<list-item :list="cacheListData[index]" :load="load[index]" @loadMore="loadMore"></list-item>
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
				cacheListData: {}, // 缓存数据
				load: {
					
				},
				pageSize: 10
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
			 loadMore() {
				try{
					if(this.load[this.activeIndex].loading == 'noMore'){
						return
					}
					this.load[this.activeIndex].page++
					const list = this.getList(this.activeIndex)
				}catch(e){
					console.log("e==",e)
				}
			},
			change(e) {
				const {current} = e.detail
				this.$emit("change", current)
				// 当数据不存在或者数据为空的情况下采取请求数据
				if(!this.cacheListData[current] || this.cacheListData[current].length === 0){
					this.getList(current)
				}
			},
		async getList(current){
				try{
					// 当前分类分页状态 
					if(!this.load[current]) {
						this.load[current] = {
							page: 1,
							loading:  'loading'
						}
					}
					const name = this.tabList[current].name; 
					const list = await this.$api.getList({
						name: name,
						page: this.load[current].page,
						pageSize: this.pageSize
					})
					const {data} = list
					if(data.length === 0) {
						let oldLoad = {}
						oldLoad.loading = 'noMore'
						oldLoad.page = this.load[current].page
						this.$set(this.load, current, oldLoad)
						this.$forceUpdate()
						return
					}
					
					// 分页push数据
					let oldList = this.cacheListData[current] || []
					oldList.push(...list.data)
					this.$set(this.cacheListData, current, oldList)
					// this.cacheListData[current] = list.data 
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