import React,{Component} from 'react'

import { Input,Button,List } from 'antd'
import store from './store'
import {ADD_ITEM,DELETE_ITEM,CHANGE_INPUT} from './store/actionTypes'
import {changeInputAction,addItemAction,deleteItemAction,getListAction,getTodoList,getMyListAction} from './store/actionCreators'
import  TodoListUi from './TodoListUI'
import axios from 'axios'
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        console.log(this.state)
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange=this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }
    storeChange(){
        this.setState(store.getState())
    }
    changeInputValue(e){
      /*  const action ={
            type:CHANGE_INPUT,
            value:e.target.value
        }*/
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn(){
        //const action = { type:ADD_ITEM}
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
       /* const action ={
            type:DELETE_ITEM,
            index
        }*/
       const action = deleteItemAction(index)
        store.dispatch(action)
    }
    componentDidMount() {
        /*axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            console.log(res)
            const data = res.data
            const action = getListAction(data)
        })*/
        //const action = getTodoList()
        const action = getMyListAction()
        store.dispatch(action)
    }

    render() {
        return (
           <TodoListUi
               inputValue={this.state.inputValue}
               list={this.state.list}
               changeInputValue={this.changeInputValue}
               clickBtn={this.clickBtn}
               deleteItem={this.deleteItem}/>
        );
    }
}

export default TodoList;