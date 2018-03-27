/**
 * Created by 30113 on 2018/3/27.
 */
import React from 'react'
import {store} from './store'
import {addOne,minusOne} from './reducer'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }
    onChange=()=>{
        this.setState(store.getState())
    }
    onAdd=()=>{
        store.dispatch(addOne())
    }
    onMinus=()=>{
        store.dispatch(minusOne())
    }
    componentDidMount(){
        store.subscribe(this.onChange)
    }
    componentWillUnmount(){
        store.unsubscribe(this.onChange)
    }
    render() {
        return (
            <div>
                <p>当前数值：{this.state.num}</p>
                <button onClick={this.onAdd}>加一</button>
                <button onClick={this.onMinus}>减一</button>
            </div>
        )
    }
}
export default App