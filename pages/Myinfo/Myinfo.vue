<template>
	<view class="content">
		<scroll-view  scroll-y="false" class="scroll-Y" style="height: 100%">
			<view class="my_info" @click="myinfoxiangq">
				<view class="touxiang">
					<image src="../../static/Tabbar-icons/myinfo.png" mode=""></image>
				</view>
				<view class="nichen">
					<text class="nich1">爱学习的七七</text>
					<text class="nich2">学习：英语</text>
				</view>
				<view class="tiaozhuan" @click="myinfoxiangq">
					<image src="../../static/Tabbar-icons/comm-active.png" mode=""></image>
				</view>
			</view>
			<view class="my_tips">
				<view class="dingdan itemx" @click="dingdanClick">
					<image src="../../static/logo.png" mode=""></image>
					<text>订单</text>
				</view>
				<view class="shoucang itemx" @click="shoucangClick">
					<image src="../../static/logo.png" mode=""></image>
					<text>收藏</text>
				</view>
				<view class="youhui itemx" @click="youhuiClick">
					<image src="../../static/logo.png" mode=""></image>
					<text>优惠</text>
				</view>
				<view class="xiaoxi itemx" @click="xiaoxiClick">
					<image src="../../static/logo.png" mode=""></image>
					<text>消息</text>
				</view>
			</view>
			<view class="my_class">
				
			</view>
			<view class="invite_friend">
				
			</view>
			<view class="online_per">
				
			</view>
			<view class="My_jianyi">
				
			</view>
			<view class="my_shezhi">
				
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			myinfoxiangq(){
				uni.navigateTo({
					url:"/subpages/myinfo/detail"
				})
			},
			dingdanClick(){
				uni.navigateTo({
					url:"/subpages/myinfo/dingdan"
				})
			},
			shoucangClick(){
				uni.navigateTo({
					url:"/subpages/myinfo/shoucang"
				})
			},
			youhuiClick(){
				uni.navigateTo({
					url:"/subpages/myinfo/youhui"
				})
			},
			xiaoxiClick(){
				uni.navigateTo({
					url:"/subpages/myinfo/xiaoxi"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		.scroll-Y{
			width: 96%;
			.my_info{
				width: 100%;
				height: 250upx;
				box-sizing: border-box;
				border: 1upx solid black;
				display: flex;
				padding: 20upx;
				.touxiang{
					flex: 2;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.nichen{
					flex: 4;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					.nich1{
						font-size: 45upx;
						padding: 20upx;
					}
					.nich2{
						font-size: 30upx;
						padding: 20upx;
					}
				}
				.tiaozhuan{
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					image{
						width: 100upx;
						height: 100upx;
					}
				}
			}
			.my_tips{
				width: 100%;
				height: 180upx;
				margin: 20upx 0 20upx 0;
				box-sizing: border-box;
				border: 1upx solid black;
				display: flex;
				padding: 20upx;
				.itemx{
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					image{
						width: 50%;
						height: 60%;
					}
					text{
						font-size: 25upx;
					}
				}
			}
			.my_class{
				width: 100%;
				height: 120upx;
				margin: 20upx 0 20upx 0;
				box-sizing: border-box;
				border: 1upx solid black;
			}
			.invite_friend{
				width: 100%;
				height: 120upx;
				margin-bottom: 20upx;
				box-sizing: border-box;
				border: 1upx solid black;
			}
			.online_per{
				width: 100%;
				height: 120upx;
				margin-bottom: 20upx;
				box-sizing: border-box;
				border: 1upx solid black;
			}
			.My_jianyi{
				width: 100%;
				height: 120upx;
				margin-bottom: 20upx;
				box-sizing: border-box;
				border: 1upx solid black;
			}
			.my_shezhi{
				width: 100%;
				height: 120upx;
				box-sizing: border-box;
				border: 1upx solid black;
			}
		}
	}
</style>
