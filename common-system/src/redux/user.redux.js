/**
 * Created by 30113 on 2018/3/22.
 */
import axios from 'axios'

const LOGIN = 'LOGIN'

const initState = {
    userName:'',
    pwd:'',
    role:'',
    isAuth:false
}

export function user(state=initState, action) {
    switch(action.type){
        case LOGIN:
        default:
            return state
    }
}