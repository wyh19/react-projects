/**
 * Created by 30113 on 2018/3/27.
 */
const ADD_ONE = 'ADD_ONE'
const MINUS_ONE = 'MINUS_ONE'

const initState = {
    num: 0
}

export function counter(state = initState, action) {
    switch (action.type) {
        case ADD_ONE:
            return {...state, num: state.num + 1}
        case MINUS_ONE:
            return {...state, num: state.num - 1}
        default:
            return state
    }
}

export function addOne() {
    return {type: ADD_ONE}
}

export function minusOne() {
    return {type: MINUS_ONE}
}