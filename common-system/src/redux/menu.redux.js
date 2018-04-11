/**
 * Created by 30113 on 2018/3/22.
 */
import axios from 'axios'

const MENU_LIST = 'MENU_LIST'

const initState = {
    menus:[]
}

export function menu(state=initState,action){
    switch(action.type){
        case MENU_LIST:
            return {...state,menus:action.payload}
        default:
            return state
    }
}

function menuList(data){
    return {type:MENU_LIST,payload:data}
}

export function getMenuList(){
    const menus=[
        {
            icon:'coffee',
            text:'Demo',
            children:[
                {
                    text:'表格',
                    url:'/table'
                },
                {
                    text:'树',
                    url:'/tree'
                },
                {
                    text:'对话框',
                    url:'/modal'
                }
            ]
        },
        {
            icon:'rocket',
            text:'动画',
            children:[
                {
                    text:'基础动画',
                    url:'/base-animation'
                },
                {
                    text:'动画案例',
                    url:'/example-animation'
                }
            ]
        },
        {
            icon:'compass',
            text:'拖拽',
            children:[
                {
                    text:'象棋',
                    url:'/chess'
                },
                {
                    text:'练习1',
                    url:'/dnd1'
                }
            ]
        },
        {
            icon:'exception',
            text:'关于',
            url:'/about'
        }
    ]
    return dispatch =>{
        dispatch(menuList(menus))
    }
}