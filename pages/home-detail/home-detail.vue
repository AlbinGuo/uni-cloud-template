<template>
	<view class="wrap">
		<view class="wrap-title">
			{{formData.title}}
		</view>
		<view class="wrap-profile">
			<view class="wrap-profile-avatar">
				<image class="img" :src="formData.author.avatar" mode="aspectFill"></image>
			</view>
			<view class="wrap-profile-data">
				<text class="wrap-profile-data-name">{{formData.author.author_name}}</text>
				<view class="wrap-profile-data-statics">
					<text>{{formData.create_time}}</text>
					<text class="browser" style="margin: 0 20rpx;">{{formData.browsw_count || 0}}浏览</text>
					<text>{{formData.thumbs_up_count || 0}}赞</text>
				</view>
			</view>
			<view class="wrap-profile-follow">
				<view class="btn">
					已关注
				</view>
			</view>
		</view>
		<view class="wrap-richtext">
			<u-parse :content="formData.content" :noData="noData"></u-parse>
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		components: {
			uParse
		},
		data() {
			return {
				formData: {},
				noData: `<p style="text-align:center;color:#333;">内容加载中...</p>`
			}
		},
		onLoad(query) {
			this.formData = JSON.parse(query.params)
			this.getDetail()
		},
		methods: {
			async getDetail() {
				try{
					const res = await this.$api.get_detail ({
						article_id: '626401a9cec89c00012ef68a'
					})
					if(res.code == 200){
						this.formData = res.data
					}
				}catch(e){
					console.error(e)
				}
			}
		},
	}
</script>

<style lang="scss">
	page{
		padding: 0 20rpx;
	}
	.wrap{
		display: flex;
		flex-direction: column;
		margin-top: 20rpx;
		.wrap-title {
			font-weight: bold;
			font-size: 38rpx;
		}
		&-profile {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-top: 40rpx;
			&-avatar {
				.img {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50rpx;
				}
			}
			&-data {
				flex: 1;
				margin: 0 20rpx;
				&-name {
					font-weight: bold;
				}
				&-statics {
					margin-top: 10rpx;
					font-size: 26rpx;
					color: #999999;
					margin-bottom: 10rpx;
				}
			}
			&-follow {
				.btn {
					font-size: 28rpx;
					padding: 10rpx 20rpx;
					color: #fff;
					background-color: $mk-base-color;
					border-radius: 30rpx;
				}
			}
		}
		&-richtext {
			margin-top: 40rpx;
		}
	}
</style>
