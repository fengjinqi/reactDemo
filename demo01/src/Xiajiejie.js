import React,{Component,Fragment} from 'react'
import XiaojijieItem from './XiaojiejiItem'
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
             inputValue:e.target.value
         })
     }
     addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
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
                    <label htmlFor="xxx">加入服务：</label>
                    <input id='xxx' value={this.state.inputValue} onChange={this.inputChange} /> <button onClick={this.addList}> 增加服务 </button></div>
                <ul>
                    {this.state.list.map((item,key)=>{
                        return(
                            <li>
                               <XiaojijieItem content={item} index={key} deleteItem={this.deleteItem}/>

                            </li>

                            )
                    })}
                </ul>
          </Fragment>
        )
    }
}
export default Xiaojiejie