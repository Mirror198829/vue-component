//数据的深层次处理，类似组件的computed，是对state的数据处理
let actions={
	updateCountAction(store,params){
	//异步操作
	  setTimeout(() => {
	  	store.commit('addNumAction',params)
	  },3000)
	},
	decreaseCountAction(store,params){
	 setTimeout(() => {
	  	store.commit('decreaseAction',params)
	  },3000)
	}
  }
export default actions