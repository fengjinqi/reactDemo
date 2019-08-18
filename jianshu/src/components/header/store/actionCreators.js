import * as item from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'
const serchFocus = ()=>({
    type:item.SERACH_TRUE
})
 const serchBlur = ()=>({
    type:item.SERACH_FALSE
})
const Change_list = (data) =>({
    type:item.CHANGE_LIST,
    data:fromJS(data),
    totalPage: Math.ceil(data.length/10)
})
const moserEnter = () =>({
    type:item.MOUSE_ENTER
})
const moserLeaver = () =>({
    type:item.MOUSE_LEAVER
})
const changePage = (page) =>({
    type:item.ChangePage,
    page
})
const getList = () =>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then(res=>{
            const data = res.data
            dispatch(Change_list(data.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}

export {
    serchBlur,
    serchFocus,
    getList,
    moserEnter,
    moserLeaver,
    changePage
}