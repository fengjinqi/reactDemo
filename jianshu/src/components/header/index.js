import React from 'react'
import
{HeaderWrapper,HeaderLogo,HeaderNav,HeaderNavItem,
HeaderNavSearch,HeaderAddition,HeaderButton,HeaderSearchWrapper,
    HeaderSearchInfo,
    HeaderSearchInfoSwitch,
    HeaderSearchInfoList,
    HeaderSearchInfoItem,
    SearchInfoTitle

}
from './style'
import {CSSTransition} from 'react-transition-group'
import {GlobalStyle} from'./../../statics/iconfont/iconfont';
import {connect} from 'react-redux'
import {actionCreators} from './store'
const getListArea = (show) =>{
    if(show){
        return(
            <HeaderSearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <HeaderSearchInfoSwitch>换一换</HeaderSearchInfoSwitch>
                </SearchInfoTitle>
                <HeaderSearchInfoList>
                    <HeaderSearchInfoItem>教育</HeaderSearchInfoItem>
                    <HeaderSearchInfoItem>教育</HeaderSearchInfoItem>
                    <HeaderSearchInfoItem>教育</HeaderSearchInfoItem>
                </HeaderSearchInfoList>
            </HeaderSearchInfo>
        )
    }else{
        return null;
    }

}

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.getListArea=this.getListArea.bind(this)
    }
    getListArea(){
        const {list,page,focused,moseIn,totalPage}=this.props
        const newList = list.toJS()//转js
        const pageList = []
        if(newList){
            for (let i=(page-1)*10;i<page*10;i++){
            pageList.push(
                <HeaderSearchInfoItem key={i}>{newList[i]}</HeaderSearchInfoItem>
            )
        }
        }
        if(focused||moseIn){
            return(
                <HeaderSearchInfo onMouseEnter={this.props.handleMouserEnter}
                onMouseLeave={this.props.handleMouserLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <HeaderSearchInfoSwitch onClick={()=>this.props.handleChangePage(page,totalPage,this.Icon)}>
                            <i ref={(icon)=> this.Icon =icon} className='iconfont spin'>&#xe851;</i>
                            换一换</HeaderSearchInfoSwitch>
                    </SearchInfoTitle>
                    <HeaderSearchInfoList>
                        {pageList}
                    </HeaderSearchInfoList>
                </HeaderSearchInfo>
            )
        }else{
            return null;
        }
    }
    render() {
        return(
            <HeaderWrapper>
                <GlobalStyle/>
                <HeaderLogo/>
                <HeaderNav>
                    <HeaderNavItem className='left active'>首页</HeaderNavItem>
                    <HeaderNavItem className='left'>下载App</HeaderNavItem>
                    <HeaderNavItem className='right'>登录</HeaderNavItem>
                    <HeaderNavItem className='right'><i className='iconfont'>&#xe636;</i></HeaderNavItem>
                    <HeaderSearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <HeaderNavSearch onBlur={this.props.BlurHanld} onFocus={()=>this.props.FocusHanid(this.props.list)} className={this.props.focused ? 'focused':'' } />
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont zoom':'iconfont zoom' }>&#xe614;</i>
                        {this.getListArea()}
                    </HeaderSearchWrapper>
                </HeaderNav>
                <HeaderAddition>
                    <HeaderButton className='reg'><i className='iconfont'>&#xe615;</i>写文章</HeaderButton>
                    <HeaderButton className='writting'>注册</HeaderButton>
                </HeaderAddition>
            </HeaderWrapper>
        )
    }



}

const mapStateToProps = (state) =>{
    return{
        //focused:state.header.focused
        //focused:state.header.get('focused')
        //focused:state.get('header').get('focused')

        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        moseIn:state.getIn(['header','moseIn']),
        totalPage:state.getIn(['header','totalPage']),
    }
}
const mapDispathToProps = (dispatch) =>{
    return{
        FocusHanid(list){
            console.log(list)
            if(list.size==0)dispatch(actionCreators.getList());
           const action = actionCreators.serchFocus()
           dispatch(actionCreators.serchFocus())


        },
        BlurHanld(){
            const action = actionCreators.serchBlur()
            dispatch(action)
        },
        handleMouserEnter(){
            dispatch(actionCreators.moserEnter())
        },
        handleMouserLeave(){
            dispatch(actionCreators.moserLeaver())
        },
        handleChangePage(page,totalPage,ping) {
            let originAngle = ping.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            }else{
                originAngle = 0
            }
            ping.style.transform = `rotate(${originAngle+360}deg)`;
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
           //
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header)