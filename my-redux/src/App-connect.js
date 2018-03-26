/**
 * Created by 30113 on 2018/3/26.
 */
import React from 'react'

import {connect} from 'react-redux'
import {addGun, removeGun} from './reducer'


class App extends React.Component {
    render(){
        return (
            <div>
                <div>目前数量：{this.props.num}</div>
                <button onClick={this.props.addGun}>加一</button>
                <button onClick={this.props.removeGun}>减一</button>
            </div>
        )
    }
}
App = connect(state=>state,{addGun,removeGun})(App)
export default App