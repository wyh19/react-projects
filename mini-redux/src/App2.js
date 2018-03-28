/**
 * Created by 30113 on 2018/3/27.
 */
import React from 'react'
import {connect} from './mini-react-redux'
import {addOne,minusOne} from './reducer'

class App extends React.Component{

    render(){
        return (
            <div>
                <p>当前数值：{this.props.num}</p>
                <button onClick={this.props.addOne}>加一</button>
                <button onClick={this.props.minusOne}>减一</button>
            </div>
        )
    }
}
App = connect(state=>state,{addOne,minusOne})(App)
export default App