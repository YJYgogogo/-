<template>
	<view class="layout_all">
		<view class="pick_class">
			<view class="button_left">
				<button class="mini-btn" type="default" size="mini" @click="jumpTopick('language')">语言</button>
				<button class="mini-btn" type="default" size="mini" @click="jumpTopick('classfy')">教师类型</button>
				<button class="mini-btn" type="default" size="mini" @click="jumpTopick('from')">来自</button>
			</view>
			<view class="icon_right"@click="jumpTopick('pick')">
				<image src="../../../static/page-icons/picks.png" class="pick_img"></image>
			</view>
		</view>
		<view class="pick_items">
			<scroll-view  scroll-y="false" class="scroll-Y" style="height: 100%">
				<view  class="scroll-view-item uni-bg-red" @click="jumpToteacherDetil">
					<view class="main">
						<view class="top">
							1
						</view>
						<view class="middle">
							<view class="left_pic">
								1
							</view>
							<view class="middle_intro">
								2
							</view>
							<view class="right_view">
								3
							</view>
						</view>
						<view class="footer">
							3
						</view>
					</view>
				</view>
				<view  class="scroll-view-item uni-bg-red">
					<view class="main">
						<view class="top">
							1
						</view>
						<view class="middle">
							<view class="left_pic">
								1
							</view>
							<view class="middle_intro">
								2
							</view>
							<view class="right_view">
								3
							</view>
						</view>
						<view class="footer">
							3
						</view>
					</view>
				</view>
				<view  class="scroll-view-item uni-bg-red">
					<view class="main">
						<view class="top">
							1
						</view>
						<view class="middle">
							<view class="left_pic">
								1
							</view>
							<view class="middle_intro">
								2
							</view>
							<view class="right_view">
								3
							</view>
						</view>
						<view class="footer">
							3
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="pick_footer">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			upper(e){
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			jumpToteacherDetil(param = ''){
				uni.navigateTo({
					url:`/subpages/teacherdetil/teacherdetil?param=${param}`
				})
			},
			jumpTopick(param){
				switch (param){
					case 'language':
						uni.navigateTo({
							url:'/subpages/pickteacher/picklanguage'
						})
						break;
					case 'classfy':
						uni.navigateTo({
							url:'/subpages/pickteacher/pickteaclass'
						})
						break;
					case 'from':
						uni.navigateTo({
							url:'/subpages/pickteacher/pickfrom'
						})
						break;
					case 'pick':
						uni.navigateTo({
							url:'/subpages/pickteacher/pickteacher'
						})
						break;
					default:
						break;
				}
			}
		},
		onLoad(options) {
			let idss = options.idss
			let jumpTitle = ''
			if(idss === "listen"){
				jumpTitle = "听说陪练"
			}else if(idss === "write"){
				jumpTitle = "写作指导"
			}else if(idss === "translate"){
				jumpTitle = "翻译技巧"
			}else if(idss === "read"){
				jumpTitle = "阅读理解"
			}else if(idss === "foreign"){
				jumpTitle = "外教辅导"
			}else if(idss === "other"){
				jumpTitle = "其他"
			}else{
				jumpTitle = ""
			}
			uni.setNavigationBarTitle({
				title: `${jumpTitle}`
			});
		}
	}
</script>

<style lang="scss" scoped>
	.layout_all{
		width: 100%;
		height: 100%;
		overflow: hidden;
		.pick_class{
			width: 100%;
			height: 10%;
			display: flex;
			.button_left{
				flex: 8;
				button{
					margin: 10rpx;
				}
			}
			.icon_right{
				flex: 1;
				padding-top: 20rpx;
				.pick_img{
					width: 60%;
					height: 50%;
				}
			}
		}
		.pick_items{
			width: 100%;
			height: 80%;
			.scroll-view-item{
				width: 100%;
				height: 400rpx;
				margin: 40rpx 0rpx 40rpx 0rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.main{
					width: 90%;
					height: 100%;
					border: 2rpx solid;
					border-color: green;
					border-radius: 40rpx;
					display: flex;
					flex-direction: column;
					.top{
						width: 100%;
						height:	260rpx;
					}
					.middle{
						width: 100%;
						height: 90rpx;
						display: flex;
						border-top: 2rpx solid;
						border-bottom: 2rpx solid;
						border-color: green;
						.left_pic{
							flex: 1;
						}
						.middle_intro{
							flex: 3;
						}
						.right_view{
							flex: 1;
						}
					}
					.footer{
						width: 100%;
						flex: 1;
					}
				}
			}
		}
		.pick_footer{
			width: 100%;
			height: 10%;
		}
	}
</style>
