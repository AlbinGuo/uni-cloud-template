<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 用户登录
			// 项目初始化
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	::v-deep #myVideo {
		width: 100%;
	}
</style>
