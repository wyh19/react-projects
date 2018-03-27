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
        currentListeners.push(listener)
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