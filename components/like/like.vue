<template>
	<view> 
		<icons :type="like?'appreciateFillLight':'appreciate'" size="44upx" color="#aa55ff" @click="likeTap"></icons>
	</view>
</template> 

<script>
	export default {
		name:"like", 
		props:{
			item: {
				type: Object,
				default(){
					return {}
				}
			}
		},
		created() {
			this.like = this.item.is_like	
		},
		watch: {
			item(newVal){
				this.like = this.item.is_like
			}
		},
		data() { 
			return {
				like: false 
			};
		},
		methods: {
			likeTap() {
				this.like = !this.like
				this.updateLikes()
			},
			async updateLikes() {
				try{
					const res = await this.$api.update_likes({
						user_id: '626401aa1b2993000182a734',
						article_id: this.item._id
					})
					if(res.code == 200){
						uni.hideLoading()
						uni.showToast({
							title: this.like ? '收藏成功' : '取消收藏',
							icon: 'none' 
						})
					}
				}catch(e){
					console.error(e)
				}
			}
		}
	}
</script>

<style lang="scss">
	.icons {
		position: absolute;
		right: 0;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
	}
</style>