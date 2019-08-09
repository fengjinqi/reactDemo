import React,{Component} from 'react'
import TopNav from '../nav-top'
import SilderNav from '../nav-side'
import './theme.css'
class Layout extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log(this.props.children)
    }

    render() {
        return(
            <div id="wrapper">
                <TopNav/>
                <SilderNav/>
                {this.props.children}

            </div>
        )
    }

}
export default Layout
