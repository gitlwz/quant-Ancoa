import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Card } from "quant-ui"
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
        const visibleDataSource = mockDataSource.filter(item => {
            return this.state.visibleStatus.findIndex(status => status === item.status) !== -1
        })
        return (
            <div>
                <AlertsHeader />
                <AlertGroup 
                    onSelect={this.handleVisibleStatusChange}
                    defaultValue={defaultVisibleStatus}
                    dataSource={mockDataSource}
                />
                <div style={{
                    margin: '10px 0',
                    padding: visibleDataSource.length === 0 ? '57px 20px' : '0 20px',
                    background: 'white',
                }}>
                    <AlertTable
                        pagination={{
                            position: 'both',
                            pageSize: 30,
                        }}
                        dataSource={visibleDataSource}
                    />
                </div>
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
