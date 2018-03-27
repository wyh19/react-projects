/**
 * Created by 30113 on 2018/3/27.
 */
import {createStore} from 'redux'
import {counter} from './reducer'

export const store = createStore(counter)
