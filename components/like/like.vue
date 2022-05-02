<template>
	<view class="icons" @click.stop="likeTap"> 
		<uni-icons :type="like ? 'heart-filled' : 'heart'" size="38upx" color="#aa55ff"></uni-icons>		
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
		display: inline;
		position: absolute;
		top: 0;
		right: 0;
		bottom: -2px;
	}
</style>