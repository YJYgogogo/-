<template>
	<view>
		<text>404</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
			
		onLoad(){
			let timer = setTimeout(()=>{
				clearTimeout(timer)
				uni.switchTab({
					url:"../Home/index"
				})
			},1000)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
