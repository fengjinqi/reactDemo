import React,{Component,Fragment} from 'react'
import XiaojijieItem from './XiaojiejiItem'
import Boss from './Boss'
import {TransitionGroup,CSSTransition} from 'react-transition-group'
 class Xiaojiejie extends Component{
    constructor(props){
        super(props) //调用父类的构造函数，固定写法
        this.state={
            inputValue:'' , // input中的值
            list:['<h1>3445</h1>','精油推背']
        }
        this.inputChange=this.inputChange.bind(this)
        this.addList = this.addList.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
     inputChange(e){
         console.log(e.target.value)
         this.setState({
             //inputValue:e.target.value
             inputValue:this.input.value
         })
     }
     addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        },()=>{
            console.log(this.ul.querySelectorAll('div').length)
        })

     }
     deleteItem(index){
        let list = this.state.list
         list.splice(index,1)
        console.log(list)
         this.setState({
             list:list
         })
     }
    render() {
        return(
          <Fragment>
                <div>
                    <Boss/>
                    <label htmlFor="xxx">加入服务：</label>
                    <input ref={(input)=>this.input = input} id='xxx' value={this.state.inputValue} onChange={this.inputChange} /> <button onClick={this.addList}> 增加服务 </button></div>

              <ul ref={(ul)=>{this.ul=ul}}>
                  <TransitionGroup>
                    {this.state.list.map((item,key)=>{
                        return(
                            <CSSTransition
                                timeout={1000}
                                classNames='boss-text'
                                unmountOnExit
                                appear={true}
                                key={key+item}
                            >
                                <XiaojijieItem
                                    content={item}
                                    index={key}
                                    deleteItem={this.deleteItem.bind(this)}
                                />
                            </CSSTransition>
                            )
                    })}
                  </TransitionGroup>
                </ul>

          </Fragment>
        )
    }
    componentWillMount() {
        console.log('相当于beforcreate')
    }
    componentDidMount() {
        console.log('相当于create')
    }
 }
export default Xiaojiejie