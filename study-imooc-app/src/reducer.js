/**
 * Created by 30113 on 2018/2/20.
 */
import {combineReducers} from 'redux'
import {user} from './redux/user.redux'
import {chatuser} from './redux/chatuser.redux'
import {chat} from './redux/chat.redux'
export default combineReducers({user,chatuser,chat})
