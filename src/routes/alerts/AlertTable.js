import React from 'react';
import { Table } from 'quant-ui';
import { getLeveColor } from './AlertLevel';
import './alerttable.less';

const STATUS_UNASSIGNED = 'Unassigned';
const STATUS_OPEN = 'Open';
const STATUS_RESOLVED = 'Resolved';
const STATUS_CLOSED = 'Closed';

const statusColor = {
    [STATUS_UNASSIGNED]: '',
    [STATUS_OPEN]: 'skyblue',
    [STATUS_RESOLVED]: 'lightgreen',
    [STATUS_CLOSED]: 'silver',
}

function renderStatus(text) {
    return (
        <div style={{ background: statusColor[text] }} className="alert-table-tag">
            {text}
        </div>
    )
}

function renderSeverity(text, record) {
    return (
        <div style={{ background: getLeveColor(record.severity) }} className="alert-table-tag">
            {text}
        </div>
    )
}

const alertColumns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
    }, {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        onCell:(record)=>{
            return {
                style:{ background: statusColor[record.status] }
            }
        }

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
        onCell:(record)=>{
            return {
                style:{ background: getLeveColor(record.severity) }
            }
        }
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
    status: STATUS_UNASSIGNED,
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
    key: '2',
    id: '58',
    status: STATUS_OPEN,
    priority: 'Medium',
    classification: 'Unclassified',
    icon: 'user',
    type: 'Wash Trading Alert',
    name: ' ',
    severity: 83,
    security: 'PF1808',
    instrument: 'Futures',
    currency: 'USD',
    ids: '24|90|80',
    desc: 'Security "PF 1808 potential wash the closing price. 1,096.50.',
},{
    key: '3',
    id: '67',
    status: STATUS_RESOLVED,
    priority: 'Medium',
    classification: 'Unclassified',
    icon: 'user',
    type: 'Wash Trading Alert',
    name: ' ',
    severity: 55,
    security: 'PF1808',
    instrument: 'Futures',
    currency: 'USD',
    ids: '24|90|80',
    desc: 'Security "PF 1808 potential wash the closing price. 1,096.50.',
},{
    key: '4',
    id: '87',
    status: STATUS_CLOSED,
    priority: 'Medium',
    classification: 'Unclassified',
    icon: 'user',
    type: 'Wash Trading Alert',
    name: ' ',
    severity: 24,
    security: 'PF1808',
    instrument: 'Futures',
    currency: 'USD',
    ids: '24|90|80',
    desc: 'Security "PF 1808 potential wash the closing price. 1,096.50.',
},];

const AlertTable = ({dataSource = alertDataSource, columns = alertColumns}) => {

    const displayColumns = columns

    return (
        <div className="anc-block-height">
            <Table 
                dataSource={dataSource}
                columns={displayColumns}
                pagination={false}
                scroll={{x: 1680}}
                size="middle" 
                bordered
            />
        </div>
        
    );
};

export default AlertTable;