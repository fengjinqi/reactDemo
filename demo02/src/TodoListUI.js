import React, { Component } from 'react';
import {Button, Input, List} from "antd";
import 'antd/dist/antd.css'
const TodoListUi =(props)=> {
    return (
        <div style={{margin:'10px'}}>
            <div>
                <Input onChange={props.changeInputValue} value={props.inputValue} placeholder='Write something' style={{ width:'250px', marginRight:'10px'}}/>
                <Button type="primary" onClick={props.clickBtn}>增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index)=>(<List.Item onClick={()=>props.deleteItem(index)}>{item}</List.Item>)}
                />
            </div>
        </div>
    );

}

export default TodoListUi;