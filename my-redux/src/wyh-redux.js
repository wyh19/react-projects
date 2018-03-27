/**
 * Created by 30113 on 2018/3/26.
 */
export function createStore(reducer){
    let currentState = {}
    let currentListeners = []
    function getState() {
        return currentState
    }
    function subscribe(listener){
        currentListeners.push(listener)
    }
    function dispatch(action){
        currentState = reducer(currentState,action)
        currentListeners.forEach(v=>v())
        return action
    }
    dispatch({type:'@wyh-redux'})
    return {getState,subscribe,dispatch}
}