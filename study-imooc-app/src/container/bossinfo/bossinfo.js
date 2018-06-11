/**
 * Created by 30113 on 2018/3/5.
 */
import React from 'react'
import {NavBar,InputItem,TextareaItem,Button } from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../redux/user.redux'
@connect(
    state=>state.user,
    {update}
)
class BossInfo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            company:'',
            money:'',
            desc:''
        }
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    render() {
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
            <div>
                {this.props.redirectTo!==path?<Redirect to={redirect}></Redirect>:null}
                <NavBar mode="dark">Boss完善信息页面</NavBar>
                <AvatarSelector
                    selectAvatar={(imgName)=>{
                        this.setState({
                            avatar:imgName
                        })
                    }}
                />
                <InputItem
                    onChange={v=>this.handleChange('title',v)}
                >招聘职位</InputItem>
                <InputItem
                    onChange={v=>this.handleChange('company',v)}
                >公司名称</InputItem>
                <InputItem
                    onChange={v=>this.handleChange('money',v)}
                >职位薪资</InputItem>
                <TextareaItem
                    title="职位要求"
                    rows={3}
                    autoHeight={true}
                    onChange={v=>this.handleChange('desc',v)}
                />
                <Button
                    onClick={()=>{
                        this.props.update(this.state)
                    }}
                    type="primary">保存</Button>
            </div>
        )
    }
}
export default BossInfo