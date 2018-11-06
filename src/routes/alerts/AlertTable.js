import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table } from 'quant-ui';
import alertColumns from './columns';

const AlertTable = ({
    dispatch, 
    dataSource = [], 
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
