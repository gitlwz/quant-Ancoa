import React, { Component } from 'react';
import { connect } from 'dva';
import { Form } from "quant-ui"
import AlertsHeader from './AlertsHeader';
import AlertTable from './AlertTable';
import AlertGroup from './AlertGroup';
import mockDataSource from './mockdata'; 

const defaultVisibleStatus = ['Unassigned', 'Open']

class Alerts extends Component {

    state = {
        visibleStatus: defaultVisibleStatus
    }
    
    handleVisibleStatusChange = (visibleStatus) => {
        this.setState({ visibleStatus })
    }

    render() {
        return (
            <div>
                <AlertsHeader />
                <AlertGroup 
                    onSelect={this.handleVisibleStatusChange}
                    defaultValue={defaultVisibleStatus}
                    dataSource={mockDataSource}
                />
                <AlertTable
                    pagination={{position: 'top'}}
                    visibleStatus={this.state.visibleStatus}
                    dataSource={mockDataSource}
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
