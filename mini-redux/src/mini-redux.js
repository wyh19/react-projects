/**
 * Created by 30113 on 2018/3/27.
 */
export function createStore(reducer) {
    let currentState
    let currentListeners = []

    function getState() {
        return currentState
    }

    function subscribe(listener) {
        console.log(listener.name)
        currentListeners.push(listener)
        console.log(currentListeners)
    }

    function unsubscribe(listener) {
        currentListeners.filter(v => v.name !== listener.name)
    }

    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentListeners.forEach(v => v())
        return action
    }

    dispatch({type: '@@MINIREDUX/INIT'})
    return {getState, subscribe, unsubscribe, dispatch}
}