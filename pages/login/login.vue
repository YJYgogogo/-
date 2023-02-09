<template>
	<view class="content">
		<image class="logo" :src="userInfo.avatarUrl || '/static/page-icons/user.png'"></image>
		<view class="text-area">
			<button type="primary" class="title" @click="getUserInfo()">{{ hasLogin ? userInfo.nickName || '未设置昵称' : '使用微信登录' }}</button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				localtoken: '',
				code: '',
				nickName: '',
				avatarUrl: ''
			}
		},

		onLoad() {},
		onHide() {},
		onShow() {
			this.localtoken = uni.getStorageSync('localtoken');
		},

		methods: {
			getUserInfo() {
				var that = this;
				uni.showLoading({ // 展示加载框
					title: '加载中',
				});
				uni.getUserProfile({ //获取到用户信息
					desc: '登录后可同步数据',
					success: async (obj) => {
						console.log('obj', obj);
						that.nickName = obj.userInfo.nickName //用户名
						that.avatarUrl = obj.userInfo.avatarUrl //用户头像

						// 调用 action ，请求登录接口
						uni.login({
							provider: 'weixin',
							success: (res) => {
								console.log('res-login', res);
								//获取到code
								that.code = res.code;
								// console.log('code', res.code);

								//请求登录接口
								if (res.errMsg == 'login:ok') {
									var params = {
										code: that.code,
										nickname: that.nickName,
										avatar: that.avatarUrl
									}
									uni.switchTab({
										url: "../Home/index"
									})
									// that.$api.appPlateForm('POST', 'auth/login', params, function(
									// 	res) {

									// 	if (res.code == 200) {
									// 		uni.showToast({
									// 			title: '登录成功',
									// 			icon: 'success',
									// 			mask: true,
									// 		});
									// 		//获取到token 存入缓存。通过有无token来判断是否登录

									// 		// console.log('登录接口',res)
									// 		uni.setStorageSync('localtoken', res.data.data
									// 			.access_token)
									// 		that.myProfile() //用户信息接口
									// 		that.getHistoryList() //足迹接口

									// 	}
									// }, function(err) {
									// 	uni.showToast({
									// 		icon: 'none',
									// 		title: err.msg
									// 	})
									// });

								}
							},
						});
					},
					fail: () => {
						uni.showToast({
							title: '授权已取消',
							icon: 'error',
							mask: true,
						});
					},
					complete: () => {
						// 隐藏loading
						uni.hideLoading();
					},
				});
			},

			//退出登录
			logOut() {
				var that = this
				uni.showModal({
					title: '确定要退出登录吗？',
					success: function(res) {
						if (res.confirm) {
							uni.removeStorageSync('token')
							that.nickname = ''
							that.headimgurl = ''

						} else if (res.cancel) {
							// console.log('用户点击取消');
						}
					}
				});

			},


		}
	}
</script>
<style lang="scss" sco>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	.logo {
	    height: 200rpx;
	    width: 200rpx;
	    margin-top: 200rpx;
	    margin-left: auto;
	    margin-right: auto;
	    margin-bottom: 50rpx;
	}
	.text-area {
		width: 100%;
	    display: flex;
	    justify-content: center;
		.title {
			width: 60%;
		    font-size: 36rpx;
		}
	}
}
</style>