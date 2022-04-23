<template>
	<view class="content">
		<image class="logo" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0eb72ce7-d734-4341-87ef-6606f4d285a8/d01dbae5-ba90-40d6-b354-8158d6294b45.jpg"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			{{ message }}
		</view>
		<!-- #ifdef H5 || APP-PLUS || MP-WEIXIN -->
		<view hover-class="active">按钮点击</view>
		<!-- #endif -->
		
		<button @click="cloudBtn">调用云函数</button>
		<button @click="findData">查询数据</button>
		<button @click="deleteData">删除数据</button>
		<button @click="updateData">更新数据</button>
		
		<button @click="open">open</button>
		<view>uniapp</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				message: 'hello world'
			}
		},
		onLoad() {
			
			
			
			
			// #ifdef H5 || APP-PLUS || MP-WEIXIN
			// #endif
			uni.getSystemInfo({
				success(res) {
					console.log(res)
				},
				fail(res) {
					console.log(res)
				},
				complete(res){
					console.log('comp:',res)
				}
			})
		},
		// tabbar点击触发
		onTabItemTap(option) {
			console.log(option)
		},
		methods: {
			cloudBtn(){
				uniCloud.callFunction({
					data:{
						name: '赵云',
						age: 300
					},
					name: "login",
					success(res) {
						console.log("云函数关联成功", res)
					},
					fail(e) {
						console.log("e:::", e)
					},
					complete(r) {
						console.log("completed；",r)
					}
				})
			},
			deleteData(){
				
			},
			updateData(){
				
			},
			findData(){
				uniCloud.callFunction({
					name: "db",
					data:{
						name:'guoguo'
					},
					success(res) {
						console.log("查询结果：",res)
					},
					fail(e) {
						console.log('fail:', e)
					},
					complete(r) {
						console.log("completed", r)
					}
				})
			},
			open(){
				uni.chooseImage({
					count:1,
					success(res) {
						const tempFilePath = res.tempFilePaths[0]
						const fileName = res.tempFiles[0].name
						console.log("上传", res)
						uniCloud.uploadFile({
							filePath: tempFilePath,
							cloudPath: fileName,
							success(res) {
								console.log("上传成功",res)
							},
							fail(e) {
								console.log("上传失败", e)
							}
						})
					},
					fail(e) {
						console.log(e)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	$width: 200rpx;
	
	/* #ifdef APP-PLUS || MP-WEIXIN */
	.active{
		border: 1px solid red;
	}
	/* #endif */
	
	/*设置body的样式*/
	page{
		background-color: aqua;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: $width;
		width: $width;
		margin-top: $width;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
