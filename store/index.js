import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		userName:'未登录用户'
	},
	mutations:{
		MLOGIN(state,userName){
			state.userName = userName
		},
		MLOGINOUT(state){
			state.userName = '退出状态用户'
		}
	},
	actions:{
		login(context,userName){
			context.commit("MLOGIN",userName)
		},
		loginout(context){
			context.commit("MLOGINOUT")
		}
	}
})
export default store