const mutations={
	increment (state) {
        state.count++
  	},
  	changeContent(state,preload){
  		state.count = preload
  	},
  	changeName(state){
  		let arr = ['JS','react','angular1.x','less','css','html','nodejs','webpack','vue2.x']
  		//获取一个0-5之间的随机数字
  		let max = arr.length - 1
  		let min = 0
  		let index = Math.floor(Math.random()*(max-min+1)+min)
  		state.name = arr[index]
  	}
}
export default mutations