import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST,GET_MY_LIST} from  './actionTypes'
import axios from 'axios'
import store from "./index";
export const changeInputAction = (value) =>{
    return{
        type:CHANGE_INPUT,
        value
    }
}
export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction  = (data) =>({
    type:GET_LIST,
    data
})



export const getTodoList = () =>{
    return ()=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data
            const action =  getListAction(data)
            console.log(data)
            store.dispatch(action)
        })
    }
}

export const getMyListAction = ()=>({
    type:GET_MY_LIST
})
