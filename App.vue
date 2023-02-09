<script>
	export default {
		onLaunch: function() {
			console.log('App Launch只初始化一次')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onPageNotFound(){
			uni.navigateTo({
				url:"pages/404/404"
			})
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	page{
		width: 100%;
		height: 100%;
	}
</style>

