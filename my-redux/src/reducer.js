/**
 * Created by 30113 on 2018/3/26.
 */
const ADD_GUN = 'ADD_GUN'
const REMOVE_GUN = 'REMOVE_GUN'

let initState = {
    num: 0
}
export function counter(state = initState, action) {
    switch (action.type) {
        case ADD_GUN:
            return {...state, num: state.num+1}
        case REMOVE_GUN:
            return {...state, num: state.num-1}
        default:
            return state
    }
}

export function addGun() {
    return {type: ADD_GUN}
}
export function removeGun() {
    return {type: REMOVE_GUN}
}