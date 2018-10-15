import React, { Component } from 'react';
import { connect } from 'dva';
import { Form } from "quant-ui"
import AlertsHeader from './AlertsHeader';
import "./index.less";

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Alerts extends Component {
    render() {
        return (
            <div>
                <AlertsHeader />
                
            </div>
        );
    }
}


export default connect(({ loading }) => {
    return {

    }

})(
    Form.create()(Alerts)
)
