import {ADD_ITEM,CHANGE_INPUT,DELETE_ITEM,GET_LIST} from './actionTypes'
const defaultState = {
    inputValue : 'Write Something',
    list:[

    ]
}
export default (state=defaultState,action)=>{
    if(action.type==CHANGE_INPUT){
        let n = JSON.parse(JSON.stringify(state)) //深度拷贝state
        n.inputValue  = action.value
        console.log(n)
        return n
    }
    if(action.type === ADD_ITEM ){ //根据type值，编写业务逻辑
        console.log(state)
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type == DELETE_ITEM){
        let newState = state
        newState.list.splice(action.index,1)

        return newState
    }
    if (action.type == GET_LIST) {
        let sta = state
        console.log(action)
        sta.list = action.data.data.list
        return sta
    }
    return state
}