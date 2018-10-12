import React, { Component } from 'react';
import { connect } from 'dva';
import { List } from "quant-ui"
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
class Member extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div>
                <List
                    size="small"
                    header={<div>sandBox Alerts</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />

            </div>

        );
    }
}
export default connect(({ loading }) => {

    return {

    }

})(
    Member
)
