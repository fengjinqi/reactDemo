import * as item from './actionTypes'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    focused : false,
    list:[],
    moseIn:false,
    page:1,
    totalPage:1
})
export default (state=defaultState,action) => {
    switch (action.type) {
        case item.SERACH_TRUE:
            /*console.log(state,action)
            let n = JSON.parse(JSON.stringify(state)) //深度拷贝state
            n.focused  =true
            return n*/
            return state.set('focused',true)
        case item.SERACH_FALSE:
            /*let n1 = JSON.parse(JSON.stringify(state)) //深度拷贝state
            n1.focused  =false
            return{focused:false}*/
            return state.set('focused',false)
        case item.CHANGE_LIST:
            return state.set('list',action.data).set('totalPage',action.totalPage)
        case item.MOUSE_ENTER:
            return state.set('moseIn',true)
        case item.MOUSE_LEAVER:
            return state.set('moseIn',false)
        case item.ChangePage:
            return state.set('page',action.page)
        default:
            return state
    }
    //return state;
}