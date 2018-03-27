/**
 * Created by 30113 on 2018/3/26.
 */
import React from 'react'
import {createStore} from './wyh-redux'
import {addGun, removeGun, counter} from './reducer'

const store = createStore(counter)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }

    onAddGun = () => {
        store.dispatch(addGun())
    }
    onRemoveGun = () => {
        store.dispatch(removeGun())
    }
    onChange = () => {
        this.setState(store.getState())
    }

    componentDidMount() {
        store.subscribe(this.onChange)
    }

    componentWillUnmount() {
        //store.unsubscribe(this.onChange)
    }

    render() {
        return (
            <div>
                <div>目前数量：{this.state.num}</div>
                <button onClick={this.onAddGun}>加一</button>
                <button onClick={this.onRemoveGun}>减一</button>
            </div>
        )
    }
}
export default App