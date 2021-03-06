import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'quant-ui';
import InvolvedMessages from './InvolvedMessages';
import {getLevelColor} from '../alerts/AlertLevel';

const CELL_TYPE_TITLE = 0;
const CELL_TYPE_VALUE = 1;

/*
 * 接口确定后, 将 key 替换为返回对象中对应的键值
 * string 类型相当于名称, 直接显示
 * object 类型相当于值, key 为该值在数据源对象的键, colSpan等为对应单元格的样式属性
 */
const dataSourceTemplate = [
    { key: '1', col1: '警报序号', col2: '警报类型',col3: '实例名', col4: '提交人', col5: '触发日期时间', col6: '发布日期时间' },
    { key: '2', col1: {key: 'id'}, col2: {key: 'type'}, col3: {key: 'instanceName'}, col4: {key: 'submittedBy'}, col5: {key: 'triggerTime'}, col6: {key: 'issuanceTime'} },
    { key: '3', col1: '状态', col2: {key: 'status'}, col3: '分派给', col4: {key: 'assigned'}, col5: '触发源/段', col6: {key: 'triggerSource'} },
    { key: '4', col1: '严重程度', col2: {key: 'severity'}, col3: '优先级', col4: {key: 'priority'}, col5: '分类', col6: {key: 'classification'} },
    { key: '5', col1: '触发严重程度', col2: {key: 'triggerSecurity'}, col3: '触发类型', col4: {key: 'triggerInstrumentType'}, col5: '货币', col6: {key: 'triggerCurrency'} },
    { key: '6', col1: 'Broker', col2: {key: 'broker'}, col3: '委托人', col4: {key: 'client'}, col5: '交易者', col6: {key: 'trader'} },

    { key: '7', col1: '触发特定信息', col2: {key: 'uniqueIDs', colSpan: 5},   col3: {colSpan: 0}, col4: {colSpan: 0}, col5: {colSpan: 0}, col6: {colSpan: 0} },
    { key: '8', col1: '标签',             col2: {key: 'title', colSpan: 5},       col3: {colSpan: 0}, col4: {colSpan: 0}, col5: {colSpan: 0}, col6: {colSpan: 0} },
    { key: '9', col1: '相关信息', col2: {key: 'messages', colSpan: 5},    col3: {colSpan: 0}, col4: {colSpan: 0}, col5: {colSpan: 0}, col6: {colSpan: 0} },
    {key: '10', col1: '描述',       col2: {key: 'description', colSpan: 5}, col3: {colSpan: 0}, col4: {colSpan: 0}, col5: {colSpan: 0}, col6: {colSpan: 0} },
];

const onCell = (colIndex) => (record) => {
    const cell = record[colIndex];

    // 标题色
    if (cell.type === CELL_TYPE_TITLE) {
        return {style: {background: '#fafafa'}};
    }

    if (cell.key === 'severity') {
        return {style: {background: getLevelColor(cell.value)}}
    }
}

const render = (changeView) => (cell) => {
    // 项名称直接返回
    if (cell.type === CELL_TYPE_TITLE) {
        return cell.value;
    }

    const {key, value, ...props} = cell;
    // 特殊项
    if (key ==='messages') {
        return {
            children: <InvolvedMessages message={value} changeView={changeView} />,
            props,
        }
    }
     // 项值取 value
    return {
        children: <span>{value || key}</span>,
        props,
    }
}

// 固定列
const columns = [
    { dataIndex: 'col1', key: 'col1', onCell: onCell('col1') }, 
    { dataIndex: 'col2', key: 'col2', onCell: onCell('col2') },
    { dataIndex: 'col3', key: 'col3', onCell: onCell('col3') },
    { dataIndex: 'col4', key: 'col4', onCell: onCell('col4') },
    { dataIndex: 'col5', key: 'col5', onCell: onCell('col5') },
    { dataIndex: 'col6', key: 'col6', onCell: onCell('col6') },
];

// 将 sourceTemplate 中的相关单元格替换为对应数据
const getDataSource = (source) => {
    
    const dataSource = dataSourceTemplate.map((item) => {
        const row = {key: item.key};
        columns.forEach(col => {
            const cell = item[col.dataIndex];
            if (typeof cell === 'string') {
                row[col.dataIndex] = {
                    type: CELL_TYPE_TITLE,
                    value: cell,
                }
            } else if (typeof cell === 'object') {
                row[col.dataIndex] = {
                    ...cell,
                    type: CELL_TYPE_VALUE,
                    value: source[cell.key],
                }
            }
        })
        return row;
    })
    
    return dataSource;
}

const DetailTable = ({ source, changeView, loading }) => {

    const dataSource = getDataSource(source);
    const displayColumns = columns.map(c => ({...c, render: render(changeView)}))
    
    return (
        <div style={{background: 'white'}}>
            <Table 
                dataSource={dataSource}
                columns={displayColumns}
                size="small"
                pagination={false}
                showHeader={false}
                bordered
                loading={loading}
            />
        </div>
    );
};

DetailTable.propTypes = {
    source: PropTypes.object.isRequired,
}

export default DetailTable;