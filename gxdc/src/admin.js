import React,{Fragment} from 'react'
import {Row,Col} from 'antd'
import Header from "./compoents/Header";
import Footer from "./compoents/Footer";
import NavLeft from "./compoents/NavLeft";
import './style/common.less'
import Home from "./pages/home";
export default class Admin extends React.Component{
    render() {
        return(
            <Fragment>
                <Row className="container">
                    <Col span={3} className="nav-left">
                        <NavLeft/>
                    </Col>
                    <Col span={21} className="main">
                        <Header/>
                        <Row className="content">
                        {this.props.children}
                        </Row>
                        <Footer/>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
