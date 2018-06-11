/**
 * Created by 30113 on 2018/1/29.
 */
import {createStore} from 'redux'

//actionType
const ADD_GUN = '增加机枪'
const REMOVE_GUN = '上交机枪'
//action
const addGun = () => {
    return {type: ADD_GUN}
}
const removeGun = () => {
    return {type: REMOVE_GUN}
}
//reducer
const reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD_GUN:
            return state + 1
        case REMOVE_GUN:
            return state > 0 ? state - 1 : state
        default:
            return state
    }
}
//store
const store = createStore(reducer)
console.log(store.getState())
function listener(){
    const current = store.getState()
    console.log(`现有机枪${current}把`)
}
//注册监听事件
store.subscribe(listener)
//派发事件
store.dispatch(addGun())
store.dispatch(addGun())
store.dispatch(removeGun())


