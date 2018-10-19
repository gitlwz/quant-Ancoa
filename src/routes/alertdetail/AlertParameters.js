import React from 'react';
import { Divider, Button, Card, Table } from 'quant-ui';

const paramColumns = [{
    title: 'Parameter Name',
    dataIndex: 'name',
    key: 'name',
    width: 400,
    onHeaderCell: ()=>({style: {background: '#fafafa'}})
}, {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
    onHeaderCell: ()=>({style: {background: '#fafafa'}})
}];

const paramSource = [{
    key: '1',
    name: 'Alert Instance Name',
    value: '',
}, {
    key: '2',
    name: 'Percentage Change in the Price from the Previous Day',
    value: 3.65,
}, {
    key: '3',
    name: 'Market Source(CSV)',
    age: '',
}];

const AlertParameters = () => {
    return (
        <div>
            <Divider>Alert Parameters</Divider>
            <Card>
                <Table
                    columns={paramColumns}
                    dataSource={paramSource}
                    size="small"
                    pagination={false}
                    bordered
                />
                <Button type="primary" style={{marginTop: 5}}>
                    Download
                </Button>
            </Card>
        </div>
    );
};

export default AlertParameters;