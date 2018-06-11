/**
 * Created by 30113 on 2018/2/20.
 */
import React from 'react'
import logoImg from './logo.png'
import './logo.css'
class Logo extends React.Component{
    render(){
        return (
            <div className="logo-container">
                <img src={logoImg} style={{width:150}} alt=""/>
            </div>
        )
    }
}
export default Logo