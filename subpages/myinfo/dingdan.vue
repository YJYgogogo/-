<template>
	<view class="main_contant">
		<view class="main_qiehuan">
			<u-tabs :scrollable="false" :list="list4" lineWidth="30" lineHeight="8" :activeStyle="{
			            color: '#303133',
			            fontWeight: 'bold',
			            transform: 'scale(1.05)'
			        }" :inactiveStyle="{
			            color: '#606266',
			            transform: 'scale(1)'
			        }" itemStyle="padding: 0 60rpx; height: 90rpx" @click="click" :current="tabItemIndex">
			</u-tabs>
		</view>
		<view class="list_kecheng">
			<swiper class="swiper" circular :current="tabItemIndex">
				<swiper-item>
					<scroll-view scroll-y="false" class="scroll-Y" style="height: 100%">
						1
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y="false" class="scroll-Y" style="height: 100%">
						2
					</scroll-view>
				</swiper-item>
			</swiper>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabItemIndex: 0,
				list4: [{
					name: '已完成'
				}, {
					name: '未完成',
				}],
			}
		},
		methods:{
			click(item) {
				this.tabItemIndex = item.index
				console.log(this.tabItemIndex, '点击的选项')
			},
		}
	}
</script>

<style lang="scss">
	.main_contant {
		width: 100%;
		height: 100%;

		.main_qiehuan {
			width: 100%;
			height: 8%;
		}

		.list_kecheng {
			width: 100%;
			height: 92%;

			swiper {
				width: 100%;
				height: 100%;

				swiper-item {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
