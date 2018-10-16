import React from 'react';
import { Table } from 'quant-ui';

const alertColumns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a - b,
    }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    }, {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority',
    }, {
        title: 'Classification',
        dataIndex: 'classification',
        key: 'classification',
    }, {
        title: 'Icon',
        dataIndex: 'icon',
        key: 'icon',
    }, {
        title: 'AlertType',
        dataIndex: 'type',
        key: 'type',
    }, {
        title: 'Instance Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Severity',
        dataIndex: 'severity',
        key: 'severity',
    }, {
        title: 'Trigger Security',
        dataIndex: 'security',
        key: 'security',
    }, {
        title: 'Trigger Instrument Type',
        dataIndex: 'instrument',
        key: 'instrument',
    }, {
        title: 'Trigger Currency',
        dataIndex: 'currency',
        key: 'currency',
    }, {
        title: 'Trigger UniqueIDs',
        dataIndex: 'ids',
        key: 'ids',
    }, {
        title: 'Description',
        dataIndex: 'desc',
        key: 'desc',
        width: 300
    },
];

const alertDataSource = [{
    key: '1',
    id: '57',
    status: 'Unassigned',
    priority: 'Medium',
    classification: 'Unclassified',
    icon: 'user',
    type: 'Wash Trading Alert',
    name: ' ',
    severity: 78,
    security: 'PF1808',
    instrument: 'Futures',
    currency: 'USD',
    ids: '24|90|80',
    desc: 'Security "PF 1808 potential wash the closing price. 1,096.50.',
}, {
    key: '1',
    id: '57',
    status: 'Unassigned',
    priority: 'Medium',
    classification: 'Unclassified',
    icon: 'user',
    type: 'Wash Trading Alert',
    name: ' ',
    severity: 78,
    security: 'PF1808',
    instrument: 'Futures',
    currency: 'USD',
    ids: '24|90|80',
    desc: 'Security "PF 1808 potential wash the closing price. 1,096.50.',
},{
    key: '1',
    id: '57',
    status: 'Unassigned',
    priority: 'Medium',
    classification: 'Unclassified',
    icon: 'user',
    type: 'Wash Trading Alert',
    name: ' ',
    severity: 78,
    security: 'PF1808',
    instrument: 'Futures',
    currency: 'USD',
    ids: '24|90|80',
    desc: 'Security "PF 1808 potential wash the closing price. 1,096.50.',
},{
    key: '1',
    id: '57',
    status: 'Unassigned',
    priority: 'Medium',
    classification: 'Unclassified',
    icon: 'user',
    type: 'Wash Trading Alert',
    name: ' ',
    severity: 78,
    security: 'PF1808',
    instrument: 'Futures',
    currency: 'USD',
    ids: '24|90|80',
    desc: 'Security "PF 1808 potential wash the closing price. 1,096.50.',
},];

const AlertTable = ({dataSource = alertDataSource, columns = alertColumns}) => {

    return (
        <Table 
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={{x: 1900}}
        />
    );
};

export default AlertTable;