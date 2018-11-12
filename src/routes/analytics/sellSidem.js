import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from "quant-ui";
const dataSource = [{
    key: "订单输入",
    value: "1"
}, {
    key: "总订单量",
    value: "444"
}, {
    key: "总订单值",
    value: "514041.00"
}, {
    key: "报价数量",
    value: "1"
}, {
    key: "总报价量",
    value: "1157.75"
}, {
    key: "总报价量",
    value: "8"
}, {
    key: "总请求量",
    value: "8"
}, {
    key: "总请求值",
    value: "8"
}, {
    key: "价格区间",
    value: "8"
}]
const columns = [{
    title: 'key',
    dataIndex: 'key',
    key: 'key',
}, {
    title: 'value',
    dataIndex: 'value',
    key: 'value',
}];
class Member extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log("********8")
    }
    render() {

        return (
            <div>
                <Table
                    showHeader={false}
                    columns={columns}
                    dataSource={dataSource}
                    size="small"
                    bordered
                    pagination={false}
                />
            </div>

        );
    }
}
export default connect(({ orderview }) => {
    return {
    }
})(
    Member
)
