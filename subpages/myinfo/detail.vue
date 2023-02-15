<template>
	<view class="content">
		<scroll-view  scroll-y="false" class="scroll-Y" style="height: 100%">
			<view class="my_info" >
				<view class="touxiang">
					<image src="../../static/Tabbar-icons/myinfo.png" mode=""></image>
				</view>
				<view class="nichen">
					<text class="nich1">爱学习的七七</text>
					<text class="nich2">学习：英语</text>
				</view>
				<view class="tiaozhuan"  v-if="false">
					<image src="../../static/Tabbar-icons/comm-active.png" mode=""></image>
				</view>
			</view>
			<view class="my_tips">
				<text>个人简介：</text>
				<text>来自：</text>
				<text>语言：</text>
			</view>
			<view class="my_class yoitem">
				<view class="minchen">
					头像
				</view>
				<view class="neirong">
					
				</view>
			</view>
			<view class="invite_friend yoitem">
				<view class="minchen">
					
				</view>
				<view class="neirong">
					
				</view>
			</view>
			<view class="online_per yoitem">
				<view class="minchen">
					
				</view>
				<view class="neirong">
					
				</view>
			</view>
			<view class="My_jianyi yoitem">
				<view class="minchen">
					
				</view>
				<view class="neirong">
					
				</view>
			</view>
			<view class="my_shezhi yoitem">
				<view class="minchen">
					
				</view>
				<view class="neirong">
					
				</view>
			</view>
			<view class="xuihou yoitem">
				<view class="minchen">
					
				</view>
				<view class="neirong">
					
				</view>
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
			.yoitem{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding: 2upx;
				.minchen{
					flex: 1;
				}
				.neirong{
					flex: 6;
				}
			}
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
				flex-direction: column;
				align-items: flex-start;
				text{
					font-size: 30upx;
					padding: 5upx;
				}
			}
			.my_class{
				width: 100%;
				height: 80upx;
				margin: 20upx 0 20upx 0;
				box-sizing: border-box;
				border: 1upx solid black;
			}
			.invite_friend{
				width: 100%;
				height: 80upx;
				margin-bottom: 20upx;
				box-sizing: border-box;
				border: 1upx solid black;
			}
			.online_per{
				width: 100%;
				height: 80upx;
				margin-bottom: 20upx;
				box-sizing: border-box;
				border: 1upx solid black;
			}
			.My_jianyi{
				width: 100%;
				height: 80upx;
				margin-bottom: 20upx;
				box-sizing: border-box;
				border: 1upx solid black;
			}
			.my_shezhi{
				width: 100%;
				height: 80upx;
				box-sizing: border-box;
				border: 1upx solid black;
				margin-bottom: 20upx;
			}
				
			.xuihou{
				width: 100%;
				height: 80upx;
				box-sizing: border-box;
				border: 1upx solid black;
			}
		}
	}
</style>
