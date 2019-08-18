import styled from 'styled-components';
import logPic from '../../statics/logo.png';
const HeaderWrapper = styled.div `
 height:56px;
 border-bottom:1px solid #f0f0f0
`;
const  HeaderLogo = styled.a.attrs({href:'/'})`
    position:absolute;
    top:0;
    left:0;
    height:56px;
    width:100px;
    display:block;
    background:url(${logPic});
    background-size:contain;
`;
const HeaderNav = styled.div`
    width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
`;
const HeaderNavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;
 const HeaderSearchWrapper = styled.div`
	position: relative;
	float: left;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;

 const HeaderNavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

 const HeaderSearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
`;

 const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

 const HeaderSearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

 const HeaderSearchInfoList = styled.div`
	overflow: hidden;
`;

 const HeaderSearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;

 const HeaderAddition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

 const HeaderButton = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-siz: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`;
export {
    HeaderWrapper,
    HeaderLogo,
    HeaderAddition,
    HeaderButton,
    HeaderNav,
    HeaderNavItem,
    HeaderNavSearch,HeaderSearchInfo,
    HeaderSearchInfoItem,
    HeaderSearchInfoList,
    HeaderSearchInfoSwitch,HeaderSearchWrapper,
    SearchInfoTitle
}