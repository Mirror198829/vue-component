//数据的深层次处理，类似组件的computed，是对state的数据处理
let getters={
	totals(state){
    return state.shopLst.reduce((startCount,item) => startCount+item.count,0)
  },
  totalsByAction(state){
    return state.shopLstByAction.reduce((startCount,item) => startCount+item.count,0)
  }
}
export default getters