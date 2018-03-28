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
        const index = currentListeners.indexOf(listener)
        currentListeners.splice(index, 1)
    }

    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentListeners.forEach(v => v())
        return action
    }

    dispatch({type: '@@MINIREDUX/INIT'})
    return {getState, subscribe, unsubscribe, dispatch}
}

function bindActionCreator(creator, dispatch) {
    return (...args) => dispatch(creator(...args))
}

export function bindActionCreators(creators, dispatch) {
    let bound = {}
    Object.keys(creators).forEach(v => {
        let creator = creators[v]
        bound[v] = bindActionCreator(creator,dispatch)
    })
    return bound
}