/**
 * Created by 30113 on 2018/3/10.
 */
import React  from 'react'
import PropTypes from 'prop-types'
import {Card, WingBlank} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
class UserCard extends React.Component {
    static propTypes = {
        userList: PropTypes.array.isRequired
    }

    handleClick(v) {
        this.props.history.push(`/chat/${v._id}`)
    }

    render() {
        return (
            <WingBlank>
                {this.props.userList.map(v => (
                    v.avatar ? (<Card key={v._id} onClick={() => this.handleClick(v)}>
                        <Card.Header title={v.user}
                                     thumb={require(`../img/${v.avatar}.png`)}
                                     thumbStyle={{width: 40, height: 40}}
                                     extra={<span>{v.title}</span>}
                        >
                        </Card.Header>
                        <Card.Body>
                            {v.type === 'boss' ? <div>公司：{v.company}</div> : null}
                            {v.desc.split('\n').map(w => (
                                <div key={w}>{w}</div>
                            ))}
                            {v.type === 'boss' ? <div>薪资：{v.money}</div> : null}
                        </Card.Body>
                    </Card> ) : null
                ))}
            </WingBlank>
        )
    }
}

export default UserCard