<template>
	<view class="main_contant">
		教师详情页
		<view class="main_content_main">
			
		</view>
		<view class="main_content_footer">
			<view class="chat_icon" @click="jumpTochat">
				聊天
			</view>
			<view class="preclass_time" @click="jumpTopreclass">
				预约课时
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			let teacherParam = options.param
			console.log("参数传递",teacherParam)
		},
		methods:{
			jumpTochat(){
				uni.navigateTo({
					url:'/subpages/chats/chat'
				})
			},
			jumpTopreclass(){
				uni.navigateTo({
					url:'/subpages/preclasstime/preclasstime'
				})
			}
			
		}
	}
</script>

<style>
</style>
