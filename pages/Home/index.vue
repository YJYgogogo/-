<template>
	<view class="content">
		<!-- 首页选项卡切换部分 -->
		<view class="content_tab">
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
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :current="tabItemIndex" :duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<view class="swiper_teacher">
							<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
											:duration="durationsw">
								<swiper-item>
									<view class="swiper-item uni-bg-red">A</view>
								</swiper-item>
								<swiper-item>
									<view class="swiper-item uni-bg-green">B</view>
								</swiper-item>
								<swiper-item>
									<view class="swiper-item uni-bg-blue">C</view>
								</swiper-item>
							</swiper>
						</view>
						<view class="business_content">
							<u-row customStyle="margin: 50rpx 50rpx 70rpx 50rpx">
								<u-col span="5">
									<view class="listen_part content_item" @tap="clickOrder('listen')">
										<text>听说陪练</text>
									</view>
								</u-col>
								<u-col span="2">
									
								</u-col>
								<u-col span="5">
									<view class="write_guid content_item" @tap="clickOrder('write')">
										<text>写作指导</text>
									</view>
								</u-col>
							</u-row>
							<u-row customStyle="margin: 50rpx 50rpx 70rpx 50rpx">
								<u-col span="5">
									<view class="translate_sk content_item" @tap="clickOrder('translate')">
										<text>翻译技巧</text>
									</view>
								</u-col>
								<u-col span="2">
									
								</u-col>
								<u-col span="5">
									<view class="read content_item" @tap="clickOrder('read')">
										<text>阅读理解</text>
									</view>
								</u-col>
							</u-row>
							<u-row customStyle="margin: 50rpx 50rpx 70rpx 50rpx">
								<u-col span="5">
									<view class="foreign content_item" @tap="clickOrder('foreign')">
										<text>外教辅导</text>
									</view>
								</u-col>
								<u-col span="2">
									
								</u-col>
								<u-col span="5">
									<view class="other content_item" @tap="clickOrder('other')">
										<text>其他</text>
									</view>
								</u-col>
							</u-row>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">
						留学
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">
						移民
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from "vuex"
	// import { postMenu, getMenu } from '../../config/api.js';测试
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				autoplay: true,
				duration:500,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				durationsw: 500,
				list4: [{
					name: '语言'
				}, {
					name: '留学',
				}, {
					name: '移民',
				}],
				tabItem: {},
				tabItemIndex: 0
			}
		},
		computed: {
			...mapState(['userName'])
		},
		methods: {
			...mapActions(['login', "loginout"]),
			click(item) {
				this.tabItemIndex = item.index
				console.log(this.tabItemIndex, '点击的选项')
			},
			clickOrder(param){
				let idss = param
				 uni.navigateTo({
					url:`../../subpages/home/Listenpract/Listenpract?idss=${idss}`
				})
			}
		},
		onLoad() {
			// 测试
			// getMenu({ custom: { auth: true }}).then((res)=>{
			//  console.log(res,'00000000000256')
			// }).catch((err)=>{
			//  console.log(err)
			// })

		},
		onShow() {
			console.log("页面进入展示")
		},

		onPullDownRefresh() {
			console.log("页面刷新")
		},

	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		height: 100%;
		.content_tab{
			height: 8%;
		}
		.uni-margin-wrap{
			height: 92%;
			.swiper{
				width: 100%;
				height: 100%;
				swiper-item{
					width: 100%;
					height: 100%;
					.swiper-item{
						width: 100%;
						height: 100%;
						.swiper_teacher{
							width: 100%;
							height: 35%;
						}
						.business_content{
							width: 100%;
							height: 65%;
							// display: flex;
							// align-items: center;
							// justify-content: center;
							.content_item{
								display: flex;
								justify-content: center;
								padding: 30rpx;
								border: 2rpx solid;
								border-color: green;
								border-radius: 60rpx;
								font-size: 32rpx;
							}
						}
					}
				}
			}
		}
		.ni-margin-wrap{
			
		}
	}
</style>
