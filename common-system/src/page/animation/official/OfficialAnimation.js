/**
 * Created by 30113 on 2018/4/13.
 */
import React from 'react'
import { Transition  } from 'react-transition-group'

class OfficialAnimation extends React.Component{
    constructor(props){
        super(props)
        this.state= { in: false };
    }

    toggleEnterState = () => {
        this.setState({ in: true });
    }

    render() {
        return (
            <div>
                <Transition in={this.state.in} timeout={500} >
                    <div>aa</div>
                </Transition>
                <button onClick={this.toggleEnterState}>Click to Enter</button>
            </div>
        );
    }
}
export default OfficialAnimation