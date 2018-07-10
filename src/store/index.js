import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		epriceNewsArray: [],
		isBusy: true
	},
	mutations: {
		UPDATE_EPRICE_NEWS (state, data) {
			state.epriceNewsArray = data
		},
		UPDATE_ISBUSY(state, data) {
			state.isBusy = data
		}
	},
	actions: {
	  getEpriceNews (context) {
			context.commit("UPDATE_ISBUSY", true)
	    fetch("http://small-message.herokuapp.com/WebApi/getHtml/1").then((res)=>{
				if(res.ok){
					return res.json()
				}else{
				}
			}).then((data)=>{
				context.commit("UPDATE_EPRICE_NEWS", data)
				context.commit("UPDATE_ISBUSY", false)
	    }).catch((error)=>{
				alert(error.message)
	    });
	  }
	}
})