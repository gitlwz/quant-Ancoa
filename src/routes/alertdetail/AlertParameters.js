import React from 'react';
import { Divider, Button, Card, Table } from 'quant-ui';

const paramColumns = [{
    title: '参数名',
    dataIndex: 'name',
    key: 'name',
    width: 400,
    onHeaderCell: ()=>({style: {background: '#fafafa'}})
}, {
    title: '值',
    dataIndex: 'value',
    key: 'value',
    onHeaderCell: ()=>({style: {background: '#fafafa'}})
}];

const paramSource = [{
    key: '1',
    name: '警报实例名',
    value: '',
}, {
    key: '2',
    name: '价格比前一天变化百分比',
    value: 3.65,
}, {
    key: '3',
    name: '市场源',
    age: '',
}];

const AlertParameters = () => {
    return (
        <div>
            <Divider>警报参数</Divider>
            <Card>
                <Table
                    columns={paramColumns}
                    dataSource={paramSource}
                    size="small"
                    pagination={false}
                    bordered
                />
                <Button type="primary" style={{marginTop: 5}}>
                    下载
                </Button>
            </Card>
        </div>
    );
};

export default AlertParameters;