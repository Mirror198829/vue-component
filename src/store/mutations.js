const mutations={
	increment (state) {
        state.count++
  	},
  	changeContent(state,preload){
  		state.count = preload
  	}
}
export default mutations