import React,{Fragment} from 'react'
import {Row,Col} from 'antd'
import './index.less'
import Util from './../../util/utils'
import axios from '../../axios'
export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName: '晓晓',
            sysTime:'',
            dayPictureUrl:null,
            weather:null,
        }
    }
    componentWillMount() {
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)
    }

    componentDidMount() {
        this.getWeatherAPIData()
    }
    getWeatherAPIData(){
        let city = '成都'
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then(res=>{
            console.log(res)
            if(res.status=='success'){
                let data = res.results[0].weather_data[0]
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        }).catch(err=>{
            console.log('err',err)
        })

    }
    render() {
        return(
            <div className='header'>
                <Row className='header-top'>
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span={4} className='breadcrumb-title'>
                        首页
                    </Col>
                    <Col span={20} className='weather'>
                        <span className='date'>{this.state.sysTime}</span>
                        <span className='weather-img'> <img src={this.state.dayPictureUrl} alt=""/></span>
                        <span className='weather-detail'>

                            {this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }

}
