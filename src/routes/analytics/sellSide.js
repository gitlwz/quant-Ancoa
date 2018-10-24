import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from "quant-ui";
const dataSource = [{
    key:"成交订单",
    value:"1"
},{
    key:"总订单量",
    value:"444"
},{
    key:"总订单金额",
    value:"514041.00"
},{
    key:"价格区间",
    value:"1"
},{
    key:"最优价",
    value:"1157.75"
},{
    key:"订单笔数",
    value:"8"
}]
const columns = [{
    title: 'key',
    dataIndex: 'key',
    key: 'key',
  },{
    title: 'value',
    dataIndex: 'value',
    key: 'value',
  }];
class Member extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="anc-block-height">
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
