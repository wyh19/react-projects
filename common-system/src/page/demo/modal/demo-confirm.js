/**
 * Created by 30113 on 2018/3/23.
 */
import React  from 'react'
import {Button, Modal} from 'antd'

const confirm = Modal.confirm

class DemoConfirm extends React.Component {
    showConfirm = () => {
        confirm({
            title: 'want to delete this item?',
            content: 'some descriptions',
            onOk(){
                console.log('Ok')
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel(){
                console.log('Cancel')
            }
        })
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showConfirm}>打开confirm</Button>
            </div>
        )
    }
}

export default DemoConfirm