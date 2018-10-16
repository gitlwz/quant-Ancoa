import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Row, Col, Card } from "quant-ui"
import AlertsHeader from './AlertsHeader';
import AlertTable from './AlertTable';
import "./index.less";

class Alerts extends Component {
    render() {
        return (
            <div>
                <AlertsHeader />

                <Card bordered={false} style={{marginTop: 12}}>
                    <AlertTable />
                </Card>
                
                <Row style={{marginTop: 12}} gutter={12}>

                    <Col span={8} >
                        <Card bordered={false}>
                            <AlertTable />
                        </Card>
                    </Col>

                    <Col span={8} >
                        <Card bordered={false}>
                            <AlertTable />
                        </Card>
                    </Col>

                    <Col span={8} >
                        <Card bordered={false}>
                            <AlertTable />
                        </Card>
                    </Col>
                    
                </Row>

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
