import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import { Table, Ellipsis } from 'quant-ui';
import { getLevelColor } from './AlertLevel';

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

const alertColumns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
    }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        onCell:(record)=>{
            return {
                style:{ background: statusColor[record.status] }
            }
        }

    }, {
        title: '优先级',
        dataIndex: 'priority',
        key: 'priority',
    }, {
        title: '分类',
        dataIndex: 'classification',
        key: 'classification',
    }, {
        title: '图标',
        dataIndex: 'icon',
        key: 'icon',
    }, {
        title: '警告类型',
        dataIndex: 'type',
        key: 'type',
    }, {
        title: '实例名',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '严重程度',
        dataIndex: 'severity',
        key: 'severity',
        onCell:(record)=>{
            return {
                style:{ background: getLevelColor(record.severity) }
            }
        }
    }, {
        title: '触发严重程度',
        dataIndex: 'security',
        key: 'security',
    }, {
        title: '触发类别',
        dataIndex: 'instrument',
        key: 'instrument',
    }, {
        title: '货币',
        dataIndex: 'currency',
        key: 'currency',
    }, {
        title: '触发特定信息',
        dataIndex: 'ids',
        key: 'ids',
    }, {
        title: '描述',
        dataIndex: 'desc',
        key: 'desc',
        width: 260,
        render: (text) => (
            <Ellipsis length={36} tooltip>
                {'hello' + text}
            </Ellipsis>
        )
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


    
const AlertTable = ({
    dispatch, 
    dataSource = alertDataSource, 
    columns = alertColumns,
    pagination = false,
}) => {
    
    const displayColumns = columns;

    const onRow = (record) => ({
        onClick: () => {
            dispatch(routerRedux.push(`/alertdetail/${record.id}`))
        }
    })
    
    return (
        <div>
            <Table
                dataSource={dataSource}
                columns={displayColumns}
                pagination={pagination}
                scroll={{x: 1280}}
                size="middle" 
                bordered
                onRow={onRow}
            />
        </div>
        
    );
};

export default connect()(AlertTable)
