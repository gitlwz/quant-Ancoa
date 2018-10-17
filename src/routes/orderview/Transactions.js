import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from "quant-ui";
const dataSource = [{
    key: '1',
    Time: '0.3:01:49.000',
    MsgType: "Trade",
    ActiveUser: 'jolenetan',
    type:"1",
  }, {
    key: '2',
    Time: '0.3:01:49.000',
    MsgType: "Order",
    ActiveUser: 'jolenetan',
    type:"2",
  }, {
    key: '3',
    Time: '0.3:01:49.000',
    MsgType: "Order",
    ActiveUser: 'jolenetan',
    type:"3",
  }, {
    key: '4',
    Time: '0.3:01:49.000',
    MsgType: "Order",
    ActiveUser: 'jolenetan',
    type:"2",
  }, {
    key: '5',
    Time: '0.3:01:49.000',
    MsgType: "Order",
    ActiveUser: 'jolenetan',
    type:"1",
  }];
  
  const columns = [{
    title: '',
    dataIndex: 'index',
    key: 'index',
    render:(text,record,index) => {
        return <span>{index + 1}</span>
    }
  },{
    title: 'Time',
    dataIndex: 'Time',
    key: 'Time',
    
  }, {
    title: 'MsgType',
    dataIndex: 'MsgType',
    key: 'MsgType',
    onCell:(record)=>{
        return {
            className:"orderview-Transactions" + record.type
        }
    }
  }, {
    title: 'ActiveUser',
    dataIndex: 'ActiveUser',
    key: 'ActiveUser',
  }];
class Member extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="anc-block-height orderview-Transactions">
                <Table  columns={columns} dataSource={dataSource} size="middle" bordered />
            </div>
        );
    }
}
export default connect(() => {
    return {
    }
})(
    Member
)
