import React from 'react'
import { Menu, Icon } from 'antd';
import {NavLink} from 'react-router-dom'
import './index.less'
import MenuConfig from './../../config/menuConfig'
const { SubMenu } = Menu;


export default class NavLeft extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menuTreeNode:''
        }
        this.renderMenu =this.renderMenu.bind(this)
    }
    componentDidMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }

    /**
     * 获取菜单
     * @param data
     */
    renderMenu(data){
        return (
            data.map((res)=>{
                if(res.children){
                    return(
                        <SubMenu title={res.title} key={res.key}>
                            {this.renderMenu(res.children)}
                        </SubMenu>
                    )
                }
                return  <Menu.Item key={res.key}><NavLink to={res.key}>{res.title}</NavLink></Menu.Item>
            })
        )
    }

    render() {
        return(
            <div style={{}}>
                <div className='logo'>
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>晓晓</h1>
                </div>
                <Menu theme='dark'>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }

}
