/**
 * Created by 30113 on 2018/3/21.
 */
import {combineReducers} from 'redux'

import {user} from './redux/user.redux'
import {menu} from './redux/menu.redux'

export default combineReducers({user, menu})