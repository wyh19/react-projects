/**
 * Created by 30113 on 2018/3/27.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from './mini-redux'

export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
    return class ConnentComponent extends React.Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor(props, context) {
            super(props, context)
            this.state = {
                props: {}
            }
            this.update = this.update.bind(this)
        }

        componentDidMount() {
            const {store} = this.context
            store.subscribe(this.update)
            this.update()
        }
        componentWillUnmount(){
            const {store} = this.context
            store.unsubscribe(this.update)
        }
        update() {
            const {store} = this.context
            const stateProps = mapStateToProps(store.getState())
            const dispatchProps =bindActionCreators(mapDispatchToProps,store.dispatch)
            this.setState({
                props: {
                    ...this.state.props,
                    ...stateProps,
                    ...dispatchProps
                }
            })
        }

        render() {
            return <WrapComponent {...this.state.props}/>
        }
    }
}

export class Provider extends React.Component {
    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return {store: this.store}
    }

    constructor(props, context) {
        super(props, context)
        this.store = props.store
    }

    render() {
        return this.props.children
    }
}

