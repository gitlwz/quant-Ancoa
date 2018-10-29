import React, { Component } from 'react';
import { connect } from 'dva';
import { Form } from "quant-ui"
import AlertsHeader from './AlertsHeader';
import AlertTable from './AlertTable';
import AlertGroup from './AlertGroup';

class Alerts extends Component {
    
    render() {
        return (
            <div>
                <AlertsHeader />
                <AlertGroup />
                <AlertTable
                    pagination={{position: 'top'}}
                />
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
